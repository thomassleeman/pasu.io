export interface UserData {
  id: string;
  clerkId: string;
  email: string;
  createdAt: Date | string;
  updatedAt: Date | string;

  journalEntries?: JournalEntry[];
  courses?: Course[];
  exercises?: Exercise[];
  stressRatings?: StressRating[];
  burnoutAssessments?: BurnoutAssessment[];
  recommendedArticles?: RecommendedArticle[];
}

export interface JournalEntry {
  id: string;
  journalName: string;
  dateKey: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  encryptedUserInput?: any; // Add specific type if needed
}

export interface Course {
  id: string;
  courseSlug: string;
  courseName: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  resourcesCompleted?: Record<string, boolean>;
}

export interface Exercise {
  id: string;
  exerciseSlug: string;
  completedPrompts: number;
  completionPercentage: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  encryptedUserInput?: any; // Add specific type if needed
}

export interface StressRating {
  id: string;
  rating: number;
  createdAt: Date | string;
}

export interface BurnoutAssessment {
  id: string;
  assessmentKey: string;
  categoryScores: Record<string, number>;
  createdAt: Date | string;
}

export interface RecommendedArticle {
  articleSlug: string;
  createdAt: Date | string;
}
