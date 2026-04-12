import type { CarryCard } from "@carry/spec";

export type CarryScope = keyof CarryCard;

export type PrepareImportBundleInput = {
  card: CarryCard;
  providerId: string;
  scopes: CarryScope[];
};

export type CarryImportBundle = {
  provider_id: string;
  pairwise_id: string;
  scopes: CarryScope[];
  payload: Partial<CarryCard>;
};
