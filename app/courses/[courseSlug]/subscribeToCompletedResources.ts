"use client";

import { app } from "@firebase/auth/appConfig";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

export default async function subscribeToCompletedResources(
  courseSlug: string,
  setCompletedModules: (modules: { [key: string]: boolean }) => void
) {
  try {
    const response = await fetch("/api/accessUserId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const userID = result.userID;

    const db = getFirestore(app);
    const userRef = doc(db, "users", userID);

    const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
      if (!docSnapshot.exists()) {
        setCompletedModules({}); // Update the state with an empty object if no document exists
        return;
      }

      const userData = docSnapshot.data();
      if (
        userData &&
        userData.courses &&
        userData.courses[courseSlug] &&
        userData.courses[courseSlug].resourcesCompleted
      ) {
        const resourcesCompleted =
          userData.courses[courseSlug].resourcesCompleted;
        setCompletedModules(resourcesCompleted); // Update the state with resourcesCompleted object
      } else {
        setCompletedModules({}); // If no courses found, set state to an empty object
      }
    });

    // Return the unsubscribe function for cleanup
    return unsubscribe;
  } catch (error) {
    console.error("Error:", (error as Error).message);
    return null;
  }
}
