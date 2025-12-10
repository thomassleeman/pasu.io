"use server";

import { db } from "@db/index";
import {
  users,
  journalEntries,
  stressRatings,
  courses,
  exercises,
  burnoutAssessments,
  recommendedArticles,
} from "@db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, and, gte, lt } from "drizzle-orm";
import { revalidatePath } from "next/cache";

/**
 * Helper function to get the current user from the database
 * @throws Error if user is not authenticated or not found
 */
async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized: User not authenticated");
  }

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId),
  });

  if (!user) {
    throw new Error("User not found in database");
  }

  return user;
}

/**
 * Create a stress rating for today
 * Replaces any existing rating for the current day
 * @param rating - Stress level (1-10)
 * @returns Success status
 */
export async function createStressRating(rating: number) {
  try {
    if (rating < 1 || rating > 10) {
      throw new Error("Rating must be between 1 and 10");
    }

    const user = await getCurrentUser();

    // Delete any existing rating for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    await db
      .delete(stressRatings)
      .where(
        and(
          eq(stressRatings.userId, user.id),
          gte(stressRatings.createdAt, today),
          lt(stressRatings.createdAt, tomorrow)
        )
      );

    // Insert new rating
    await db.insert(stressRatings).values({
      userId: user.id,
      rating,
    });

    revalidatePath("/home/[clerkId]", "page");
    return { success: true };
  } catch (error) {
    console.error("Error creating stress rating:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to create stress rating"
    );
  }
}

/**
 * Update or create course progress
 * @param data - Course data including slug, name, and completed resources
 * @returns Success status
 */
export async function updateCourseProgress(data: {
  courseSlug: string;
  courseName: string;
  resourcesCompleted: Record<string, boolean>;
}) {
  try {
    const user = await getCurrentUser();

    // Check if course exists for user
    const existingCourse = await db.query.courses.findFirst({
      where: and(
        eq(courses.userId, user.id),
        eq(courses.courseSlug, data.courseSlug)
      ),
    });

    if (existingCourse) {
      // Update existing course
      await db
        .update(courses)
        .set({
          resourcesCompleted: data.resourcesCompleted,
          updatedAt: new Date(),
        })
        .where(eq(courses.id, existingCourse.id));
    } else {
      // Insert new course
      await db.insert(courses).values({
        userId: user.id,
        courseSlug: data.courseSlug,
        courseName: data.courseName,
        resourcesCompleted: data.resourcesCompleted,
      });
    }

    revalidatePath("/home/[clerkId]", "page");
    revalidatePath(`/courses/${data.courseSlug}`, "page");
    return { success: true };
  } catch (error) {
    console.error("Error updating course progress:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to update course progress"
    );
  }
}

/**
 * Start or reactivate an exercise (prompts-only - no text storage)
 * Tracks which exercises are active for the user
 * @param data - Exercise data with exercise slug only
 * @returns Success status
 */
export async function startExercise(data: { exerciseSlug: string }) {
  try {
    const user = await getCurrentUser();

    // Check if exercise already exists for this user
    const existingExercise = await db.query.exercises.findFirst({
      where: and(
        eq(exercises.userId, user.id),
        eq(exercises.exerciseSlug, data.exerciseSlug)
      ),
    });

    if (existingExercise) {
      // Exercise already active - just update timestamp
      await db
        .update(exercises)
        .set({ updatedAt: new Date() })
        .where(eq(exercises.id, existingExercise.id));
    } else {
      // Create new active exercise entry
      await db.insert(exercises).values({
        userId: user.id,
        exerciseSlug: data.exerciseSlug,
        status: "active",
      });
    }

    revalidatePath("/home/[clerkId]", "page");
    revalidatePath(`/exercises/${data.exerciseSlug}`, "page");
    return { success: true };
  } catch (error) {
    console.error("Error starting exercise:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to start exercise"
    );
  }
}

/**
 * Get existing course progress for the current user
 * @param courseSlug - The course slug to look up
 * @returns Course data or null if not found
 */
export async function getCourseProgress(courseSlug: string) {
  try {
    const user = await getCurrentUser();

    const existingCourse = await db.query.courses.findFirst({
      where: and(
        eq(courses.userId, user.id),
        eq(courses.courseSlug, courseSlug)
      ),
    });

    return existingCourse || null;
  } catch (error) {
    console.error("Error fetching course progress:", error);
    return null;
  }
}

/**
 * Mark a single resource as completed in a course
 * @param data - Course slug and resource slug
 * @returns Success status
 */
export async function markResourceCompleted(data: {
  courseSlug: string;
  resourceSlug: string;
}) {
  try {
    const user = await getCurrentUser();

    // Get existing course
    const existingCourse = await db.query.courses.findFirst({
      where: and(
        eq(courses.userId, user.id),
        eq(courses.courseSlug, data.courseSlug)
      ),
    });

    if (!existingCourse) {
      throw new Error("Course not found. Please enroll in the course first.");
    }

    // Update the resourcesCompleted record
    const updatedResourcesCompleted = {
      ...(existingCourse.resourcesCompleted || {}),
      [data.resourceSlug]: true,
    };

    await db
      .update(courses)
      .set({
        resourcesCompleted: updatedResourcesCompleted,
        updatedAt: new Date(),
      })
      .where(eq(courses.id, existingCourse.id));

    revalidatePath("/home/[clerkId]", "page");
    revalidatePath(`/courses/${data.courseSlug}`, "page");
    return { success: true };
  } catch (error) {
    console.error("Error marking resource completed:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to mark resource completed"
    );
  }
}

/**
 * Update a course resource with encrypted data and completion status
 * Used for self-reflection exercises within courses
 * @param data - Course slug, resource slug, encrypted user input, and completion status
 * @returns Success status with created timestamp
 */
export async function updateCourseResourceData(data: {
  courseSlug: string;
  resourceSlug: string;
  encryptedUserInput: any;
  isCompleted: boolean;
}) {
  try {
    const user = await getCurrentUser();

    // Get existing course or create new one
    let existingCourse = await db.query.courses.findFirst({
      where: and(
        eq(courses.userId, user.id),
        eq(courses.courseSlug, data.courseSlug)
      ),
    });

    // If course doesn't exist, we need to create it first
    if (!existingCourse) {
      throw new Error("Course not found. Please enroll in the course first.");
    }

    // Get existing resource data (stored in encryptedUserInput JSON field)
    const existingResourcesCompleted = existingCourse.resourcesCompleted || {};

    // Update completion status
    const updatedResourcesCompleted = {
      ...existingResourcesCompleted,
      [data.resourceSlug]: data.isCompleted,
    };

    await db
      .update(courses)
      .set({
        resourcesCompleted: updatedResourcesCompleted,
        updatedAt: new Date(),
      })
      .where(eq(courses.id, existingCourse.id));

    revalidatePath("/home/[clerkId]", "page");
    revalidatePath(`/courses/${data.courseSlug}`, "page");
    return { success: true };
  } catch (error) {
    console.error("Error updating course resource data:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to update course resource data"
    );
  }
}

/**
 * Create a burnout assessment
 * @param data - Assessment data with two assessments containing encrypted dimension scores
 * @returns Success status
 */
export async function createBurnoutAssessment(data: {
  assessment1: {
    detachment: { encryptedData: string; iv: string };
    emotionalImpairment: { encryptedData: string; iv: string };
    exhaustion: { encryptedData: string; iv: string };
    cognitiveImpairment: { encryptedData: string; iv: string };
  };
  assessment2: {
    detachment: { encryptedData: string; iv: string };
    emotionalImpairment: { encryptedData: string; iv: string };
    exhaustion: { encryptedData: string; iv: string };
    cognitiveImpairment: { encryptedData: string; iv: string };
  };
}) {
  try {
    const user = await getCurrentUser();

    await db.insert(burnoutAssessments).values({
      userId: user.id,
      assessment1: data.assessment1,
      assessment2: data.assessment2,
    });

    revalidatePath("/home/[clerkId]", "page");
    return { success: true };
  } catch (error) {
    console.error("Error creating burnout assessment:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to create burnout assessment"
    );
  }
}

/**
 * Create recommended articles for the current user
 * @param articleSlugs - Array of article slugs to recommend
 * @returns Success status
 */
export async function createRecommendedArticles(articleSlugs: string[]) {
  try {
    const user = await getCurrentUser();

    // Delete existing recommendations
    await db
      .delete(recommendedArticles)
      .where(eq(recommendedArticles.userId, user.id));

    // Insert new recommendations
    if (articleSlugs.length > 0) {
      await db.insert(recommendedArticles).values(
        articleSlugs.map((slug) => ({
          userId: user.id,
          articleSlug: slug,
        }))
      );
    }

    revalidatePath("/home/[clerkId]", "page");
    return { success: true };
  } catch (error) {
    console.error("Error creating recommended articles:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to create recommended articles"
    );
  }
}
