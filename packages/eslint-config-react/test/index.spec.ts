/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, expect, it } from "vitest";
const module = require("./../src/index.ts");

describe("module", () => {
  it("should export an eslint config", () => {
    expect(module).toMatchSnapshot();
  });
});
