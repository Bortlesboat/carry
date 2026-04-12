import { loadCard } from "@carry/sdk-js";

export async function validateCommand(file: string): Promise<void> {
  await loadCard(file);
  console.log("Card is valid");
}
