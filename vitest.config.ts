import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
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
