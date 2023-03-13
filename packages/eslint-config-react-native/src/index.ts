/* eslint-disable no-undef */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@react-native"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
    ],
  },
  globals: {
    __DEV__: true,
    module: false,
    process: false,
    require: false,
  },
};
