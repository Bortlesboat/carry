# Carry Design Principles

These principles are the guardrails for `Carry` as an open portability standard for AI identity and context.

They are meant to keep the project useful across providers, future devices, and new builders without turning the core into a product grab bag.

## 1. User-Owned Portability

Users should be able to carry durable context across assistants, apps, and devices without needing one provider's permission.

Implication:

- the spec should describe portable user-owned data, not provider-owned memory internals

## 2. Small Neutral Core

The core should stay narrow:

- identity
- core truths
- preferences
- policies
- provenance
- consent
- claims

Implication:

- new ideas should default to extensions, adapters, examples, or compatibility profiles before they enter the normative core

## 3. No Required Carry Service

`Carry` should remain useful without a hosted `Carry` backend.

Implication:

- the standard cannot depend on a Carry-run cloud, sync layer, or account system to be valuable

## 4. Scoped Sharing By Default

Portability should not mean dumping everything everywhere.

Implication:

- the reference docs and tools should keep selective disclosure, pairwise identifiers, and explicit sharing rules central to the story

## 5. Compatibility Over Gatekeeping

The goal is to make it easier for other tools to adopt `Carry`, not to force every builder through a private approval process.

Implication:

- compatibility criteria should be public, testable, and incremental

## 6. Extensions Move Faster Than Core

The core should move carefully.
Adapters, fixtures, examples, mapping guides, and extension profiles can move much faster.

Implication:

- normative core changes need more scrutiny than reference-implementation changes

## 7. Migration Before Speculation

The most important loop is still:

`export from X -> bridge to Carry -> import into Y`

Implication:

- when priorities compete, prefer work that improves real migration and adoption over abstract feature ambition

## 8. Honest Provenance

Portable context becomes more useful when its source and stability are visible.

Implication:

- `Carry` should favor explicit provenance, confidence, and disclosure metadata over silent assumptions

## 9. Provider Neutrality

The core should not encode one provider's product model as if it were universal.

Implication:

- provider quirks belong in adapters and mapping docs, not in the normative center of the standard

## 10. Public Deliberation For Core Changes

If a change affects the core shape of `Carry`, it should be discussed in public with a rationale and migration story.

Implication:

- breaking or normative changes should go through the RFC process in [docs/rfcs/0001-rfc-process.md](./rfcs/0001-rfc-process.md)
