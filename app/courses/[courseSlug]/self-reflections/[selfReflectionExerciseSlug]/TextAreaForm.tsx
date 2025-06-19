"use client";
//react
import React, { useState, useEffect, useRef } from "react";
//next
import Image from "next/image";
import { useRouter } from "next/navigation";
//firebase
import { app } from "@firebase/auth/appConfig";
import { doc, getFirestore, getDoc } from "firebase/firestore";
//Sanity
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/sanity/schemas/portableText/portableTextComponents";
//components
import { SubmitButton } from "@/app/_components/ui/_components/Buttons";
//functions
import updateDatabase from "./updateDatabase";
//actions
import getFormattedDate from "@actions/getFormattedDate";
//Image
import logo from "@/components/design/brainLogoCompressed.png";
//types
import { Prompt } from "@/types/sanity";
//icons
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

type UserInputs = {
  [key: string]: string;
};

interface DecryptedInputs {
  [key: string]: any;
}

interface PreviousInputData {
  decryptedUserInput?: DecryptedInputs;
  createdAt?: string;
}

export default function TextAreaForm({
  courseSlug,
  exerciseSlug,
  prompts,
}: {
  courseSlug: string;
  exerciseSlug: string;
  prompts: Prompt[];
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [userInputs, setUserInputs] = useState<UserInputs>({});

  const [previousInputData, setPreviousInputData] = useState<PreviousInputData>(
    {}
  );

  // Add state to track if all fields are completed
  const [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

  // Update allFieldsCompleted whenever userInputs change
  useEffect(() => {
    const allCompleted = prompts.every((prompt) => {
      const value = userInputs[prompt._key];
      return value && value.trim() !== "";
    });
    setAllFieldsCompleted(allCompleted);
  }, [userInputs, prompts]);

  ///Load up any previous input
  useEffect(() => {
    async function fetchSavedUserInput() {
      setLoading(true);

      try {
        const db = getFirestore(app);
        const response = await fetch("/api/accessUserId", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          router.push("/signin");
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const userDoc = doc(db, "users", result.userID);
        const docSnap = await getDoc(userDoc);

        if (!docSnap.exists()) {
          setLoading(false);
          return;
        }

        const data = docSnap.data();
        if (!data) {
          setLoading(false);
          return;
        }

        const previousInput = data.courses[courseSlug][exerciseSlug];
        if (!previousInput) {
          setLoading(false);
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

        // Set the decrypted inputs and other state
        const previousInputData: PreviousInputData = {
          decryptedUserInput: decryptedInputs,
          createdAt: previousInputDate,
        };

        setPreviousInputData(previousInputData);
        setUserInputs(decryptedInputs); // Load decrypted inputs into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching or decrypting previous input:", error);
        setLoading(false);
      }
    }

    fetchSavedUserInput();
  }, [exerciseSlug, courseSlug, router]);

  ////////////////////////////////////////

  const handleInputChange = (key: string, value: any) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [key]: value,
    }));
  };

  /////////////////////////////////////////

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!userInputs) return;

    try {
      // Encrypt the userInputs object before saving, if necessary
      const response = await fetch("/api/encryptText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInputs }),
      });

      const encryptedUserInputs = await response.json();

      // Update the database with the encrypted data and completion status
      const databaseUpdated = await updateDatabase(
        encryptedUserInputs,
        courseSlug,
        exerciseSlug,
        allFieldsCompleted // Pass the completion status here
      );

      if (!databaseUpdated) {
        console.error("Error updating the database");
        return;
      }

      setSubmitted(true); // Update the submitted state based on the response
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
    }
  };
  ////////////////////////////////////////

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
          decryptedUserInput: userInputs, // Use userInputs instead of userInput
          createdAt: "Just now",
        }}
        setUserInputs={setUserInputs} // Updated to setUserInputs
        setPreviousInputData={setPreviousInputData}
        setSubmitted={setSubmitted}
        prompts={prompts}
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
          prompts={prompts}
        />
      );
    }

    if (!previousInputData.decryptedUserInput) {
      content = (
        <div>
          <form onSubmit={handleSubmit}>
            {prompts.map((prompt, index) => (
              <div key={prompt._key} className="flex flex-col items-center">
                <div className="my-6 w-full rounded-lg border-2 border-emerald-700 p-4">
                  <h5 className="font-semibold">{prompt.title}</h5>
                  <div className="text-sky-800">
                    <PortableText
                      value={prompt.instructions}
                      components={portableTextComponents}
                    />
                  </div>
                  <textarea
                    id={`textarea-${prompt._key}`}
                    name={`userInput-${prompt._key}`}
                    className="my-6 h-40 w-full rounded-md border-0 p-2 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-700"
                    value={userInputs[prompt._key] || ""}
                    onChange={(e) => {
                      handleInputChange(prompt._key, e.target.value);
                    }}
                  ></textarea>
                </div>
                {/* <ArrowLongDownIcon className="h-12 w-12 text-sky-500" /> */}
                {prompts.length - 1 > index ? (
                  <ArrowLongDownIcon className="h-12 w-12 text-sky-500" />
                ) : null}
              </div>
            ))}
            <SubmitButton classes="rounded-lg bg-emerald-700 px-4 py-2 mt-10 text-white disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-100 w-full">
              Save my answers
            </SubmitButton>
          </form>
        </div>
      );
    }
  }

  if (loading) {
    content = (
      <h3 className="animate-pulse text-xl font-extralight text-emerald-700">
        Loading...
      </h3>
    );
  }

  return (
    <>
      {submissionNotice}
      {content}
    </>
  );
}

const ExistingEntry = ({
  previousInputData,
  setUserInputs,
  setPreviousInputData,
  setSubmitted,
  prompts = [], // Pass the prompts array to the component
}: {
  previousInputData: PreviousInputData;
  setUserInputs: React.Dispatch<React.SetStateAction<{}>>;
  setPreviousInputData: React.Dispatch<React.SetStateAction<PreviousInputData>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  prompts: Prompt[]; // Ensure to pass the prompts array as props
}) => {
  const handleClick = () => {
    setUserInputs(previousInputData.decryptedUserInput || {});
    setPreviousInputData({});
    setSubmitted(false);
  };

  return (
    <div className="">
      <div className="not-prose flex items-center space-x-10">
        <h4 className="text-xl text-emerald-700">
          {`Your responses, last updated: ${previousInputData.createdAt}`}
        </h4>
        <button
          onClick={handleClick}
          className="w-36 rounded-md bg-emerald-700 px-4 py-1 text-white hover:bg-emerald-600"
        >
          Edit
        </button>
      </div>
      <div>
        {prompts.map((prompt, index) => {
          const response = previousInputData.decryptedUserInput
            ? previousInputData.decryptedUserInput[prompt._key]
            : "";

          return (
            <div key={prompt._key} className="flex flex-col items-center">
              <div className="my-6 w-full rounded-lg border-2 border-emerald-700 p-4">
                <h5 className="font-semibold">{prompt.title}</h5>
                <div className="text-sm text-sky-800">
                  <PortableText
                    value={prompt.instructions}
                    components={portableTextComponents}
                  />
                </div>
                <p>
                  {response || (
                    <div className="relative rounded-lg border border-gray-500 bg-white px-6 text-gray-600">
                      <div className="absolute -right-3 -top-3">
                        <span className="relative flex h-5 w-5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex h-5 w-5 rounded-full bg-sky-500"></span>
                        </span>{" "}
                      </div>
                      <p className="underline decoration-sky-400 decoration-1 underline-offset-4">
                        You haven&apos;t written anything here yet...
                      </p>{" "}
                      <p className="text-sm">
                        Click Edit at the top of the page to complete this
                        field.
                      </p>
                    </div>
                  )}
                </p>
              </div>
              {prompts.length - 1 > index ? (
                <ArrowLongDownIcon className="h-12 w-12 text-sky-500" />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
