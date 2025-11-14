# Task 2.3: Migrate Custom Claims to Clerk Metadata - Implementation Notes

## Completion Date
November 14, 2025

## Summary
Successfully migrated Firebase custom claims to Clerk metadata system. All subscription data now stored in Clerk publicMetadata and admin roles in privateMetadata (when needed). Database schema updated to support subscription and organization fields.

## Database Schema Changes

### Added fields to `users` table:
```typescript
{
  // Subscription fields (synced to Clerk publicMetadata)
  subscriptionStatus: text("subscription_status"), // 'active', 'canceled', 'past_due', etc.
  subscriptionQuantity: integer("subscription_quantity").default(0),
  stripeCustomerId: text("stripe_customer_id"),

  // Organization membership (stored in database, not Clerk metadata for now)
  organisationId: text("organisation_id"),
  organisationRole: text("organisation_role"), // 'admin', 'standard', 'owner'
}
```

### Migration Required
**IMPORTANT**: A database migration must be generated and applied before deploying this code:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

## Files Updated

### 1. Database Schema
- **File**: `app/db/schema.ts`
- **Changes**: Added subscription and organization fields to users table

### 2. Stripe Webhook
- **File**: `app/api/stripe-webhook/route.ts`
- **Changes**:
  - Removed Firebase Admin SDK imports
  - Added Clerk and Drizzle imports
  - Updated `handleCheckoutSessionCompleted()` to:
    - Find users via Clerk by email
    - Update Clerk publicMetadata with subscription status and quantity
    - Update database with subscription data and Stripe customer ID
  - Updated `handleSubscriptionEvent()` with same Clerk + database pattern
- **Clerk Metadata Used**: `publicMetadata.subscriptionStatus`, `publicMetadata.subscriptionQuantity`

### 3. Admin Role Assignment
- **File**: `app/api/newAdmin/route.tsx`
- **Changes**:
  - Removed Firebase Admin SDK
  - Now uses Clerk `privateMetadata.admin = true`
  - Takes clerkId instead of Firebase uid
- **Clerk Metadata Used**: `privateMetadata.admin`

### 4. Organization Creation
- **File**: `app/api/new-organisation/route.tsx`
- **Changes**:
  - Removed Firebase Admin SDK and Firestore imports
  - Now uses Clerk auth and Drizzle database
  - Reads subscription data from Clerk publicMetadata
  - Updates database with organization membership
  - Updates Clerk publicMetadata with organizationId and role
  - **NOTE**: File upload functionality marked as TODO - needs implementation with proper storage provider (Vercel Blob, S3, etc.)
- **Clerk Metadata Used**: `publicMetadata.organisationId`, `publicMetadata.organisationRole`

### 5. Join Organization
- **File**: `app/api/join-organisation/route.ts`
- **Changes**:
  - Removed Firestore transaction logic
  - Now uses Drizzle for database operations
  - Updates both database and Clerk publicMetadata
  - Parameter changed from `uid` to `clerkId`
  - **NOTE**: Token validation and seat availability checks marked as TODO - needs full implementation
- **Clerk Metadata Used**: `publicMetadata.organisationId`, `publicMetadata.organisationRole`

### 6. Subscription Status Hook
- **File**: `hooks/useSubscriptionStatus.ts`
- **Changes**:
  - Removed Firebase auth imports
  - Now uses `useUser()` from `@clerk/nextjs`
  - Reads subscription data from `user.publicMetadata`
  - Simplified implementation - no more token refresh needed

### 7. Removed Files
- **Deleted**: `app/api/remove-custom-claims/route.ts`
- **Reason**: No longer needed with Clerk metadata system

## Clerk Metadata Structure

### Public Metadata (Client-Accessible)
Stored in `user.publicMetadata`:
```typescript
{
  subscriptionStatus: "active" | "canceled" | "past_due" | ...,
  subscriptionQuantity: number,
  organisationId: string,
  organisationRole: "owner" | "admin" | "standard"
}
```

### Private Metadata (Server-Only)
Stored in `user.privateMetadata`:
```typescript
{
  admin: boolean,
  superadmin: boolean // (if needed in future)
}
```

## Dual Storage Approach

The implementation uses a **dual storage strategy**:

1. **Clerk Metadata**: Fast access for auth checks and client-side display
   - Subscription status and quantity in publicMetadata
   - Admin roles in privateMetadata
   - Organization membership in publicMetadata

2. **PostgreSQL Database**: Query capability and data persistence
   - All subscription and organization data also stored in database
   - Enables complex queries and reporting
   - Provides backup and data integrity

This approach ensures:
- Fast auth checks via Clerk
- Complex querying via SQL
- Data consistency across systems
- Easy migration path

## Testing Checklist

Before deploying to production, verify:

- [ ] Database migration applied successfully
- [ ] Stripe webhook updates both Clerk and database
- [ ] New subscriptions set correct metadata
- [ ] Subscription updates (quantity changes) reflected in Clerk
- [ ] Admin role assignment works via newAdmin route
- [ ] Organization creation updates database and Clerk
- [ ] useSubscriptionStatus hook returns correct data
- [ ] No references to Firebase custom claims remain in active code
- [ ] Test user registration → subscription → organization flow

## Known Limitations & TODOs

### 1. File Upload in Organization Creation
- **Issue**: Firebase Storage removed but not replaced
- **TODO**: Implement file upload using Vercel Blob, AWS S3, or Cloudinary
- **Location**: `app/api/new-organisation/route.tsx` line 70-77

### 2. Organization Token Validation
- **Issue**: Join organization route doesn't validate invitation tokens
- **TODO**: Implement token validation and expiry checks
- **Location**: `app/api/join-organisation/route.ts` line 52-58

### 3. Seat Availability Checks
- **Issue**: Organization joins don't verify seat availability
- **TODO**: Implement seat counting and availability checks
- **Location**: `app/api/join-organisation/route.ts` line 52-58

### 4. Organizations Table
- **Consideration**: Currently, organization data is minimal (just ID and role on user)
- **TODO**: Consider creating a full `organizations` table with:
  - Organization name
  - Logo URL
  - Owner ID
  - Member list
  - Join token
  - Subscription details

## Backward Compatibility

⚠️ **BREAKING CHANGES**:

1. API routes now expect `clerkId` instead of `uid`
2. Firebase custom claims no longer work
3. Components must use Clerk `useUser()` instead of Firebase auth
4. Database schema changed - migration required

## Migration from Firebase

For users with existing Firebase data:

1. Run the database migration to add new columns
2. Data in Clerk metadata will be populated by Stripe webhooks on next subscription event
3. For existing users, consider running a one-time script to:
   - Read Firebase custom claims
   - Update Clerk metadata
   - Update database records

## Environment Variables

No new environment variables needed - existing Clerk configuration sufficient:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## Acceptance Criteria Status

- ✅ Subscription data stored in Clerk publicMetadata
- ✅ Admin roles stored in Clerk privateMetadata
- ✅ Stripe webhook updates Clerk metadata
- ✅ Components read from Clerk user object
- ✅ Removed `remove-custom-claims` route
- ✅ Database schema updated to support subscription and organization data
- ⚠️ **Partial**: Organization functionality needs full implementation (file upload, token validation)

## Next Steps

1. Apply database migration
2. Test Stripe webhook in development
3. Implement file upload for organization logos
4. Implement full organization token validation
5. Create organizations table if needed for full feature set
6. Update any remaining components that reference Firebase auth
7. Test full user journey: registration → subscription → organization

## References

- Clerk Metadata Docs: https://clerk.com/docs/users/metadata
- Drizzle Migrations: https://orm.drizzle.team/docs/migrations
- Original Migration Plan: MIGRATION.md Task 2.3
