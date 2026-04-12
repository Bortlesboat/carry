import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { minimalTemplate } from "../templates/minimal";

export async function initCommand(template: string, out: string): Promise<void> {
  if (template !== "minimal") {
    throw new Error(`Unknown template: ${template}`);
  }

  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, `${JSON.stringify(minimalTemplate, null, 2)}\n`, "utf8");
  console.log(`Created ${out}`);
}
