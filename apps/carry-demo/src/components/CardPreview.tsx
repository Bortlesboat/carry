import type { CarryCard } from "@carry/spec";
import type { CarryScope } from "@carry/sdk-js";

type CardPreviewProps = {
  card: CarryCard;
  selectedScopes: CarryScope[];
};

export function CardPreview({ card, selectedScopes }: CardPreviewProps) {
  return (
    <section>
      <p className="section-label">Preview</p>
      <div className="preview-list">
        {selectedScopes.map((scope) => (
          <article className="preview-card" key={scope}>
            <h2>{scope}</h2>
            <pre>{JSON.stringify(card[scope], null, 2)}</pre>
          </article>
        ))}
      </div>
    </section>
  );
}
