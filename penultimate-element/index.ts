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
