# RFC 0001: Carry RFC Process

Status: Accepted

## Summary

This document defines the lightweight RFC process for normative and compatibility-shaping changes in `Carry`.

The goal is to keep the project open and legible without introducing heavy governance before it is earned.

## When An RFC Is Required

Open an RFC when a proposal does any of the following:

- changes the normative `Carry` schema
- changes compatibility levels or the public meaning of `Carry Compatible`
- introduces a new extension mechanism that could affect the core boundary
- changes consent, claims, provenance, or identity semantics in a breaking or ecosystem-wide way
- removes or materially redefines a public builder-facing contract

An RFC is usually not required for:

- bug fixes in the reference implementation
- non-normative documentation improvements
- examples, fixtures, or adapters that do not redefine the standard
- launch/distribution copy

## Process

1. Start with a GitHub Discussion or Issue if the proposal needs early shape.
2. Add an RFC document under `docs/rfcs/` using the next numeric prefix.
3. Link the discussion context and summarize the proposed change.
4. Describe migration, compatibility, privacy, and security impact.
5. Discuss publicly and revise as needed.
6. Merge the RFC with a clear status update.
7. Implement the accepted change and link back to the RFC from the PR.

## File Naming

Use this pattern:

`docs/rfcs/NNNN-short-kebab-title.md`

Examples:

- `docs/rfcs/0002-provider-capability-manifest.md`
- `docs/rfcs/0003-extension-profile-rules.md`

## Required Sections

Every RFC should include:

- `Summary`
- `Motivation`
- `Proposal`
- `Compatibility Impact`
- `Migration Story`
- `Privacy And Security Considerations`
- `Alternatives Considered`

## Status Values

- `Draft`
- `Accepted`
- `Implemented`
- `Rejected`
- `Superseded`

## Decision Rules

`Carry` is currently founder-stewarded, but core changes should still be justified in public.

Maintainers should favor proposals that:

- keep the core small
- improve portability across providers
- preserve privacy and user agency
- make builder adoption easier
- avoid requiring a Carry-controlled service

Maintainers should be skeptical of proposals that:

- pull provider-specific product behavior into the core
- create certification moats
- add governance ceremony without ecosystem demand
- turn `Carry` into a hosted memory platform

## Migration Standard

If an RFC changes public behavior, it should explain:

- what breaks, if anything
- what remains compatible
- what builders need to change
- whether the change belongs in core or could live as an extension instead

## Relationship To Discussions

GitHub Discussions are the preferred place for open-ended standard questions.

RFCs are the narrowing mechanism that turns a shaped proposal into something maintainers can accept, reject, or revise explicitly.
