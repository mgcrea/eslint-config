/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@mgcrea/eslint-config-react", "plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
  rules: {},
};
