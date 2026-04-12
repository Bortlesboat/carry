import type { CarryCard } from "@carry/spec";

export function selectScopes(card: CarryCard, scopes: Array<keyof CarryCard>): Partial<CarryCard> {
  return Object.fromEntries(scopes.map((scope) => [scope, card[scope]])) as Partial<CarryCard>;
}
