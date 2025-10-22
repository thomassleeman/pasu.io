// JournalTextAreaForm.tsx - Improved UI version
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { serverTimestamp, Timestamp } from "firebase/firestore";
import { format, addDays, subDays } from "date-fns";
import { SubmitButton } from "@/app/_components/ui/_components/Buttons";
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import getFormattedDate from "@actions/getFormattedDate";
import logo from "@/components/design/brainLogoCompressed.png";
import updateDatabase from "./updateDatabase";
import {
  DecryptedInputs,
  PreviousInputData,
  UserInputs,
  UserInputsWithIds,
  JournalTextAreaFormProps,
  ExistingEntryProps,
} from "@/types/journal";

import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/sanity/schemas/portableText/portableTextComponents";

// Auto-expanding textarea component
const AutoExpandTextarea = ({
  value,
  onChange,
  id,
  name,
  promptKey
}: {
  value: string;
  onChange: (key: string, value: string) => void;
  id: string;
  name: string;
  promptKey: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const wordCount = value ? value.trim().split(/\s+/).filter(Boolean).length : 0;
  const charCount = value ? value.length : 0;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        id={id}
        name={name}
        className="min-h-32 w-full rounded-lg border-0 p-3 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 resize-none overflow-hidden"
        value={value}
        onChange={(e) => onChange(promptKey, e.target.value)}
        placeholder="Write your thoughts here..."
        rows={4}
      />
      <div className="mt-1 flex justify-between text-xs text-gray-500">
        <span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
        <span>{charCount} characters</span>
      </div>
    </div>
  );
};

export default function JournalTextAreaForm({
  selectedDate,
  setSelectedDate,
  journalData,
  setJournalData,
  fetchUserDataLoading,
  journalOutlineFromSanity,
}: JournalTextAreaFormProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userInputs, setUserInputs] = useState<UserInputs>({});
  const [previousInputData, setPreviousInputData] = useState<PreviousInputData>(
    {}
  );
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const formattedDate = format(selectedDate, "dd-MMM-yyyy");
  const journalSlug = journalOutlineFromSanity?.slug;

  // Calculate progress
  const totalPrompts = journalOutlineFromSanity?.promptCategories.reduce(
    (acc, category) => acc + category.prompts.length,
    0
  ) || 0;

  const completedPrompts = Object.values(userInputs).filter(
    (value) => value && value.trim().length > 0
  ).length;

  const progressPercentage = totalPrompts > 0
    ? Math.round((completedPrompts / totalPrompts) * 100)
    : 0;

  // If journalSlug is undefined, we can't proceed with loading data
  useEffect(() => {
    if (!journalSlug) {
      console.error("Journal outline not available - slug is missing");
      setLoading(false);
    }
  }, [journalSlug]);

  /* Load previous input */
  useEffect(() => {
    async function fetchSavedUserInput() {
      setLoading(true);

      // Don't proceed if we don't have a valid journal slug
      if (!journalSlug) {
        console.error("Journal outline not available - slug is missing");
        setLoading(false);
        setPreviousInputData({});
        setUserInputs({});
        return;
      }

      try {
        // Log data structure for debugging
        console.log("Journal data structure:", journalData);
        console.log(
          "Accessing path:",
          `journalData?.journaling?.${journalSlug}?.${formattedDate}`
        );

        // Access with the correct nested structure:
        // journalData.journaling.{journalSlug}.{formattedDate}
        const previousInput =
          journalData?.journaling?.[journalSlug]?.[formattedDate];

        if (!previousInput) {
          setLoading(false);
          setPreviousInputData({});
          setUserInputs({});
          return;
        }

        const previousInputDate = getFormattedDate(
          previousInput.createdAt.seconds
        );
        const encryptedUserInputs = previousInput.encryptedUserInput;

        // Collect all encrypted inputs into an array
        const encryptedInputsArray = Object.keys(encryptedUserInputs).map(
          (key) => ({
            key,
            iv: encryptedUserInputs[key].iv,
            encryptedData: encryptedUserInputs[key].encryptedData,
          })
        );

        // Make a single API call to decrypt all inputs
        const decryptionResponse = await fetch("/api/decryptText", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ encryptedInputs: encryptedInputsArray }),
        });

        if (!decryptionResponse.ok) {
          throw new Error(
            `Decryption error! status: ${decryptionResponse.status}`
          );
        }

        const { decryptedOutputs } = await decryptionResponse.json();

        // Map decrypted outputs back to their keys
        const decryptedInputs: DecryptedInputs = {};
        encryptedInputsArray.forEach((input, index) => {
          decryptedInputs[input.key] = decryptedOutputs[index];
        });

        const previousInputData: PreviousInputData = {
          decryptedUserInput: decryptedInputs,
          createdAt: previousInputDate,
        };

        setPreviousInputData(previousInputData);
        setUserInputs(decryptedInputs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching or decrypting previous input:", error);
        setLoading(false);
      }
    }

    fetchSavedUserInput();
  }, [selectedDate, formattedDate, journalData, journalSlug]);

  /* Handle input change */
  const handleInputChange = (key: string, value: string) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [key]: value,
    }));
  };

  /* Handle Submit */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!userInputs || !journalSlug) {
      setLoading(false);
      return;
    }

    try {
      let userInputsWithIds: UserInputsWithIds = {};
      // Use promptCategories from Sanity
      journalOutlineFromSanity.promptCategories.forEach((category) => {
        category.prompts.forEach((prompt) => {
          userInputsWithIds[prompt._key] = userInputs[prompt._key];
        });
      });

      const response = await fetch("/api/encryptText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInputs: userInputsWithIds }),
      });

      const encryptedUserInputs = await response.json();
      const formattedDate = format(selectedDate, "dd-MMM-yyyy");

      const databaseUpdated = await updateDatabase(
        encryptedUserInputs,
        formattedDate,
        journalSlug // Using the slug we safely accessed earlier
      );

      if (!databaseUpdated) {
        console.error("Error updating the database");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setLoading(false);
      setLastSaved(new Date().toLocaleTimeString());

      // Update the local journalData state to reflect the new entry
      // with the correct nested structure
      if (setJournalData && journalData) {
        const now = Timestamp.now();
        setJournalData({
          ...journalData,
          journaling: {
            ...(journalData.journaling || {}),
            [journalSlug]: {
              ...(journalData.journaling?.[journalSlug] || {}),
              [formattedDate]: {
                encryptedUserInput: encryptedUserInputs,
                createdAt: now,
              },
            },
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  // Date navigation helpers
  const handlePreviousDate = () => {
    setSelectedDate(subDays(selectedDate, 1));
  };

  const handleNextDate = () => {
    const nextDate = addDays(selectedDate, 1);
    const today = new Date();
    if (nextDate <= today) {
      setSelectedDate(nextDate);
    }
  };

  const isToday = format(selectedDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

  /* scroll on submission */
  const submissionNoticeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted && submissionNoticeRef.current) {
      submissionNoticeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [submitted]);

  let submissionNotice;
  let content;

  if (submitted) {
    submissionNotice = (
      <div className="flex items-center gap-x-4" ref={submissionNoticeRef}>
        <div className="flex h-12 w-auto items-center justify-center rounded-full border border-emerald-700 p-1">
          <Image
            height={50}
            width={50}
            src={logo}
            alt="PASU logo"
            className="h-8 w-auto"
          />
        </div>
        <span className="my-16 text-xl font-extralight text-emerald-700">
          Your submission has been saved.
        </span>
      </div>
    );
    content = (
      <ExistingEntry
        previousInputData={{
          decryptedUserInput: userInputs,
          createdAt: "Just now",
        }}
        setUserInputs={setUserInputs}
        setPreviousInputData={setPreviousInputData}
        setSubmitted={setSubmitted}
        journalOutlineFromSanity={journalOutlineFromSanity}
      />
    );
  } else {
    submissionNotice = null;

    if (previousInputData.decryptedUserInput) {
      content = (
        <ExistingEntry
          previousInputData={previousInputData}
          setUserInputs={setUserInputs}
          setPreviousInputData={setPreviousInputData}
          setSubmitted={setSubmitted}
          journalOutlineFromSanity={journalOutlineFromSanity}
        />
      );
    } else {
      content = (
        <div>
          {/* Progress indicator */}
          {totalPrompts > 0 && completedPrompts > 0 && (
            <div className="mb-6 rounded-lg bg-emerald-50 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium text-emerald-900">
                  <CheckCircleIcon className="h-5 w-5" />
                  Progress: {completedPrompts} of {totalPrompts} prompts
                </span>
                <span className="text-sm font-semibold text-emerald-700">
                  {progressPercentage}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-200">
                <div
                  className="h-full bg-emerald-600 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {journalOutlineFromSanity.promptCategories.map((category) => (
              <div
                key={category.name}
                id={category.name.toLowerCase().replace(/\s+/g, "-")}
                className="space-y-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  {category.name}
                </h4>
                {category.prompts.map((prompt) => (
                  <div key={prompt._key} className="space-y-3">
                    <label htmlFor={`textarea-${prompt._key}`} className="block text-base font-medium text-gray-700">
                      <PortableText value={prompt.prompt} />
                    </label>
                    <AutoExpandTextarea
                      id={`textarea-${prompt._key}`}
                      name={`userInput-${prompt._key}`}
                      value={userInputs[prompt._key] || ""}
                      onChange={handleInputChange}
                      promptKey={prompt._key}
                    />
                  </div>
                ))}
              </div>
            ))}

            <div className="sticky bottom-0 -mx-6 -mb-4 mt-8 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">
                  {completedPrompts} of {totalPrompts} prompts completed
                </span>
                {lastSaved && (
                  <span className="text-xs text-gray-500">
                    Last saved at {lastSaved}
                  </span>
                )}
              </div>
              <SubmitButton classes="w-full rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                Save my answers
              </SubmitButton>
            </div>
          </form>
        </div>
      );
    }
  }

  if (fetchUserDataLoading || loading) {
    content = (
      <h3 className="animate-pulse text-xl font-extralight text-emerald-700">
        {!journalSlug ? "Journal data not available..." : "Loading..."}
      </h3>
    );
  }

  return (
    <div className="mt-4 leading-6 lg:col-span-7 xl:col-span-8">
      {/* Date header with navigation */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <button
          onClick={handlePreviousDate}
          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          title="Previous day"
        >
          <ChevronLeftIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          {formattedDate}
        </h1>

        <button
          onClick={handleNextDate}
          disabled={isToday}
          className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            isToday
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          title="Next day"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      {submissionNotice}
      {content}
    </div>
  );
}

const ExistingEntry = ({
  previousInputData,
  setUserInputs,
  setPreviousInputData,
  setSubmitted,
  journalOutlineFromSanity,
}: ExistingEntryProps) => {
  const handleClick = () => {
    setUserInputs(previousInputData.decryptedUserInput || {});
    setPreviousInputData({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Sticky action bar */}
      <div className="sticky top-0 z-10 -mx-6 -mt-4 mb-6 flex items-center justify-between border-b border-gray-200 bg-white/95 backdrop-blur-sm px-6 py-4">
        <div className="flex items-center gap-3">
          <CheckCircleIcon className="h-6 w-6 text-emerald-600" />
          <div>
            <p className="text-sm font-medium text-gray-900">Entry Saved</p>
            <p className="text-xs text-gray-500">
              {previousInputData.createdAt || "Recently"}
            </p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
        >
          Edit Entry
        </button>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {journalOutlineFromSanity.promptCategories.map((category) => (
          <div key={category.name} className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              {category.name}
            </h4>
            {category.prompts.map((prompt) => {
              const response = previousInputData.decryptedUserInput
                ? previousInputData.decryptedUserInput[prompt._key]
                : "";

              return (
                <div key={prompt._key} className="space-y-2">
                  <h5 className="text-base font-medium text-gray-700">
                    <PortableText
                      value={prompt.prompt}
                      components={portableTextComponents}
                    />
                  </h5>
                  <div>
                    {response ? (
                      <p className="whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-gray-900 leading-relaxed">
                        {response}
                      </p>
                    ) : (
                      <div className="rounded-lg border-2 border-dashed border-amber-300 bg-amber-50 px-4 py-3">
                        <p className="text-sm text-amber-800">
                          This prompt was not answered. Click "Edit Entry" above to complete it.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
