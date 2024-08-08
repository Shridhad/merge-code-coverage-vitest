import { defineProject } from "vitest/config";

const testConfig = defineProject({
  test: {
    include: ["./*.test.js"],
  },
});

export default testConfig;
