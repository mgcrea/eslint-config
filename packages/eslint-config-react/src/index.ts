/* eslint-disable no-undef */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.{spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
    ],
  },
};
