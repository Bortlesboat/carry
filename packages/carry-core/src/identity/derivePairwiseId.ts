import { toHex } from "../crypto/encoding";

export async function derivePairwiseId(rootId: string, providerId: string): Promise<string> {
  if (!globalThis.crypto) {
    throw new Error("Web Crypto is unavailable in this runtime");
  }

  const digest = await globalThis.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`${rootId}:${providerId}`)
  );
  return toHex(digest);
}
