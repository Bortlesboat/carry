import type { CarryScope } from "@carry/sdk-js";

type AssistantPaneProps = {
  title: string;
  description: string;
  buttonLabel: string;
  disabled?: boolean;
  state: {
    scopes: CarryScope[];
    summary: string;
    pairwiseId: string;
  } | null;
  onShare: () => void;
};

export function AssistantPane({
  title,
  description,
  buttonLabel,
  disabled = false,
  state,
  onShare
}: AssistantPaneProps) {
  return (
    <article className="surface assistant-pane">
      <p className="section-label">{title}</p>
      <p className="assistant-copy">{description}</p>
      <button className="share-button" disabled={disabled} onClick={onShare} type="button">
        {buttonLabel}
      </button>
      {state ? (
        <div className="assistant-result">
          <p className="assistant-summary">{state.summary}</p>
          <p className="assistant-scopes">Scopes: {state.scopes.join(", ")}</p>
          <p className="assistant-scopes">Pairwise ID: {state.pairwiseId.slice(0, 18)}...</p>
        </div>
      ) : (
        <p className="assistant-empty">No card shared yet.</p>
      )}
    </article>
  );
}
