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
