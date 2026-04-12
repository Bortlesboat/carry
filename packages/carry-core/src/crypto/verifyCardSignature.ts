import { timingSafeEqual } from "node:crypto";
import { signCard } from "./signCard";

export async function verifyCardSignature(payload: unknown, signature: string, secret: string): Promise<boolean> {
  const expected = await signCard(payload, secret);
  return timingSafeEqual(Buffer.from(signature, "utf8"), Buffer.from(expected, "utf8"));
}
