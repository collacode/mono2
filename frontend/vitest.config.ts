import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: false,
    coverage: {
      reporter: ["text", "html"],
    },
    environment: "jsdom",
    include: ["**/*.test.tsx"],
  },
});
