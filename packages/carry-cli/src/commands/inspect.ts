import { loadCard } from "@carry/sdk-js/node";

export async function inspectCommand(file: string): Promise<void> {
  const card = await loadCard(file);
  console.log(
    JSON.stringify(
      {
        sections: Object.keys(card),
        display_name: card.identity.display_name,
        always_share: card.policies.always_share
      },
      null,
      2
    )
  );
}
