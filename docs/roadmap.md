# Carry Roadmap

This roadmap is meant to clarify direction, not freeze the project too early.

The goal is to keep `Carry` easy to adopt now while preserving room to learn from real usage.

## Now

- publish the standards-process surface: design principles, roadmap, RFC path, and compatibility levels
- tighten the builder loop around `bridge`, `compat`, fixtures, and migration docs
- add a provider capability manifest draft so builders can describe import/export limits cleanly
- expand migration-ready examples and adapter guidance for real-world portability stories
- keep seeding public discussions around what belongs in core versus extensions

## Next

- ship a lightweight conformance pack or `carry-tck` starter others can run in their own repos
- add a Python SDK or examples for builders outside the JavaScript ecosystem
- publish native import/export reference examples for web, desktop, and device-style surfaces
- add a privacy and threat-model pass to sharpen guidance around identity, claims, and sharing rules
- define extension-profile guidance so adjacent ecosystems can build on `Carry` without bloating the core

## Later

- cryptographic signatures and tamper-evident update flows
- encrypted export and recovery patterns
- richer claims and trust hooks once there is clearer ecosystem demand
- shared governance mechanics if outside adoption creates real coordination pressure
- a community-owned interoperability suite with broader independent implementations

## Not Now

- a required Carry-hosted sync service
- enterprise control planes
- proprietary certification or pay-to-play badges
- provider-specific product features inside the core spec
- a foundation or nonprofit before outside adoption makes neutral stewardship necessary

## How To Read This

- `Now` is the current focus
- `Next` is the most likely expansion path if adoption keeps growing
- `Later` is intentionally exploratory
- `Not now` protects the project from scope drift disguised as ambition
