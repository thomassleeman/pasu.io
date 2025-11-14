"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { userAtom } from "@/state/store";
import { useUser } from "@clerk/nextjs";

/**
 * SetUser - Syncs Clerk authentication state with userAtom
 *
 * TODO: This component is a legacy bridge from Firebase to Clerk migration.
 * The userAtom pattern should be refactored to use:
 * - Server Components with direct database queries
 * - Clerk's useUser() hook on the client
 * - Server Actions for mutations
 *
 * For now, this sets a minimal user object to maintain backward compatibility
 * with components that still depend on userAtom.
 */
function SetUser() {
  const setUser = useSetAtom(userAtom);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        // Create a minimal user object compatible with existing components
        // Note: This is a temporary solution during the Firebase -> Clerk migration
        const userData: UserData = {
          uid: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
          providerData: [
            {
              uid: user.id,
              displayName: user.fullName || user.firstName || "",
              providerId: "clerk",
              email: user.primaryEmailAddress?.emailAddress || "",
            },
          ],
          createdAt: {
            seconds: Math.floor(user.createdAt / 1000),
            nanoseconds: 0,
          },
          // Legacy fields - will be populated from database queries in components that need them
          assessments: undefined,
          exercises: undefined,
          courses: undefined,
          articles: undefined,
          stressRating: undefined,
          journaling: undefined,
          organisation: undefined,
        };

        setUser(userData);
      } else {
        setUser(null);
      }
    }
  }, [user, isLoaded, setUser]);

  return null;
}

export default SetUser;
