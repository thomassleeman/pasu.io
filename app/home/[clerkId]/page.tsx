import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import { eq, desc } from "drizzle-orm";
import { db } from "@db/index";

import WelcomePanel from "./_components/WelcomePanel";
import CurrentActivityPanels from "./_components/CurrentActivityPanels";
import Anouncements from "./_components/Announcements";
import Calendar from "./_components/Calendar";
import ContentCarousel from "@articles/_components/ContentCarousel";
import Visualisations from "./_components/Visualisations";

import { serialiseData } from "@/utils/serialiseData";

import {
  getSortedLimitedArticlesData,
  getRecommendedArticlesData,
} from "@articles/getArticlesData";

// Import your schema tables and types
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
type UserWithRelations = User & {
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

interface PageProps {
  params: Promise<{
    clerkId: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { clerkId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  if (clerkId !== userId) {
    redirect(`/home/${userId}`);
  }

  // Fetch user with all related data using Drizzle
  const user = (await db.query.users.findFirst({
    where: eq(users.clerkId, userId),
    with: {
      journalEntries: {
        limit: 5,
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
        limit: 5,
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
        limit: 5,
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
        limit: 30,
        orderBy: [desc(stressRatings.createdAt)],
        columns: {
          id: true,
          rating: true,
          createdAt: true,
        },
      },
      burnoutAssessments: {
        limit: 5,
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
        columns: {
          articleSlug: true,
          createdAt: true,
        },
      },
    },
  })) as UserWithRelations | undefined;

  if (!user) {
    notFound();
  }

  // console.log("user:", user);

  const latestArticles = await getSortedLimitedArticlesData("date", "desc", 10);

  return (
    <>
      <div className="">
        <main className="pb-8 sm:mt-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Dashboards</h1>
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 gap-14 lg:col-span-2">
                <WelcomePanel user={user} />
                <CurrentActivityPanels user={user} />
                <Visualisations user={user} />
              </div>

              <div className="grid grid-cols-1 gap-14">
                <Anouncements user={user} />
                <Calendar user={serialiseData(user)} />
              </div>
            </div>
          </div>
          <div className="mx-1 mt-14 sm:mx-0">
            <ContentCarousel
              carouselTitle="Latest Articles"
              carouselTagline="Read the latest articles from our library."
              articles={latestArticles}
            />
          </div>
        </main>
      </div>
    </>
  );
}
