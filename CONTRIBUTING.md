# Contributing To Carry

Thanks for helping shape `Carry`.

The project is trying to become the open portability profile for AI, so the best contributions are the ones that improve interoperability, migration, privacy, and clarity.

## Best Contribution Areas Right Now

- tighten the core schema
- improve consent and claims modeling
- add provider adapters and fixtures
- improve `Carry Compatible` validation
- write migration examples and docs
- review security and privacy assumptions

## Where To Start

- read [docs/design-principles.md](./docs/design-principles.md) for the core guardrails
- read [docs/compatibility-levels.md](./docs/compatibility-levels.md) before making compatibility claims
- read [docs/rfcs/0001-rfc-process.md](./docs/rfcs/0001-rfc-process.md) for normative or compatibility-shaping proposals
- use [docs/community/seed-discussions.md](./docs/community/seed-discussions.md) for big questions about what belongs in the standard
- use [docs/community/seed-issues.md](./docs/community/seed-issues.md) for concrete near-term work
- read [GOVERNANCE.md](./GOVERNANCE.md) before proposing breaking core changes

## Contribution Rules Of Thumb

### For Core Spec Changes

Open or join a discussion first if your proposal changes:

- the portable profile shape
- consent behavior
- claims semantics
- compatibility expectations

Please include:

- the problem being solved
- why this belongs in the core instead of an extension
- migration impact
- privacy impact
- whether the change keeps provider neutrality intact

### For Adapters And Fixtures

These can move faster than the core spec.

Helpful additions include:

- new provider fixture scaffolds
- normalization examples
- migration edge cases
- documentation around provider-specific quirks

### For Docs

The best docs make adoption easier for:

- users switching assistants
- builders adding support
- AI assistants helping people migrate automatically

## Current Priority

The highest-leverage work is making `Carry` easy to adopt without permission from any specific provider.
