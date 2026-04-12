import { loadCard, prepareImportBundle } from "@carry/sdk-js";
import type { CarryScope } from "@carry/sdk-js";

export async function shareCommand(file: string, providerId: string, scopes: CarryScope[]): Promise<void> {
  const card = await loadCard(file);
  const bundle = await prepareImportBundle({
    card,
    providerId,
    scopes
  });

  console.log(JSON.stringify(bundle, null, 2));
}
