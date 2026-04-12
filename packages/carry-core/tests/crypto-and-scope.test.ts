import { describe, expect, it } from "vitest";
import { minimalExampleCard } from "@carry/spec";
import { decryptCard, derivePairwiseId, encryptCard, selectScopes, signCard, verifyCardSignature } from "../src";

describe("carry core", () => {
  it("round-trips encrypted card payloads", async () => {
    const encrypted = await encryptCard({ identity: { display_name: "Andy" } }, "test-passphrase");
    const decrypted = await decryptCard(encrypted, "test-passphrase");
    expect(decrypted.identity.display_name).toBe("Andy");
  });

  it("derives stable but provider-specific IDs", async () => {
    const a = await derivePairwiseId("root-id", "openai.com");
    const b = await derivePairwiseId("root-id", "anthropic.com");
    expect(a).not.toBe(b);
  });

  it("returns only requested scopes", () => {
    const subset = selectScopes(minimalExampleCard, ["identity", "preferences"]);
    expect(Object.keys(subset)).toEqual(["identity", "preferences"]);
  });

  it("signs and verifies a card payload", async () => {
    const signature = await signCard(minimalExampleCard, "local-signing-key");
    const valid = await verifyCardSignature(minimalExampleCard, signature, "local-signing-key");
    expect(valid).toBe(true);
  });
});
