import { describe, expect, it } from "vitest";
import module from "./../src/index";

describe("module", () => {
  it("should export an eslint config", () => {
    expect(module).toMatchSnapshot();
  });
});
