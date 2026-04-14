import Ajv from "ajv";
import {
  carryCapabilityManifestSchema,
  type CarryCapabilityManifest
} from "./capabilities";
import type { CarryClaim } from "./claims";
import type { CarryConsentPack } from "./consent";

export type CarryCard = {
  identity: {
    display_name: string;
    root_id: string;
    timezone?: string;
    locale?: string;
    pronouns?: string;
  };
  core_truths: {
    summary: string;
  };
  preferences: {
    communication_style: string;
  };
  policies: {
    always_share: string[];
    ask_first: string[];
    never_share: string[];
  };
  provenance: Array<{
    section: string;
    source: string;
    confirmed_at: string;
    stability: "stable" | "review" | "volatile";
  }>;
  consent?: CarryConsentPack;
  claims?: CarryClaim[];
};

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};

export const carryCardSchema = {
  type: "object",
  additionalProperties: false,
  required: ["identity", "core_truths", "preferences", "policies", "provenance"],
  properties: {
    identity: {
      type: "object",
      additionalProperties: false,
      required: ["display_name", "root_id"],
      properties: {
        display_name: { type: "string", minLength: 1 },
        root_id: { type: "string", minLength: 1 },
        timezone: { type: "string" },
        locale: { type: "string" },
        pronouns: { type: "string" }
      }
    },
    core_truths: {
      type: "object",
      additionalProperties: false,
      required: ["summary"],
      properties: {
        summary: { type: "string", minLength: 1 }
      }
    },
    preferences: {
      type: "object",
      additionalProperties: false,
      required: ["communication_style"],
      properties: {
        communication_style: { type: "string", minLength: 1 }
      }
    },
    policies: {
      type: "object",
      additionalProperties: false,
      required: ["always_share", "ask_first", "never_share"],
      properties: {
        always_share: { type: "array", items: { type: "string" } },
        ask_first: { type: "array", items: { type: "string" } },
        never_share: { type: "array", items: { type: "string" } }
      }
    },
    provenance: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["section", "source", "confirmed_at", "stability"],
        properties: {
          section: { type: "string", minLength: 1 },
          source: { type: "string", minLength: 1 },
          confirmed_at: { type: "string", minLength: 1 },
          stability: { enum: ["stable", "review", "volatile"] }
        }
      }
    },
    consent: {
      type: "object",
      additionalProperties: false,
      required: ["default_mode", "share_rules"],
      properties: {
        default_mode: {
          enum: ["allow", "ask-first", "deny"]
        },
        share_rules: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            required: ["field", "action"],
            properties: {
              field: { type: "string", minLength: 1 },
              action: { enum: ["allow", "ask-first", "deny"] }
            }
          }
        }
      }
    },
    claims: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["type", "disclosure"],
        properties: {
          type: { type: "string", minLength: 1 },
          value: {
            anyOf: [{ type: "string" }, { type: "number" }, { type: "boolean" }]
          },
          issuer: { type: "string", minLength: 1 },
          disclosure: { enum: ["selective", "ask-first"] }
        }
      }
    }
  }
} as const;

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile<CarryCard>(carryCardSchema);
const capabilityManifestValidator = ajv.compile<CarryCapabilityManifest>(carryCapabilityManifestSchema);

export function validateCard(candidate: unknown): ValidationResult {
  const valid = validator(candidate);
  return {
    valid: Boolean(valid),
    errors: validator.errors?.map((error) => `${error.instancePath || "/"} ${error.message}`) ?? []
  };
}

export function validateCapabilityManifest(candidate: unknown): ValidationResult {
  const valid = capabilityManifestValidator(candidate);
  return {
    valid: Boolean(valid),
    errors:
      capabilityManifestValidator.errors?.map(
        (error) => `${error.instancePath || "/"} ${error.message}`
      ) ?? []
  };
}
