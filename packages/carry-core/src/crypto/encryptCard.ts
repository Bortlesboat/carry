import { webcrypto } from "node:crypto";

export type EncryptedCard = {
  algorithm: "AES-GCM";
  iv: string;
  salt: string;
  ciphertext: string;
};

const encoder = new TextEncoder();

function toBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64");
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

export async function encryptCard(payload: unknown, passphrase: string): Promise<EncryptedCard> {
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const key = await deriveKey(passphrase, salt);
  const plaintext = encoder.encode(JSON.stringify(payload));
  const ciphertext = await webcrypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);

  return {
    algorithm: "AES-GCM",
    iv: toBase64(iv),
    salt: toBase64(salt),
    ciphertext: toBase64(new Uint8Array(ciphertext))
  };
}
