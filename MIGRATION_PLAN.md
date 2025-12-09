# Migration Plan: Prompts-Only App & Firebase → Clerk/Drizzle/Neon

## Overview

This plan covers two major changes:

1. **Removing text input functionality**: Transform from a content storage platform to a prompt delivery platform
2. **Complete Firebase migration**: Finish migration to Clerk authentication and Neon/Drizzle database

---

## Part A: Moving to Prompts-Only Setup

### A1. Database Schema Updates

**Current State**: Schema includes `encryptedUserInput` fields that store user text responses.

**Required Changes**:

#### 1. Update `app/db/schema.ts`

**Import update:**

```typescript
import {
  pgTable,
  text,
  timestamp,
  integer,
  numeric,
  boolean,
  json,
  uuid,
  unique, // ADD THIS for journal unique constraint
} from "drizzle-orm/pg-core";
```

**Remove encryption fields:**

```typescript
// REMOVE from journalEntries:
encryptedUserInput: json("encrypted_user_input"),

// REMOVE from courses:
encryptedUserInput: json("encrypted_user_input"),

// REMOVE from exercises:
encryptedUserInput: json("encrypted_user_input"),
```

**Simplify tracking:**

```typescript
// Journals: REMOVE dateKey, ADD status (just track "active")
// Exercises: REMOVE completedPrompts & completionPercentage, ADD status (just track "active")
// Courses: KEEP resourcesCompleted (tracks % completion per course)
```

**Final simplified schemas:**

```typescript
// Journal entries table - SIMPLIFIED (no date tracking)
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
  // REMOVED: encryptedUserInput
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
```

#### 2. Create Drizzle Migration

```bash
# Generate migration
npx drizzle-kit generate

# Review the generated SQL migration file
# It should:
# - DROP encryptedUserInput columns from journalEntries, courses, exercises
# - DROP dateKey column from journalEntries
# - DROP completedPrompts and completionPercentage columns from exercises
# - ADD status column to journalEntries
# - ADD status column to exercises
# - ADD unique constraint on (userId, journalName) for journalEntries
# - ADD unique constraint on (userId, exerciseSlug) for exercises

# Apply migration
npx drizzle-kit push
```

### A2. Remove Encryption Infrastructure

**Files to DELETE:**

```
/app/api/encryptText/route.ts
/app/api/decryptText/route.ts
```

**Environment Variables to REMOVE:**

```
ENCRYPTION_KEY=...  # Remove from .env
```

### A3. Update Server Actions

**File: `app/actions/userDataActions.ts`**

**Changes needed:**

1. **Remove `encryptedUserInput` parameters** from all functions:

   - `createJournalEntry()` - remove encryption param
   - `updateCourseResourceData()` - remove encryption param, remove encrypted data storage
   - `updateExerciseProgress()` - remove encryption param
   - `getCourseResourceData()` - remove entirely (no longer fetching user text)

2. **Simplify functions to only track status/completion:**

```typescript
// UPDATED: createJournalEntry (simplified - no date tracking)
export async function createJournalEntry(data: { journalName: string }) {
  try {
    const user = await getCurrentUser();

    // Check if journal already exists for this user
    const existingJournal = await db.query.journalEntries.findFirst({
      where: and(
        eq(journalEntries.userId, user.id),
        eq(journalEntries.journalName, data.journalName)
      ),
    });

    if (existingJournal) {
      // Journal already active - just update timestamp
      await db
        .update(journalEntries)
        .set({ updatedAt: new Date() })
        .where(eq(journalEntries.id, existingJournal.id));
    } else {
      // Create new active journal entry
      await db.insert(journalEntries).values({
        userId: user.id,
        journalName: data.journalName,
        status: "active",
      });
    }

    revalidatePath("/home/[clerkId]", "page");
    return { success: true };
  } catch (error) {
    console.error("Error creating journal entry:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to create journal entry"
    );
  }
}

// UPDATED: updateCourseProgress (remove encrypted data handling)
export async function markResourceCompleted(data: {
  courseSlug: string;
  resourceSlug: string;
}) {
  // Keep existing logic but remove any encryptedUserInput handling
  // This function already exists and just needs encrypted data removed
}

// REMOVE ENTIRELY: getCourseResourceData()
// This was only used to fetch encrypted user text

// UPDATED: updateExerciseProgress (simplified - like journals)
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
```

### A4. Update UI Components - Remove All Text Inputs

**Priority Files to Update:**

#### 1. Writing Exercises Form

**File: `app/exercises/writing-exercises/WritingExerciseForm.tsx`**

**Current**: Has text inputs, encryption, and form submission
**New**: Just display prompts with "Get Started" button

```typescript
export default function WritingExerciseForm({
  exerciseSlug,
  prompts,
}: {
  exerciseSlug: string;
  prompts: Prompt[];
}) {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGetStarted = async () => {
    setLoading(true);
    try {
      await startExercise({
        exerciseSlug,
      });
      setStarted(true);
    } catch (err) {
      console.error("Error starting exercise:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Display prompts */}
      {prompts.map((prompt, index) => (
        <div
          key={index}
          className="mb-8 rounded-lg border-2 border-emerald-700 p-6"
        >
          <h3 className="mb-3 text-xl font-semibold">{prompt.title}</h3>
          <div className="text-gray-700">
            <PortableText
              value={prompt.instructions}
              components={portableTextComponents}
            />
          </div>

          {/* Guidance text instead of text input */}
          <div className="mt-4 rounded bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              💡 <strong>Take a moment to reflect on this prompt.</strong>
              Write your thoughts in your journal, notebook, or preferred writing
              app.
            </p>
          </div>
        </div>
      ))}

      {/* Get Started or Continue button */}
      {!started ? (
        <button
          onClick={handleGetStarted}
          disabled={loading}
          className="w-full rounded-lg bg-emerald-600 py-3 text-white hover:bg-emerald-700"
        >
          {loading ? "Starting..." : "Get Started"}
        </button>
      ) : (
        <div className="rounded-lg bg-green-50 p-4 text-center">
          <p className="text-green-800">
            ✓ Exercise in progress. Your prompts are ready above.
          </p>
        </div>
      )}
    </div>
  );
}
```

#### 2. Course Self-Reflection Forms

**File: `app/courses/[courseSlug]/self-reflections/[selfReflectionExerciseSlug]/TextAreaForm.tsx`**

**Similar transformation:**

- Remove all `<textarea>` elements
- Remove `handleInputChange()` and `handleSubmit()` form logic
- Remove encryption API calls
- Keep only completion tracking via "Mark Complete" button

```typescript
export default function TextAreaForm({
  courseSlug,
  exerciseSlug,
  prompts,
}: {
  courseSlug: string;
  exerciseSlug: string;
  prompts: Prompt[];
}) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMarkComplete = async () => {
    setLoading(true);
    try {
      await markResourceCompleted({
        courseSlug,
        resourceSlug: exerciseSlug,
      });
      setCompleted(true);
    } catch (err) {
      console.error("Error marking complete:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Display prompts (no text inputs) */}
      {prompts.map((prompt) => (
        <div
          key={prompt._key}
          className="mb-6 rounded-lg border-2 border-emerald-700 p-4"
        >
          <h5 className="font-semibold">{prompt.title}</h5>
          <PortableText
            value={prompt.instructions}
            components={portableTextComponents}
          />

          <div className="mt-3 rounded bg-amber-50 p-3">
            <p className="text-sm">
              ✍️ Reflect on this prompt in your own journal or notes.
            </p>
          </div>
        </div>
      ))}

      {/* Mark complete button */}
      {!completed ? (
        <button
          onClick={handleMarkComplete}
          disabled={loading}
          className="mt-4 rounded bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700"
        >
          {loading ? "Saving..." : "Mark as Complete"}
        </button>
      ) : (
        <div className="mt-4 rounded bg-green-50 p-3">
          <p className="text-green-800">✓ Completed!</p>
        </div>
      )}
    </div>
  );
}
```

#### 3. Remove "Existing Entry" Components

**Files to DELETE or simplify:**

```
app/courses/[courseSlug]/self-reflections/[selfReflectionExerciseSlug]/ExistingEntry.tsx
app/exercises/writing-exercises/ExistingEntry.tsx
```

These components displayed previously saved encrypted text - no longer needed.

### A5. Update Types

**File: `types/user.ts`**

Remove references to encrypted data and update journal/exercise structure:

```typescript
export type UserWithRelations = User & {
  journalEntries: Pick<
    JournalEntry,
    "id" | "journalName" | "status" | "createdAt" | "updatedAt"
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
    "id" | "exerciseSlug" | "status" | "createdAt" | "updatedAt"
    // REMOVED: completedPrompts, completionPercentage, encryptedUserInput
  >[];
  stressRatings: Pick<StressRating, "id" | "rating" | "createdAt">[];
  burnoutAssessments: Pick<
    BurnoutAssessment,
    "id" | "userId" | "createdAt" | "assessment1" | "assessment2"
  >[];
  recommendedArticles: Pick<RecommendedArticle, "articleSlug" | "createdAt">[];
};
```

### A6. Update Home Page Dashboard

**File: `app/home/[clerkId]/page.tsx` (and related components)**

**Changes:**

- Display "Active Journals" list (simple list, no dates)
- Display "Active Exercises" list (simple list, no progress bars)
- Display "Courses in Progress" with % completion (3 of 10 lessons completed)
- Keep stress ratings display
- Remove any UI that would display user's saved text responses

**Example structure:**

```typescript
// Home page sections:
┌─────────────────────────────┐
│ Your Active Journals        │
│ • Gratitude Journal         │
│ • Reflection Journal        │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Your Active Exercises       │
│ • Cognitive Reframing       │
│ • Stress Management         │
└─────────────────────────────┘

┌─────────────────────────────┐
│ Courses in Progress         │
│ • Burnout Course (30% done) │
│ • CBT Course (60% done)     │
└─────────────────────────────┘
```

---

## Part B: Complete Firebase → Clerk/Drizzle Migration

### B1. Authentication Migration

**Current State**: Mixed Firebase + Clerk auth
**Target**: 100% Clerk authentication

#### 1. Remove Firebase Auth Actions

**Files to DELETE:**

```
app/actions/authAction.ts  (Firebase session verification)
app/actions/userIdAction.ts  (Firebase UID retrieval)
app/actions/dbUserAction.ts  (Firebase Firestore user fetch)
```

#### 2. Replace Firebase Auth with Clerk

**Create: `app/actions/clerkAuthActions.ts`**

```typescript
"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Get current authenticated user's Clerk ID
 * Redirects to signin if not authenticated
 */
export async function requireAuth() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return userId;
}

/**
 * Check if user is authenticated (doesn't redirect)
 */
export async function isAuthenticated() {
  const { userId } = await auth();
  return !!userId;
}
```

#### 3. Remove Firebase Client-Side Auth

**File: `state/SetUser.tsx`** - DELETE THIS FILE

This component listens to Firebase auth state. With Clerk, we don't need this pattern.

**File: `state/userListener.ts`** - DELETE THIS FILE

Firestore real-time listener - not needed with Drizzle.

**File: `state/store.ts`** - Update to remove Firebase user atom

Replace Firebase user atom with Clerk-based approach:

```typescript
import { atom } from "jotai";

// Remove Firebase-based userAtom
// Replace with simpler approach using Clerk's built-in state
// Clerk provides <SignedIn>, <SignedOut>, useUser() hook, etc.

// Keep other atoms (stress ratings, etc.)
export const stressRatingAtom = atom<number | null>(null);
// ... other atoms
```

#### 4. Update Components Using Firebase Auth

**Search for and replace:**

- `useAuthState(auth)` from `react-firebase-hooks/auth` → `useUser()` from `@clerk/nextjs`
- `auth.onAuthStateChanged` → Not needed (Clerk handles this)
- `useDeleteUser(auth)` → Use Clerk's user deletion

**File: `app/profile/[uid]/components/DeleteAccountAlert.tsx`**

Replace Firebase deletion with Clerk:

```typescript
import { useUser } from "@clerk/nextjs";

export default function DeleteAccountAlert({ open, setOpen }) {
  const { user } = useUser();

  const handleDeleteAccount = async () => {
    try {
      // Delete user via Clerk
      await user?.delete();

      // Clerk webhook will handle database cleanup
      router.push("/");
      setOpen(false);
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  // ... rest of component
}
```

### B2. Remove Firebase Dependencies

**File: `package.json`**

Remove Firebase packages:

```bash
npm uninstall firebase firebase-admin react-firebase-hooks
```

**Packages to remove:**

```json
"firebase": "^11.3.1",
"firebase-admin": "^11.9.0",
"react-firebase-hooks": "^5.1.1"
```

**Files/Folders to DELETE:**

```
/firebase/  (entire directory)
firebase.json
firebase-debug.log
.firebaserc (if exists)
_adminCredentials.json (already in .gitignore)
```

### B3. Update Middleware (Already Good!)

**File: `middleware.ts`** ✅ Already using Clerk properly

Current implementation is correct:

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/api/webhooks(.*)"]);

export default clerkMiddleware(async (auth, req, evt) => {
  const { pathname } = req.nextUrl;

  if (isPublicRoute(req)) {
    return;
  }

  const authResult = await auth.protect();

  const userId = authResult.userId;

  if (pathname === "/home") {
    return NextResponse.redirect(new URL(`/home/${userId}`, req.url));
  }
});
```

### B4. Clerk Webhooks (Already Set Up!)

**File: `app/api/webhooks/clerk/route.ts`** ✅ Already implemented correctly

Your webhook handler is good - it:

- Creates user in Neon on `user.created`
- Updates user on `user.updated`
- Deletes user on `user.deleted`

**Important:** Ensure webhook is configured in Clerk Dashboard:

1. Go to Clerk Dashboard → Webhooks
2. Endpoint URL: `https://yourdomain.com/api/webhooks/clerk`
3. Subscribe to: `user.created`, `user.updated`, `user.deleted`

### B5. Environment Variables

**Update `.env`:**

**REMOVE:**

```bash
# Firebase (remove these)
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
# ... all Firebase vars

# Remove encryption key
ENCRYPTION_KEY=...
```

**KEEP:**

```bash
# Clerk (keep these)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
CLERK_WEBHOOK_SIGNING_SECRET=...

# Neon Database (keep)
DATABASE_URL=...

# Other (keep)
NEXT_PUBLIC_SANITY_PROJECT_ID=...
STRIPE_SECRET_KEY=...
# etc.
```

### B6. Update User Data Queries

All your `userDataActions.ts` functions already use Clerk properly via `getCurrentUser()`:

```typescript
async function getCurrentUser() {
  const { userId } = await auth(); // ✅ Clerk
  if (!userId) {
    throw new Error("Unauthorized: User not authenticated");
  }

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId), // ✅ Using Clerk ID
  });

  if (!user) {
    throw new Error("User not found in database");
  }

  return user;
}
```

✅ **This is already correct!**

---

## Implementation Checklist

### Phase 1: Database & Schema (2-3 hours)

- [x] 1. Update `app/db/schema.ts`:
  - [x] Add `unique` import from drizzle-orm/pg-core
  - [x] Remove `encryptedUserInput` from journalEntries, courses, exercises
  - [x] Remove `dateKey` from journalEntries
  - [x] Remove `completedPrompts` and `completionPercentage` from exercises
  - [x] Add `status` field to journalEntries (default "active")
  - [x] Add `status` field to exercises (default "active")
  - [x] Add unique constraint on (userId, journalName) for journalEntries
  - [x] Add unique constraint on (userId, exerciseSlug) for exercises
- [ ] 2. Generate Drizzle migration: `npx drizzle-kit generate`
- [ ] 3. Review generated SQL migration carefully
- [ ] 4. Apply migration: `npx drizzle-kit push`
- [ ] 5. Update `types/user.ts`:
  - [ ] Remove dateKey from journalEntries type
  - [ ] Remove completedPrompts, completionPercentage from exercises type
  - [ ] Add status to journalEntries type
  - [ ] Add status to exercises type

### Phase 2: Remove Encryption (1-2 hours)

- [ ] 7. Delete `/app/api/encryptText/route.ts`
- [ ] 8. Delete `/app/api/decryptText/route.ts`
- [ ] 9. Delete `/app/api/encryption/encryptNumber/route.ts`
- [ ] 10. Delete `/app/api/encryption/decryptNumber/route.ts`
- [ ] 11. Remove `ENCRYPTION_KEY` from `.env`

### Phase 3: Update Server Actions (2-3 hours)

- [x] 12. Update `createJournalEntry()` in `userDataActions.ts` - remove dateKey param, add upsert logic
- [x] 13. Rename `updateExerciseProgress()` to `startExercise()` - remove all progress tracking params
- [x] 14. Delete `updateCourseResourceData()` function - removed entirely (was for storing encrypted text)
- [x] 15. Delete `getCourseResourceData()` function - removed entirely (was for fetching encrypted text)
- [ ] 16. Test all server actions with new schema

### Phase 4: Transform UI Components (4-6 hours)

- [ ] 17. Update `WritingExerciseForm.tsx` - remove text inputs, add "Get Started"
- [ ] 18. Update `TextAreaForm.tsx` (course self-reflections) - remove inputs
- [ ] 19. Delete or simplify `ExistingEntry.tsx` components
- [ ] 20. Update home page to display in-progress exercises (no saved text)
- [ ] 21. Add instructional text encouraging external writing

### Phase 5: Complete Firebase Removal (3-4 hours)

- [ ] 22. Delete `app/actions/authAction.ts`
- [ ] 23. Delete `app/actions/userIdAction.ts`
- [ ] 24. Delete `app/actions/dbUserAction.ts`
- [ ] 25. Delete `state/SetUser.tsx`
- [ ] 26. Delete `state/userListener.ts`
- [ ] 27. Update `state/store.ts` - remove Firebase user atom
- [ ] 28. Create `app/actions/clerkAuthActions.ts` with auth helpers
- [ ] 29. Update `DeleteAccountAlert.tsx` to use Clerk
- [ ] 30. Search codebase for `useAuthState`, `onAuthStateChanged` - replace with Clerk
- [ ] 31. Run `npm uninstall firebase firebase-admin react-firebase-hooks`
- [ ] 32. Delete `/firebase/` directory
- [ ] 33. Delete `firebase.json`, `firebase-debug.log`, `.firebaserc`
- [ ] 34. Remove Firebase env vars from `.env`

### Phase 6: Testing & Cleanup (2-3 hours)

- [ ] 35. Test user signup flow (Clerk → webhook → database)
- [ ] 36. Test course progress tracking (no text storage)
- [ ] 37. Test exercise "Get Started" flow
- [ ] 38. Test stress ratings (these should still work)
- [ ] 39. Check home page displays correct in-progress items
- [ ] 40. Verify no Firebase references remain: `grep -r "firebase" app/`
- [ ] 41. Verify no encryption references remain: `grep -r "encrypt" app/`
- [ ] 42. Run TypeScript check: `npm run build`
- [ ] 43. Test in production environment

---

## Key Decisions & Rationale

### Why Remove Text Storage?

1. **Reduces complexity** - No encryption, no large text storage
2. **Reduces costs** - Much less database storage needed
3. **Privacy by design** - No user data to protect/breach
4. **Faster development** - Focus on prompt quality, not text management
5. **User flexibility** - They can use their preferred writing tools

### Why Simplify Tracking?

**Journals & Exercises**: Just track "active" status

- No need for completion percentages or prompt counting
- User either has it in progress or they don't
- Simpler database schema
- Easier UI (just show "Your Active Exercises")

**Courses**: Keep progress tracking

- Courses have multiple lessons/resources
- Need to show "3 of 10 lessons completed"
- Progress tracking makes sense for multi-part content

### Why Complete Clerk Migration?

1. **Modern auth** - Better UX, more secure, actively maintained
2. **Organizations support** - Built-in multi-tenant features you'll need
3. **Single source of truth** - Eliminate dual auth systems
4. **Better Next.js integration** - Designed for App Router

### What Still Gets Stored?

✅ **Keep storing:**

- User account info (email, clerk ID)
- Course progress (which lessons completed, % completion per course)
- Exercise status (which exercises are active)
- Journal status (which journals are active)
- Stress ratings (numerical data)
- Burnout assessments (scores/metrics)

❌ **Stop storing:**

- User's actual written text responses
- Encrypted text data
- Exercise completion percentages (now just active/inactive)
- Exercise completed prompts count (now just active/inactive)
- Journal date keys (now just active/inactive)

---

## Post-Migration Benefits

**Simplified Architecture:**

```
Before:                           After:
User writes → Encrypt → Store     User writes (offline)
              ↓                              ↓
        Decrypt → Display            Click "Get Started"
                                             ↓
                                     Create status record
                                             ↓
                                     Show on home page

Three-Tier Tracking System:
┌─────────────────────────────────────────────────┐
│ Journals & Exercises: Just "active" status      │
│ ✓ Simple: User started it or not               │
│ ✓ One record per journal/exercise              │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│ Courses: Detailed progress tracking            │
│ ✓ Complex: Which lessons completed             │
│ ✓ Shows % completion (3 of 10 lessons done)    │
└─────────────────────────────────────────────────┘
```

**Reduced Attack Surface:**

- No encryption keys to manage
- No text data to leak
- Smaller database

**Faster Development:**

- No form validation for text
- No encryption/decryption overhead
- Simpler UI components

**Lower Costs:**

- Much less database storage
- Fewer API calls (no encrypt/decrypt)
- Simpler hosting needs

---

## Rollback Plan

If needed, you can rollback by:

1. **Schema**: Git revert schema changes and re-run previous migration
2. **Code**: Git revert to previous commits
3. **Data**: User/progress data preserved, but encrypted text will be permanently lost

**Important**: Once encrypted columns are dropped and encryption keys deleted, you **cannot** recover old encrypted data.

**Recommendation**:

- Ensure database backup exists before starting migration
- Test thoroughly in development/staging first
- Consider announcing the change to users beforehand

---

## Timeline Estimate

- **Part A (Prompts-Only)**: 8-12 hours
- **Part B (Firebase Removal)**: 6-8 hours
- **Testing**: 2-3 hours
- **Total**: 16-23 hours (2-3 working days)

---

## Resolved Decisions

✅ **1. Encrypted Data Backup**: NO backup period. Drop encrypted columns immediately after migration.

✅ **2. Stress Ratings**: Remain as-is. No changes needed.

✅ **3. Journal Entries**: Simplified structure (Option B)

- Remove `dateKey` field (no date tracking)
- Just track which journals are "active" for the user
- One record per journal per user
- Shows "journals in progress" on home page

✅ **4. Burnout Assessments**: Remain as-is. No changes needed.

✅ **5. Exercise Tracking**: Simplified like journals

- Remove `completedPrompts` and `completionPercentage` fields
- Just track which exercises are "active" for the user
- One record per exercise per user
- Shows "exercises in progress" on home page
- **Only courses** track % completion (via `resourcesCompleted`)

---

This plan provides a complete roadmap for both migrations. Start with Phase 1 and work through systematically. Each phase is isolated enough that you can pause between phases if needed.
