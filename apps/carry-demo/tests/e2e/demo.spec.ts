import { expect, test } from "@playwright/test";

test("demo shows a provider export bridged into carry and imported into gemini", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /load claude export/i }).click();
  await page.getByRole("button", { name: /bridge into carry/i }).click();
  await page.getByRole("button", { name: /import into gemini/i }).click();
  await expect(page.getByText(/bring your ai self with you/i)).toBeVisible();
  await expect(page.getByText(/carry profile ready/i)).toBeVisible();
  await expect(page.getByText(/understands your core profile/i)).toBeVisible();
});
