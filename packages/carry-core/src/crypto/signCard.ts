import { toHex } from "./encoding";

const encoder = new TextEncoder();

export async function signCard(payload: unknown, secret: string): Promise<string> {
  if (!globalThis.crypto) {
    throw new Error("Web Crypto is unavailable in this runtime");
  }

  const key = await globalThis.crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    {
      name: "HMAC",
      hash: "SHA-256"
    },
    false,
    ["sign"]
  );
  const signature = await globalThis.crypto.subtle.sign("HMAC", key, encoder.encode(JSON.stringify(payload)));
  return toHex(signature);
}
