// max heap implementation

class maxHeap {
  constructor(initialArray = []) {
    this.heap = [...initialArray];

    this.buildHeap();
  }

  // get parentIndex
  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  // get left child index
  leftChildIndex(i) {
    return 2 * i + 1;
  }

  // get right child index
  rightChildIndex(i) {
    return 2 * i + 2;
  }

  // swap two element
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
