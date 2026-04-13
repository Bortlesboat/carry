# Security Policy

`Carry` handles identity, preferences, policies, provenance, and portability metadata.
That makes privacy and security part of the standard, not an afterthought.

## Supported Surface

Security reports are especially helpful for issues involving:

- unintended data disclosure
- incorrect sharing or consent behavior
- identity-correlation risks
- cryptographic misuse in the reference implementation
- import/export flows that leak or mis-handle sensitive profile data

## How To Report

Please do not post full exploit details publicly in Issues, Discussions, or PRs.

Preferred path:

- use GitHub private vulnerability reporting for this repository:
  `https://github.com/Bortlesboat/carry/security/advisories/new`

Fallback path if the private GitHub flow is temporarily unavailable:

- open a minimal public issue titled `Security contact requested`
- include only high-level impact and affected surface
- do not include exploit steps, sensitive data, or full proof-of-concept details

## What To Include

Helpful reports include:

- affected file, package, or workflow
- impact summary
- reproduction notes
- whether the issue affects user privacy, portability integrity, or pairwise identity safety
- suggested mitigation if you already have one

## Response Expectations

`Carry` is an early open-source project and does not yet promise enterprise-style SLAs.

Maintainers will still aim to:

- acknowledge the report
- assess severity
- land a fix or mitigation when warranted
- document the user-facing impact clearly

## Disclosure Principles

When a fix lands, maintainers should prefer:

- clear user impact language
- explicit migration notes if data shape or compatibility changes
- minimal disclosure of exploit details until users have a reasonable path to update
