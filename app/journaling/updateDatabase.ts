"use client";
import { format, parse, isValid } from "date-fns";
import { EncryptedUserInputs } from "@/types/journal";
import { createJournalEntry } from "@actions/userDataActions";

export default async function updateDatabase(
  encryptedUserInputs: EncryptedUserInputs,
  selectedDate: string,
  journalName: string // This is the journal slug
) {
  // **Ensure selectedDate is in "dd-MMM-yyyy" format**
  const parsedDate = parse(selectedDate, "dd-MMM-yyyy", new Date());
  if (!isValid(parsedDate)) {
    console.error(`Invalid date format for selectedDate: ${selectedDate}`);
    return false;
  }

  // Convert to ISO format (YYYY-MM-DD) for database storage
  const dateKey = format(parsedDate, "yyyy-MM-dd");

  try {
    await createJournalEntry({
      journalName,
      dateKey,
      encryptedUserInput: encryptedUserInputs,
    });

    return true;
  } catch (error) {
    console.error("Error updating journal:", error);
    return false;
  }
}
