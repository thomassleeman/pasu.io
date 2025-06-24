import {
  type User,
  type JournalEntry,
  type Course,
  type Exercise,
  type StressRating,
  type BurnoutAssessment,
  type RecommendedArticle,
} from "@db/schema";

// This is based on the query used in the home page.
export type UserWithRelations = User & {
  journalEntries: Pick<
    JournalEntry,
    "id" | "journalName" | "dateKey" | "createdAt" | "updatedAt"
  >[];
  courses: Pick<
    Course,
    | "id"
    | "courseSlug"
    | "courseName"
    | "resourcesCompleted"
    | "createdAt"
    | "updatedAt"
  >[];
  exercises: Pick<
    Exercise,
    | "id"
    | "exerciseSlug"
    | "completedPrompts"
    | "completionPercentage"
    | "createdAt"
    | "updatedAt"
  >[];
  stressRatings: Pick<StressRating, "id" | "rating" | "createdAt">[];
  burnoutAssessments: Pick<
    BurnoutAssessment,
    "id" | "userId" | "createdAt" | "assessment1" | "assessment2"
  >[];
  recommendedArticles: Pick<RecommendedArticle, "articleSlug" | "createdAt">[];
};
