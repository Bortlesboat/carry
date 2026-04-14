# Provider Capability Manifest Draft

`Carry` needs a small machine-readable way for builders to say what they actually support.

This draft manifest is meant to answer that without forcing people to read source code, decode marketing copy, or wait for a partnership announcement.

## Why This Exists

The compatibility levels tell people how mature a `Carry Compatible` claim is.

The manifest tells them what that claim means in practice:

- can this thing import a Carry profile?
- can it export provider data in a Carry-mappable way?
- can it bridge into or out of Carry?
- does it support consent-aware and scoped flows?
- what targets or fixtures has it actually verified?

## Minimal Shape

```json
{
  "manifest_version": "0.1",
  "subject": {
    "id": "carry.reference.bridge",
    "name": "Carry Reference Bridge",
    "type": "tool"
  },
  "carry": {
    "compatibility_level": "level-2",
    "supported_scopes": ["identity", "preferences", "consent"],
    "flows": {
      "import_carry_profile": true,
      "export_provider_data": true,
      "bridge_into_carry": true,
      "bridge_from_carry": false,
      "round_trip_workflows": false
    },
    "controls": {
      "consent_rules": true,
      "scoped_sharing": true,
      "claims": false,
      "pairwise_ids": false
    },
    "evidence": {
      "docs": "./docs/compatibility.md"
    }
  }
}
```

## Required Fields

- `manifest_version`: current draft version, starting at `0.1`
- `subject.id`: stable identifier for the provider, adapter, or tool
- `subject.name`: human-readable name
- `subject.type`: `provider`, `adapter`, or `tool`
- `carry.compatibility_level`: `level-1`, `level-2`, or `level-3`
- `carry.supported_scopes`: which Carry scopes the project claims to handle
- `carry.flows`: whether the project can import Carry, export provider data, and bridge in either direction
- `carry.controls`: whether consent rules, scoped sharing, claims, and pairwise IDs are supported
- `carry.evidence.docs`: the public explanation of the claim

## Optional Fields

- `subject.repo`
- `subject.homepage`
- `carry.verified_targets`
- `carry.evidence.compatibility_test`
- `carry.evidence.demo`
- `carry.mapping_gaps`

## Reference Example

The current repo now includes a reference manifest for the Carry implementation:

- schema and validator: [`packages/carry-spec/src/capabilities.ts`](../../packages/carry-spec/src/capabilities.ts)
- JSON example: [`packages/carry-spec/examples/reference-bridge.manifest.json`](../../packages/carry-spec/examples/reference-bridge.manifest.json)

## How It Relates To Compatibility Levels

- `Level 1` projects should publish what they can emit and what they omit.
- `Level 2` projects should publish bridge support, verified targets, and mapping gaps.
- `Level 3` projects should publish how Carry behaves as a first-class in-product profile layer.

The manifest is not a certification program.

It is a builder-readable support contract.

## Draft Rules

- keep it provider-neutral
- keep it small enough to hand-author in one sitting
- do not require a Carry-hosted registry
- prefer public evidence over private claims
- document mapping gaps instead of pretending away lossiness
