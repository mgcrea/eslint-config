declare module "@vitest/eslint-plugin" {
  import type { ESLint, Linter } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    configs: ESLint.Plugin["configs"] & {
      recommended: {
        rules: Linter.RulesRecord;
      };
    };
  };
  export default plugin;
}
