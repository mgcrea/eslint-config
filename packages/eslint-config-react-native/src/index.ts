import { fixupPluginRules } from "@eslint/compat";
import baseConfig from "@mgcrea/eslint-config-react";
import reactNative from "@react-native/eslint-plugin";
import { globals } from "./globals";
import type { FlatConfig } from "@eslint/compat";

const config = [
  ...(baseConfig as FlatConfig[]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": fixupPluginRules(reactNative),
    },
    rules: {
      "react-native/platform-colors": "warn"
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals },
    },
  },
];

export default config;
