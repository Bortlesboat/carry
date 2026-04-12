import { webcrypto } from "node:crypto";
import type { EncryptedCard } from "./encryptCard";

const decoder = new TextDecoder();
const encoder = new TextEncoder();

function fromBase64(value: string): Uint8Array {
  return new Uint8Array(Buffer.from(value, "base64"));
}

async function deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const keyMaterial = await webcrypto.subtle.importKey(
    "raw",
    encoder.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return webcrypto.subtle.deriveKey(
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
  const iv = fromBase64(encrypted.iv);
  const salt = fromBase64(encrypted.salt);
  const ciphertext = fromBase64(encrypted.ciphertext);
  const key = await deriveKey(passphrase, salt);
  const plaintext = await webcrypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
  return JSON.parse(decoder.decode(plaintext)) as T;
}
