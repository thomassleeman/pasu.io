import React from "react";
import DynamicGreeting from "./DynamicGreeting";
import { differenceInDays, parse } from "date-fns";
import StressLevelComponent from "./StressLevelComponent";
import type { User, JournalEntry, BurnoutAssessment } from "@db/schema";

// Define the user type with relations based on query structure
type UserWithRelations = User & {
  journalEntries: Pick<
    JournalEntry,
    "id" | "journalName" | "dateKey" | "createdAt" | "updatedAt"
  >[];
  burnoutAssessments: Pick<
    BurnoutAssessment,
    "id" | "userId" | "createdAt" | "assessment1" | "assessment2"
  >[];
  // ... other relations as needed
};

interface WelcomePanelProps {
  user: UserWithRelations;
}

export default function WelcomePanel({ user }: WelcomePanelProps) {
  // Show loading skeleton while user data is not yet available
  if (!user) {
    return (
      <section aria-labelledby="profile-overview-title">
        <div className="overflow-hidden rounded-lg bg-transparent sm:bg-white sm:shadow">
          <h2 id="profile-overview-title" className="sr-only">
            Profile Overview
          </h2>
          <div className="bg-transparent sm:bg-white sm:p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex flex-col gap-y-4">
                {/* Skeleton for Dynamic Greeting */}
                <div className="h-3 w-32 animate-pulse rounded-md bg-gray-200"></div>
                <div className="h-6 w-64 animate-pulse rounded-md bg-gray-200"></div>
                <div className="h-6 w-32 animate-pulse rounded-md bg-gray-200 sm:hidden"></div>
              </div>
            </div>
          </div>
          {/* Skeleton for stats (visible on larger screens) */}
          <div className="hidden grid-cols-1 divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="my-1 px-3 py-1 text-sm font-medium sm:py-3 sm:text-center"
              >
                <div className="mx-auto h-4 w-24 animate-pulse rounded-md bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Extract first name from email (you may want to add a firstName field to your users table)
  const emailUsername = user.email.split("@")[0];
  const firstName =
    emailUsername.charAt(0).toUpperCase() +
    emailUsername.slice(1).toLowerCase();
  const currentDate = new Date();

  // Calculate "Member Since" - now using Drizzle Date object
  const accountCreationDate = new Date(user.createdAt);
  let memberSinceDays = 0;

  // Check if the date is valid
  if (!isNaN(accountCreationDate.getTime())) {
    memberSinceDays = Math.max(
      0,
      differenceInDays(currentDate, accountCreationDate)
    );
  }

  // Debug logging (remove after testing)
  console.log("Account creation date:", accountCreationDate);
  console.log("Current date:", currentDate);
  console.log("Member since days:", memberSinceDays);

  // Calculate "Last Journal Entry" - now using journalEntries array
  let lastJournalEntry = "No journal entries";

  if (user.journalEntries && user.journalEntries.length > 0) {
    // Parse dateKey from journal entries (assuming format like "dd-MMM-yyyy")
    const journalDates = user.journalEntries
      .map((entry) => {
        try {
          // If dateKey is in format "dd-MMM-yyyy", parse it
          return parse(entry.dateKey, "dd-MMM-yyyy", new Date());
        } catch {
          // Fallback to createdAt if dateKey parsing fails
          return new Date(entry.createdAt);
        }
      })
      .filter((date) => !isNaN(date.getTime())); // Filter out invalid dates

    if (journalDates.length > 0) {
      // Find the most recent journal entry date
      const lastJournalTimestamp = Math.max(
        ...journalDates.map((date) => date.getTime())
      );
      const lastJournalDate = new Date(lastJournalTimestamp);

      const daysSinceLastJournal = differenceInDays(
        currentDate,
        lastJournalDate
      );

      // Check if there is a journal entry for today
      const isJournalToday = daysSinceLastJournal === 0;

      lastJournalEntry = isJournalToday
        ? "today"
        : `${daysSinceLastJournal} days ago`;
    }
  }

  // Calculate "Last Check-in" - now using burnoutAssessments array
  let lastCheckin = "No check-ins";

  if (user.burnoutAssessments && user.burnoutAssessments.length > 0) {
    // Get the most recent assessment (they're ordered by createdAt desc in the query)
    const latestAssessment = user.burnoutAssessments[0];
    const lastAssessmentDate = new Date(latestAssessment.createdAt);
    const daysSinceLastCheckin = differenceInDays(
      currentDate,
      lastAssessmentDate
    );

    lastCheckin =
      daysSinceLastCheckin === 0 ? "today" : `${daysSinceLastCheckin} days ago`;
  }

  const stats = [
    {
      label: "Member for",
      value: `${memberSinceDays} days`,
    },
    { label: "Last journal entry", value: lastJournalEntry },
    { label: "Last assessment", value: lastCheckin },
  ];

  return (
    <section aria-labelledby="profile-overview-title">
      <div className="overflow-hidden rounded-lg bg-transparent sm:bg-white sm:shadow">
        <h2 id="profile-overview-title" className="sr-only">
          Profile Overview
        </h2>
        <div className="bg-transparent sm:bg-white sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <DynamicGreeting userName={firstName} />
            </div>
            <div className="mt-3 justify-center sm:mt-0">
              <StressLevelComponent userId={user.clerkId} />
            </div>
          </div>
        </div>
        <div className="hidden grid-cols-1 divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-3 py-1 text-sm font-medium sm:py-3 sm:text-center"
            >
              <span className="mr-2 text-xs text-gray-600">{stat.label}</span>
              <span className="text-sm text-gray-900">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
