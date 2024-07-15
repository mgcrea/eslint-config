// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from "eslint-plugin-prettier/recommended"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);