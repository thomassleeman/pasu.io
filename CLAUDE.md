# CLAUDE.md - PASU.io Project Documentation

## Project Overview

**PASU.io** is a workplace mental health and burnout prevention platform designed for HR professionals and company decision makers who understand the importance of employee wellbeing. The platform provides tools for burnout assessment, journaling, stress tracking, educational courses, and personalized AI guidance.

**Status**: Active Development
**Framework**: Next.js 15.5.3 (App Router)
**Language**: TypeScript (Strict Mode)
**Target Audience**: HR professionals, organizational leaders, employees

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Design Philosophy](#design-philosophy)
3. [Architecture Principles](#architecture-principles)
4. [Migration Status](#migration-status)
5. [Project Structure](#project-structure)
6. [Database Schema](#database-schema)
7. [Authentication & Migration Status](#authentication--migration-status)
8. [Key Features](#key-features)
9. [Development Workflow](#development-workflow)
10. [Migration Guidelines for Developers](#migration-guidelines-for-developers)
11. [Code Patterns & Best Practices](#code-patterns--best-practices)
12. [Important Files & Directories](#important-files--directories)
13. [Environment Setup](#environment-setup)
14. [Known Issues & Gotchas](#known-issues--gotchas)
15. [Testing](#testing)

---

## Tech Stack

### Core Framework
- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library with modern patterns
- **TypeScript 5.8.3** - Static type checking

### Database & ORM
- **PostgreSQL** (Neon Serverless)
- **Drizzle ORM 0.44.2** - Type-safe database queries
- **Drizzle Kit 0.31.1** - Schema management and migrations

### Authentication (IN FINAL MIGRATION PHASE)
- **Clerk 6.21.0** - Primary auth system ✅ ACTIVE
- **Firebase Admin 11.9.0** - Legacy auth ⚠️ TO BE REMOVED
- **Firebase Client 11.3.1** - Legacy client auth ⚠️ TO BE REMOVED
- **react-firebase-hooks 5.1.1** - Firebase hooks ⚠️ TO BE REMOVED

### Payment & Subscriptions
- **Stripe 16.12.0** - Payment processing
- **@stripe/stripe-js 4.6.0** - Client-side Stripe integration

### Content Management
- **Sanity CMS** (next-sanity 9.12.0) - Headless CMS for articles, courses, exercises
- **Portable Text** - Rich text content from Sanity
- **MDX** - Markdown with JSX support

### UI & Styling
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Headless UI 2.1.10** - Accessible unstyled components
- **Heroicons 2.0.18** - SVG icons
- **Styled Components 6.1.8** - CSS-in-JS (limited use)

### State Management
- **Jotai 2.2.1** - Atomic state management
- **React Hooks** - Modern state patterns

### AI & Analytics
- **OpenAI 4.28.0** - Text-to-speech, AI features
- **Vercel Analytics** - Performance tracking
- **Chart.js 4.4.6** - Data visualization

### Forms & Validation
- **Formik 2.4.1** - Form management
- **Yup 1.2.0** - Schema validation

---

## Design Philosophy

### Prompts-Only Platform

PASU.io is intentionally designed as a **prompt delivery system**, not a content storage platform.

**Core Principles:**
1. **User Privacy**: We don't store user writing, eliminating data breach concerns
2. **Tool Flexibility**: Users can write in their preferred tools (journal, notes app, paper)
3. **Reduced Complexity**: No text storage, encryption, or retrieval systems to maintain
4. **Focus on Quality**: Development effort goes to prompt quality, not text management

**What We Store:**
- ✅ User account data (email, Clerk ID)
- ✅ Progress tracking (which exercises started, completion %)
- ✅ Stress ratings (numerical scale 1-10)
- ✅ Burnout assessment scores (encrypted)
- ✅ Course resource completion status

**What We Don't Store:**
- ❌ Journal text entries
- ❌ Exercise written responses
- ❌ Course self-reflection text
- ❌ Any user-generated content

**User Experience:**
- Users see prompts/questions on screen
- Users write in external tools of their choice
- Users click "Mark Complete" or "Get Started" to track progress
- Dashboard shows in-progress exercises, not content

---

## Architecture Principles

### 1. Server-First Approach
**CRITICAL**: Prioritize server-side rendering and server components wherever possible.

```typescript
// ✅ PREFERRED: Server Component (default in App Router)
export default async function Page() {
  const data = await fetchDataOnServer();
  return <div>{data}</div>;
}

// ❌ AVOID: Client component for data fetching
'use client'
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => { /* fetch */ }, []);
  return <div>{data}</div>;
}
```

### 2. Modern React Patterns
- **Avoid `useEffect`** where possible - use Server Components, Server Actions, or React 19's new features
- **Use `use()` hook** (React 19) for promises instead of `useEffect` + state
- **Use Server Actions** for mutations instead of client-side API calls

```typescript
// ✅ PREFERRED: Server Action
'use server'
export async function updateUser(formData: FormData) {
  const userId = formData.get('userId');
  await db.update(users).set({ /* ... */ });
  revalidatePath('/profile');
}

// ❌ AVOID: Client-side mutation with useEffect
'use client'
function Component() {
  useEffect(() => {
    fetch('/api/user', { method: 'POST', /* ... */ });
  }, []);
}
```

### 3. Type Safety First
- Always use TypeScript strict mode
- Leverage Drizzle's type inference: `typeof users.$inferSelect`
- Define explicit types for complex objects
- Use path aliases from `tsconfig.json`

### 4. Next.js App Router Best Practices
- Use Server Components by default
- Add `'use client'` only when necessary (interactivity, hooks, browser APIs)
- Use `'use server'` for Server Actions
- Prefer `layout.tsx` for shared UI
- Use `loading.tsx` and `error.tsx` for boundaries

### 5. Privacy-First Design
- **No user content storage**: Platform delivers prompts, users write externally
- **Minimal data collection**: Track status and completion only, not content
- **Encryption only for metrics**: Burnout assessment scores are encrypted, but user writing is never stored
- **User flexibility**: Users choose their preferred writing tools

### 6. Prompts-Only Data Flow

**Old Pattern (Deprecated):**
```
User Input → Encryption → Database Storage → Decryption → Display
```

**New Pattern (Current):**
```
Display Prompts → User Writes Externally → Track Status Only
                                           ↓
                                   Mark Started/Complete
```

**Implementation Example:**
```typescript
// ❌ OLD: Store encrypted text (deprecated)
await createJournalEntry({
  journalName: "daily",
  dateKey: "2025-01-15",
  encryptedUserInput: { encryptedData: "...", iv: "..." }
});

// ✅ NEW: Track active journal only
await createJournalEntry({
  journalName: "daily",
  status: "active"  // One record per journal per user
});
```

---

## Migration Status

### Completed Migrations ✅

1. **Clerk Authentication Core**
   - All new code uses Clerk
   - Middleware configured
   - Webhooks operational
   - Database properly linked to Clerk IDs

2. **Database Schema (Partial)**
   - Users table uses `clerkId`
   - All relations properly configured
   - Drizzle ORM fully operational

### In-Progress Migrations ⚠️

#### Phase 1: Prompts-Only Transformation
**Status:** Planning complete, implementation pending

**Goals:**
- Remove all text input functionality
- Remove encryption infrastructure for text
- Simplify schema (remove `encryptedUserInput` fields)
- Update UI to display prompts only
- Track completion status, not content

**Affected Areas:**
- Database: `journalEntries`, `courses`, `exercises` tables
- Server Actions: `userDataActions.ts` functions
- UI Components: `WritingExerciseForm.tsx`, `TextAreaForm.tsx`
- API Routes: All encryption endpoints
- Types: `types/user.ts`, `types/journal.ts`

#### Phase 2: Complete Firebase Removal
**Status:** Final cleanup pending

**Remaining Tasks:**
- Remove Firebase SDK packages
- Delete `/firebase/` directory
- Remove legacy server actions
- Remove client-side Firebase state management
- Update components using Firebase hooks
- Clean environment variables

**See:** [MIGRATION_PLAN.md](MIGRATION_PLAN.md) for detailed implementation checklist.

---

## Project Structure

```
pasu.io/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Clerk, Jotai providers
│   ├── page.tsx                 # Landing page (public)
│   ├── globals.css              # Global styles
│   │
│   ├── _components/             # Shared components (prefix _ to hide from routing)
│   │   ├── design/              # Design system components
│   │   ├── ui/                  # UI primitives (modals, buttons)
│   │   ├── landing/             # Landing page sections
│   │   └── audioPlayer/         # Audio player component
│   │
│   ├── actions/                 # Server Actions
│   │   ├── authAction.ts        # ⚠️ DEPRECATED - Firebase auth (to be removed)
│   │   ├── dbUserAction.ts      # ⚠️ DEPRECATED - Firebase user data (to be removed)
│   │   ├── userIdAction.ts      # ⚠️ DEPRECATED - Firebase UID (to be removed)
│   │   ├── userDataActions.ts   # ✅ User database operations (Clerk-based)
│   │   └── openaiActions.ts     # OpenAI text-to-speech
│   │
│   ├── api/                     # API Routes
│   │   ├── encryptText/         # ⚠️ DEPRECATED - to be removed
│   │   ├── decryptText/         # ⚠️ DEPRECATED - to be removed
│   │   ├── encryption/          # ⚠️ DEPRECATED - to be removed
│   │   ├── checkout-session/    # Stripe checkout creation
│   │   ├── stripe-webhook/      # Stripe event handling
│   │   └── auth/                # Auth endpoints (legacy)
│   │
│   ├── db/                      # Database configuration
│   │   ├── schema.ts            # Drizzle schema definitions
│   │   └── index.ts             # Database client
│   │
│   ├── home/[clerkId]/          # Protected dashboard (dynamic route)
│   ├── profile/[uid]/           # User profile pages
│   ├── journaling/              # Journaling feature
│   ├── exercises/               # Writing exercises
│   ├── articles/                # Educational articles (from Sanity)
│   ├── courses/                 # Learning courses (from Sanity)
│   ├── burnout-stories/         # User stories
│   ├── pasu-ai/                 # AI chatbot interface
│   ├── chatbot/                 # Chatbot layouts
│   ├── subscribe/               # Subscription management
│   ├── organisation/            # Organization management
│   ├── admin/                   # Admin panel
│   ├── superadmin/              # Super admin panel
│   ├── legal/                   # Legal documents
│   ├── about/                   # About page
│   ├── faqs/                    # FAQ section
│   └── @modal/                  # Parallel route for modals
│
├── lib/                         # Utilities and queries
│   └── queries/                 # Drizzle ORM queries
│       └── getUserWithRelations.ts  # Complex user data query
│
├── types/                       # TypeScript type definitions
├── hooks/                       # Custom React hooks
├── state/                       # Jotai state management
│   ├── store.ts                 # Global atoms (stress ratings, etc.)
│   ├── SetUser.tsx              # ⚠️ DEPRECATED - Firebase listener (to be removed)
│   └── userListener.ts          # ⚠️ DEPRECATED - Firestore listener (to be removed)
│
├── firebase/                    # ⚠️ DEPRECATED - Entire directory to be removed
│   └── auth/                    # Firebase auth (LEGACY)
│
├── sanity/                      # Sanity CMS configuration
│   ├── client.ts                # Sanity client
│   ├── schemas/                 # Content schemas
│   └── lib/                     # Sanity utilities
│
├── utils/                       # Helper utilities
├── public/                      # Static assets
├── middleware.ts                # Clerk auth middleware
├── drizzle.config.ts            # Drizzle Kit configuration
├── next.config.js               # Next.js configuration
└── tsconfig.json                # TypeScript configuration
```

### Path Aliases (tsconfig.json)

Use these imports throughout the codebase:

```typescript
import Component from '@/components/ui/Button';       // app/_components/ui/Button
import { dbAction } from '@actions/dbUserAction';     // app/actions/dbUserAction
import { db } from '@db/index';                       // app/db/index
import { useAuth } from '@hooks/useAuth';             // hooks/useAuth
import { userAtom } from '@state/store';              // state/store
import { client } from '@sanity/client';              // sanity/client
import type { User } from '@types/user';              // types/user
```

---

## Database Schema

**ORM**: Drizzle ORM
**Database**: PostgreSQL (Neon Serverless)
**Schema Location**: [app/db/schema.ts](app/db/schema.ts)

### Core Tables

#### `users`
Primary user table linked to Clerk authentication.

```typescript
{
  id: uuid (PK),
  clerkId: text (unique),     // Clerk user ID
  email: text,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### `journalEntries`
⚠️ **Migration in Progress**: Tracks active journal status (prompts-only approach).

**Current Schema (Post-Migration):**
```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  journalName: text,          // Journal type/name
  status: text,               // "active" - tracks if journal is in progress
  createdAt: timestamp,
  updatedAt: timestamp,

  // UNIQUE constraint on (userId, journalName)
  // One entry per journal per user
}
```

**Old Schema (Deprecated - being removed):**
- `dateKey` field (date tracking) - REMOVED
- `encryptedUserInput` (user text) - REMOVED

**Purpose**: Track which journals a user is actively working on, not the content they write.

#### `courses`
User progress tracking for educational courses.

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  courseSlug: text,           // Sanity CMS course identifier
  courseName: text,
  resourcesCompleted: json,   // Record<string, boolean>
  createdAt: timestamp,
  updatedAt: timestamp

  // REMOVED in migration: encryptedUserInput
}
```

#### `exercises`
Writing exercise completion tracking (prompts-only).

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  exerciseSlug: text,         // Sanity CMS exercise identifier
  completedPrompts: integer,  // Number of prompts completed
  completionPercentage: integer,
  createdAt: timestamp,
  updatedAt: timestamp

  // REMOVED in migration: encryptedUserInput
}
```

**Note**: Exercises track completion progress, not user responses. Users write externally.

#### `stressRatings`
Daily stress level tracking.

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  rating: integer,            // 1-10 stress level
  createdAt: timestamp
}
```

#### `burnoutAssessments`
Burnout assessment results (encrypted scores).

⚠️ **Important**: This is the ONLY table that still uses encryption (for numerical scores, not text).

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  assessment1: json,          // { detachment, emotionalImpairment, exhaustion, cognitiveImpairment }
  assessment2: json,          // Same structure as assessment1
  createdAt: timestamp
}
```

Each assessment dimension is encrypted:
```typescript
{
  encryptedData: string,      // Encrypted numerical score
  iv: string                   // Initialization vector for AES encryption
}
```

**Note**: Only burnout assessment scores are encrypted. No text content is stored or encrypted.

#### `recommendedArticles`
Personalized article recommendations.

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  articleSlug: text,          // Sanity CMS article identifier
  createdAt: timestamp
}
```

### Relations

```
users (1)
  ├─→ journalEntries (many)
  ├─→ courses (many)
  ├─→ exercises (many)
  ├─→ stressRatings (many)
  ├─→ burnoutAssessments (many)
  └─→ recommendedArticles (many)
```

All foreign key relationships use **CASCADE DELETE** - deleting a user removes all associated data.

### Type Inference

Drizzle provides automatic type inference:

```typescript
import { users, type User, type NewUser } from '@db/schema';

// User type is inferred from the schema
const user: User = await db.query.users.findFirst();

// NewUser type is for inserts (excludes auto-generated fields)
const newUser: NewUser = {
  clerkId: 'user_123',
  email: 'user@example.com',
};
```

**Updated Type Definitions (Post-Migration):**

```typescript
// UserWithRelations type (updated for prompts-only)
export type UserWithRelations = User & {
  journalEntries: Pick<
    JournalEntry,
    "id" | "journalName" | "status" | "createdAt" | "updatedAt"
    // REMOVED: dateKey
  >[];
  courses: Pick<
    Course,
    "id" | "courseSlug" | "courseName" | "resourcesCompleted" | "createdAt" | "updatedAt"
    // REMOVED: encryptedUserInput
  >[];
  exercises: Pick<
    Exercise,
    "id" | "exerciseSlug" | "completedPrompts" | "completionPercentage" | "createdAt" | "updatedAt"
    // REMOVED: encryptedUserInput
  >[];
  stressRatings: Pick<StressRating, "id" | "rating" | "createdAt">[];
  burnoutAssessments: Pick<
    BurnoutAssessment,
    "id" | "userId" | "createdAt" | "assessment1" | "assessment2"
    // KEEP: Encrypted assessment scores
  >[];
  recommendedArticles: Pick<RecommendedArticle, "articleSlug" | "createdAt">[];
};
```

### Complex Queries

For queries with relations, use the custom query builder:

```typescript
// lib/queries/getUserWithRelations.ts
import { getUserWithRelations } from '@/lib/queries/getUserWithRelations';

const user = await getUserWithRelations(userId, {
  stressRatingsLimit: 30,
  journalEntriesLimit: 50,
  // ... other limits
});
```

---

## Authentication & Migration Status

### ⚠️ MIGRATION NEARING COMPLETION

**FROM**: Firebase Auth + Firestore
**TO**: Clerk Auth + Drizzle/PostgreSQL

### Current State

#### Clerk (NEW - Primary System) ✅
- **Status**: Active and primary for authentication
- **Implementation**: COMPLETE
- **What's Working**:
  - User registration and login
  - Session management via middleware
  - Webhook-based database sync
  - All new code uses Clerk
- **Files**:
  - [middleware.ts](middleware.ts) - Route protection ✅
  - [app/layout.tsx](app/layout.tsx) - `<ClerkProvider>` wrapper ✅
  - [app/api/webhooks/clerk/route.ts](app/api/webhooks/clerk/route.ts) - Webhook handler ✅
  - All routes use `clerkId` for user identification ✅

#### Firebase (LEGACY - Being Removed) ⚠️
- **Status**: Still present but NO LONGER IN USE for new features
- **Remaining Components to Remove**:
  - Firebase SDK packages in [package.json](package.json)
  - `/firebase/` directory
  - Legacy server actions: [authAction.ts](app/actions/authAction.ts), [userIdAction.ts](app/actions/userIdAction.ts), [dbUserAction.ts](app/actions/dbUserAction.ts)
  - Client-side: [SetUser.tsx](state/SetUser.tsx), [userListener.ts](state/userListener.ts)
  - Firebase-dependent components (DeleteAccountAlert, etc.)
  - Environment variables (all `FIREBASE_*` and `NEXT_PUBLIC_FIREBASE_*`)

**IMPORTANT FOR DEVELOPERS:**
- ✅ DO NOT add any new Firebase dependencies
- ✅ When touching auth code, remove Firebase and use Clerk
- ✅ All [userDataActions.ts](app/actions/userDataActions.ts) already use Clerk correctly

### Migration Guidelines

When working with auth-related code:

1. **New Features**: ALWAYS use Clerk
2. **Existing Code**: Refactor Firebase → Clerk when touching auth code
3. **User Identification**: Use `clerkId` from Clerk, not Firebase `uid`
4. **Sessions**: Use Clerk's `auth()` helper, not Firebase session cookies
5. **Custom Claims**: Migrate to Clerk's metadata or database fields

```typescript
// ✅ NEW: Clerk pattern
import { auth } from '@clerk/nextjs/server';

export default async function Page() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId)
  });
}

// ❌ OLD: Firebase pattern (DO NOT USE for new code)
import { checkSessionCookie } from '@actions/authAction';

export default async function Page() {
  const firebaseUser = await checkSessionCookie();
  // ...
}
```

### Route Protection

Protected routes are defined in [middleware.ts](middleware.ts):

```typescript
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/api/webhooks(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});
```

**Public Routes**:
- `/` - Landing page
- `/api/webhooks/*` - Stripe webhooks

**Protected Routes**:
- Everything else requires Clerk authentication

---

## Key Features

### 1. Burnout Assessment
- **Location**: [app/chatbot/burnout-assessment/](app/chatbot/burnout-assessment/)
- **Description**: Two-stage burnout assessment measuring detachment, emotional impairment, exhaustion, and cognitive impairment
- **Data**: Encrypted and stored in `burnoutAssessments` table
- **Flow**: Chatbot interface → encryption → database storage

### 2. Journaling System
- **Location**: [app/journaling/](app/journaling/)
- **Description**: Prompt delivery for journaling with status tracking (prompts-only approach)
- **Data**: Active journal status stored in `journalEntries` table (no text content)
- **Features**:
  - Display journal prompts
  - Multiple journal types per user
  - One entry per journal per user
  - Track which journals are active
  - Users write in external tools

### 3. Stress Rating Tracking
- **Location**: Integrated into dashboard
- **Description**: Daily stress level tracking (1-10 scale)
- **Visualization**: Chart.js line graph showing 30-day trend
- **Data**: Stored in `stressRatings` table

### 4. Educational Content
- **Source**: Sanity CMS
- **Types**:
  - **Articles** ([app/articles/](app/articles/)) - Educational blog posts
  - **Courses** ([app/courses/](app/courses/)) - Multi-resource learning paths with prompts
  - **Exercises** ([app/exercises/](app/exercises/)) - Writing exercises (prompts-only)
  - **Burnout Stories** ([app/burnout-stories/](app/burnout-stories/)) - User testimonials
- **Progress Tracking**: Courses and exercises track completion status (not content)
- **Audio**: Text-to-speech conversion for articles via OpenAI
- **User Writing**: Users complete exercises in their own journals/apps, not in the platform

### 5. AI Chatbot (PASU AI)
- **Location**: [app/pasu-ai/](app/pasu-ai/)
- **Technology**: OpenAI API
- **Features**:
  - Mental health guidance
  - Burnout assessment administration
  - Text-to-speech responses
- **Audio**: Custom audio player component

### 6. Subscription Management
- **Location**: [app/subscribe/](app/subscribe/)
- **Payment Provider**: Stripe
- **Pricing Tiers**:
  - 1-5 seats: $3/seat/month
  - 6-25 seats: $2.50/seat/month
  - 26-50 seats: $2/seat/month
  - 50+ seats: $1.50/seat/month
- **Billing**: Monthly and yearly options
- **Webhooks**: [app/api/stripe-webhook/](app/api/stripe-webhook/)
- **Organization Support**: Multi-user subscriptions

### 7. Organization Management
- **Location**: [app/organisation/[id]/](app/organisation/)
- **Features**:
  - Organization profiles
  - Logo upload
  - Multi-user management
  - Invitation system
- **Admin Access**: Organization admins can manage members

### 8. Dashboard
- **Location**: [app/home/[clerkId]/page.tsx](app/home/)
- **Features**:
  - Welcome panel with user stats
  - Activity tracking
  - Data visualizations (stress, burnout)
  - Calendar view (for stress ratings)
  - Course/exercise progress (completion status, not content)
  - Active journals display
  - Latest articles carousel
- **Data Source**: `getUserWithRelations()` query
- **Note**: Dashboard shows progress and metrics, never user-written content

---

## Development Workflow

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs on `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

### Code Quality Check

```bash
npm run knip  # Finds unused exports and dependencies
```

### Database Seeding

```bash
npm run seed  # Runs user-seed-data.ts
```

### Database Migrations

Drizzle Kit is configured in [drizzle.config.ts](drizzle.config.ts).

**Generate migration:**
```bash
npx drizzle-kit generate
```

**Apply migration:**
```bash
npx drizzle-kit migrate
```

**View database:**
```bash
npx drizzle-kit studio
```

Opens Drizzle Studio for visual database exploration.

**Important**: When you modify [app/db/schema.ts](app/db/schema.ts), always generate and apply migrations.

---

## Migration Guidelines for Developers

### Working with the Codebase During Migration

The codebase is currently in a **controlled migration state**. Follow these rules:

#### ✅ DO:
1. **Use Clerk for all auth**: Import from `@clerk/nextjs/server`
2. **Use `userDataActions.ts`**: These functions are migration-complete
3. **Track progress, not content**: Only store completion status
4. **Display prompts**: Show questions/prompts, not text inputs
5. **Ask before major changes**: Migration is in progress

#### ❌ DON'T:
1. **Don't use Firebase**: No new Firebase dependencies or extensions
2. **Don't store user text**: No text inputs, no encryption, no storage
3. **Don't use legacy actions**: Avoid `authAction.ts`, `dbUserAction.ts`, `userIdAction.ts`
4. **Don't add encryption**: Text encryption is being removed
5. **Don't extend deprecated APIs**: Check file status before modifying

#### 🔍 Identifying Deprecated Code:

**Search patterns to avoid:**
```bash
# Firebase (avoid these)
grep -r "firebase" app/
grep -r "useAuthState" app/
grep -r "onAuthStateChanged" app/

# Encryption (avoid these - except burnout assessments)
grep -r "encryptText" app/
grep -r "encryptedUserInput" app/

# Legacy actions (avoid these)
grep -r "authAction" app/
grep -r "dbUserAction" app/
```

**Files marked for removal:**
- `/firebase/` directory
- `app/actions/authAction.ts`
- `app/actions/userIdAction.ts`
- `app/actions/dbUserAction.ts`
- `state/SetUser.tsx`
- `state/userListener.ts`
- `app/api/encryptText/`
- `app/api/decryptText/`
- `app/api/encryption/`

**See [MIGRATION_PLAN.md](MIGRATION_PLAN.md) for detailed checklist.**

---

## Code Patterns & Best Practices

### Server Components (Default)

Most pages should be Server Components:

```typescript
// app/articles/[slug]/page.tsx
import { client } from '@sanity/client';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await client.fetch(`*[_type == "article" && slug.current == $slug][0]`, {
    slug: params.slug
  });

  return <ArticleContent article={article} />;
}
```

### Client Components (When Needed)

Use `'use client'` for:
- User interactions (clicks, form inputs)
- Browser APIs (localStorage, window)
- React hooks (useState, useEffect, custom hooks)
- Third-party libraries requiring client-side

```typescript
'use client'
import { useState } from 'react';

export function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Server Actions

Use for mutations and form submissions:

```typescript
// app/actions/dbUserAction.ts
'use server'
import { db } from '@db/index';
import { users } from '@db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function updateUserEmail(userId: string, email: string) {
  await db
    .update(users)
    .set({ email, updatedAt: new Date() })
    .where(eq(users.id, userId));

  revalidatePath('/profile');
}
```

### Database Queries

**Simple queries:**

```typescript
import { db } from '@db/index';
import { users, stressRatings } from '@db/schema';
import { eq, desc } from 'drizzle-orm';

// Find user by Clerk ID
const user = await db.query.users.findFirst({
  where: eq(users.clerkId, clerkId)
});

// Get recent stress ratings
const ratings = await db
  .select()
  .from(stressRatings)
  .where(eq(stressRatings.userId, userId))
  .orderBy(desc(stressRatings.createdAt))
  .limit(30);
```

**Complex queries with relations:**

```typescript
import { getUserWithRelations } from '@/lib/queries/getUserWithRelations';

const userData = await getUserWithRelations(userId, {
  stressRatingsLimit: 30,
  journalEntriesLimit: 50,
  coursesLimit: 10,
  exercisesLimit: 10,
  burnoutAssessmentsLimit: 5,
  recommendedArticlesLimit: 20,
});

// userData has type UserWithRelations with all relations included
```

### Sanity CMS Queries

```typescript
import { client } from '@sanity/client';

// Get all articles
const articles = await client.fetch(`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }
`);

// Get single article by slug
const article = await client.fetch(
  `*[_type == "article" && slug.current == $slug][0]`,
  { slug: 'burnout-prevention' }
);
```

### State Management (Jotai)

Global atoms are defined in [state/store.ts](state/store.ts):

```typescript
import { atom } from 'jotai';

export const userAtom = atom(null);
export const isAdminAtom = atom(false);
export const usernameAtom = atom('');
```

**Usage in components:**

```typescript
'use client'
import { useAtom } from 'jotai';
import { userAtom } from '@state/store';

export function UserProfile() {
  const [user, setUser] = useAtom(userAtom);

  return <div>{user?.email}</div>;
}
```

**Note**: Prefer Server Components over client-side state when possible.

### Error Handling

Use Next.js error boundaries:

```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### Loading States

```typescript
// app/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

### Encryption Pattern (Limited Use)

⚠️ **Encryption is ONLY used for burnout assessment scores.**

**What is encrypted:**
- ✅ Burnout assessment dimensions (detachment, exhaustion, etc.)
- ✅ Stored in `burnoutAssessments` table

**What is NOT encrypted (and not stored):**
- ❌ User journal text (not stored at all)
- ❌ Exercise responses (not stored at all)
- ❌ Course self-reflection text (not stored at all)

**Pattern for burnout assessments:**
```typescript
// Burnout assessment structure (ONLY place encryption is used)
const assessment = {
  detachment: { encryptedData: "...", iv: "..." },
  emotionalImpairment: { encryptedData: "...", iv: "..." },
  exhaustion: { encryptedData: "...", iv: "..." },
  cognitiveImpairment: { encryptedData: "...", iv: "..." }
};

await db.insert(burnoutAssessments).values({
  userId,
  assessment1: assessment,
  // ...
});
```

**Migration Note**: Text encryption infrastructure has been removed as part of the prompts-only migration. Only numeric assessment data is encrypted.

---

## Important Files & Directories

### Configuration Files

| File | Purpose |
|------|---------|
| [next.config.js](next.config.js) | Next.js configuration, image domains |
| [tsconfig.json](tsconfig.json) | TypeScript config with path aliases |
| [tailwind.config.js](tailwind.config.js) | Tailwind CSS configuration |
| [drizzle.config.ts](drizzle.config.ts) | Drizzle ORM configuration |
| [middleware.ts](middleware.ts) | Clerk authentication middleware |

### Core Application Files

| File | Purpose |
|------|---------|
| [app/layout.tsx](app/layout.tsx) | Root layout with Clerk, Jotai providers |
| [app/page.tsx](app/page.tsx) | Landing page (public) |
| [app/db/schema.ts](app/db/schema.ts) | Database schema definitions |
| [app/db/index.ts](app/db/index.ts) | Database client initialization |
| [state/store.ts](state/store.ts) | Jotai global state atoms |
| [lib/queries/getUserWithRelations.ts](lib/queries/getUserWithRelations.ts) | Complex user data query |

### Key Feature Files

| File | Purpose |
|------|---------|
| [app/home/[clerkId]/page.tsx](app/home/) | Main dashboard |
| [app/chatbot/burnout-assessment/](app/chatbot/burnout-assessment/) | Burnout assessment |
| [app/journaling/](app/journaling/) | Journaling interface |
| [app/pasu-ai/](app/pasu-ai/) | AI chatbot |
| [app/subscribe/](app/subscribe/) | Subscription management |

### API Routes

| File | Purpose | Status |
|------|---------|--------|
| [app/api/checkout-session/](app/api/checkout-session/) | Stripe checkout creation | ✅ Active |
| [app/api/stripe-webhook/](app/api/stripe-webhook/) | Stripe event handling | ✅ Active |
| [app/api/webhooks/clerk/](app/api/webhooks/clerk/) | Clerk webhook handler | ✅ Active |

### API Routes (Encryption - DEPRECATED)

| File | Purpose | Status |
|------|---------|--------|
| [app/api/encryptText/route.ts](app/api/encryptText/) | Text encryption | ⚠️ TO BE REMOVED |
| [app/api/decryptText/route.ts](app/api/decryptText/) | Text decryption | ⚠️ TO BE REMOVED |
| [app/api/encryption/encryptNumber/route.ts](app/api/encryption/encryptNumber/) | Number encryption | ⚠️ TO BE REMOVED |
| [app/api/encryption/decryptNumber/route.ts](app/api/encryption/decryptNumber/) | Number decryption | ⚠️ TO BE REMOVED |

**Note:** These routes are no longer needed after prompts-only migration.

### Server Actions

| File | Purpose | Status |
|------|---------|--------|
| [app/actions/userDataActions.ts](app/actions/userDataActions.ts) | User database operations (Clerk-based) | ✅ Active |
| [app/actions/openaiActions.ts](app/actions/openaiActions.ts) | OpenAI text-to-speech | ✅ Active |
| [app/actions/authAction.ts](app/actions/authAction.ts) | Auth verification (Firebase - legacy) | ⚠️ TO BE REMOVED |
| [app/actions/dbUserAction.ts](app/actions/dbUserAction.ts) | Firebase user operations | ⚠️ TO BE REMOVED |
| [app/actions/userIdAction.ts](app/actions/userIdAction.ts) | Firebase UID utilities | ⚠️ TO BE REMOVED |

### Sanity CMS

| File | Purpose |
|------|---------|
| [sanity/client.ts](sanity/client.ts) | Sanity client configuration |
| [sanity/schemas/](sanity/schemas/) | Content type schemas |
| [sanity/lib/](sanity/lib/) | Sanity utilities |

---

## Environment Setup

### Required Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Database
DATABASE_URL="postgresql://..."  # Neon PostgreSQL connection string

# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
CLERK_WEBHOOK_SIGNING_SECRET="whsec_..."  # Required for webhooks
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="..."

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# OpenAI
OPENAI_API_KEY="sk-..."

# ⚠️ DEPRECATED - To be removed during migration
ENCRYPTION_KEY="..."  # No longer needed after prompts-only migration
FIREBASE_SECRET_KEY='{...}'  # Remove after Firebase cleanup
NEXT_PUBLIC_FIREBASE_API_KEY="..."  # Remove
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."  # Remove
NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."  # Remove
# ... all other Firebase vars should be removed
```

### Sensitive Files (Gitignored)

These files are excluded from version control:

- `.env` and `.env*.local` - Environment variables
- `_adminCredentials.json` - Firebase admin credentials
- `/.clerk/` - Clerk configuration (may contain secrets)
- `.env.sentry-build-plugin` - Sentry configuration

**NEVER commit these files to the repository.**

---

## Known Issues & Gotchas

### 1. Firebase Migration in Progress

**Issue**: Some components still use Firebase auth hooks
**Action**: When touching auth code, refactor to use Clerk
**Files to Watch**:
- Components with `useAuth` from Firebase
- `authAction.ts` (legacy auth verification)
- Custom claims logic (migrate to Clerk metadata)

### 2. Navigation Height Calculation

From the README notes:

```typescript
// For pages that need exact viewport height minus nav
className="h-[calc(100vh-72px)]"
```

The navigation bar is 72px tall. Use this calculation for full-height layouts.

### 3. User Data Query Pattern

**Issue**: Fetching user data with all relations can be expensive
**Solution**: Use `getUserWithRelations()` with explicit limits

```typescript
// ✅ GOOD: Specify limits
const user = await getUserWithRelations(userId, {
  stressRatingsLimit: 30,  // Only last 30 days
  journalEntriesLimit: 10,
});

// ❌ BAD: No limits = fetch all data
const user = await getUserWithRelations(userId);
```

### 4. Sanity Image URLs

**Issue**: Sanity images need proper URL transformation
**Solution**: Use `@sanity/image-url` utility

```typescript
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@sanity/client';

const builder = imageUrlBuilder(client);
const imageUrl = builder.image(source).width(800).url();
```

### 5. Firebase References Still Present (Temporary)

**Issue**: Some code still references Firebase despite Clerk being primary
**Status**: These are being actively removed as part of migration
**Files with Firebase**:
- `app/actions/authAction.ts`, `userIdAction.ts`, `dbUserAction.ts`
- `state/SetUser.tsx`, `state/userListener.ts`
- `/firebase/` directory
- Components using `useAuthState`, `useDeleteUser` from Firebase hooks

**Action**: DO NOT extend or rely on Firebase code. Use Clerk for all new features.
**Timeline**: Firebase removal is scheduled as part of migration completion.

### 6. Chart.js Data Limits

From the README notes:

> Stress level visualization uses a 30-day limit

When displaying charts, always limit data to reasonable timeframes for performance.

### 7. Organization Logo Removal

From the README notes:

> `user.organisation.logoUrl` - To display the organisation logo in the navigation bar. **get rid of this!**

This feature should be removed from the navigation bar.

### 8. Clerk User ID vs Firebase UID

**Issue**: Database uses `clerkId`, but some code references `uid`
**Action**: Always use `clerkId` for new code
**Migration Path**: Update references from `uid` to `clerkId`

---

## Testing

### Current Status

**No testing infrastructure is currently implemented.**

This is an area for future development. When implementing tests, consider:

### Recommended Testing Stack

- **Unit Tests**: Vitest (modern, fast, ESM-compatible)
- **Component Tests**: React Testing Library
- **E2E Tests**: Playwright (Next.js recommended)
- **API Tests**: Supertest or Playwright

### Priority Areas to Test

1. **Server Actions** - Database mutations, auth checks
2. **Database Queries** - Drizzle ORM queries
3. **Stripe Webhooks** - Payment flow verification
4. **Encryption/Decryption** - Burnout assessment encryption only
5. **Sanity CMS Integration** - Content fetching
6. **Critical User Flows**:
   - User registration → onboarding → dashboard
   - Burnout assessment completion
   - Subscription purchase
   - Journal prompt display and status tracking
7. **Prompts-Only Flow**:
   - Exercise "Get Started" without text input
   - Course self-reflections display prompts
   - Journal prompts display
   - Progress tracking works without content storage
8. **No Encryption Dependencies**:
   - Verify encryption routes removed
   - Check no text encryption in codebase
   - Confirm burnout assessments still use encryption (numbers only)

### Future Testing Setup

```bash
# Install testing dependencies (when ready)
npm install -D vitest @vitejs/plugin-react
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

**Note**: Consult with the team before implementing testing to align on strategy.

---

## Additional Context

### User Atom Usage (from README)

The `userAtom` (Jotai) is used throughout the application for client-side user state:

**Common access patterns:**
- `user.organisation` - Organization data (admin users)
- `user.providerData[0].displayName` - User display name
- `user.assessments.burnoutAssessment` - Burnout results
- `user.journaling` - Journal entries
- `user.courses` - Course progress
- `user.exercises` - Exercise progress
- `user.stressRating` - Stress ratings

**Migration Note**: As we move away from Firebase, `userAtom` should be refactored to use data from Drizzle/PostgreSQL rather than Firebase.

### Uninstalled Dependencies (from README)

These packages were previously used but have been removed:

- `react-markdown`, `remark`, `rehype-*` (MDX libraries)
- `react-quill` (Rich text editor)
- `react-simple-chatbot` (Chatbot library)
- `react-type-animation` (Text animations)
- `next-mdx-remote` (MDX rendering)
- `gray-matter` (Frontmatter parsing)

If you see references to these in code, they should be refactored or removed.

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Lint code
npm run knip             # Check for unused code

# Database
npx drizzle-kit generate # Generate migrations
npx drizzle-kit migrate  # Apply migrations
npx drizzle-kit studio   # Visual database explorer
npm run seed             # Seed database

# Git workflow
git status               # Check changes
git add .                # Stage changes
git commit -m "message"  # Commit
git push                 # Push to remote
```

---

## Project Principles Summary

1. **Server-First**: Prefer Server Components and Server Actions
2. **Type Safety**: Strict TypeScript, leverage Drizzle type inference
3. **Modern React**: Avoid `useEffect`, use React 19 patterns
4. **Privacy by Design**: Prompts-only platform, minimal data storage
5. **Security**: Encrypt metrics only (burnout scores), no text storage
6. **Clean Migration**: Replace Firebase with Clerk progressively (nearing completion)
7. **Performance**: Limit data queries, optimize images
8. **User Flexibility**: Users choose their writing tools, we provide prompts

---

## Getting Help

- **Next.js Docs**: https://nextjs.org/docs
- **Clerk Docs**: https://clerk.com/docs
- **Drizzle ORM Docs**: https://orm.drizzle.team/docs/overview
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Sanity Docs**: https://www.sanity.io/docs

For project-specific questions, refer to the codebase and this document.

---

**Last Updated**: January 2025 (Migration Status Updated)
**Project Status**: Active Development - Migration in Progress
**Next.js Version**: 15.5.3
**React Version**: 19.1.0
**Migration Reference**: See [MIGRATION_PLAN.md](MIGRATION_PLAN.md) for detailed implementation plan
