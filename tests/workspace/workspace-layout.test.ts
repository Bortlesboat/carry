import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("workspace layout", () => {
  it("declares packages and apps workspaces", () => {
    const workspace = readFileSync("pnpm-workspace.yaml", "utf8");
    expect(workspace).toContain("packages/*");
    expect(workspace).toContain("apps/*");
  });
});
