class MinHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    if (
      element === null ||
      typeof element !== "object" ||
      !Number.isFinite(element.priority)
    ) {
      throw new Error(
        "Element must be an object with a finite numeric priority.",
      );
    }

    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex].priority <= this.heap[index].priority) {
        break;
      }

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Cannot extract from an empty priority queue.");
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minElement = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.bubbleDown(0);

    return minElement;
  }

  bubbleDown(index) {
    const length = this.heap.length;

    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftIndex < length &&
        this.heap[leftIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = leftIndex;
      }

      if (
        rightIndex < length &&
        this.heap[rightIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === index) {
        break;
      }

      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];

      index = smallestIndex;
    }
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek at an empty priority queue.");
    }

    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

module.exports = MinHeapPriorityQueue;
