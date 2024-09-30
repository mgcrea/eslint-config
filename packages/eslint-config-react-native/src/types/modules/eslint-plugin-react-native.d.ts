declare module "@react-native/eslint-plugin" {
  import type { ESLint, Linter } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    rules: Linter.RulesRecord;
  };
  export default plugin;
}
