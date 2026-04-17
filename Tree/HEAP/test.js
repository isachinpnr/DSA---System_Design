// // max heap implementation

// class MaxHeap {
//   // Constructor takes an optional initial array.
//   // If provided, it builds a max-heap from it using buildHeap.
//   constructor(initialArray = []) {
//     // We store the heap in a plain array. We'll mutate this array directly.
//     this.heap = [...initialArray]; // create a copy to avoid side effects
//     // Build the heap from the copied array.
//     this.buildHeap();
//   }

//   // Helper: Get parent index for a given index (0‑based)
//   parentIndex(i) {
//     return Math.floor((i - 1) / 2);
//   }

//   // Helper: Get left child index
//   leftChildIndex(i) {
//     return 2 * i + 1;
//   }

//   // Helper: Get right child index
//   rightChildIndex(i) {
//     return 2 * i + 2;
//   }

//   // Helper: Swap two elements in the heap array
//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }

//   // The core operation: fix the max‑heap property downwards from a given index.
//   // Assumes that both left and right subtrees (if they exist) are already valid max‑heaps.
//   heapifyDown(index) {
//     const size = this.heap.length;
//     let current = index;

//     while (true) {
//       let largest = current; // assume current is the largest among parent + children
//       const left = this.leftChildIndex(current);
//       const right = this.rightChildIndex(current);

//       // If left child exists and is greater than current largest, update largest
//       if (left < size && this.heap[left] > this.heap[largest]) {
//         largest = left;
//       }

//       // If right child exists and is greater than current largest, update largest
//       if (right < size && this.heap[right] > this.heap[largest]) {
//         largest = right;
//       }

//       // If the largest is still the current node, heap property is satisfied
//       if (largest === current) {
//         break;
//       }

//       // Otherwise, swap current with the largest child and move down
//       this.swap(current, largest);
//       current = largest;
//     }
//   }

//   // Build a max‑heap from the current array using bottom‑up heapifyDown.
//   // Leaves are already valid heaps (no children), so we start from the last non‑leaf node.
//   buildHeap() {
//     const size = this.heap.length;
//     // Last non‑leaf index = Math.floor(size / 2) - 1
//     const startIndex = Math.floor(size / 2) - 1;

//     // Loop from the last non‑leaf down to the root (inclusive)
//     for (let i = startIndex; i >= 0; i--) {
//       this.heapifyDown(i);
//     }
//   }

//   // Utility to view the heap array (for tracing)
//   print() {
//     console.log(this.heap);
//   }
// }

// // ---------------------------
// // Example usage with tracing
// // ---------------------------
// const inputArray = [4, 1, 7, 3, 8, 5];
// console.log("Input array:", inputArray);

// const maxHeap = new MaxHeap(inputArray);
// console.log("Built max‑heap:");
// maxHeap.print(); // Expected output: [8, 4, 7, 3, 1, 5] (or similar valid max‑heap)

class MaxHeap {
  constructor(initialArray = []) {
    this.heap = [...initialArray];
    this.buildHeap();
  }

  // ------------------- Index Helpers --------------------
  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return 2 * i + 1;
  }

  rightChildIndex(i) {
    return 2 * i + 2;
  }

  // ------------------- Swap Utility ---------------------
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // ------------------- Core Operations ------------------
  // Restore max‑heap property downwards from a given index
  heapifyDown(index) {
    const size = this.heap.length;
    let current = index;

    while (true) {
      let largest = current;
      const left = this.leftChildIndex(current);
      const right = this.rightChildIndex(current);

      if (left < size && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < size && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === current) {
        break;
      }

      this.swap(current, largest);
      current = largest;
    }
  }

  // Restore max‑heap property upwards from a given index
  heapifyUp(index) {
    let current = index;

    while (current > 0) {
      const parent = this.parentIndex(current);

      // If parent is smaller, swap; otherwise we're done
      if (this.heap[parent] < this.heap[current]) {
        this.swap(parent, current);
        current = parent;
      } else {
        break;
      }
    }
  }

  // Build a heap from the existing array (bottom‑up heapifyDown)
  buildHeap() {
    const size = this.heap.length;
    const startIndex = Math.floor(size / 2) - 1;

    for (let i = startIndex; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // ------------------- Public Methods --------------------
  // Insert a new value into the heap
  insert(value) {
    // Step 1: Add the new value at the end
    this.heap.push(value);

    // Step 2: Fix the heap property upwards from the new leaf
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the maximum element (the root)
  extractMax() {
    const size = this.heap.length;

    if (size === 0) {
      // Heap is empty; return null or throw an error
      return null;
    }

    if (size === 1) {
      // Only one element: simply pop and return it
      return this.heap.pop();
    }

    // Step 1: Store the root value (max)
    const max = this.heap[0];

    // Step 2: Replace the root with the last element
    this.heap[0] = this.heap.pop();

    // Step 3: Restore heap property downwards from the root
    this.heapifyDown(0);

    // Step 4: Return the saved max value
    return max;
  }

  // Return the maximum value without removing it
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Return the number of elements in the heap
  size() {
    return this.heap.length;
  }

  // Utility: print the heap array (for tracing)
  print() {
    console.log(this.heap);
  }
}