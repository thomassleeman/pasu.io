import {
  pgTable,
  text,
  timestamp,
  integer,
  numeric,
  boolean,
  json,
  uuid,
  unique,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Journal entries table
export const journalEntries = pgTable(
  "journal_entries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    journalName: text("journal_name").notNull(), // One entry per journal per user
    status: text("status").notNull().default("active"), // Just tracks if journal is active
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    // Add unique constraint: user can only have one entry per journal
    uniqueUserJournal: unique().on(table.userId, table.journalName),
  })
);

// Courses table
export const courses = pgTable("courses", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  courseSlug: text("course_slug").notNull(),
  courseName: text("course_name").notNull(),
  resourcesCompleted: json("resources_completed")
    .$type<Record<string, boolean>>()
    .default({}),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Exercises table
export const exercises = pgTable(
  "exercises",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    exerciseSlug: text("exercise_slug").notNull(),
    status: text("status").notNull().default("active"), // Just tracks if exercise is active
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    // User can only have one entry per exercise
    uniqueUserExercise: unique().on(table.userId, table.exerciseSlug),
  })
);

// Stress ratings table
export const stressRatings = pgTable("stress_ratings", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  rating: integer("rating").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Burnout assessments table
export const burnoutAssessments = pgTable("burnout_assessments", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  assessment1: json("assessment_1")
    .$type<{
      detachment: { encryptedData: string; iv: string };
      emotionalImpairment: { encryptedData: string; iv: string };
      exhaustion: { encryptedData: string; iv: string };
      cognitiveImpairment: { encryptedData: string; iv: string };
    }>()
    .notNull(),
  assessment2: json("assessment_2")
    .$type<{
      detachment: { encryptedData: string; iv: string };
      emotionalImpairment: { encryptedData: string; iv: string };
      exhaustion: { encryptedData: string; iv: string };
      cognitiveImpairment: { encryptedData: string; iv: string };
    }>()
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Recommended articles table
export const recommendedArticles = pgTable("recommended_articles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  articleSlug: text("article_slug").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  journalEntries: many(journalEntries),
  courses: many(courses),
  exercises: many(exercises),
  stressRatings: many(stressRatings),
  burnoutAssessments: many(burnoutAssessments),
  recommendedArticles: many(recommendedArticles),
}));

export const journalEntriesRelations = relations(journalEntries, ({ one }) => ({
  user: one(users, {
    fields: [journalEntries.userId],
    references: [users.id],
  }),
}));

export const coursesRelations = relations(courses, ({ one }) => ({
  user: one(users, {
    fields: [courses.userId],
    references: [users.id],
  }),
}));

export const exercisesRelations = relations(exercises, ({ one }) => ({
  user: one(users, {
    fields: [exercises.userId],
    references: [users.id],
  }),
}));

export const stressRatingsRelations = relations(stressRatings, ({ one }) => ({
  user: one(users, {
    fields: [stressRatings.userId],
    references: [users.id],
  }),
}));

export const burnoutAssessmentsRelations = relations(
  burnoutAssessments,
  ({ one }) => ({
    user: one(users, {
      fields: [burnoutAssessments.userId],
      references: [users.id],
    }),
  })
);

export const recommendedArticlesRelations = relations(
  recommendedArticles,
  ({ one }) => ({
    user: one(users, {
      fields: [recommendedArticles.userId],
      references: [users.id],
    }),
  })
);

// Type exports for use in your application
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type JournalEntry = typeof journalEntries.$inferSelect;
export type NewJournalEntry = typeof journalEntries.$inferInsert;
export type Course = typeof courses.$inferSelect;
export type NewCourse = typeof courses.$inferInsert;
export type Exercise = typeof exercises.$inferSelect;
export type NewExercise = typeof exercises.$inferInsert;
export type StressRating = typeof stressRatings.$inferSelect;
export type NewStressRating = typeof stressRatings.$inferInsert;
export type BurnoutAssessment = typeof burnoutAssessments.$inferSelect;
export type NewBurnoutAssessment = typeof burnoutAssessments.$inferInsert;
export type RecommendedArticle = typeof recommendedArticles.$inferSelect;
export type NewRecommendedArticle = typeof recommendedArticles.$inferInsert;
