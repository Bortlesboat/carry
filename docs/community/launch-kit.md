# Carry Launch Kit

This document keeps the public narrative consistent across launches, reposts, and founder-led distribution.

## Positioning Spine

### Tagline

`Bring your AI self with you.`

### One-Sentence Product Line

`Carry` is the open portability profile for AI.

### Builder Line

Use `Carry` to normalize provider exports into a user-owned profile with scoped sharing, consent, provenance, and compatibility hooks.

### Why It Matters

Provider memory is becoming real, but portable AI identity and context are still too fragile. `Carry` is the open layer that can make migration, interoperability, and future AI device setup much easier.

## Canonical Comparison Links

- repo: `https://github.com/Bortlesboat/carry`
- why Carry: `https://github.com/Bortlesboat/carry/blob/main/docs/why-carry.md`
- compatibility: `https://github.com/Bortlesboat/carry/blob/main/docs/compatibility.md`
- governance: `https://github.com/Bortlesboat/carry/blob/main/GOVERNANCE.md`

## Show HN

### Recommended Title

`Show HN: Carry - an open portability profile for AI`

### Backup Titles

- `Show HN: Carry - bring your AI self with you across assistants`
- `Show HN: Carry - a portable AI identity and context profile`

### Draft Post

I built `Carry` because AI memory is getting useful faster than it is getting portable.

OpenAI has memory inside ChatGPT. Anthropic now has memory import/export. Google Gemini is actively rolling out migration flows from other AI apps. The switching-cost problem is clearly real now.

What still feels missing is a neutral, user-owned portability layer.

`Carry` is my attempt at that:

- an open profile for durable AI context
- consent and scope controls
- provider-specific bridge adapters
- compatibility fixtures so other tools can become `Carry Compatible`
- a demo that shows `Claude export -> Carry bridge -> Gemini import`

Current repo:
`https://github.com/Bortlesboat/carry`

Current thesis:
- provider memory is not the same thing as a portability standard
- this should stay useful even without a Carry-hosted service
- the core should stay small and neutral
- adapters and compatibility should do most of the ecosystem work

I am especially interested in feedback from people thinking about:

- memory portability
- identity and consent modeling
- MCP / A2A interoperability
- PAM, Mem0, and adjacent standards or infrastructure projects
- what `Carry Compatible` should actually mean

Three discussion threads I opened to make this less hand-wavy:

- What belongs in the Carry core profile?
- What should Carry Compatible mean in v1?
- How should Carry map provider memories across major AI systems?

If this is directionally right, I want `Carry` to become community-standard infrastructure rather than a company-specific format.

## X Thread

### Recommended Thread

1. AI memory is getting real. AI portability still isn't. That gap is about to matter a lot more.

2. OpenAI has memory inside ChatGPT. Anthropic now supports memory import/export. Google Gemini is teaching users to bring context over from other AI apps. The switching-cost problem is already here.

3. What still feels missing is a neutral, user-owned profile for the portable AI self.

4. I've been building `Carry` for that:
an open portability profile for AI

repo:
https://github.com/Bortlesboat/carry

5. The idea is simple:
export from one assistant
bridge into Carry
import into another assistant

without reteaching who you are every time

6. `Carry` focuses on the durable layer:
- identity
- core truths
- preferences
- policies
- provenance
- consent
- claims

7. Important point: this is not trying to be a hosted memory cloud or generic vector-memory backend.

It's a portability layer.

8. I think the ecosystem needs a neutral standard here:
- useful to users
- easy for builders to adopt
- not dependent on one provider
- compatible with bigger interoperability efforts like MCP and A2A

9. I also opened the first public discussions on:
- what belongs in the core
- what `Carry Compatible` should mean
- how to map memories across OpenAI / Anthropic / Gemini / Meta / Perplexity

10. If you work on memory systems, identity, portability, MCP, PAM, Mem0, or adjacent standards work, I'd love feedback.

`Carry` should become community infrastructure if it earns it.

## Posting Notes

- Keep the tone calm, technical, and ecosystem-aware.
- Do not oversell foundation/nonprofit language yet.
- Emphasize that big providers validate the problem, but `Carry` stays neutral.
- Invite critique on scope, compatibility, and provider mapping.

## Reference Bank

- OpenAI Memory FAQ: `https://help.openai.com/en/articles/8590148-memory-faq`
- Anthropic memory import/export: `https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude`
- Google Gemini migration post: `https://blog.google/innovation-and-ai/products/gemini-app/switch-to-gemini-app/`
- Portable AI Memory: `https://github.com/portable-ai-memory/portable-ai-memory`
- Mem0: `https://github.com/mem0ai/mem0`
- Data Transfer Project: `https://github.com/dtinit/data-transfer-project`
- MCP: `https://modelcontextprotocol.io/`
- A2A: `https://github.com/google-a2a/A2A`
