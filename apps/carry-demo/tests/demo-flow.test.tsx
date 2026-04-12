// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect } from "vitest";
import App from "../src/App";

it("bridges a provider export into a carry profile and imports it into a target assistant", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("button", { name: /load claude export/i }));
  await userEvent.click(screen.getByRole("button", { name: /bridge into carry/i }));
  await userEvent.click(screen.getByRole("button", { name: /import into gemini/i }));

  expect(screen.getByText(/carry profile ready/i)).toBeTruthy();
  expect(screen.getByText(/understands your core profile/i)).toBeTruthy();
});
