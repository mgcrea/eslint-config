import { fixupPluginRules } from "@eslint/compat";
import baseConfig from "@mgcrea/eslint-config-react";
import reactNative from "@react-native/eslint-plugin";
import type { Linter } from "eslint";
import { globals } from "./globals";

const config = [
  ...baseConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": fixupPluginRules(reactNative),
    },
    rules: {
      "react-native/platform-colors": "warn",
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals },
    },
  },
] satisfies Linter.Config[];

export default config;
