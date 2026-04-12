# Seed Issues

These are suggested first-wave GitHub Issues for turning the `Carry` standard posture into concrete builder work.

## 1. Define Carry Extension Boundaries

Goal:
Write a short spec note that explains what belongs in the core profile versus extensions.

Acceptance idea:
- clear rules for core versus extension fields
- examples of both
- migration guidance for future additions

## 2. Add Provider Capability Manifest Draft

Goal:
Define a small machine-readable manifest for what a provider or tool supports:

- import
- export
- bridge-only
- claims support
- consent support

Acceptance idea:
- manifest schema draft
- at least one example manifest

## 3. Define `Carry Compatible` Levels

Goal:
Turn compatibility into explicit levels instead of one vague claim.

Acceptance idea:
- level names
- minimum fixture/test bar per level
- documentation in `docs/compatibility.md`

## 4. Scaffold Meta Adapter Fixtures

Goal:
Add a first placeholder fixture and adapter notes for future Meta ecosystem mapping.

Acceptance idea:
- sample fixture file
- notes on what is known versus unknown
- tests prepared even if mappings stay partial

## 5. Scaffold Perplexity Adapter Fixtures

Goal:
Add a first placeholder fixture and adapter notes for future Perplexity mapping.

Acceptance idea:
- sample fixture file
- normalization assumptions called out clearly
- compatibility path identified

## 6. Document AI-Guided Setup And Migration

Goal:
Write the first doc for how an AI assistant could help a user create or migrate a `Carry` profile.

Acceptance idea:
- setup flow
- required confirmations
- provenance and consent expectations

## 7. Publish Core Versioning Policy

Goal:
Explain how `Carry` core changes, extensions, and adapter updates should version differently.

Acceptance idea:
- versioning rules
- compatibility expectations
- migration note template

## 8. Add Security And Privacy Threat Model

Goal:
Document the main risks around portability, identity, consent, and leakage.

Acceptance idea:
- assets and trust boundaries
- likely abuse paths
- recommended mitigations for builders

## 9. Add Governance Milestone Criteria

Goal:
Make the path from stewarded project to working group to foundation explicit.

Acceptance idea:
- milestone definitions
- adoption triggers
- objective criteria where possible

## 10. Add Launch Discussion Links To README

Goal:
Make it easy for new contributors to find the right standard-shaping conversations.

Acceptance idea:
- README links to governance, contributing, and seed discussion docs
- short explanation of why discussion-first matters for core changes
