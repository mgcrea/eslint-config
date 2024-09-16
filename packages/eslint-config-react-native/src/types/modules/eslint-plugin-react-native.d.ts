declare module "@react-native/eslint-plugin" {
  import type { ESLint, Linter } from "eslint";
  const plugin: Omit<ESLint.Plugin, "configs"> & {
    // eslint-plugin-react-native does not use FlatConfig yet
    configs: ESLint.Plugin["configs"] & {
      all: {
        rules: Linter.RulesRecord;
      };
    };
  };
  export default plugin;
}
