import Link from "next/link";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import AnnouncementsList from "./AnnouncementsList";
import { db } from "@db/index";
import { eq, desc } from "drizzle-orm";
import type { User, BurnoutAssessment } from "@db/schema";

// Define types
type Announcement = {
  id: string;
  createdAt: string | null; // ISO string format for dates
  href: string;
  title: string;
  content: string;
};

// Define the user type with burnout assessments relation
type UserWithAssessments = User & {
  burnoutAssessments: Pick<
    BurnoutAssessment,
    "id" | "userId" | "createdAt" | "assessment1" | "assessment2"
  >[];
};

// TODO: Create announcements table in your Drizzle schema or move to CMS
// For now, this is a placeholder that returns static announcements
// You can either:
// 1. Add an announcements table to your Drizzle schema
// 2. Move announcements to your Sanity CMS
// 3. Keep using Firebase just for announcements
async function getAnnouncements(): Promise<Announcement[]> {
  try {
    // Option 1: If you create an announcements table in Drizzle:
    /*
    const announcements = await db.query.announcements.findMany({
      orderBy: [desc(announcements.createdAt)],
    });
    
    return announcements.map(announcement => ({
      id: announcement.id,
      createdAt: announcement.createdAt.toISOString(),
      href: announcement.href,
      title: announcement.title,
      content: announcement.content,
    }));
    */

    // Option 2: Static announcements for now (replace with your preferred solution)
    const staticAnnouncements: Announcement[] = [
      {
        id: "welcome-announcement",
        createdAt: new Date().toISOString(),
        href: "/articles",
        title: "Welcome to your dashboard!",
        content: "Explore our articles and resources to get started.",
      },
    ];

    return staticAnnouncements;
  } catch (error) {
    console.error("Error fetching announcements: ", error);
    return [];
  }
}

// Check if user needs a burnout assessment reminder
function checkAssessmentReminder(
  user: UserWithAssessments | null,
  announcements: Announcement[]
): Announcement[] {
  if (!user) return announcements;

  // Get the most recent burnout assessment
  const latestAssessment =
    user.burnoutAssessments && user.burnoutAssessments.length > 0
      ? user.burnoutAssessments[0] // Assumes they're ordered by createdAt desc from your query
      : null;

  let lastAssessmentDate: Date | null = null;

  if (latestAssessment) {
    lastAssessmentDate = new Date(latestAssessment.createdAt);
  }

  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  const hasTakenAssessmentRecently =
    lastAssessmentDate && lastAssessmentDate > twoWeeksAgo;

  const existingAnnouncement = announcements.find(
    (announcement) => announcement.id === "burnout-assessment-reminder"
  );

  // Create a new array to avoid mutating the original
  let updatedAnnouncements = [...announcements];

  if (!hasTakenAssessmentRecently && !existingAnnouncement) {
    // Add the announcement
    const newAnnouncement: Announcement = {
      id: "burnout-assessment-reminder",
      createdAt: new Date().toISOString(),
      href: "/chatbot/burnout-assessment",
      title: "It's time to take the Burnout Assessment again.",
      content: "Click here to go to our chatbot.",
    };
    updatedAnnouncements = [newAnnouncement, ...updatedAnnouncements];
  } else if (hasTakenAssessmentRecently && existingAnnouncement) {
    // Remove the announcement if the user has taken the assessment
    updatedAnnouncements = updatedAnnouncements.filter(
      (a) => a.id !== "burnout-assessment-reminder"
    );
  }

  return updatedAnnouncements;
}

export default async function Announcements({
  user,
}: {
  user: UserWithAssessments | null;
}) {
  // Fetch announcements
  const announcements = await getAnnouncements();

  // Check if user needs a reminder
  const updatedAnnouncements = checkAssessmentReminder(user, announcements);

  return (
    <section aria-labelledby="news-feed-title">
      <div className="mb-4 flex items-center gap-x-2 text-lg font-extralight text-gray-900">
        <h3 className="">News feed</h3>
        <MegaphoneIcon className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="p-6">
          <Suspense fallback={<AnnouncementSkeleton />}>
            <AnnouncementsList initialAnnouncements={updatedAnnouncements} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

// Loading skeleton component
function AnnouncementSkeleton() {
  return (
    <div className="flow-root">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        {[1, 2, 3].map((item) => (
          <li key={`skeleton-${item}`} className="py-5">
            <div className="animate-pulse space-y-3">
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="h-3 w-full rounded bg-gray-200"></div>
              <div className="h-3 w-5/6 rounded bg-gray-200"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
