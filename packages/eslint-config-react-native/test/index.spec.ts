import { describe, expect, it } from "vitest";
import * as module from "./..";

describe("module", () => {
  it("should export an eslint config", () => {
    expect(module).toMatchSnapshot();
  });
});
