import { createHmac } from "node:crypto";

export async function signCard(payload: unknown, secret: string): Promise<string> {
  return createHmac("sha256", secret).update(JSON.stringify(payload)).digest("hex");
}
