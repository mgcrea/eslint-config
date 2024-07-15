import baseConfig from "@mgcrea/eslint-config-react";
import eslintPluginAstro from "eslint-plugin-astro";
import type { Config } from "typescript-eslint";

const config = [...baseConfig, ...eslintPluginAstro.configs["flat/recommended"]] as Config[];

export default config;
