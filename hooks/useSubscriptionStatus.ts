"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

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
        // Read subscription data from Clerk's public metadata
        const metadata = user.publicMetadata || {};
        setSubscriptionInfo({
          status: (metadata.subscriptionStatus as "active" | "none") || "none",
          quantity:
            typeof metadata.subscriptionQuantity === "number"
              ? metadata.subscriptionQuantity
              : 0,
        });
      } else {
        setSubscriptionInfo({ status: "none", quantity: 0 });
      }
    }
  }, [user, isLoaded]);

  return subscriptionInfo;
}
