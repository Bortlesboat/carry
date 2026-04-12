import type { CarryCard } from "@carry/spec";
import type { CarryAdapter } from "./types";

function extractSavedInfo(payload: unknown): string[] {
  if (!payload || typeof payload !== "object" || !("saved_info" in payload)) {
    return [];
  }

  const savedInfo = payload.saved_info;
  return Array.isArray(savedInfo)
    ? savedInfo.filter((entry): entry is string => typeof entry === "string")
    : [];
}

export const geminiAdapter: CarryAdapter = {
  source: "gemini",
  async normalize(input: unknown): Promise<Partial<CarryCard>> {
    const savedInfo = extractSavedInfo(input);

    if (savedInfo.some((entry) => /direct communication/i.test(entry))) {
      return {
        preferences: {
          communication_style: "direct"
        }
      };
    }

    return {};
  }
};
