export interface INode<T> {
  value: T;
  next: INode<T> | null;
}

export class Node<T> implements INode<T> {
  readonly next: INode<T> | null;
  constructor(readonly value: T) {
    this.next = null;
  }
}

export class List<T> {
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

  removeNthElementFromEndOfList(n: number): void {
    // if n is greater than the length of the list,
    // or n is 0 (remove the last element of a list)
    // do nothing
    if (n > this.size || n === 0) {
      return;
    }

    if (n === this.size) {
      // if n is equal to the size of the list, remove the first element
      this.head = this.head?.next ?? null;
      if (!this.head) {
        // list is empty, so set the tail to null, too
        this.tail = null;
      }
    } else {
      let indexToRemove = this.size - n;
      let currentNode = this.head;
      let previousNode = null;

      // traverse until we reach the node to remove
      for (let i = 0; i < indexToRemove; i++) {
        previousNode = currentNode;
        currentNode = currentNode?.next ?? null;
      }

      // remove the node
      // edge cases were handled previously,
      // so there should always be a previous
      // node and a current node with non-null
      // next pointers
      previousNode!.next = currentNode!.next;
    }
    this.size--;
  }
}
