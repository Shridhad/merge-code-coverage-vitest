// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/unit/*.test.js"],
    coverage: {
      clean: true,
      enabled: true,
      include: ["src/**"],
      reportsDirectory: "./coverage-reports/vitest",
    },
  },
});
