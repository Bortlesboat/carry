import { readFile } from "node:fs/promises";
import { runCompatibilityCheck, type CarryAdapterSource } from "@carry/sdk-js";

export async function compatCommand(file: string, source: CarryAdapterSource): Promise<void> {
  const exportPayload = JSON.parse(await readFile(file, "utf8")) as unknown;
  const result = await runCompatibilityCheck({
    source,
    exportPayload
  });

  if (result.compatible) {
    console.log("Carry Compatible");
    return;
  }

  console.log("Not Carry Compatible");
  console.log(JSON.stringify(result.errors, null, 2));
}
