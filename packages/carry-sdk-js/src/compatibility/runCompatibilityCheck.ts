import { minimalExampleCard, validateCard, type CarryCard } from "@carry/spec";
import { getAdapter } from "../adapters";
import type { CarryAdapterSource } from "../adapters/types";

export type RunCompatibilityCheckInput = {
  source: CarryAdapterSource;
  exportPayload: unknown;
};

export type CompatibilityCheckResult = {
  compatible: boolean;
  normalized: Partial<CarryCard>;
  carryCard: CarryCard;
  errors: string[];
};

function buildCarryCard(normalized: Partial<CarryCard>): CarryCard {
  return {
    ...minimalExampleCard,
    ...normalized,
    identity: {
      ...minimalExampleCard.identity,
      ...normalized.identity
    },
    core_truths: {
      ...minimalExampleCard.core_truths,
      ...normalized.core_truths
    },
    preferences: {
      ...minimalExampleCard.preferences,
      ...normalized.preferences
    },
    policies: {
      ...minimalExampleCard.policies,
      ...normalized.policies
    },
    provenance: normalized.provenance ?? minimalExampleCard.provenance,
    consent: normalized.consent ?? minimalExampleCard.consent,
    claims: normalized.claims ?? minimalExampleCard.claims
  };
}

export async function runCompatibilityCheck(
  input: RunCompatibilityCheckInput
): Promise<CompatibilityCheckResult> {
  const normalized = await getAdapter(input.source).normalize(input.exportPayload);
  const carryCard = buildCarryCard(normalized);
  const validation = validateCard(carryCard);

  return {
    compatible: validation.valid,
    normalized,
    carryCard,
    errors: validation.errors
  };
}
