# Carry

Bring your AI self with you.

Carry is an open standard and reference implementation for portable AI identity and context.

Instead of reteaching every new model who you are, how you work, what matters to you, and what should never be shared, you keep a user-owned `AI Self Card` and selectively import it anywhere.

## Value Add

- Users keep durable context portable instead of trapped inside one AI product.
- New AI apps get a cleaner onboarding path without asking the same profile questions again.
- Providers can import only the scopes they need instead of requesting a full data dump.
- Privacy improves because Carry uses scoped sharing, pairwise provider IDs, and explicit provenance.

## What Exists Today

- `@carry/spec`: the `AI Self Card` schema plus example cards, consent packs, and selective-disclosure claims
- `@carry/core`: browser-safe crypto helpers, pairwise IDs, and scope selection
- `@carry/sdk-js`: JavaScript helpers to normalize provider exports, build bridge plans, and prepare import bundles
- `@carry/cli`: init, validate, inspect, share, bridge, and compatibility commands
- `@carry/demo`: a branded reference app showing `Claude export -> Carry bridge -> Gemini import`

## Why Now

AI switching costs are already real. Moving from one provider to another means rebuilding memory, preferences, and trust from scratch. That gets worse as assistants spread across phones, wearables, cars, browsers, and operating systems.

Carry starts with the thinnest useful layer: portable identity and core context, owned by the user, readable by any provider that adopts the spec.

## Core Principles

- User-owned by default
- Scoped sharing, not full export by default
- Stable identity with provider-specific pairwise IDs
- Honest provenance for durable facts
- Portable across providers, apps, and future AI devices

## Community Standard Path

`Carry` is being built as a community-standard effort for AI portability.

The goal is to stay useful across OpenAI, Anthropic, Google Gemini, Meta, Perplexity, and future systems without requiring a `Carry`-owned service or one company's permission.

Today the project is founder-stewarded. Over time, the goal is shared governance if the ecosystem pull is real enough to justify it.

- governance: [GOVERNANCE.md](./GOVERNANCE.md)
- contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)
- why Carry: [docs/why-carry.md](./docs/why-carry.md)
- compatibility: [docs/compatibility.md](./docs/compatibility.md)
- compatibility levels: [docs/compatibility-levels.md](./docs/compatibility-levels.md)
- capability manifest draft: [docs/adoption/provider-capability-manifest.md](./docs/adoption/provider-capability-manifest.md)
- design principles: [docs/design-principles.md](./docs/design-principles.md)
- roadmap: [docs/roadmap.md](./docs/roadmap.md)
- RFC process: [docs/rfcs/0001-rfc-process.md](./docs/rfcs/0001-rfc-process.md)
- security: [SECURITY.md](./SECURITY.md)
- seed discussions: [docs/community/seed-discussions.md](./docs/community/seed-discussions.md)
- seed issues: [docs/community/seed-issues.md](./docs/community/seed-issues.md)

## Example Card

```json
{
  "identity": {
    "display_name": "Andy",
    "root_id": "carry.example.andy",
    "timezone": "America/New_York",
    "locale": "en-US"
  },
  "core_truths": {
    "summary": "Born in 1990, works best with direct communication, and prefers privacy-first tools."
  },
  "preferences": {
    "communication_style": "direct"
  },
  "policies": {
    "always_share": ["timezone"],
    "ask_first": ["family_details", "work_history"],
    "never_share": ["government_ids", "financial_accounts"]
  },
  "provenance": [
    {
      "section": "identity",
      "source": "self-asserted",
      "confirmed_at": "2026-04-12",
      "stability": "stable"
    }
  ]
}
```

## Quick Start

```bash
pnpm install
pnpm verify
pnpm demo
```

Create and inspect a card:

```bash
pnpm --filter @carry/cli exec carry init --template minimal --out ./andy.card.json
pnpm --filter @carry/cli exec carry validate ./andy.card.json
pnpm --filter @carry/cli exec carry inspect ./andy.card.json
```

Bridge an existing provider export into Carry:

```bash
pnpm --filter @carry/cli exec carry bridge ./claude-export.json --source claude
pnpm --filter @carry/cli exec carry compat ./claude-export.json --source claude
```

## MVP Story

Carry is deliberately small right now:

1. Start from a provider export or create an `AI Self Card`
2. Normalize that context into a public Carry profile
3. Validate it against a public schema
4. Import only selected scopes into the next assistant
5. Derive a provider-specific identity instead of reusing one global identifier
6. Prove the migration story in a real browser demo

That is enough to start real conversations with developers, standards-minded AI builders, and future device/platform teams.

## Roadmap

The fuller roadmap lives in [docs/roadmap.md](./docs/roadmap.md).

Near-term priorities:

- provider capability manifests
- clearer compatibility levels and builder targeting
- more migration-ready examples and adoption docs
- eventual community-owned interoperability testing

## Contributing

The best early contributions are:

- tighter schema design
- more example cards and migration stories
- adapters for real AI products
- security review of the sharing and identity model
- ecosystem docs that help other apps adopt Carry quickly
- compatibility fixtures that other builders can target

If you want to help, aim for interoperability over product-specific behavior.
