# Carry Compatibility

`Carry Compatible` means a tool can take a provider-specific export, normalize it into `Carry`, and produce a valid `Carry` profile without inventing a private schema.

## Current Bar

- normalize provider exports through the `Carry` adapter contract
- produce a valid `Carry` profile shape
- pass the shared compatibility fixtures in `tests/compatibility/`
- preserve a migration path into a target assistant without inventing a private schema

## Current Fixture Targets

- `chatgpt`
- `claude`
- `gemini`
- `pam`

## Why This Matters

The compatibility suite is the start of the adoption wedge.

If builders target the same fixtures and contract, users get portability and `Carry` becomes the default profile layer they expect AI tools to support.

## Builder Loop

Use the first-party tools to prove the same workflow other apps can adopt:

```bash
pnpm --filter @carry/cli exec carry bridge ./provider-export.json --source claude
pnpm --filter @carry/cli exec carry compat ./provider-export.json --source claude
```

That loop matters because it keeps `Carry` positioned as shared infrastructure:

- builders can target a public contract instead of inventing a new onboarding format
- users can bring the same profile forward instead of rebuilding memory at every switch
- new entrants can become `Carry Compatible` without needing a privileged partnership first
