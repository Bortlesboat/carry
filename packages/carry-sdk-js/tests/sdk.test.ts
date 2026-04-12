import { describe, expect, it } from "vitest";
import { minimalExampleCard } from "@carry/spec";
import { prepareImportBundle } from "../src";

describe("carry sdk", () => {
  it("produces a provider-scoped import bundle", async () => {
    const bundle = await prepareImportBundle({
      card: minimalExampleCard,
      providerId: "anthropic.com",
      scopes: ["identity", "preferences"]
    });

    expect(bundle.provider_id).toBe("anthropic.com");
    expect(bundle.scopes).toEqual(["identity", "preferences"]);
    expect(bundle.pairwise_id).toBeTruthy();
  });
});
