import { describe, expect, it } from "vitest";
import { minimalExampleCard } from "../src/examples";
import { validateCard } from "../src/schema";

describe("AI Self Card schema", () => {
  it("accepts the minimal example", () => {
    expect(validateCard(minimalExampleCard).valid).toBe(true);
  });

  it("rejects secret-like fields", () => {
    const candidate = { ...minimalExampleCard, apiKey: "sk-test" };
    expect(validateCard(candidate).valid).toBe(false);
  });
});
