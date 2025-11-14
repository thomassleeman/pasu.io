import {
  pgTable,
  text,
  timestamp,
  integer,
  numeric,
  boolean,
  json,
  uuid,
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
export const journalEntries = pgTable("journal_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  journalName: text("journal_name").notNull(),
  dateKey: text("date_key").notNull(),
  encryptedUserInput: json("encrypted_user_input"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

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
  encryptedUserInput: json("encrypted_user_input"), // Stores per-resource encrypted data for self-reflections
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Exercises table
export const exercises = pgTable("exercises", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  exerciseSlug: text("exercise_slug").notNull(),
  completedPrompts: integer("completed_prompts").notNull().default(0),
  completionPercentage: integer("completion_percentage").notNull().default(0),
  encryptedUserInput: json("encrypted_user_input"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

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

// Organizations table
export const organizations = pgTable("organizations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  ownerId: uuid("owner_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  ownerEmail: text("owner_email").notNull(),
  logoUrl: text("logo_url"),
  subscriptionStatus: text("subscription_status").notNull().default("active"),
  subscriptionQuantity: integer("subscription_quantity").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Organization members table (junction table)
export const organizationMembers = pgTable("organization_members", {
  id: uuid("id").primaryKey().defaultRandom(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  role: text("role").notNull().default("standard"), // "admin" or "standard"
  joinedAt: timestamp("joined_at").notNull().defaultNow(),
});

// Organization invitations table
export const organizationInvitations = pgTable("organization_invitations", {
  id: uuid("id").primaryKey().defaultRandom(),
  organizationId: uuid("organization_id")
    .notNull()
    .references(() => organizations.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  valid: boolean("valid").notNull().default(true),
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
  ownedOrganizations: many(organizations),
  organizationMemberships: many(organizationMembers),
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

export const organizationsRelations = relations(
  organizations,
  ({ one, many }) => ({
    owner: one(users, {
      fields: [organizations.ownerId],
      references: [users.id],
    }),
    members: many(organizationMembers),
    invitations: many(organizationInvitations),
  })
);

export const organizationMembersRelations = relations(
  organizationMembers,
  ({ one }) => ({
    organization: one(organizations, {
      fields: [organizationMembers.organizationId],
      references: [organizations.id],
    }),
    user: one(users, {
      fields: [organizationMembers.userId],
      references: [users.id],
    }),
  })
);

export const organizationInvitationsRelations = relations(
  organizationInvitations,
  ({ one }) => ({
    organization: one(organizations, {
      fields: [organizationInvitations.organizationId],
      references: [organizations.id],
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
export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;
export type OrganizationMember = typeof organizationMembers.$inferSelect;
export type NewOrganizationMember = typeof organizationMembers.$inferInsert;
export type OrganizationInvitation = typeof organizationInvitations.$inferSelect;
export type NewOrganizationInvitation = typeof organizationInvitations.$inferInsert;
