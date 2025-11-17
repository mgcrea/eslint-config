import baseConfig from "@mgcrea/eslint-config-react";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

const config = defineConfig(...baseConfig, ...eslintPluginAstro.configs["flat/recommended"]);

export default config;
