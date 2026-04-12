import { createHash } from "node:crypto";

export async function derivePairwiseId(rootId: string, providerId: string): Promise<string> {
  return createHash("sha256").update(`${rootId}:${providerId}`).digest("hex");
}
