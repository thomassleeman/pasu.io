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
2. [Architecture Principles](#architecture-principles)
3. [Project Structure](#project-structure)
4. [Database Schema](#database-schema)
5. [Authentication](#authentication)
6. [Key Features](#key-features)
7. [Development Workflow](#development-workflow)
8. [Code Patterns & Best Practices](#code-patterns--best-practices)
9. [Important Files & Directories](#important-files--directories)
10. [Environment Setup](#environment-setup)
11. [Known Issues & Gotchas](#known-issues--gotchas)
12. [Testing](#testing)

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

### Authentication
- **Clerk 6.21.0** - User authentication and session management

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
│   │   ├── dbUserAction.ts      # User database operations
│   │   ├── openaiActions.ts     # OpenAI text-to-speech
│   │   └── userIdAction.ts      # User ID utilities
│   │
│   ├── api/                     # API Routes
│   │   ├── checkout-session/    # Stripe checkout creation
│   │   └── stripe-webhook/      # Stripe event handling
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
│   └── store.ts                 # Global atoms
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
Encrypted journal entries with date-based organization.

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  journalName: text,          // Journal type/name
  dateKey: text,              // Date identifier (YYYY-MM-DD)
  encryptedUserInput: json,   // { encryptedData, iv }
  createdAt: timestamp,
  updatedAt: timestamp
}
```

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
}
```

#### `exercises`
Writing exercise completion tracking.

```typescript
{
  id: uuid (PK),
  userId: uuid (FK → users),
  exerciseSlug: text,         // Sanity CMS exercise identifier
  completedPrompts: integer,
  completionPercentage: integer,
  encryptedUserInput: json,   // { encryptedData, iv }
  createdAt: timestamp,
  updatedAt: timestamp
}
```

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
Burnout assessment results (encrypted).

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
  encryptedData: string,
  iv: string  // Initialization vector for AES encryption
}
```

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

## Authentication

PASU.io uses **Clerk** for all authentication and session management. Clerk provides a complete auth solution with user management, session handling, and middleware-based route protection.

### Authentication Features

- **User Registration and Login** - Email/password and OAuth providers
- **Session Management** - Automatic token refresh and session validation
- **Middleware Protection** - Route-level authentication enforcement
- **User Profile Management** - Built-in profile UI components
- **Metadata Storage** - Custom user data via public/private metadata

### Implementation Pattern

All authenticated pages should use Clerk's `auth()` helper:

```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { db } from '@db/index';
import { users } from '@db/schema';
import { eq } from 'drizzle-orm';

export default async function Page() {
  // Get the authenticated user's Clerk ID
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  // Fetch user data from database
  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, userId)
  });

  return <div>Welcome, {user.email}</div>;
}
```

### User Identification

All users are identified by their `clerkId` field in the database, which corresponds to Clerk's user ID. The `users` table stores the mapping between Clerk IDs and application-specific user data.

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
- **Description**: Date-based journaling with multiple journal types
- **Data**: Encrypted user input stored in `journalEntries` table
- **Features**:
  - Calendar view of entries
  - Multiple journal types per user
  - Encrypted storage with IV

### 3. Stress Rating Tracking
- **Location**: Integrated into dashboard
- **Description**: Daily stress level tracking (1-10 scale)
- **Visualization**: Chart.js line graph showing 30-day trend
- **Data**: Stored in `stressRatings` table

### 4. Educational Content
- **Source**: Sanity CMS
- **Types**:
  - **Articles** ([app/articles/](app/articles/)) - Educational blog posts
  - **Courses** ([app/courses/](app/courses/)) - Multi-resource learning paths
  - **Exercises** ([app/exercises/](app/exercises/)) - Writing exercises
  - **Burnout Stories** ([app/burnout-stories/](app/burnout-stories/)) - User testimonials
- **Progress Tracking**: Courses and exercises track completion in database
- **Audio**: Text-to-speech conversion for articles via OpenAI

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
  - Calendar view
  - Course/exercise progress
  - Latest articles carousel
- **Data Source**: `getUserWithRelations()` query

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

### Encryption Pattern

Sensitive data uses AES encryption with initialization vectors:

```typescript
// Encryption happens client-side or in API routes
const encrypted = {
  encryptedData: 'base64_encoded_ciphertext',
  iv: 'base64_encoded_iv'
};

// Store in database
await db.insert(journalEntries).values({
  userId,
  journalName: 'daily',
  dateKey: '2025-01-15',
  encryptedUserInput: encrypted
});
```

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

| File | Purpose |
|------|---------|
| [app/api/checkout-session/](app/api/checkout-session/) | Stripe checkout creation |
| [app/api/stripe-webhook/](app/api/stripe-webhook/) | Stripe event handling |

### Server Actions

| File | Purpose |
|------|---------|
| [app/actions/dbUserAction.ts](app/actions/dbUserAction.ts) | User database operations |
| [app/actions/openaiActions.ts](app/actions/openaiActions.ts) | OpenAI text-to-speech |
| [app/actions/userIdAction.ts](app/actions/userIdAction.ts) | User ID utilities |

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
```

### Sensitive Files (Gitignored)

These files are excluded from version control:

- `.env` and `.env*.local` - Environment variables
- `/.clerk/` - Clerk configuration (may contain secrets)
- `.env.sentry-build-plugin` - Sentry configuration

**NEVER commit these files to the repository.**

---

## Known Issues & Gotchas

### 1. Navigation Height Calculation

From the README notes:

```typescript
// For pages that need exact viewport height minus nav
className="h-[calc(100vh-72px)]"
```

The navigation bar is 72px tall. Use this calculation for full-height layouts.

### 2. User Data Query Pattern

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

### 3. Encrypted Data Handling

**Issue**: Encrypted fields need decryption before display
**Pattern**: Decrypt on read, encrypt on write

```typescript
// Data structure in database
{
  encryptedUserInput: {
    encryptedData: "...",
    iv: "..."
  }
}

// Always decrypt before displaying to user
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

### 5. Chart.js Data Limits

From the README notes:

> Stress level visualization uses a 30-day limit

When displaying charts, always limit data to reasonable timeframes for performance.

### 6. Organization Logo Removal

From the README notes:

> `user.organisation.logoUrl` - To display the organisation logo in the navigation bar. **get rid of this!**

This feature should be removed from the navigation bar.

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
4. **Encryption/Decryption** - Data security
5. **Sanity CMS Integration** - Content fetching
6. **Critical User Flows**:
   - User registration → onboarding → dashboard
   - Burnout assessment completion
   - Subscription purchase
   - Journal entry creation

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

**Note**: The `userAtom` stores client-side user state. For server-side operations, always fetch fresh data from Drizzle/PostgreSQL.

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
4. **Security**: Encrypt sensitive data, use environment variables
5. **Clean Architecture**: Use Clerk for auth, Drizzle for data persistence
6. **Performance**: Limit data queries, optimize images
7. **User Privacy**: HIPAA-aware data handling, encryption at rest

---

## Getting Help

- **Next.js Docs**: https://nextjs.org/docs
- **Clerk Docs**: https://clerk.com/docs
- **Drizzle ORM Docs**: https://orm.drizzle.team/docs/overview
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Sanity Docs**: https://www.sanity.io/docs

For project-specific questions, refer to the codebase and this document.

---

**Last Updated**: November 2025
**Project Status**: Active Development
**Next.js Version**: 15.5.3
**React Version**: 19.1.0
