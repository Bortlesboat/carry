import type { BuildBridgePlanInput, CarryBridgePlan } from "../adapters/types";
import { getAdapter } from "../adapters";

export async function buildBridgePlan(input: BuildBridgePlanInput): Promise<CarryBridgePlan> {
  const normalized = await getAdapter(input.source).normalize(input.exportPayload);

  return {
    normalized,
    warnings: [],
    suggestedScopes: ["identity", "preferences"]
  };
}
