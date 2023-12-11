/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.{js,jsx,ts,tsx}"],
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      plugins: ["react-refresh"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["*.{spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
      extends: ["plugin:testing-library/react", "plugin:vitest/recommended"],
      rules: {
        "vitest/no-focused-tests": ["error"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
};
