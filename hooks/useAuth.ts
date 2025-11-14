// hooks/useAuth.ts
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuth(redirectTo = "/sign-in") {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push(redirectTo);
    }
  }, [isLoaded, user, router, redirectTo]);

  return user;
}
