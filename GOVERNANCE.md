# Carry Governance

`Carry` is being built as a community-standard effort for portable AI identity and context.

Today, the project is stewarded by its founding maintainers. The goal is to move toward shared governance as adoption grows, not to keep the standard controlled by one company or one provider.

## Principles

- user-owned portability first
- provider neutrality
- small core, fast extensions
- no required Carry-hosted service
- public discussion for core changes
- compatibility over gatekeeping

## What We Govern

- the normative `Carry` profile and consent model
- compatibility levels and shared fixtures
- guidance for adapters and migration flows
- public use of `Carry Compatible`

## What We Do Not Govern Yet

- any hosted memory or sync service
- enterprise control planes
- legal foundation structure
- provider-specific features as part of the core standard

## Decision Model Today

`Carry` is in a stewarded open-project phase.

That means:

- maintainers merge day-to-day reference implementation work
- issues are for actionable work
- discussions are for core-shape, governance, and compatibility questions
- breaking core changes should include a public rationale, migration story, and compatibility impact

## Anti-Capture Rules

To keep `Carry` useful across OpenAI, Anthropic, Google Gemini, Meta, Perplexity, and future systems:

- the core spec cannot require one provider's product model
- adapters can move faster than the core spec
- no feature should require a Carry-owned service to be useful
- compatibility should stay open and testable
- the reference implementation should inform the spec, not silently replace it

## Governance Path

### Phase 1: Stewarded Open Project

This is the current phase.

Goals:

- grow adoption
- keep the core small
- make contribution easy
- prove the migration and compatibility story

### Phase 2: Community Working Group

This phase starts when outside participation is durable.

Likely triggers:

- recurring external maintainers
- multiple independent implementations
- shared demand for compatibility coordination

### Phase 3: Foundation or Nonprofit

This should happen only if the ecosystem earns it.

Likely triggers:

- several meaningful independent implementations
- regular outside governance participation
- real need for neutral stewardship, grants, or trademark ownership

## How To Participate

- use [Discussions](./docs/community/seed-discussions.md) for core standard questions
- use [Issues](./docs/community/seed-issues.md) for concrete work proposals
- use [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidance

The goal is simple: make `Carry` the easiest open portability layer for AI to adopt and extend.
