'use client';

import { updateExerciseProgress } from '@actions/userDataActions';

interface ProgressData {
  completedPrompts: number;
  totalPrompts: number;
  completionPercentage: number;
}

export default async function updateDatabase(
  encryptedUserInput: string,
  exerciseSlug: string,
  progressData: ProgressData
) {
  try {
    console.log('writing ex db update');

    await updateExerciseProgress({
      exerciseSlug,
      completedPrompts: progressData.completedPrompts,
      completionPercentage: progressData.completionPercentage,
      encryptedUserInput,
    });

    return true;
  } catch (error) {
    console.error('Error:', (error as Error).message);
    return false;
  }
}
