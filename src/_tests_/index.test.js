import { elevate } from "../index.js";

describe("test elevate", () => {
  it("elevate 2 ^ 2 to equal 4", () => {
    expect(elevate(2, 2)).toBe(4);
  }),
    it("multiply 2 ^ 10  to equal 1024", () => {
    expect(elevate(2, 10)).toBe(1024);
    });
});
