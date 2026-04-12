import { describe, expect, it } from "vitest";
import * as sdk from "../src";

describe("carry bridge adapters", () => {
  it("builds a bridge plan from a provider export", async () => {
    expect(sdk).toHaveProperty("buildBridgePlan");

    const buildBridgePlan = (
      sdk as {
        buildBridgePlan?: (input: {
          source: string;
          exportPayload: unknown;
        }) => Promise<{
          normalized: {
            preferences?: {
              communication_style?: string;
            };
          };
          warnings: string[];
          suggestedScopes: string[];
        }>;
      }
    ).buildBridgePlan;

    const plan = await buildBridgePlan?.({
      source: "claude",
      exportPayload: {
        memories: ["Prefers direct communication"]
      }
    });

    expect(plan?.normalized.preferences?.communication_style).toBe("direct");
    expect(plan?.warnings).toEqual([]);
    expect(plan?.suggestedScopes).toEqual(["identity", "preferences"]);
  });

  it.each([
    ["chatgpt", { memories: ["Prefers direct communication"] }],
    ["claude", { memories: ["Prefers direct communication"] }],
    ["gemini", { saved_info: ["Prefers direct communication"] }],
    ["pam", { preferences: { communication_style: "direct" } }]
  ])("normalizes %s exports into carry fields", async (source, fixture) => {
    expect(sdk).toHaveProperty("getAdapter");

    const getAdapter = (
      sdk as {
        getAdapter?: (input: string) => {
          normalize: (payload: unknown) => Promise<{
            preferences?: {
              communication_style?: string;
            };
          }>;
        };
      }
    ).getAdapter;

    const normalized = await getAdapter?.(source)?.normalize(fixture);

    expect(normalized?.preferences?.communication_style).toBe("direct");
  });
});
