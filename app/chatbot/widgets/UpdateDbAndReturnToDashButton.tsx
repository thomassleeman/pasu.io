"use client";
import { useState } from "react";
import updateDatabase from "./functions/updateDatabase";
import { AssessmentScores } from "@/types/chatbot";
import Spinner from "@/app/_components/design/Spinner";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function UpdateDbAndReturnToDashButton({
  initialAssessmentScores,
  secondaryAssessmentScores,
}: {
  initialAssessmentScores: AssessmentScores;
  secondaryAssessmentScores: AssessmentScores;
}) {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      await updateDatabase(initialAssessmentScores, secondaryAssessmentScores);

      // Redirect to dashboard using Clerk ID
      if (user?.id) {
        router.push(`/home/${user.id}`);
      } else {
        router.push("/sign-in");
      }
    } catch (err) {
      console.error("Failed to save assessment:", err);
      setError("Failed to save your assessment. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="">
      {error && (
        <div className="mb-3 rounded-lg bg-red-50 p-3 text-red-800">
          {error}
        </div>
      )}
      <button
        onClick={handleClick}
        disabled={loading}
        className="pointer rounded-lg border-2 border-blue-400 bg-white px-4 py-2 text-gray-800 hover:border-blue-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Spinner stroke="blue" />
        ) : (
          <span className="flex items-center space-x-3">
            Save session and return to Home
          </span>
        )}
      </button>
    </div>
  );
}
