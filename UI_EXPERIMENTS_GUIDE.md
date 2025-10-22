# UI Experiments Guide

This guide explains how to safely experiment with UI improvements without losing your current implementation.

## Current Setup

You're now on the experimental branch: `claude/ui-experiments-journal-011CUMnCQFKe4skWbWuV4yGy`

Your original work is safe on: `claude/review-journal-pages-011CUMnCQFKe4skWbWuV4yGy`

## How It Works

### 1. **Feature Flags** (Easiest)
Toggle features on/off in `app/_config/uiFlags.ts`:

```typescript
export const UI_FLAGS = {
  useNewJournalTextArea: true,  // ← Change to true to test new version
  useNewJournalCalendar: false, // ← Keep false to use current version
  // ...
}
```

### 2. **V2 Components** (Safest)
We'll create new components with `V2` suffix:
- `JournalTextAreaFormV2.tsx` - New experimental version
- `JournalTextAreaForm.tsx` - Original (unchanged)

Components automatically use the right version based on flags.

### 3. **Quick Testing**
```bash
# See your changes
npm run dev

# Switch between versions by editing uiFlags.ts
# No code changes needed in your main components!
```

## Switching Between Branches

### Test Experimental Changes:
```bash
git checkout claude/ui-experiments-journal-011CUMnCQFKe4skWbWuV4yGy
```

### Return to Stable Version:
```bash
git checkout claude/review-journal-pages-011CUMnCQFKe4skWbWuV4yGy
```

### Compare Branches:
```bash
git diff claude/review-journal-pages-011CUMnCQFKe4skWbWuV4yGy..claude/ui-experiments-journal-011CUMnCQFKe4skWbWuV4yGy
```

## Merging Changes Back

Once you're happy with the improvements:

```bash
# Go back to original branch
git checkout claude/review-journal-pages-011CUMnCQFKe4skWbWuV4yGy

# Merge experimental changes
git merge claude/ui-experiments-journal-011CUMnCQFKe4skWbWuV4yGy

# Or cherry-pick specific commits
git cherry-pick <commit-hash>
```

## Priority Improvements to Try

**Start with these high-impact, low-risk changes:**

1. ✅ **Auto-expanding Textarea** - Better writing experience
2. ✅ **Calendar Date Selection** - Enable creating entries on any past date
3. ✅ **Progress Indicators** - Visual feedback
4. ✅ **Mobile Navigation** - Collapsible sidebar

## Rollback Strategy

If something breaks:

```bash
# Option 1: Discard all changes
git checkout .

# Option 2: Go back to specific file
git checkout claude/review-journal-pages-011CUMnCQFKe4skWbWuV4yGy -- path/to/file.tsx

# Option 3: Delete experimental branch entirely
git checkout claude/review-journal-pages-011CUMnCQFKe4skWbWuV4yGy
git branch -D claude/ui-experiments-journal-011CUMnCQFKe4skWbWuV4yGy
```

## Questions?

- **"I want to test just one feature"** → Toggle one flag at a time
- **"I want to compare side-by-side"** → Use V2 components with manual toggle
- **"I broke something"** → Switch back to original branch
- **"I love it!"** → Merge the experimental branch back

---

**Current Status:** Experimental branch created ✅
**Next Step:** Choose which improvement to try first, and I'll implement it with the V2 pattern.
