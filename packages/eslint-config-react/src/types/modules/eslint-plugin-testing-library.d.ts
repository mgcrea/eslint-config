declare module "eslint-plugin-testing-library" {
  import type { ESLint, Linter } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    // eslint-plugin-react does not use FlatConfig yet
    configs: ESLint.Plugin["configs"] & {
      "flat/react": {
        rules: Linter.RulesRecord;
      };
    };
  };
  export default plugin;
}
