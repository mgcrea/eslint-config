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

const config: Config = tseslint.config(
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
    },
  },
);

export default config as Config[];

/** @type {import('eslint').Linter.Config} */
// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:prettier/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     warnOnUnsupportedTypeScriptVersion: false,
//   },
//   plugins: ["@typescript-eslint"],
//   overrides: [
//     {
//       files: ["*.{js,jsx,ts,tsx}"],
//       extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
//       plugins: ["react-refresh"],
//       rules: {
//         "react/react-in-jsx-scope": "off",
//         "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
//       },
//       settings: {
//         react: {
//           version: "detect",
//         },
//       },
//     },
//     {
//       files: ["*.{spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
//       extends: ["plugin:testing-library/react", "plugin:vitest/recommended"],
//       rules: {
//         "vitest/no-focused-tests": ["error"],
//       },
//     },
//   ],
//   rules: {
//     "@typescript-eslint/no-unused-vars": [
//       "warn",
//       { ignoreRestSiblings: true, argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
//     ],
//   },
// };
