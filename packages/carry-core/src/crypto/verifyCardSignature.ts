import { signCard } from "./signCard";

export async function verifyCardSignature(payload: unknown, signature: string, secret: string): Promise<boolean> {
  const expected = await signCard(payload, secret);
  return signature === expected;
}
