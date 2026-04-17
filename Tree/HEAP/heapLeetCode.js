// LeetCode Problem : 1046 : Last Stone Weight

// var lastStoneWeight = function(stones) {
//   // Create heap using array and sort approach (simpler for LeetCode)
//   while (stones.length > 1) {
//     // Sort in descending order
//     stones.sort((a, b) => b - a);
    
//     // Take two largest
//     const heaviest = stones[0];
//     const secondHeaviest = stones[1];
    
//     // Remove both
//     stones.splice(0, 2);
    
//     // If not equal, add difference
//     if (heaviest !== secondHeaviest) {
//       stones.push(heaviest - secondHeaviest);
//     }
//   }
  
//   return stones.length === 0 ? 0 : stones[0];
// };

// LeetCode Problem : 215 : Kth Largest Element In Array 

// var findKthLargest = function (nums, k) {
//     // MinHeap implementation
//     class MinHeap {
//         constructor() {
//             this.heap = [];
//         }

//         insert(val) {
//             this.heap.push(val);
//             this.bubbleUp(this.heap.length - 1);
//         }

//         bubbleUp(index) {
//             while (index > 0) {
//                 const parent = Math.floor((index - 1) / 2);
//                 if (this.heap[parent] <= this.heap[index]) break;

//                 [this.heap[parent], this.heap[index]] =
//                     [this.heap[index], this.heap[parent]];
//                 index = parent;
//             }
//         }

//         extractMin() {
//             if (this.heap.length === 0) return null;
//             if (this.heap.length === 1) return this.heap.pop();

//             const min = this.heap[0];
//             this.heap[0] = this.heap.pop();
//             this.bubbleDown(0);
//             return min;
//         }

//         bubbleDown(index) {
//             const n = this.heap.length;

//             while (true) {
//                 let smallest = index;
//                 const left = 2 * index + 1;
//                 const right = 2 * index + 2;

//                 if (left < n && this.heap[left] < this.heap[smallest]) {
//                     smallest = left;
//                 }
//                 if (right < n && this.heap[right] < this.heap[smallest]) {
//                     smallest = right;
//                 }

//                 if (smallest === index) break;

//                 [this.heap[index], this.heap[smallest]] =
//                     [this.heap[smallest], this.heap[index]];
//                 index = smallest;
//             }
//         }

//         size() {
//             return this.heap.length;
//         }

//         peek() {
//             return this.heap[0];
//         }
//     }

//     // Create min heap of size k
//     const minHeap = new MinHeap();

//     for (let num of nums) {
//         minHeap.insert(num);

//         // Keep only k largest elements
//         if (minHeap.size() > k) {
//             minHeap.extractMin();
//         }
//     }

//     // The root is the kth largest
//     return minHeap.peek();
// };

// LeetCode Problem 23 : Merge K Sorted List

// var mergeKLists = function(lists) {
//   if (!lists || lists.length === 0) return null;
  
//   // Custom MinHeap implementation
//   class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
    
//     insert(node) {
//       this.heap.push(node);
//       this.bubbleUp(this.heap.length - 1);
//     }
    
//     bubbleUp(index) {
//       while (index > 0) {
//         const parent = Math.floor((index - 1) / 2);
        
//         // Compare by node.val
//         if (this.heap[parent].val <= this.heap[index].val) break;
        
//         [this.heap[parent], this.heap[index]] = 
//         [this.heap[index], this.heap[parent]];
        
//         index = parent;
//       }
//     }
    
//     extractMin() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
      
//       const min = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.bubbleDown(0);
      
//       return min;
//     }
    
//     bubbleDown(index) {
//       const n = this.heap.length;
      
//       while (true) {
//         let smallest = index;
//         const left = 2 * index + 1;
//         const right = 2 * index + 2;
        
//         if (left < n && this.heap[left].val < this.heap[smallest].val) {
//           smallest = left;
//         }
        
//         if (right < n && this.heap[right].val < this.heap[smallest].val) {
//           smallest = right;
//         }
        
//         if (smallest === index) break;
        
//         [this.heap[index], this.heap[smallest]] = 
//         [this.heap[smallest], this.heap[index]];
        
//         index = smallest;
//       }
//     }
    
//     isEmpty() {
//       return this.heap.length === 0;
//     }
//   }
  
//   // Create and initialize heap
//   const minHeap = new MinHeap();
  
//   for (let list of lists) {
//     if (list) {
//       minHeap.insert(list);
//     }
//   }
  
//   // Build result list
//   const dummy = new ListNode(0);
//   let current = dummy;
  
//   while (!minHeap.isEmpty()) {
//     const smallestNode = minHeap.extractMin();
    
//     current.next = smallestNode;
//     current = current.next;
    
//     if (smallestNode.next) {
//       minHeap.insert(smallestNode.next);
//     }
//   }
  
//   return dummy.next;
// };

// LeetCode Problem : 295 : Find Median from Data Stream 

// class MedianFinder {
//   constructor() {
//     this.nums = [];
//   }
  
//   addNum(num) {
//     // Binary search to find insertion position
//     let left = 0;
//     let right = this.nums.length - 1;
    
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (this.nums[mid] < num) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
    
//     // Insert at the correct position to maintain sorted order
//     this.nums.splice(left, 0, num);
//   }
  
//   findMedian() {
//     const n = this.nums.length;
//     const mid = Math.floor(n / 2);
    
//     if (n % 2 === 1) {
//       // Odd length: return middle element
//       return this.nums[mid];
//     } else {
//       // Even length: return average of two middle elements
//       return (this.nums[mid - 1] + this.nums[mid]) / 2;
//     }
//   }
// }

// LeetCode Problem : 247 : Top K Frequent Elements : 
// var topKFrequent = function(nums, k) {
//   // Step 1: Count frequencies
//   const freqMap = new Map();
//   for (let num of nums) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   }
  
//   // Step 2: Create buckets where index = frequency
//   // Maximum frequency can't exceed nums.length
//   const buckets = new Array(nums.length + 1).fill().map(() => []);
  
//   // Step 3: Place numbers in buckets based on their frequency
//   for (let [num, freq] of freqMap) {
//     buckets[freq].push(num);
//   }
  
//   // Step 4: Collect top k frequent elements from highest frequency buckets
//   const result = [];
//   for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
//     if (buckets[i].length > 0) {
//       result.push(...buckets[i]);
//     }
//   }
  
//   // If we collected more than k (due to ties), slice to k
//   return result.slice(0, k);
// };