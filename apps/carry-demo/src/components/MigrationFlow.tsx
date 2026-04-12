import type { CarryScope } from "@carry/sdk-js";

type MigrationFlowProps = {
  sourceLoaded: boolean;
  bridgeReady: boolean;
  suggestedScopes: CarryScope[];
  warnings: string[];
  errors: string[];
  onLoadSource: () => void;
  onBridge: () => void;
};

export function MigrationFlow({
  sourceLoaded,
  bridgeReady,
  suggestedScopes,
  warnings,
  errors,
  onLoadSource,
  onBridge
}: MigrationFlowProps) {
  return (
    <section>
      <p className="section-label">Migration path</p>
      <div className="flow-list">
        <article className="flow-step">
          <h2>1. Load Claude export</h2>
          <p className="assistant-copy">
            Start with memory a user already built up somewhere else instead of reteaching it from
            scratch.
          </p>
          <button className="share-button" onClick={onLoadSource} type="button">
            Load Claude export
          </button>
          <p className="step-status">
            {sourceLoaded ? "Claude export loaded." : "Demo fixture waiting to be loaded."}
          </p>
        </article>
        <article className="flow-step">
          <h2>2. Bridge into Carry</h2>
          <p className="assistant-copy">
            Normalize that provider export into a user-owned Carry profile with portable scopes.
          </p>
          <button className="share-button" disabled={!sourceLoaded} onClick={onBridge} type="button">
            Bridge into Carry
          </button>
          <p className="step-status">
            {bridgeReady ? "Carry profile ready" : "Bridge the loaded export to create the profile."}
          </p>
        </article>
      </div>
      {bridgeReady ? (
        <p className="step-note">Suggested scopes for the first handoff: {suggestedScopes.join(", ")}</p>
      ) : null}
      {warnings.map((warning) => (
        <p className="step-note" key={warning}>
          Warning: {warning}
        </p>
      ))}
      {errors.map((error) => (
        <p className="step-note" key={error}>
          Validation: {error}
        </p>
      ))}
    </section>
  );
}
