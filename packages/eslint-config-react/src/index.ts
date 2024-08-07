import { fixupPluginRules } from "@eslint/compat";
import eslint from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";
import globals from "globals";
import tseslint, { type Config } from "typescript-eslint";

type NoPromise<T> = T extends Promise<unknown> ? never : T;

const config: NoPromise<Config> = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierRecommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { ignoreRestSiblings: true, argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-unnecessary-condition": ["warn"],
      "@typescript-eslint/restrict-template-expressions": ["warn", { allowNumber: true }],
      "@typescript-eslint/ban-ts-comment": ["error", { minimumDescriptionLength: 3 }],
    },
  },
  {
    files: ["*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": fixupPluginRules(reactHooks),
      "react-refresh": fixupPluginRules(reactRefresh),
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ["*.{mock,spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
    plugins: {
      vitest,
      "testing-library": fixupPluginRules(testingLibrary),
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
);

export default config;
