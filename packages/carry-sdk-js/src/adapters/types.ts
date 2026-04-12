import type { CarryCard } from "@carry/spec";
import type { CarryScope } from "../types";

export type CarryAdapterSource = "chatgpt" | "claude" | "gemini" | "pam";

export type CarryAdapter = {
  source: CarryAdapterSource;
  normalize(input: unknown): Promise<Partial<CarryCard>>;
};

export type BuildBridgePlanInput = {
  source: CarryAdapterSource;
  exportPayload: unknown;
};

export type CarryBridgePlan = {
  normalized: Partial<CarryCard>;
  warnings: string[];
  suggestedScopes: CarryScope[];
};
