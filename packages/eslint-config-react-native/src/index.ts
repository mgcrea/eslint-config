import { fixupPluginRules, type FlatConfig } from "@eslint/compat";
import baseConfig from "@mgcrea/eslint-config-react";
import reactNative from "eslint-plugin-react-native";
import { globals } from "./globals";

const config = [
  ...baseConfig,
  {
    files: ["*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": fixupPluginRules(reactNative),
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals },
    },
  },
];

export default config;
