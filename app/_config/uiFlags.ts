/**
 * UI Feature Flags
 *
 * Toggle these to switch between current and experimental UI versions
 * Set to `true` to use new version, `false` to keep current version
 */

export const UI_FLAGS = {
  // Journaling features
  useNewJournalTextArea: false,      // Auto-expanding textarea, character count, better UX
  useNewJournalCalendar: false,      // Improved date selection and visual indicators
  useNewJournalLayout: false,        // Typography and spacing improvements

  // Writing exercises features
  useNewWritingExerciseForm: false,  // Enhanced form with progress tracking
  useNewWritingExerciseLayout: false, // Better mobile responsiveness

  // Global improvements
  useNewProgressTracking: false,     // Visual progress bars and milestones
  useNewSidebarNav: false,           // Mobile-friendly navigation
  useNewCardLayout: false,           // Grid instead of horizontal scroll
} as const;

export type UIFlag = keyof typeof UI_FLAGS;

/**
 * Helper to check if a feature flag is enabled
 */
export const isEnabled = (flag: UIFlag): boolean => {
  return UI_FLAGS[flag];
};
