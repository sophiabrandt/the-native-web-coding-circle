import { describe, expect, it } from "bun:test";
import { List, Node } from ".";

describe("Index", () => {
  describe("Node", () => {
    it("should create a new node", () => {
      const expected = 3;
      const node = new Node(expected);
      const actual = node.value;

      expect(actual).toBe(expected);
    });
  });

  describe("List", () => {
    it("should create a singly linked list without an initial value", () => {
      const sut = new List();
      const expectedHeadValue = null;
      const actualHeadValue = sut.head;
      const actualTailValue = sut.tail;
      const expectedSize = 0;
      const actualSize = sut.size;

      expect(actualHeadValue).toBe(expectedHeadValue);
      expect(actualTailValue).toBe(expectedHeadValue);
      expect(actualSize).toBe(expectedSize);
    });

    it("should create a singly linked list with an inital value", () => {
      const expectedHeadValue = 99;
      const sut = new List(expectedHeadValue);
      const actualHeadValue = sut.head?.value;
      const actualTailValue = sut.tail?.value;
      const expectedSize = 1;
      const actualSize = sut.size;

      expect(actualHeadValue).toBe(expectedHeadValue);
      expect(actualTailValue).toBe(expectedHeadValue);
      expect(actualSize).toBe(expectedSize);
    });

    it("should append a new value to an empty list", () => {
      const sut = new List();
      const expectedValue = 2;
      sut.append(expectedValue);
      const actualValue = sut.head?.value;
      const expectedSize = 1;
      const actualSize = sut.size;

      expect(actualValue).toBe(actualValue);
      expect(actualSize).toBe(expectedSize);
    });

    it("should append a new value to a list with previous values", () => {
      const sut = new List(4);
      const expectedValue = 2;
      sut.append(8);
      sut.append(expectedValue);
      const actualValue = sut.head?.next?.next?.value;
      const expectedSize = 3;
      const actualSize = sut.size;

      expect(actualValue).toBe(actualValue);
      expect(actualSize).toBe(expectedSize);
    });

    it("should traverse a list", () => {
      const actual: Array<number> = [];
      const expected = [3, 99, 1];

      const sut = new List(3);
      sut.append(99);
      sut.append(1);
      sut.traverse((val) => actual.push(val));

      expect(actual).toEqual(expected);
    });
  });
});
