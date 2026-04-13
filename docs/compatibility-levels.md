# Carry Compatibility Levels

`Carry Compatible` should be a public ladder, not a vague binary label.

These levels let builders adopt `Carry` incrementally while keeping user expectations honest.

## Level 1: Carry Export Ready

The product or project can create a valid `Carry` profile or export bundle.

Expected bar:

- produces a valid Carry shape
- preserves declared fields without inventing a private fork of the schema
- documents what data is included and what is omitted

Good fit:

- profile exporters
- onboarding tools
- standalone generators

## Level 2: Carry Bridge Ready

The product or project can take provider- or app-specific data, normalize it into `Carry`, and preserve a usable migration path.

Expected bar:

- meets Level 1
- maps provider data through a public adapter or equivalent documented logic
- passes shared compatibility fixtures or equivalent public evidence
- documents important mapping gaps and lossiness honestly

Good fit:

- migration tools
- adapter libraries
- import/export bridges

## Level 3: Carry Native

The product treats `Carry` as a first-class profile layer inside the user experience.

Expected bar:

- meets Level 2
- supports `Carry` as a native import, export, or profile substrate
- makes scoped sharing or equivalent user-controlled import behavior visible in product
- documents how Carry data behaves once imported

Good fit:

- AI assistants
- AI operating systems
- device or agent platforms

## Public Claim Rules

Projects should only claim the highest level they can support with public evidence.

That evidence can include:

- repo docs
- compatibility test output
- example flows
- product screenshots or demos

## What These Levels Are Not

They are not:

- a closed certification program
- a paid badge
- a requirement to partner with `Carry`

The point is to make adoption legible, not gated.

## Current Carry Reference Implementation

The reference implementation in this repo currently proves the `Level 2: Carry Bridge Ready` story through:

- public schema and examples
- adapter-based normalization
- fixture-backed compatibility checks
- CLI bridge and compatibility flows
- migration demo surface
