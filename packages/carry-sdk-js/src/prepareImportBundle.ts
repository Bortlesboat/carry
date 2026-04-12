import { derivePairwiseId, selectScopes } from "@carry/core";
import type { CarryImportBundle, PrepareImportBundleInput } from "./types";

export async function prepareImportBundle(input: PrepareImportBundleInput): Promise<CarryImportBundle> {
  return {
    provider_id: input.providerId,
    pairwise_id: await derivePairwiseId(input.card.identity.root_id, input.providerId),
    scopes: input.scopes,
    payload: selectScopes(input.card, input.scopes)
  };
}
