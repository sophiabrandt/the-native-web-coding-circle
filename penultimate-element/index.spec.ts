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
    describe("should create", () => {
      it("a singly linked list without an initial value", () => {
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

      it("a singly linked list with an inital value", () => {
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
    });

    describe("should append", () => {
      it("a new value to an empty list", () => {
        const sut = new List();
        const expectedValue = 2;
        sut.append(expectedValue);
        const actualValue = sut.head?.value;
        const expectedSize = 1;
        const actualSize = sut.size;

        expect(actualValue).toBe(actualValue);
        expect(actualSize).toBe(expectedSize);
      });

      it("a new value to a list with previous values", () => {
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
    });

    describe("should traverse", () => {
      it("any list", () => {
        const actual: Array<number> = [];
        const expected = [3, 99, 1];

        const sut = new List(3);
        sut.append(99);
        sut.append(1);
        sut.traverse((val) => actual.push(val));

        expect(actual).toEqual(expected);
      });
    });

    describe("should remove nth element from end of list", () => {
      it("for element greater than the list size", () => {
        const actual: Array<number> = [];
        const expected = [8, 1];

        const sut = new List(8);
        sut.append(1);

        sut.removeNthElementFromEndOfList(999);
        sut.traverse((val) => actual.push(val));

        expect(actual).toEqual(expected);
      });

      it("for 0th element", () => {
        const actual: Array<number> = [];
        const expected = [8, 1];

        const sut = new List(8);
        sut.append(1);

        sut.removeNthElementFromEndOfList(0);
        sut.traverse((val) => actual.push(val));

        expect(actual).toEqual(expected);
      });

      it("for first element from a list", () => {
        const actual: Array<number> = [];
        const expected = [1, 20, 0, 12];

        const sut = new List(8);
        sut.append(1);
        sut.append(20);
        sut.append(0);
        sut.append(12);

        sut.removeNthElementFromEndOfList(5);
        sut.traverse((val) => actual.push(val));

        expect(actual).toEqual(expected);
      });

      it("for first element tail should be null for an empty list", () => {
        const sut = new List(8);
        sut.removeNthElementFromEndOfList(1);
        const actual = sut.tail;
        const expected = null;

        expect(actual).toEqual(expected);
      });

      it("for last element from a list", () => {
        const actual: Array<number> = [];
        const expected = [8, 1, 20, 0];

        const sut = new List(8);
        sut.append(1);
        sut.append(20);
        sut.append(0);
        sut.append(12);

        sut.removeNthElementFromEndOfList(1);
        sut.traverse((val) => actual.push(val));

        expect(actual).toEqual(expected);
      });

      it("for nth element from a list", () => {
        const actual: Array<number> = [];
        const expected = [8, 1, 20, 12];

        const sut = new List(8);
        sut.append(1);
        sut.append(20);
        sut.append(0);
        sut.append(12);

        sut.removeNthElementFromEndOfList(2);
        sut.traverse((val) => actual.push(val));

        expect(actual).toEqual(expected);
      });
    });
  });
});
