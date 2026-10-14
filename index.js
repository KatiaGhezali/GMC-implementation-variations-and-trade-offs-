const ArrayQueue = require("./ArrayQueue");
const LinkedListQueue = require("./LinkedListQueue");
const MinHeapPriorityQueue = require("./MinHeapPriorityQueue");
const OrderedArrayPriorityQueue = require("./OrderedArrayPriorityQueue");

// 1. ARRAY-BASED QUEUE

console.log("=== Array-Based Queue ===");

const arrayQueue = new ArrayQueue(3);

arrayQueue.enqueue(10);
arrayQueue.enqueue(20);
arrayQueue.enqueue(30);

console.log("Front element:", arrayQueue.peek()); // 10
console.log("Removed:", arrayQueue.dequeue()); // 10
console.log("Front after dequeue:", arrayQueue.peek()); // 20
console.log("Is empty:", arrayQueue.isEmpty()); // false

arrayQueue.enqueue(40);

console.log("Removed:", arrayQueue.dequeue()); // 20
console.log("Removed:", arrayQueue.dequeue()); // 30
console.log("Removed:", arrayQueue.dequeue()); // 40
console.log("Is empty:", arrayQueue.isEmpty()); // true

// Test inserting into a full queue.
try {
  arrayQueue.enqueue(50);
  arrayQueue.enqueue(60);
  arrayQueue.enqueue(70);
  arrayQueue.enqueue(80);
} catch (error) {
  console.log("Expected error:", error.message);
}

// Test peeking at an empty queue.
try {
  arrayQueue.peek();
} catch (error) {
  console.log("Expected error:", error.message);
}

// 2. LINKED LIST-BASED QUEUE

console.log("\n=== Linked List-Based Queue ===");

const linkedQueue = new LinkedListQueue();

linkedQueue.enqueue("A");
linkedQueue.enqueue("B");
linkedQueue.enqueue("C");

console.log("Front element:", linkedQueue.peek()); // A
console.log("Removed:", linkedQueue.dequeue()); // A
console.log("Front after dequeue:", linkedQueue.peek()); // B

linkedQueue.enqueue("D");

console.log("Removed:", linkedQueue.dequeue()); // B
console.log("Removed:", linkedQueue.dequeue()); // C
console.log("Removed:", linkedQueue.dequeue()); // D
console.log("Is empty:", linkedQueue.isEmpty()); // true

// Test dequeuing from an empty queue.
try {
  linkedQueue.dequeue();
} catch (error) {
  console.log("Expected error:", error.message);
}

// 3. MIN-HEAP PRIORITY QUEUE

console.log("\n=== Min-Heap Priority Queue ===");

const minHeapQueue = new MinHeapPriorityQueue();

minHeapQueue.insert({ value: "Task A", priority: 3 });
minHeapQueue.insert({ value: "Task B", priority: 1 });
minHeapQueue.insert({ value: "Task C", priority: 2 });

console.log("Minimum:", minHeapQueue.peekMin());
// { value: "Task B", priority: 1 }

console.log("Extracted:", minHeapQueue.extractMin());
// { value: "Task B", priority: 1 }

console.log("Next minimum:", minHeapQueue.peekMin());
// { value: "Task C", priority: 2 }

console.log("Extracted:", minHeapQueue.extractMin());
// { value: "Task C", priority: 2 }

console.log("Extracted:", minHeapQueue.extractMin());
// { value: "Task A", priority: 3 }

console.log("Is empty:", minHeapQueue.isEmpty()); // true

// Test extracting from an empty priority queue.
try {
  minHeapQueue.extractMin();
} catch (error) {
  console.log("Expected error:", error.message);
}

// 4. ORDERED ARRAY PRIORITY QUEUE

console.log("\n=== Ordered Array Priority Queue ===");

const orderedQueue = new OrderedArrayPriorityQueue();

orderedQueue.insert({ value: "Task A", priority: 3 });
orderedQueue.insert({ value: "Task B", priority: 1 });
orderedQueue.insert({ value: "Task C", priority: 2 });

console.log("Minimum:", orderedQueue.peekMin());
// { value: "Task B", priority: 1 }

console.log("Extracted:", orderedQueue.extractMin());
// { value: "Task B", priority: 1 }

console.log("Next minimum:", orderedQueue.peekMin());
// { value: "Task C", priority: 2 }

console.log("Extracted:", orderedQueue.extractMin());
// { value: "Task C", priority: 2 }

console.log("Extracted:", orderedQueue.extractMin());
// { value: "Task A", priority: 3 }

console.log("Is empty:", orderedQueue.isEmpty()); // true

// Test peeking at an empty priority queue.
try {
  orderedQueue.peekMin();
} catch (error) {
  console.log("Expected error:", error.message);
}
