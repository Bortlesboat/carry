import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ["tests/**/*.test.ts", "packages/**/*.test.ts", "apps/**/*.test.ts?(x)"]
        }
      }
    ]
  }
});
