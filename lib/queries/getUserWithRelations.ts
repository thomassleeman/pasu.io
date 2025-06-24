import { eq, desc } from "drizzle-orm";
import { db } from "@db/index";
import {
  users,
  journalEntries,
  courses,
  exercises,
  stressRatings,
  burnoutAssessments,
  recommendedArticles,
  type User,
  type JournalEntry,
  type Course,
  type Exercise,
  type StressRating,
  type BurnoutAssessment,
  type RecommendedArticle,
} from "@db/schema";

// Define the user type with relations based on your query
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

export interface GetUserWithRelationsOptions {
  journalEntriesLimit?: number;
  coursesLimit?: number;
  exercisesLimit?: number;
  stressRatingsLimit?: number;
  burnoutAssessmentsLimit?: number;
  recommendedArticlesLimit?: number;
}

/**
 * Fetch a user with all their related data using Drizzle ORM
 * @param clerkId - The Clerk user ID
 * @param options - Optional limits for related data
 * @returns User with all relations or null if not found
 */
export async function getUserWithRelations(
  clerkId: string,
  options: GetUserWithRelationsOptions = {}
): Promise<UserWithRelations | null> {
  const {
    journalEntriesLimit = 5,
    coursesLimit = 5,
    exercisesLimit = 5,
    stressRatingsLimit = 30,
    burnoutAssessmentsLimit = 5,
    recommendedArticlesLimit = 5,
  } = options;

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.clerkId, clerkId),
      with: {
        journalEntries: {
          limit: journalEntriesLimit,
          orderBy: [desc(journalEntries.createdAt)],
          columns: {
            id: true,
            journalName: true,
            dateKey: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        courses: {
          limit: coursesLimit,
          orderBy: [desc(courses.updatedAt)],
          columns: {
            id: true,
            courseSlug: true,
            courseName: true,
            resourcesCompleted: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        exercises: {
          limit: exercisesLimit,
          orderBy: [desc(exercises.updatedAt)],
          columns: {
            id: true,
            exerciseSlug: true,
            completedPrompts: true,
            completionPercentage: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        stressRatings: {
          limit: stressRatingsLimit,
          orderBy: [desc(stressRatings.createdAt)],
          columns: {
            id: true,
            rating: true,
            createdAt: true,
          },
        },
        burnoutAssessments: {
          limit: burnoutAssessmentsLimit,
          orderBy: [desc(burnoutAssessments.createdAt)],
          columns: {
            id: true,
            userId: true,
            createdAt: true,
            assessment1: true,
            assessment2: true,
          },
        },
        recommendedArticles: {
          limit: recommendedArticlesLimit,
          orderBy: [desc(recommendedArticles.createdAt)],
          columns: {
            articleSlug: true,
            createdAt: true,
          },
        },
      },
    });

    return user as UserWithRelations | null;
  } catch (error) {
    console.error("Error fetching user with relations:", error);
    return null;
  }
}
