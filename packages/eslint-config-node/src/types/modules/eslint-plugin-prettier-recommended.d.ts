declare module "eslint-plugin-prettier/recommended" {
  import type { Linter } from "eslint";
  const js: { readonly rules: Readonly<Linter.RulesRecord> };
  export default js;
}
