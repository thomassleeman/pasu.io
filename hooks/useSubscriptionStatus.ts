"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface SubscriptionInfo {
  status: "loading" | "active" | "none"; // Define possible status values explicitly for better type safety
  quantity: number;
}

export default function useSubscriptionStatus(): SubscriptionInfo {
  const { user, isLoaded } = useUser();
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo>({
    status: "loading",
    quantity: 0,
  });

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        // Read subscription data from Clerk publicMetadata
        const subscriptionStatus = (user.publicMetadata?.subscriptionStatus as string) || "none";
        const subscriptionQuantity = (user.publicMetadata?.subscriptionQuantity as number) || 0;

        setSubscriptionInfo({
          status: (subscriptionStatus === "active" ? "active" : "none") as "active" | "none",
          quantity: subscriptionQuantity,
        });
      } else {
        setSubscriptionInfo({ status: "none", quantity: 0 });
      }
    }
  }, [user, isLoaded]);

  return subscriptionInfo;
}
