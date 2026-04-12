import type { CarryScope } from "@carry/sdk-js";

type ScopePickerProps = {
  availableScopes: CarryScope[];
  selectedScopes: CarryScope[];
  onToggle: (scope: CarryScope) => void;
};

export function ScopePicker({ availableScopes, selectedScopes, onToggle }: ScopePickerProps) {
  return (
    <section>
      <p className="section-label">Sharing scopes</p>
      <div className="scope-list">
        {availableScopes.map((scope) => (
          <label className="scope-chip" key={scope}>
            <input
              checked={selectedScopes.includes(scope)}
              onChange={() => onToggle(scope)}
              type="checkbox"
            />
            <span>{scope}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
