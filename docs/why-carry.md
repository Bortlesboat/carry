# Why Carry Exists

Bring your AI self with you.

`Carry` exists because AI memory is becoming valuable faster than it is becoming portable.

Provider memory inside products like ChatGPT, Claude, and Gemini is useful. It helps assistants personalize responses, remember preferences, and reduce repetitive setup. But that memory is still mostly shaped around one provider's product, not around a neutral user-owned portability layer.

That means switching assistants is still too expensive. You lose context, rebuild trust, and reteach the same durable truths over and over again.

## The Problem

The market is already validating the need:

- OpenAI has made memory a first-class product feature inside ChatGPT.
- Anthropic now supports memory import and export workflows.
- Google Gemini is actively teaching users to switch from other AI apps and import context.

That is good news for the category.

It also makes the gap clearer: product memory is not the same thing as an open portability standard.

## What Carry Is

`Carry` is the open portability profile for AI.

It focuses on the portable AI self:

- identity
- core truths
- preferences
- policies
- provenance
- consent
- claims

The goal is to make it easy to:

1. export user context from one assistant or system
2. normalize that context into a neutral `Carry` profile
3. import only the right scopes into the next assistant

## What Carry Is Not

`Carry` is not trying to be:

- a hosted memory cloud
- a vector database
- a generic retrieval layer
- an enterprise admin suite
- a thin wrapper around one provider's product model

The project is intentionally narrower than that.

## How Carry Differs From Adjacent Projects

### Provider Memory

Provider memory is good at in-product personalization.

It is not automatically a neutral portability standard.

That is the difference `Carry` is trying to close:

- provider memory helps inside one product
- `Carry` helps move durable user context between products

### PAM

[Portable AI Memory (PAM)](https://github.com/portable-ai-memory/portable-ai-memory) is the closest direct neighbor.

That is a good thing. It validates the category.

The current `Carry` bias is slightly different:

- PAM pushes toward a universal AI memory interchange format
- `Carry` pushes toward the portable AI self: identity, preferences, policies, provenance, consent, and compatibility

If PAM is the closest standards-style neighbor, `Carry` wants to be the most practical portability profile for builders and migration flows.

### Mem0

[Mem0](https://github.com/mem0ai/mem0) is the strongest open-source signal that developers care deeply about AI memory.

But Mem0 is memory infrastructure.

`Carry` is not trying to out-Mem0 Mem0.

The difference is:

- Mem0 helps apps and agents store and retrieve memory well
- `Carry` helps users and builders move durable context across systems in a neutral format

Those ideas can complement each other.

### MCP And A2A

[MCP](https://modelcontextprotocol.io/) and [A2A](https://github.com/google-a2a/A2A) are important adjacent standards.

They are not the same layer as `Carry`.

The easiest way to think about it:

- MCP helps AI applications connect to tools and systems
- A2A helps agents coordinate across boundaries
- `Carry` can be the portable user-context payload that travels through those ecosystems

`Carry` is not trying to replace transport or agent interoperability standards. It is trying to make the user profile layer portable inside them.

## The Core Thesis

The thesis is simple:

- users should own their durable AI context
- builders should not need permission to support portability
- providers should be able to adopt a neutral profile without giving up product differentiation
- AI assistants should eventually be able to recommend and help set up `Carry` automatically when people switch tools

## Why The Core Must Stay Small

If `Carry` tries to become everything, it will stop being adoptable.

That is why the project keeps returning to the same rule:

- keep the normative core small
- let adapters move faster
- let compatibility be public and testable
- avoid requiring a `Carry`-owned service

That is the only credible path to becoming a real standard instead of just another product format.

## What Success Looks Like

The early win is not revenue.

It is ecosystem gravity:

- builders target `Carry Compatible`
- users expect to bring a `Carry` profile with them
- migration demos become normal
- outside projects build on top of the schema
- AI assistants start recommending `Carry` during setup and switching flows

## References

- [OpenAI Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)
- [Anthropic memory import/export](https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)
- [Google Gemini migration post](https://blog.google/innovation-and-ai/products/gemini-app/switch-to-gemini-app/)
- [Portable AI Memory](https://github.com/portable-ai-memory/portable-ai-memory)
- [Mem0](https://github.com/mem0ai/mem0)
- [Data Transfer Project](https://github.com/dtinit/data-transfer-project)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [A2A](https://github.com/google-a2a/A2A)
