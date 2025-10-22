/**
 * UI Feature Flags
 *
 * Toggle these to switch between current and experimental UI versions
 * Set to `true` to use new version, `false` to keep current version
 */

export const UI_FLAGS = {
  // Journaling features
  useNewJournalTextArea: true, // Auto-expanding textarea, character count, better UX
  useNewJournalCalendar: true, // Improved date selection and visual indicators
  useNewJournalLayout: true, // Typography and spacing improvements

  // Writing exercises features
  useNewWritingExerciseForm: true, // Enhanced form with progress tracking
  useNewWritingExerciseLayout: true, // Better mobile responsiveness

  // Global improvements
  useNewProgressTracking: true, // Visual progress bars and milestones
  useNewSidebarNav: true, // Mobile-friendly navigation
  useNewCardLayout: true, // Grid instead of horizontal scroll
} as const;

export type UIFlag = keyof typeof UI_FLAGS;

/**
 * Helper to check if a feature flag is enabled
 */
export const isEnabled = (flag: UIFlag): boolean => {
  return UI_FLAGS[flag];
};
