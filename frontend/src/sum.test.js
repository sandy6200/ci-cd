import { sum } from "./sum.js";

describe("sum", () => {
  test("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(sum(-3, -2)).toBe(-5);
  });
});
