import { fixupPluginRules } from "@eslint/compat";
import baseConfig from "@mgcrea/eslint-config-react";
import reactNative from "@react-native/eslint-plugin";
import { defineConfig } from "eslint/config";
import { globals } from "./globals";

const config = defineConfig(...baseConfig, {
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: {
    "react-native": fixupPluginRules(reactNative),
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "react-native/platform-colors": "warn",
    "@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false, variables: false } },
    ],
  },
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
    globals: { ...globals },
  },
});

export default config;
