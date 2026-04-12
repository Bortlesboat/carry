import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import * as sdk from "../../packages/carry-sdk-js/src";

describe("carry compatibility suite", () => {
  it.each([
    ["chatgpt", "tests/compatibility/fixtures/chatgpt-export.json"],
    ["claude", "tests/compatibility/fixtures/claude-export.json"],
    ["gemini", "tests/compatibility/fixtures/gemini-export.json"],
    ["pam", "tests/compatibility/fixtures/pam-export.json"]
  ])("marks %s fixtures as carry compatible", async (source, fixturePath) => {
    expect(sdk).toHaveProperty("runCompatibilityCheck");

    const runCompatibilityCheck = (
      sdk as {
        runCompatibilityCheck?: (input: {
          source: string;
          exportPayload: unknown;
        }) => Promise<{ compatible: boolean }>;
      }
    ).runCompatibilityCheck;

    const fixture = JSON.parse(
      await readFile(fixturePath, "utf8")
    );
    const result = await runCompatibilityCheck?.({
      source,
      exportPayload: fixture
    });

    expect(result?.compatible).toBe(true);
  });
});
