import type { CarryImportBundle } from "@carry/sdk-js";

export function importToAssistant(bundle: CarryImportBundle) {
  const hasIdentity = "identity" in bundle.payload;
  const hasPreferences = "preferences" in bundle.payload;

  if (hasIdentity && hasPreferences) {
    return { summary: "Understands your core profile." };
  }

  if (hasIdentity) {
    return { summary: "Recognizes who you are, but still needs work style details." };
  }

  return { summary: "Needs more context before it can personalize help." };
}
