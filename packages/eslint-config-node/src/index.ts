import eslint from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import vitest from "eslint-plugin-vitest";
import tseslint, { type Config } from "typescript-eslint";

type NoPromise<T> = T extends Promise<unknown> ? never : T;

const config: NoPromise<Config> = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierRecommended,
  {
    rules: {
      "@typescript-eslint/restrict-template-expressions": ["warn", { allowNumber: true }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { ignoreRestSiblings: true, argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-unnecessary-condition": ["warn"],
      "@typescript-eslint/ban-ts-comment": ["error", { minimumDescriptionLength: 3 }],
    },
  },
  {
    files: ["**/*.{mock,spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
);

export default config;
