"use client";

import { markResourceCompleted } from "@actions/userDataActions";

export default async function updateDatabase(
  resourceSlug: string,
  courseSlug: string
) {
  try {
    await markResourceCompleted({
      courseSlug,
      resourceSlug,
    });

    return true;
  } catch (error) {
    console.error("Error updating database:", (error as Error).message);
    return false;
  }
}

// "use client";

// import { app } from "@firebase/auth/appConfig";
// import {
//   doc,
//   getFirestore,
//   getDoc,
//   setDoc,
//   arrayUnion,
// } from "firebase/firestore";

// export default async function updateDatabase(
//   articleSlug: string,
//   courseSlug: string
// ) {
//   try {
//     const response = await fetch("/api/accessUserId", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();

//     const db = getFirestore(app);
//     const userID = result.userID;
//     const userRef = doc(db, "users", userID);

//     await setDoc(
//       userRef,
//       {
//         courses: {
//           [courseSlug]: arrayUnion(articleSlug),
//         },
//       },
//       { merge: true }
//     );

//     return true;
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//     return false;
//   }
// }
