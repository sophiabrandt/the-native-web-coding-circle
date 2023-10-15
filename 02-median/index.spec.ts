import { describe, expect, it } from "bun:test";
import { calculateRunningMedian } from ".";

describe("Index", () => {
  it("should calculate the median", () => {
    const actual = calculateRunningMedian([17, 2, 8, 27, 12, 9]);
    const expected = [17, 9.5, 8, 12.5, 12, 10.5];

    expect(actual).toEqual(expected);
  });
});
