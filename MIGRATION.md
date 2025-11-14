# Firebase to Clerk/Drizzle Migration Plan

**Status**: In Progress
**Last Updated**: November 14, 2025
**Goal**: Complete migration from Firebase Auth + Firestore to Clerk Auth + Drizzle/PostgreSQL

**Recent Progress**:
- ✅ October 21, 2025: Task 1.1 completed - Server actions created for all data mutations
- ✅ October 21, 2025: Task 1.2 completed - Journaling write operations migrated to Drizzle
- ✅ October 21, 2025: Task 1.3 completed - Stress rating write operations migrated to Drizzle
- ✅ October 21, 2025: Task 1.4 completed - Course progress write operations migrated to Drizzle
- ⚠️ November 14, 2025: Task 4.3 partially completed - Firebase imports cleaned from migrated features

---

## Migration Status Overview

### ✅ Completed
- [x] Clerk authentication setup with middleware
- [x] Drizzle ORM schema complete (all tables defined)
- [x] PostgreSQL database on Neon
- [x] Clerk webhook for user sync
- [x] Home dashboard reading from Drizzle (`getUserWithRelations`)
- [x] Root layout with ClerkProvider
- [x] Route protection via middleware

### 🔴 Critical Issue
**Data Split-Brain**: The application currently **reads** from Drizzle/PostgreSQL but **writes** to Firestore. This means:
- New user activity (journals, stress ratings, exercises) goes to Firestore
- Dashboard displays data from PostgreSQL
- **Result**: New data won't appear on the dashboard unless synced

---

## Phase 1: Migrate Write Operations (HIGH PRIORITY)

**Goal**: Replace all Firestore write operations with Drizzle inserts/updates

### ~~Task 1.1: Create Server Actions for Data Mutations~~ ✅

**File**: Create `app/actions/userDataActions.ts`

```typescript
'use server'

import { db } from '@db/index';
import {
  journalEntries,
  stressRatings,
  courses,
  exercises,
  burnoutAssessments
} from '@db/schema';
import { auth } from '@clerk/nextjs/server';
import { eq, and } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

// Action: Create journal entry
export async function createJournalEntry(data: {
  journalName: string;
  dateKey: string;
  encryptedUserInput: any;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId)
  });
  if (!user) throw new Error('User not found');

  await db.insert(journalEntries).values({
    userId: user.id,
    journalName: data.journalName,
    dateKey: data.dateKey,
    encryptedUserInput: data.encryptedUserInput,
  });

  revalidatePath('/home/[clerkId]');
  return { success: true };
}

// Action: Create stress rating
export async function createStressRating(rating: number) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId)
  });
  if (!user) throw new Error('User not found');

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

  revalidatePath('/home/[clerkId]');
  return { success: true };
}

// Action: Update course progress
export async function updateCourseProgress(data: {
  courseSlug: string;
  courseName: string;
  resourcesCompleted: Record<string, boolean>;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId)
  });
  if (!user) throw new Error('User not found');

  // Check if course exists for user
  const existingCourse = await db.query.courses.findFirst({
    where: and(
      eq(courses.userId, user.id),
      eq(courses.courseSlug, data.courseSlug)
    )
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

  revalidatePath('/home/[clerkId]');
  revalidatePath(`/courses/${data.courseSlug}`);
  return { success: true };
}

// Action: Update exercise progress
export async function updateExerciseProgress(data: {
  exerciseSlug: string;
  completedPrompts: number;
  completionPercentage: number;
  encryptedUserInput?: any;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId)
  });
  if (!user) throw new Error('User not found');

  // Check if exercise exists for user
  const existingExercise = await db.query.exercises.findFirst({
    where: and(
      eq(exercises.userId, user.id),
      eq(exercises.exerciseSlug, data.exerciseSlug)
    )
  });

  if (existingExercise) {
    // Update existing exercise
    await db
      .update(exercises)
      .set({
        completedPrompts: data.completedPrompts,
        completionPercentage: data.completionPercentage,
        encryptedUserInput: data.encryptedUserInput,
        updatedAt: new Date(),
      })
      .where(eq(exercises.id, existingExercise.id));
  } else {
    // Insert new exercise
    await db.insert(exercises).values({
      userId: user.id,
      exerciseSlug: data.exerciseSlug,
      completedPrompts: data.completedPrompts,
      completionPercentage: data.completionPercentage,
      encryptedUserInput: data.encryptedUserInput,
    });
  }

  revalidatePath('/home/[clerkId]');
  revalidatePath(`/exercises/${data.exerciseSlug}`);
  return { success: true };
}
```

**Acceptance Criteria**:
- [x] ~~Server actions file created with all CRUD operations~~
- [x] ~~Auth checks using Clerk's `auth()`~~
- [x] ~~Type-safe using Drizzle schema types~~
- [x] ~~Proper error handling~~
- [x] ~~`revalidatePath` called for cache invalidation~~

**Status**: ✅ **COMPLETED** - File created at `app/actions/userDataActions.ts` with all required server actions

---

### ~~Task 1.2: Replace Journaling Write Operations~~ ✅

**Files to Update**:
- `app/journaling/updateDatabase.ts`

**Current Implementation**: ~~Writes to Firestore `users/{userId}/journaling/{journalName}/{dateKey}`~~

**New Implementation**:
```typescript
// app/journaling/updateDatabase.ts
'use client';

import { createJournalEntry } from '@actions/userDataActions';
import { format, parse, isValid } from 'date-fns';
import { EncryptedUserInputs } from '@/types/journal';

export default async function updateDatabase(
  encryptedUserInputs: EncryptedUserInputs,
  selectedDate: string,
  journalName: string
) {
  // Validate date format
  const parsedDate = parse(selectedDate, 'dd-MMM-yyyy', new Date());
  if (!isValid(parsedDate)) {
    console.error(`Invalid date format: ${selectedDate}`);
    return false;
  }

  const dateKey = format(parsedDate, 'yyyy-MM-dd'); // Store as ISO format

  try {
    await createJournalEntry({
      journalName,
      dateKey,
      encryptedUserInput: encryptedUserInputs,
    });

    return true;
  } catch (error) {
    console.error('Error updating journal:', error);
    return false;
  }
}
```

**Acceptance Criteria**:
- [x] ~~Remove Firebase imports (`doc`, `setDoc`, `getFirestore`)~~
- [x] ~~Remove `/api/accessUserId` call (no longer needed)~~
- [x] ~~Use `createJournalEntry` server action~~
- [ ] Test journal entry creation
- [ ] Verify entry appears on dashboard

**Status**: ✅ **COMPLETED** - File updated at `app/journaling/updateDatabase.ts`. Firebase imports removed, now using `createJournalEntry` server action from `userDataActions.ts`. Date format converted to ISO (YYYY-MM-DD) for database storage.

---

### ~~Task 1.3: Replace Stress Rating Write Operations~~ ✅

**Files to Update**:
- `app/home/[clerkId]/_components/StressLevelComponent.tsx`

**Current Implementation**: ~~Lines 44-68 use Firestore `updateDoc`~~

**New Implementation**:
```typescript
// app/home/[clerkId]/_components/StressLevelComponent.tsx
'use client';

import { createStressRating } from '@actions/userDataActions';
import { useState } from 'react';
// Remove Firebase imports

const StressLevelComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (selectedLevel === null) return;

    try {
      await createStressRating(selectedLevel);
      setSubmissionMessage('Your stress level has been recorded.');
    } catch (error) {
      console.error('Error recording stress level:', error);
      setSubmissionMessage('Failed to record stress level. Please try again.');
    }
  };

  // ... rest of component
};
```

**Acceptance Criteria**:
- [x] ~~Remove Firebase imports~~
- [x] ~~Remove `userId` prop (server action handles auth)~~
- [x] ~~Use `createStressRating` server action~~
- [ ] Test stress rating submission
- [ ] Verify rating appears in dashboard visualization

**Status**: ✅ **COMPLETED** - File updated at [app/home/[clerkId]/_components/StressLevelComponent.tsx](app/home/[clerkId]/_components/StressLevelComponent.tsx). All Firebase imports removed (`doc`, `updateDoc`, `getDoc`, `Timestamp`, `db`). Component no longer requires `userId` prop - authentication handled by `createStressRating` server action via Clerk. Also updated [app/home/[clerkId]/_components/WelcomePanel.tsx](app/home/[clerkId]/_components/WelcomePanel.tsx) to remove `userId` prop when calling the component.

---

### ~~Task 1.4: Replace Course Progress Write Operations~~ ✅

**Files Updated**:
- ✅ [app/courses/[courseSlug]/GetStartedButton.tsx](app/courses/[courseSlug]/GetStartedButton.tsx)
- ✅ [app/courses/quiz/updateDatabase.ts](app/courses/quiz/updateDatabase.ts)
- ✅ [app/courses/[courseSlug]/self-reflections/[selfReflectionExerciseSlug]/updateDatabase.ts](app/courses/[courseSlug]/self-reflections/[selfReflectionExerciseSlug]/updateDatabase.ts)
- ✅ [app/courses/[courseSlug]/self-reflections/[selfReflectionExerciseSlug]/TextAreaForm.tsx](app/courses/[courseSlug]/self-reflections/[selfReflectionExerciseSlug]/TextAreaForm.tsx)

**Changes Made**:
1. ✅ Removed Firebase `setDoc`/`updateDoc`/`getDoc` calls
2. ✅ Added `getCourseProgress`, `markResourceCompleted`, `updateCourseResourceData`, and `getCourseResourceData` server actions
3. ✅ Removed `/api/accessUserId` dependency
4. ✅ Added `encryptedUserInput` field to `courses` table schema for storing self-reflection exercise data
5. ✅ Applied database migration to add new column

**Implementation Details**:
- **GetStartedButton.tsx**: Now uses `getCourseProgress` to fetch existing progress and `updateCourseProgress` to enroll/update course status. Authentication is handled by server actions with Clerk.
- **quiz/updateDatabase.ts**: Simplified to use `markResourceCompleted` server action for marking quiz resources as complete.
- **self-reflections/updateDatabase.ts**: Uses `updateCourseResourceData` to store both encrypted user input and completion status for self-reflection exercises.
- **TextAreaForm.tsx**: Refactored to use `getCourseResourceData` server action instead of Firebase for fetching previous encrypted submissions.

**Acceptance Criteria**:
- [x] ~~Course enrollment writes to Drizzle~~
- [x] ~~Quiz completion writes to Drizzle~~
- [x] ~~Self-reflection completion writes to Drizzle~~
- [ ] Progress displays correctly on dashboard (needs testing)
- [ ] Test full course flow (enroll → complete → verify)

**Status**: ✅ **COMPLETED** - All Firebase write operations migrated to Drizzle server actions. Schema updated and migration applied. Testing recommended to verify full course flow.

---

### Task 1.5: Replace Exercise Write Operations

**Files to Update**:
- `app/exercises/writing-exercises/updateDatabase.ts`
- `app/exercises/writing-exercises/WritingExerciseForm.tsx`

**Pattern**: Same as courses - use `updateExerciseProgress` server action

**Acceptance Criteria**:
- [ ] Exercise submissions write to Drizzle
- [ ] Progress percentage calculated correctly
- [ ] Dashboard shows updated exercise progress
- [ ] Test exercise completion flow

---

### Task 1.6: Replace Chatbot Write Operations

**Files to Update**:
- `app/chatbot/widgets/functions/updateDatabase.tsx`

**Notes**:
- May need additional schema if chatbot interactions aren't covered
- Consider if chatbot data should be stored separately or integrated with existing tables

**Acceptance Criteria**:
- [ ] Chatbot interactions write to appropriate table
- [ ] Review if burnout assessment results need special handling
- [ ] Test burnout assessment completion

---

## Phase 2: Migrate Authentication (MEDIUM PRIORITY)

**Goal**: Remove all Firebase Auth dependencies and use Clerk exclusively

### Task 2.1: Replace Firebase Auth API Routes

**Files to Update**:
- `app/api/accessUserId/route.ts` - **DELETE** (no longer needed)
- `app/api/signin/route.ts` - Replace with Clerk
- `app/api/checkout-session/route.tsx` - Replace Firebase auth with Clerk
- `app/api/stripe-webhook/route.ts` - Replace Firebase auth with Clerk
- `app/api/new-organisation/route.tsx` - Replace Firebase auth with Clerk
- `app/api/join-organisation/route.ts` - Replace Firebase auth with Clerk
- `app/api/newAdmin/route.tsx` - Replace Firebase auth with Clerk
- `app/api/remove-custom-claims/route.ts` - Migrate custom claims to Clerk metadata

**Pattern**:
```typescript
// OLD: Firebase pattern
import { auth } from 'firebase-admin';
const user = await auth().getUserByEmail(email);
await auth().setCustomUserClaims(user.uid, { admin: true });

// NEW: Clerk pattern
import { auth, clerkClient } from '@clerk/nextjs/server';
const { userId } = await auth();
const user = await clerkClient.users.getUser(userId);
await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata: { admin: true }
});
```

**Acceptance Criteria**:
- [ ] All API routes use Clerk for auth
- [ ] Custom claims migrated to Clerk metadata
- [ ] Session verification uses Clerk tokens
- [ ] Remove `/api/accessUserId` route entirely

---

### Task 2.2: Replace Client-Side Auth Hooks

**Files to Update**:
- `hooks/useAuth.ts` - Replace with Clerk's `useUser`
- `hooks/useSubscriptionStatus.ts` - Update to use Clerk
- `state/userListener.ts` - **REMOVE** or refactor for polling
- `state/SetUser.tsx` - Replace Firebase listener with Clerk

**New Pattern**:
```typescript
// Replace hooks/useAuth.ts
'use client';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function useAuth(redirectTo = '/sign-in') {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  if (isLoaded && !user) {
    router.push(redirectTo);
  }

  return user;
}
```

**Acceptance Criteria**:
- [ ] `useAuth` uses Clerk's `useUser` hook
- [ ] Remove Firebase `onAuthStateChanged` listeners
- [ ] Update components using these hooks
- [ ] Test auth state changes (login/logout)

---

### Task 2.3: Migrate Custom Claims to Clerk Metadata

**Current Firebase Custom Claims**:
- `admin` - User is admin
- `superadmin` - User is superadmin
- `subscriptionStatus` - Stripe subscription status
- `subscriptionQuantity` - Number of seats
- `organisationId` - Organization membership

**Clerk Metadata Pattern**:
```typescript
// Store in publicMetadata (readable by client)
await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata: {
    subscriptionStatus: 'active',
    subscriptionQuantity: 5,
    organisationId: 'org_123',
  }
});

// Store in privateMetadata (server-only)
await clerkClient.users.updateUserMetadata(userId, {
  privateMetadata: {
    admin: true,
    superadmin: false,
  }
});
```

**Acceptance Criteria**:
- [ ] Subscription data stored in Clerk metadata
- [ ] Admin roles stored in private metadata
- [ ] Stripe webhook updates Clerk metadata
- [ ] Components read from Clerk user object
- [ ] Remove `remove-custom-claims` route

---

## Phase 3: Data Migration Script (CRITICAL)

**Goal**: Migrate existing Firestore data to PostgreSQL

### Task 3.1: Create Migration Script

**File**: Create `scripts/migrate-firestore-to-postgres.ts`

```typescript
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { db } from './app/db/index';
import {
  users,
  journalEntries,
  stressRatings,
  courses,
  exercises
} from './app/db/schema';

async function migrateUsers() {
  console.log('Starting user migration...');
  const firestore = getFirestore();
  const usersSnapshot = await firestore.collection('users').get();

  for (const doc of usersSnapshot.docs) {
    const firestoreData = doc.data();

    // Map Firebase UID to Clerk ID (requires manual mapping or lookup)
    const clerkId = await findClerkIdForFirebaseUid(doc.id);

    if (!clerkId) {
      console.warn(`No Clerk ID found for Firebase UID: ${doc.id}`);
      continue;
    }

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: eq(users.clerkId, clerkId)
    });

    if (existingUser) {
      console.log(`User already exists: ${clerkId}`);

      // Migrate nested data
      await migrateJournalEntries(existingUser.id, firestoreData.journaling);
      await migrateStressRatings(existingUser.id, firestoreData.stressRating);
      await migrateCourses(existingUser.id, firestoreData.courses);
      await migrateExercises(existingUser.id, firestoreData.exercises);
    }
  }

  console.log('User migration complete!');
}

async function migrateJournalEntries(userId: string, journaling: any) {
  if (!journaling) return;

  for (const [journalName, dates] of Object.entries(journaling)) {
    for (const [dateKey, entry] of Object.entries(dates as any)) {
      await db.insert(journalEntries).values({
        userId,
        journalName,
        dateKey,
        encryptedUserInput: entry.encryptedUserInput,
        createdAt: entry.createdAt?.toDate() || new Date(),
      }).onConflictDoNothing(); // Skip if already exists
    }
  }
}

// ... similar functions for other data types

// Run migration
migrateUsers().catch(console.error);
```

**Acceptance Criteria**:
- [ ] Script connects to both Firebase and PostgreSQL
- [ ] Migrates all user data
- [ ] Handles existing records gracefully
- [ ] Logs progress and errors
- [ ] Dry-run mode available
- [ ] Backup created before migration

**Run Migration**:
```bash
# Add to package.json scripts
"migrate-data": "tsx scripts/migrate-firestore-to-postgres.ts"

# Run migration
npm run migrate-data
```

---

### Task 3.2: Verify Data Integrity

**Checklist**:
- [ ] Compare record counts (Firestore vs PostgreSQL)
- [ ] Spot-check 10+ random users
- [ ] Verify encrypted data structure matches
- [ ] Check date formats are correct
- [ ] Verify relationships (user → journal entries, etc.)
- [ ] Test dashboard loads correctly for migrated users

---

## Phase 4: Remove Firebase Dependencies (FINAL)

**Goal**: Clean up all Firebase code and dependencies

### Task 4.1: Remove Firebase Configuration Files

**Files to Delete**:
- [ ] `firebase/auth/appConfig.ts`
- [ ] `firebase/auth/adminConfig.ts`
- [ ] `firebase/auth/authStatus.ts`
- [ ] `firebase.json`
- [ ] `firebase-debug.log`
- [ ] `_adminCredentials.json` (if exists)

---

### Task 4.2: Remove Firebase from package.json

```bash
npm uninstall firebase firebase-admin react-firebase-hooks
```

**Remove from package.json**:
- [ ] `firebase`
- [ ] `firebase-admin`
- [ ] `react-firebase-hooks`

---

### ~~Task 4.3: Remove Firebase Imports~~ ⚠️ PARTIALLY COMPLETE

**Status**: ⚠️ **PARTIALLY COMPLETE** - Cleaned up imports from migrated features (Tasks 1.1-1.4), but cannot fully complete until Tasks 1.5, 1.6, and Phase 2 are done.

**Completed Cleanup** (October 21, 2025):
- [x] ✅ Removed Firebase imports from journaling files (Task 1.2)
  - `app/journaling/JournalTextAreaForm.tsx` - Replaced `Timestamp` with native Date
- [x] ✅ Removed unused Firebase functions:
  - `app/courses/getCoursesData.ts` - Removed `getCompletedModules()` and Firebase imports
  - `app/articles/getArticlesData.tsx` - Removed `getRecommendedArticlesData()` and Firebase imports
- [x] ✅ Stress rating files already clean (Task 1.3 complete)
- [x] ✅ Course progress write files already clean (Task 1.4 complete)

**Remaining Firebase Usage** (Cannot remove until migration complete):

**1. Task 1.5 - Exercise Write Operations** (NOT MIGRATED):
- `app/exercises/writing-exercises/updateDatabase.ts` - Writes to Firestore
- `app/exercises/writing-exercises/WritingExerciseForm.tsx` - Reads from Firestore

**2. Task 1.6 - Chatbot Write Operations** (NOT MIGRATED):
- `app/chatbot/widgets/functions/updateDatabase.tsx` - Burnout assessments to Firestore

**3. Task 2.1 - Auth API Routes** (NOT MIGRATED):
- `app/api/accessUserId/route.ts` - Firebase Auth (should be deleted per Task 2.1)
- `app/api/signin/route.ts` - Firebase Auth
- `app/api/checkout-session/route.tsx` - Firebase Auth for Stripe
- `app/api/stripe-webhook/route.ts` - Firebase custom claims
- `app/api/new-organisation/route.tsx` - Firebase Auth + Firestore
- `app/api/join-organisation/route.ts` - Firebase Firestore
- `app/api/newAdmin/route.tsx` - Firebase custom claims
- `app/api/remove-custom-claims/route.ts` - Firebase custom claims
- `app/api/accessUserAuth/route.tsx` - Firebase Auth
- `app/api/new-content-webhook/route.ts` - Firebase Firestore
- `app/actions/authAction.ts` - Firebase Admin auth (legacy)
- `app/actions/dbUserAction.ts` - Firebase Admin Firestore

**4. Realtime Subscriptions** (NOT IN MIGRATION PLAN):
- `app/courses/[courseSlug]/subscribeToCompletedResources.ts` - Uses `onSnapshot` for realtime updates

**5. Other Features Still Using Firebase**:
- `app/organisation/[id]/page.tsx` - Organization data in Firestore
- `app/profile/[uid]/components/DeleteAccountAlert.tsx` - Firestore deleteDoc
- `app/profile/[uid]/components/ClearCustomClaims.tsx` - Firebase Auth types
- `app/pasu-ai/_components/ChatContainer.tsx` - Firebase VertexAI ChatSession

**Next Steps**:
1. Complete Task 1.5 (Exercise write operations)
2. Complete Task 1.6 (Chatbot write operations)
3. Complete Phase 2 (Auth migration)
4. Migrate realtime subscriptions to alternative (Supabase realtime, polling, or webhooks)
5. Return to Task 4.3 for final cleanup

**Files to clean** (when ready):
- [ ] Remove all remaining `import ... from 'firebase/...'`
- [ ] Remove all Firebase initialization code
- [ ] Remove Firebase environment variables from `.env.local`

---

### Task 4.4: Update Environment Variables

**Remove from `.env.local`**:
```bash
# DELETE THESE
FIREBASE_SECRET_KEY
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

---

### Task 4.5: Update CLAUDE.md Documentation

**Updates Required**:
- [ ] Remove Firebase from tech stack
- [ ] Update authentication section (Clerk only)
- [ ] Remove Firebase migration warnings
- [ ] Update code examples to remove Firebase patterns
- [ ] Update environment variables section

---

## Phase 5: Testing & Validation (CRITICAL)

**Goal**: Ensure all features work with new stack

### Task 5.1: Feature Testing Checklist

**Authentication**:
- [ ] User registration
- [ ] User login
- [ ] User logout
- [ ] Session persistence
- [ ] Protected route access
- [ ] Sign out redirects

**Dashboard**:
- [ ] Dashboard loads for authenticated user
- [ ] User data displays correctly
- [ ] Charts and visualizations render
- [ ] No console errors

**Journaling**:
- [ ] Create new journal entry
- [ ] Entry appears on dashboard
- [ ] Calendar shows entry dates
- [ ] Encrypted data stored correctly

**Stress Tracking**:
- [ ] Submit stress rating
- [ ] Rating appears in visualization
- [ ] Can update today's rating
- [ ] 30-day trend displays

**Courses**:
- [ ] Enroll in course
- [ ] Mark resources complete
- [ ] Progress displays on dashboard
- [ ] Course state persists

**Exercises**:
- [ ] Start exercise
- [ ] Submit exercise responses
- [ ] Progress percentage updates
- [ ] Completion tracked

**Subscriptions**:
- [ ] Stripe checkout works
- [ ] Webhook updates user metadata
- [ ] Subscription status displays
- [ ] Organization features work

---

### Task 5.2: Performance Testing

**Metrics to Check**:
- [ ] Dashboard load time < 2s
- [ ] Database query performance acceptable
- [ ] No N+1 query issues
- [ ] Image loading optimized

---

### Task 5.3: Security Audit

**Checklist**:
- [ ] No Firebase credentials in code
- [ ] Environment variables not committed
- [ ] Auth checks on all API routes
- [ ] User can only access own data
- [ ] Encrypted data remains encrypted
- [ ] No exposed sensitive endpoints

---

## Migration Timeline Estimate

| Phase | Duration | Priority |
|-------|----------|----------|
| Phase 1 (Write Ops) | 3-5 days | **CRITICAL** |
| Phase 2 (Auth) | 2-3 days | Medium |
| Phase 3 (Data Migration) | 2-4 days | **CRITICAL** |
| Phase 4 (Cleanup) | 1 day | Low |
| Phase 5 (Testing) | 2-3 days | **CRITICAL** |
| **Total** | **10-16 days** | |

---

## Risk Mitigation

### Data Loss Prevention
1. **Backup Firestore** before any migration
2. **Test migration on staging** environment first
3. **Keep Firebase read-only** during transition
4. **Verify data integrity** after each phase

### Rollback Plan
1. Keep Firebase dependencies installed until Phase 5 complete
2. Maintain Firebase credentials until verified working
3. Document rollback steps for each phase
4. Test rollback procedures before production deployment

### User Impact
- **Downtime**: None expected (writes can be migrated gradually)
- **Data Loss**: None if migration script tested properly
- **Feature Disruption**: Minimal if phases completed in order

---

## Success Criteria

**Migration Complete When**:
- [ ] All write operations use Drizzle
- [ ] All auth uses Clerk
- [ ] Firestore data migrated to PostgreSQL
- [ ] Firebase dependencies removed
- [ ] All features tested and working
- [ ] No Firebase code remains
- [ ] Documentation updated
- [ ] Production deployment successful

---

## Next Steps

1. **Start with Phase 1, Task 1.1**: Create server actions file
2. **Test incrementally**: Don't move to next task until current working
3. **Keep Firebase running**: Don't delete until Phase 5 complete
4. **Document issues**: Track any problems in GitHub issues
5. **Celebrate**: This is a major architectural improvement! 🎉

---

**Reference**: See [CLAUDE.md](CLAUDE.md) for project architecture and patterns.
