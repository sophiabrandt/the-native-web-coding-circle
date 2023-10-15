import { describe, expect, it } from "bun:test";
import { Node } from ".";

describe("Index", () => {
  describe("Node", () => {
    it("should create a new node", () => {
      const expected = 3;
      const node = new Node(expected);
      const actual = node.value;

      expect(actual).toBe(expected);
    });
  });
});
