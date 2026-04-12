import type { CarryCard } from "@carry/spec";
import type { CarryAdapter } from "./types";

export const pamAdapter: CarryAdapter = {
  source: "pam",
  async normalize(input: unknown): Promise<Partial<CarryCard>> {
    if (
      input &&
      typeof input === "object" &&
      "preferences" in input &&
      input.preferences &&
      typeof input.preferences === "object" &&
      "communication_style" in input.preferences &&
      typeof input.preferences.communication_style === "string"
    ) {
      return {
        preferences: {
          communication_style: input.preferences.communication_style
        }
      };
    }

    return {};
  }
};
