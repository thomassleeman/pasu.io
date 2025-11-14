/**
 * Legacy type definitions from Firebase era
 * TODO: These types should be gradually replaced with Drizzle types from @db/schema
 * As part of the migration from Firebase to Clerk + Drizzle
 */
declare global {
  interface ProviderData {
    uid: string;
    phoneNumber?: string | null;
    displayName: string;
    providerId: string;
    photoURL?: string;
    email: string;
  }

  interface Timestamp {
    seconds: number;
    nanoseconds: number;
  }

  interface BurnoutAssessmentCategory {
    [categoryKey: string]: number;
  }

  interface BurnoutAssessment {
    [assessmentKey: string]:
      | BurnoutAssessmentCategory
      | {
          createdAt: Timestamp;
        };
  }

  interface Exercise {
    [exerciseSlug: string]: {
      createdAt?: Timestamp;
      completedPrompts: number;
      completionPercentage: number;
      encryptedUserInput: {
        [inputKey: string]: {
          encryptedData: string;
          iv: string;
        };
      };
    };
  }

  interface Course {
    [courseSlug: string]: {
      courseName: string;
      resourcesCompleted: {
        [resourceName: string]: boolean;
      };
      [moduleSlug: string]: any;
    };
  }

  interface RecommendedArticles {
    recommended: string[];
  }

  interface StressRating {
    rating: number;
    createdAt: Timestamp;
  }

  interface JournalEntry {
    createdAt: Timestamp;
    encryptedUserInput: {
      [inputKey: string]: {
        encryptedData: string;
        iv: string;
      };
    };
  }

  interface UserOrganisation {
    childUsers?: string[];
    joined: Timestamp;
    logoUrl?: string;
    name: string;
    organisationId: string;
    role: string;
    subscriptionQuantity?: number;
  }

  /**
   * Legacy UserData type from Firebase
   * This is maintained for backward compatibility during migration
   * New code should use UserWithRelations from @/types/user
   */
  interface UserData {
    uid: string;
    email: string;
    providerData: ProviderData[];
    createdAt: Timestamp;
    assessments?: {
      burnoutAssessment?: BurnoutAssessment;
    };
    exercises?: Exercise;
    courses?: Course;
    articles?: RecommendedArticles;
    stressRating?: StressRating[];
    journaling?: {
      [journalName: string]: {
        [dateKey: string]: JournalEntry;
      };
    };
    organisation?: UserOrganisation;
  }

  type PlayThisType = {
    audio: string;
    image: any;
    title: string;
    author: string;
  };
}

export {};
