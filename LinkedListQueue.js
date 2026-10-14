class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(element) {
    const newNode = new Node(element);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from an empty queue.");
    }

    const element = this.front.value;
    this.front = this.front.next;
    this.size--;

    if (this.front === null) {
      this.rear = null;
    }

    return element;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek at an empty queue.");
    }

    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = LinkedListQueue;
