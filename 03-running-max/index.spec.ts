import { it, describe, expect } from "bun:test";
import { calculateRunningMax } from ".";

describe("Index", () => {
  it("throws an error when k <= 0", () => {
    expect(() => calculateRunningMax([], 0)).toThrow(
      "k must be greater than zero",
    );
  });

  it.each([
    ["zero elements", [], 1, []],
    ["list of elements equal length of list", [1, 3], 2, [3]],
    [
      "multiple elements greater than k",
      [27, 9, 17, 2, 12, 8],
      3,
      [27, 17, 17, 12],
    ],
  ])("calculates for %s", (_caseName, list, k, expected) => {
    const actual = calculateRunningMax(list, k);
    expect(actual).toEqual(expected);
  });
});
