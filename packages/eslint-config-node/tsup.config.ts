import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "node20",
  experimentalDts: true,
  clean: true,
});

export default tsupConfig;
