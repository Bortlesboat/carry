import type { CarryCard } from "@carry/spec";
import type { CarryAdapter } from "./types";

function extractMemories(payload: unknown): string[] {
  if (!payload || typeof payload !== "object" || !("memories" in payload)) {
    return [];
  }

  const memories = payload.memories;
  return Array.isArray(memories) ? memories.filter((memory): memory is string => typeof memory === "string") : [];
}

export const claudeAdapter: CarryAdapter = {
  source: "claude",
  async normalize(input: unknown): Promise<Partial<CarryCard>> {
    const memories = extractMemories(input);

    if (memories.some((memory) => /direct communication/i.test(memory))) {
      return {
        preferences: {
          communication_style: "direct"
        }
      };
    }

    return {};
  }
};
