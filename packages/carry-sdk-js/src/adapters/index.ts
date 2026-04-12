import { chatgptAdapter } from "./chatgpt";
import { claudeAdapter } from "./claude";
import { geminiAdapter } from "./gemini";
import { pamAdapter } from "./pam";
import type { CarryAdapter, CarryAdapterSource } from "./types";

export const providerAdapters: Record<CarryAdapterSource, CarryAdapter> = {
  chatgpt: chatgptAdapter,
  claude: claudeAdapter,
  gemini: geminiAdapter,
  pam: pamAdapter
};

export function getAdapter(source: CarryAdapterSource): CarryAdapter {
  return providerAdapters[source];
}
