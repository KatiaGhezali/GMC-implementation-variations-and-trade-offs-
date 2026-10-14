class OrderedArrayPriorityQueue {
  constructor() {
    this.items = [];
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

    // Find the insertion position using binary search.
    let left = 0;
    let right = this.items.length;

    while (left < right) {
      const middle = Math.floor((left + right) / 2);

      if (this.items[middle].priority <= element.priority) {
        left = middle + 1;
      } else {
        right = middle;
      }
    }

    // Insert while keeping the array sorted.
    this.items.splice(left, 0, element);
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Cannot extract from an empty priority queue.");
    }

    return this.items.shift();
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Cannot peek at an empty priority queue.");
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = OrderedArrayPriorityQueue;
