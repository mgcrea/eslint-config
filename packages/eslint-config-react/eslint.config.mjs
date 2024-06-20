// @ts-check

import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier"
import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    files: [ "**/*.ts" ],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs["recommended"]?.rules,
      ...prettierPlugin.configs["recommended"]?.rules,
    }
  },
];
