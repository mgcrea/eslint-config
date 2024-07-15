declare module "eslint-plugin-react-native" {
  import type { ESLint, Linter } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    // eslint-plugin-react does not use FlatConfig yet
    configs: ESLint.Plugin["configs"] & {
      recommended: {
        rules: Linter.RulesRecord;
      };
    };
  };
  export default plugin;
}
