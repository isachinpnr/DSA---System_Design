// What is Heap ?
// A heap is Special Types of Binary Tree with 2 Strict rules

// Rule1. Complete Binary tree
// Means : All leaves filled except last
// Last level filled from Left -> Right

// Rule2 : Heap Property
// Min Heap
// Parent <= Children
// 👉 Smallest element always at root
// Max Heap
// Parent >= Children
// 👉 Largest element always at root

// why imp : you need fast access to MIN and MAX element

// Real Use Cases
// - Priority Queue
// - Dijkstra Algorithm
// - Top K Problems
// - Scheduling
// - Streaming median

// Index - Formula
// for index i
// left child = 2 * i + 1;
// right child = 2 * i + 2;
// Parent = floor((i - 1) / 2);

// Example :
//         1
//        / \
//       3   5
//      / \
//     7   9

// Array : [1, 3, 5, 7, 9]

// Core Operations :
// 1.Insert (Heap Push)
// Steps:
// 1.Add element at end
// 2.“Bubble Up” (Heapify Up)

// why buble up ?
// to maintain heap property

// 2. DELETE (Extract Min / Max)
// - remove root
// Steps:
// 1. replace root with last element
// 2. remove last
// 3. 'Bubble Down'(Heapify Down)

// 3. Heapify
// - Fix heap from a given Index

// Heapify Down Logic
// - Compare with children
// - swap with smallest(min heap)
// - Repeat

// 5. BUILD HEAP (VERY IMPORTANT)
// 👉 Convert array → heap

// Trick -
// Start from last non-leaf node
// i = floor(n/2) - 1
// - Apply heapify down

// 6. HEAP SORT
// 👉 Steps:
// Build Max Heap
// Swap root with last
// Heapify
// Repeat

// 7. PRIORITY QUEUE (REAL POWER)
// 👉 Heap is used to implement: Priority Queue

// Min Heap Implementation
// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   // 🔹 Get parent index
//   getParentIndex(i) {
//     return Math.floor((i - 1) / 2);
//   }

//   // 🔹 Get left child index
//   getLeftIndex(i) {
//     return 2 * i + 1;
//   }

//   // 🔹 Get right child index
//   getRightIndex(i) {
//     return 2 * i + 2;
//   }

//   // 🔹 Swap two elements
//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }

//   // 🔥 Insert (push)
//   insert(value) {
//     this.heap.push(value); // Step 1: add at end
//     this.heapifyUp(this.heap.length - 1); // Step 2: fix heap
//   }

//   // 🔥 Heapify UP (bubble up)
//   heapifyUp(index) {
//     let parent = this.getParentIndex(index);

//     while (index > 0 && this.heap[parent] > this.heap[index]) {
//       this.swap(parent, index);
//       index = parent;
//       parent = this.getParentIndex(index);
//     }
//   } 

//   // 🔥 Remove (extract min)
//   remove() {
//     if (this.heap.length === 0) return null;
//     if (this.heap.length === 1) return this.heap.pop();

//     let root = this.heap[0];

//     // Move last element to root
//     this.heap[0] = this.heap.pop();

//     // Fix heap
//     this.heapifyDown(0);

//     return root;
//   }

//   // 🔥 Heapify DOWN (bubble down)
//   heapifyDown(index) {
//     let smallest = index;
//     let left = this.getLeftIndex(index);
//     let right = this.getRightIndex(index);

//     // Check left child
//     if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
//       smallest = left;
//     }

//     // Check right child
//     if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
//       smallest = right;
//     }

//     // If smallest is not root → swap
//     if (smallest !== index) {
//       this.swap(index, smallest);
//       this.heapifyDown(smallest); // recursive call
//     }
//   }

//   // 🔹 Peek (get min)
//   peek() {
//     return this.heap.length === 0 ? null : this.heap[0];
//   }
// }
// const minHeap = new MinHeap();
// minHeap.insert(12);
// minHeap.insert(0);
// minHeap.insert(5);
// minHeap.insert(7);
// minHeap.insert(8);

// console.log(minHeap.heap);
// console.log(minHeap.remove());
// console.log(minHeap.remove());
// console.log(minHeap.heap);
// console.log(minHeap.peek());


// Priority Queue

// class MinHeap {
//     constructor(){
//         this.heap=[];
//     }
//     size(){
//         return this.heap.length;
//     }
//     getParentIndex(index){
//         return Math.floor((index-1)/2);
//     }
//     getLeftChildIndex(index){
//         return 2*index+1;
//     }
//     getRightChildIndex(index){
//         return 2*index+2;
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]];
//     }
//     bubbleUp(index){
//         let currentIndex=index;
//         while(currentIndex>0){
//             const parentIndex=this.getParentIndex(currentIndex);
//             if(this.heap[currentIndex].priority<this.heap[parentIndex].priority){
//                 this.swap(currentIndex,parentIndex);
//                 currentIndex=parentIndex;
//             }
//             else{
//                 break;
//             }
//         }
//     }
//     sinkDown(index){
//         let currentIndex=index;
//         const lastIndex=this.heap.length-1;

//         while(true){
//             const leftChildIndex=this.getLeftChildIndex(currentIndex);
//             const rightChildIndex=this.getRightChildIndex(currentIndex);
//             let swapIndex=null;
//             if(leftChildIndex<=lastIndex){
//                 if(this.heap[leftChildIndex].priority<this.heap[currentIndex].priority){
//                     swapIndex=leftChildIndex;
//                 }
//             }
//             if(rightChildIndex<=lastIndex){
//                 const isRightHigherPriority =swapIndex===null || this.heap[rightChildIndex].priority<this.heap[swapIndex].priority;

//                 if(isRightHigherPriority){
//                     swapIndex=rightChildIndex;
//                 }
                
//             }
//             if(swapIndex===null)
//                 break;

//             this.swap(currentIndex,swapIndex);
//             currentIndex=swapIndex;
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.bubbleUp(this.heap.length-1);
//     }

//     extractMin(){
//         if(this.heap.length===0){
//             return null;
//         }
//         if(this.heap.length===1){
//             return this.heap.pop();
//         }
//         this.swap(0,this.heap.length-1);
//         const minValue=this.heap.pop();
//         this.sinkDown(0);
//         return minValue;
//     }
//     peek(){
//         return this.heap.length===0?null:this.heap[0];
//     }
// }

// class PriorityQueue {
//     constructor(){
//         this.minHeap=new MinHeap();
//     }
//     isEmpty(){
//         return this.minHeap.size()===0;
//     }
//     size(){
//         return this.minHeap.size();
//     }
//     enqueue(data,priority){
//         const newItem={data,priority};
//         this.minHeap.insert(newItem);
//     }
//     dequeue(){
//         return this.minHeap.extractMin();
//     }
//     peek(){
//         return this.minHeap.peek();
//     }
// }

// const taskQueue=new PriorityQueue();
// taskQueue.enqueue("Fix shower",7);
// taskQueue.enqueue("Market",3);
// taskQueue.enqueue("Vacation plan",1);
// taskQueue.enqueue("Email to boss",6);
// taskQueue.enqueue("meeting with an old friend",5);
// taskQueue.enqueue("Go on a Date",4);



// while(!taskQueue.isEmpty()){
//     nextTask=taskQueue.dequeue();
//     console.log('Extracted task:'+nextTask.data+' Priority: ',nextTask.priority);
// }
