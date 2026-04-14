import { describe, expect, it } from "vitest";
import * as examples from "../src/examples";
import { minimalExampleCard, referenceBridgeManifest } from "../src/examples";
import { validateCapabilityManifest, validateCard } from "../src/schema";

describe("AI Self Card schema", () => {
  it("accepts the minimal example", () => {
    expect(validateCard(minimalExampleCard).valid).toBe(true);
  });

  it("accepts a carry v2 consent pack", () => {
    const candidate = {
      ...minimalExampleCard,
      consent: {
        default_mode: "ask-first",
        share_rules: [
          { field: "identity.timezone", action: "allow" },
          { field: "core_truths.summary", action: "ask-first" }
        ]
      }
    };

    expect(validateCard(candidate).valid).toBe(true);
  });

  it("rejects invalid claim disclosure modes", () => {
    const candidate = {
      ...minimalExampleCard,
      claims: [
        {
          type: "age_over_18",
          value: true,
          disclosure: "always-public"
        }
      ]
    };

    expect(validateCard(candidate).valid).toBe(false);
  });

  it("rejects secret-like fields", () => {
    const candidate = { ...minimalExampleCard, apiKey: "sk-test" };
    expect(validateCard(candidate).valid).toBe(false);
  });

  it("validates the migration-ready example", () => {
    const candidate = (examples as { migrationReadyExampleCard?: unknown }).migrationReadyExampleCard;
    expect(validateCard(candidate).valid).toBe(true);
  });

  it("validates the privacy-first example", () => {
    const candidate = (examples as { privacyFirstExampleCard?: unknown }).privacyFirstExampleCard;
    expect(validateCard(candidate).valid).toBe(true);
  });

  it("validates the reference capability manifest", () => {
    expect(validateCapabilityManifest(referenceBridgeManifest).valid).toBe(true);
  });

  it("rejects manifests without public docs evidence", () => {
    const candidate = {
      manifest_version: "0.1",
      subject: {
        id: "example.provider",
        name: "Example Provider",
        type: "provider"
      },
      carry: {
        compatibility_level: "level-1",
        supported_scopes: ["identity"],
        flows: {
          import_carry_profile: false,
          export_provider_data: true,
          bridge_into_carry: false,
          bridge_from_carry: false,
          round_trip_workflows: false
        },
        controls: {
          consent_rules: false,
          scoped_sharing: false,
          claims: false,
          pairwise_ids: false
        },
        evidence: {}
      }
    };

    expect(validateCapabilityManifest(candidate).valid).toBe(false);
  });
});
