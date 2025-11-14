"use client";

import calculateRecommendedArticles from "./calculateRecommendedArticles";
import { AssessmentScores } from "@/types/chatbot";
import { createBurnoutAssessment, createRecommendedArticles } from "@actions/userDataActions";

export default async function updateDatabase(
  assessment1: AssessmentScores,
  assessment2: AssessmentScores
) {
  try {
    // 1) Prepare assessment data
    const assessmentsObject = { assessment1, assessment2 };

    // 2) Encrypt numeric fields in the entire object
    const encryptRes = await fetch("/api/encryption/encryptNumber", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ numberInputs: assessmentsObject }),
    });

    if (!encryptRes.ok) {
      throw new Error(`Encryption failed: ${await encryptRes.text()}`);
    }

    // The shape will be exactly the same as 'assessmentsObject',
    // except every numeric property is now { iv, encryptedData }
    const encryptedAssessments = await encryptRes.json();

    // 3) Calculate recommended articles based on assessment2 scores
    const recommendedArticleSlugs = calculateRecommendedArticles(assessment2);

    // 4) Save burnout assessment to database
    await createBurnoutAssessment({
      assessment1: encryptedAssessments.assessment1,
      assessment2: encryptedAssessments.assessment2,
    });

    // 5) Save recommended articles to database
    await createRecommendedArticles(recommendedArticleSlugs);

    console.log(
      "Successfully updated database with burnout assessment and recommended articles."
    );
  } catch (error) {
    console.error("Error in updateDatabase:", (error as Error).message);
    throw error;
  }
}
