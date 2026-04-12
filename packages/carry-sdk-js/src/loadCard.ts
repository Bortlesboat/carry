import { readFile } from "node:fs/promises";
import type { CarryCard } from "@carry/spec";
import { validateCard } from "@carry/spec";

export async function loadCard(path: string): Promise<CarryCard> {
  const raw = await readFile(path, "utf8");
  const parsed = JSON.parse(raw) as CarryCard;
  const validation = validateCard(parsed);

  if (!validation.valid) {
    throw new Error(`Invalid Carry card: ${validation.errors.join("; ")}`);
  }

  return parsed;
}
