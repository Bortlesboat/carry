import { readFile } from "node:fs/promises";
import { buildBridgePlan, type CarryAdapterSource } from "@carry/sdk-js";

export async function bridgeCommand(file: string, source: CarryAdapterSource): Promise<void> {
  const exportPayload = JSON.parse(await readFile(file, "utf8")) as unknown;
  const plan = await buildBridgePlan({
    source,
    exportPayload
  });

  console.log(JSON.stringify(plan, null, 2));
}
