import { defineWorkspace } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineWorkspace(["test/unit/{vite,vitest}.config.*"]);
