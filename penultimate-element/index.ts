export interface INode<T> {
  value: T;
  next: INode<T> | null;
}

export interface SinglyLinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  append(value: T): void;
  traverse(callback: (value: T) => void): void;
  size: number;
}

export class Node<T> implements INode<T> {
  readonly next: INode<T> | null;
  constructor(readonly value: T) {
    this.next = null;
  }
}

export class List<T> implements SinglyLinkedList<T> {
  head: INode<T> | null = null;
  tail: INode<T> | null = null;
  size: number = 0;

  constructor(initialValue?: T) {
    if (initialValue !== undefined) {
      const newNode = new Node(initialValue);
      this.head = newNode;
      this.tail = newNode;
      this.size = 1;
    }
  }

  append(value: T): void {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  traverse(callback: (value: T) => void): void {
    let currentNode = this.head;
    while (currentNode !== null) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
