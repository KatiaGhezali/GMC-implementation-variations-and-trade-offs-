class ArrayQueue {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Capacity must be a positive integer.");
    }

    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(element) {
    if (this.size === this.capacity) {
      throw new Error("Queue is full.");
    }

    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue from an empty queue.");
    }

    const element = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return element;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek at an empty queue.");
    }

    return this.items[this.front];
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = ArrayQueue;
