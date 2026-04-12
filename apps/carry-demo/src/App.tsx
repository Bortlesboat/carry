import { startTransition, useState } from "react";
import {
  buildBridgePlan,
  prepareImportBundle,
  runCompatibilityCheck,
  type CarryScope
} from "@carry/sdk-js";
import { minimalExampleCard, type CarryCard } from "@carry/spec";
import { AssistantPane } from "./components/AssistantPane";
import { CardPreview } from "./components/CardPreview";
import { Hero } from "./components/Hero";
import { MigrationFlow } from "./components/MigrationFlow";
import { importToAssistant } from "./lib/fakeAssistants";
import { claudeExportFixture } from "./lib/providerFixtures";

const defaultImportScopes: CarryScope[] = ["identity", "preferences"];
const previewScopes: CarryScope[] = ["identity", "core_truths", "preferences", "policies"];

type AssistantState = {
  scopes: CarryScope[];
  summary: string;
  pairwiseId: string;
} | null;

export default function App() {
  const [sourcePayload, setSourcePayload] = useState<unknown | null>(null);
  const [carryCard, setCarryCard] = useState<CarryCard | null>(null);
  const [suggestedScopes, setSuggestedScopes] = useState<CarryScope[]>(defaultImportScopes);
  const [bridgeWarnings, setBridgeWarnings] = useState<string[]>([]);
  const [bridgeErrors, setBridgeErrors] = useState<string[]>([]);
  const [geminiState, setGeminiState] = useState<AssistantState>(null);

  function loadClaudeExport() {
    startTransition(() => {
      setSourcePayload(claudeExportFixture);
      setCarryCard(null);
      setSuggestedScopes(defaultImportScopes);
      setBridgeWarnings([]);
      setBridgeErrors([]);
      setGeminiState(null);
    });
  }

  async function bridgeIntoCarry() {
    if (!sourcePayload) {
      return;
    }

    const [bridgePlan, compatibility] = await Promise.all([
      buildBridgePlan({
        source: "claude",
        exportPayload: sourcePayload
      }),
      runCompatibilityCheck({
        source: "claude",
        exportPayload: sourcePayload
      })
    ]);

    startTransition(() => {
      setBridgeWarnings(bridgePlan.warnings);
      setSuggestedScopes(
        bridgePlan.suggestedScopes.length > 0 ? bridgePlan.suggestedScopes : defaultImportScopes
      );
      setBridgeErrors(compatibility.errors);
      setCarryCard(compatibility.compatible ? compatibility.carryCard : null);
      setGeminiState(null);
    });
  }

  async function importIntoGemini() {
    if (!carryCard) {
      return;
    }

    const scopes = suggestedScopes.length > 0 ? suggestedScopes : defaultImportScopes;
    const bundle = await prepareImportBundle({
      card: carryCard,
      providerId: "gemini.google",
      scopes
    });
    const imported = importToAssistant(bundle);

    startTransition(() => {
      const nextState: Exclude<AssistantState, null> = {
        scopes,
        summary: imported.summary,
        pairwiseId: bundle.pairwise_id
      };
      setGeminiState(nextState);
    });
  }

  const activeCard = carryCard ?? minimalExampleCard;
  const bridgeReady = Boolean(carryCard);

  return (
    <main className="app-shell">
      <Hero />
      <section className="surface control-grid">
        <MigrationFlow
          sourceLoaded={Boolean(sourcePayload)}
          bridgeReady={bridgeReady}
          suggestedScopes={suggestedScopes}
          warnings={bridgeWarnings}
          errors={bridgeErrors}
          onLoadSource={loadClaudeExport}
          onBridge={() => {
            void bridgeIntoCarry();
          }}
        />
        <CardPreview card={activeCard} selectedScopes={previewScopes} />
      </section>
      <section className="assistant-grid">
        <AssistantPane
          title="Gemini"
          description="A target assistant receiving the bridged Carry profile instead of making you reteach your context."
          buttonLabel="Import into Gemini"
          state={geminiState}
          disabled={!bridgeReady}
          onShare={() => {
            void importIntoGemini();
          }}
        />
        <article className="surface assistant-pane">
          <p className="section-label">Portability</p>
          <p className="assistant-copy">
            Bridge once, then take the same user-owned profile between assistants, devices, and
            future AI surfaces.
          </p>
          {bridgeReady ? (
            <div className="assistant-result">
              <p className="assistant-summary">Bridge complete for Gemini import.</p>
              <p className="assistant-scopes">Suggested scopes: {suggestedScopes.join(", ")}</p>
            </div>
          ) : (
            <p className="assistant-empty">Load a provider export to build the Carry profile.</p>
          )}
        </article>
      </section>
    </main>
  );
}
