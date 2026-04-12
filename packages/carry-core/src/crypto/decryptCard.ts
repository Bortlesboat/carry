import type { EncryptedCard } from "./encryptCard";
import { fromBase64 } from "./encoding";

const decoder = new TextDecoder();
const encoder = new TextEncoder();

function getCryptoApi(): Crypto {
  if (!globalThis.crypto) {
    throw new Error("Web Crypto is unavailable in this runtime");
  }

  return globalThis.crypto;
}

async function deriveKey(passphrase: string, salt: Uint8Array<ArrayBuffer>): Promise<CryptoKey> {
  const cryptoApi = getCryptoApi();
  const keyMaterial = await cryptoApi.subtle.importKey(
    "raw",
    encoder.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return cryptoApi.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100_000,
      hash: "SHA-256"
    },
    keyMaterial,
    {
      name: "AES-GCM",
      length: 256
    },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function decryptCard<T>(encrypted: EncryptedCard, passphrase: string): Promise<T> {
  const cryptoApi = getCryptoApi();
  const iv = fromBase64(encrypted.iv);
  const salt = fromBase64(encrypted.salt);
  const ciphertext = fromBase64(encrypted.ciphertext);
  const key = await deriveKey(passphrase, salt);
  const plaintext = await cryptoApi.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return JSON.parse(decoder.decode(plaintext)) as T;
}
