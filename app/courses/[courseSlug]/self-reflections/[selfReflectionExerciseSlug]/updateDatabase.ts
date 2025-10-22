"use client";

import { updateCourseResourceData } from "@actions/userDataActions";

export default async function updateDatabase(
  encryptedUserInput: any,
  courseSlug: string,
  exerciseSlug: string,
  allFieldsCompleted: boolean // Accept the allFieldsCompleted parameter
) {
  try {
    await updateCourseResourceData({
      courseSlug,
      resourceSlug: exerciseSlug,
      encryptedUserInput,
      isCompleted: allFieldsCompleted,
    });

    return true;
  } catch (error) {
    console.error("Error updating database:", (error as Error).message);
    return false;
  }
}
