export type CarryCompatibilityLevel = "level-1" | "level-2" | "level-3";

export type CarryCapabilityManifest = {
  manifest_version: "0.1";
  subject: {
    id: string;
    name: string;
    type: "provider" | "adapter" | "tool";
    repo?: string;
    homepage?: string;
  };
  carry: {
    compatibility_level: CarryCompatibilityLevel;
    supported_scopes: string[];
    verified_targets?: string[];
    flows: {
      import_carry_profile: boolean;
      export_provider_data: boolean;
      bridge_into_carry: boolean;
      bridge_from_carry: boolean;
      round_trip_workflows: boolean;
    };
    controls: {
      consent_rules: boolean;
      scoped_sharing: boolean;
      claims: boolean;
      pairwise_ids: boolean;
    };
    evidence: {
      docs: string;
      compatibility_test?: string;
      demo?: string;
    };
    mapping_gaps?: string[];
  };
};

export const carryCapabilityManifestSchema = {
  type: "object",
  additionalProperties: false,
  required: ["manifest_version", "subject", "carry"],
  properties: {
    manifest_version: {
      const: "0.1"
    },
    subject: {
      type: "object",
      additionalProperties: false,
      required: ["id", "name", "type"],
      properties: {
        id: { type: "string", minLength: 1 },
        name: { type: "string", minLength: 1 },
        type: {
          enum: ["provider", "adapter", "tool"]
        },
        repo: { type: "string", minLength: 1 },
        homepage: { type: "string", minLength: 1 }
      }
    },
    carry: {
      type: "object",
      additionalProperties: false,
      required: ["compatibility_level", "supported_scopes", "flows", "controls", "evidence"],
      properties: {
        compatibility_level: {
          enum: ["level-1", "level-2", "level-3"]
        },
        supported_scopes: {
          type: "array",
          minItems: 1,
          items: { type: "string", minLength: 1 }
        },
        verified_targets: {
          type: "array",
          items: { type: "string", minLength: 1 }
        },
        flows: {
          type: "object",
          additionalProperties: false,
          required: [
            "import_carry_profile",
            "export_provider_data",
            "bridge_into_carry",
            "bridge_from_carry",
            "round_trip_workflows"
          ],
          properties: {
            import_carry_profile: { type: "boolean" },
            export_provider_data: { type: "boolean" },
            bridge_into_carry: { type: "boolean" },
            bridge_from_carry: { type: "boolean" },
            round_trip_workflows: { type: "boolean" }
          }
        },
        controls: {
          type: "object",
          additionalProperties: false,
          required: ["consent_rules", "scoped_sharing", "claims", "pairwise_ids"],
          properties: {
            consent_rules: { type: "boolean" },
            scoped_sharing: { type: "boolean" },
            claims: { type: "boolean" },
            pairwise_ids: { type: "boolean" }
          }
        },
        evidence: {
          type: "object",
          additionalProperties: false,
          required: ["docs"],
          properties: {
            docs: { type: "string", minLength: 1 },
            compatibility_test: { type: "string", minLength: 1 },
            demo: { type: "string", minLength: 1 }
          }
        },
        mapping_gaps: {
          type: "array",
          items: { type: "string", minLength: 1 }
        }
      }
    }
  }
} as const;
