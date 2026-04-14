import type { CarryCapabilityManifest } from "./capabilities";
import type { CarryCard } from "./schema";

export const minimalExampleCard: CarryCard = {
  identity: {
    display_name: "Andy",
    root_id: "carry.example.andy",
    timezone: "America/New_York",
    locale: "en-US"
  },
  core_truths: {
    summary: "Builder with durable personal context and strong preferences around direct, practical help."
  },
  preferences: {
    communication_style: "direct"
  },
  policies: {
    always_share: ["identity", "preferences"],
    ask_first: ["core_truths"],
    never_share: ["secrets", "tokens"]
  },
  provenance: [
    {
      section: "identity",
      source: "user",
      confirmed_at: "2026-04-12",
      stability: "stable"
    }
  ]
};

export const professionalExampleCard: CarryCard = {
  ...minimalExampleCard,
  core_truths: {
    summary: "Independent builder focused on developer tools, payments, and open-source credibility."
  }
};

export const powerUserExampleCard: CarryCard = {
  ...professionalExampleCard,
  preferences: {
    communication_style: "direct and concise"
  }
};

export const migrationReadyExampleCard: CarryCard = {
  ...professionalExampleCard,
  consent: {
    default_mode: "ask-first",
    share_rules: [
      { field: "identity.display_name", action: "allow" },
      { field: "identity.timezone", action: "allow" },
      { field: "core_truths.summary", action: "ask-first" }
    ]
  },
  claims: [
    {
      type: "prefers_direct_communication",
      value: true,
      issuer: "self-asserted",
      disclosure: "selective"
    }
  ]
};

export const privacyFirstExampleCard: CarryCard = {
  ...minimalExampleCard,
  consent: {
    default_mode: "deny",
    share_rules: [
      { field: "identity.display_name", action: "allow" },
      { field: "preferences.communication_style", action: "ask-first" }
    ]
  },
  claims: [
    {
      type: "timezone_confirmed",
      value: true,
      issuer: "self-asserted",
      disclosure: "ask-first"
    }
  ]
};

export const referenceBridgeManifest: CarryCapabilityManifest = {
  manifest_version: "0.1",
  subject: {
    id: "carry.reference.bridge",
    name: "Carry Reference Bridge",
    type: "tool",
    repo: "https://github.com/Bortlesboat/carry"
  },
  carry: {
    compatibility_level: "level-2",
    supported_scopes: [
      "identity",
      "core_truths",
      "preferences",
      "policies",
      "provenance",
      "consent",
      "claims"
    ],
    verified_targets: ["chatgpt", "claude", "gemini", "pam"],
    flows: {
      import_carry_profile: true,
      export_provider_data: true,
      bridge_into_carry: true,
      bridge_from_carry: true,
      round_trip_workflows: true
    },
    controls: {
      consent_rules: true,
      scoped_sharing: true,
      claims: true,
      pairwise_ids: true
    },
    evidence: {
      docs: "./docs/compatibility.md",
      compatibility_test: "./tests/compatibility/carry-compatible.test.ts",
      demo: "./apps/carry-demo"
    },
    mapping_gaps: [
      "Provider-specific memory ranking and retrieval behavior stays outside the core manifest.",
      "Lossless round-trip behavior still depends on provider export fidelity and adapter coverage."
    ]
  }
};
