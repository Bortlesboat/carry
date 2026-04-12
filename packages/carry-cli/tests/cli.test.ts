import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";
import { afterEach, describe, expect, it } from "vitest";

const execAsync = promisify(exec);
const createdDirs: string[] = [];

async function runCli(args: string[]) {
  const escapedArgs = args.map((arg) => `"${arg.replace(/"/g, '\\"')}"`).join(" ");
  const command = `pnpm exec tsx src/cli.ts ${escapedArgs}`;
  return execAsync(command, {
    cwd: "C:/Users/andre/OneDrive/Documents/Playground/carry/packages/carry-cli"
  });
}

afterEach(async () => {
  await Promise.all(createdDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true })));
});

describe("carry cli", () => {
  it("initializes a new card", async () => {
    const dir = await mkdtemp(join(tmpdir(), "carry-cli-"));
    createdDirs.push(dir);
    const out = join(dir, "minimal.card.json");

    const result = await runCli(["init", "--template", "minimal", "--out", out]);

    expect(result.stdout).toContain("Created");
    expect(await readFile(out, "utf8")).toContain("\"display_name\"");
  });

  it("validates a card", async () => {
    const dir = await mkdtemp(join(tmpdir(), "carry-cli-"));
    createdDirs.push(dir);
    const out = join(dir, "minimal.card.json");

    await runCli(["init", "--template", "minimal", "--out", out]);
    const result = await runCli(["validate", out]);

    expect(result.stdout).toContain("valid");
  });

  it("shares only approved scopes", async () => {
    const dir = await mkdtemp(join(tmpdir(), "carry-cli-"));
    createdDirs.push(dir);
    const out = join(dir, "minimal.card.json");

    await runCli(["init", "--template", "minimal", "--out", out]);
    const result = await runCli([
      "share",
      out,
      "--provider",
      "anthropic.com",
      "--scope",
      "identity"
    ]);

    expect(result.stdout).toContain("\"provider_id\": \"anthropic.com\"");
    expect(result.stdout).toContain("\"identity\"");
    expect(result.stdout).not.toContain("\"preferences\"");
  });
});
