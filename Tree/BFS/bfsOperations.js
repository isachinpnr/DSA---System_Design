// Tree Traversal Another Technique ----------------------------------------------------------------------
// 2. Breadth-First-Search (BFS) : Breadth-First Search (BFS) is a way to traverse or search through a
// tree level by level. Think of it like ripples in water: you start at the root (the center),
// then visit all nodes at distance 1 (its children), then all nodes at distance 2 (grandchildren), and so on.

// Why Use BFS?
// - Level-order traversal: Get nodes in the order they appear from top to bottom, left to right.
// - Shortest path in unweighted graphs/trees: Because BFS explores nodes in increasing distance from the start.
// it's also called a Level-order traversal .. (we traverse a tree in level by level)

// How BFS Works (The Core Idea) :
// BFS uses a queue (First-In-First-Out) to keep track of nodes to visit.
// Algorithm:
// Start with the root node in the queue.
// While the queue is not empty:
// Remove the front node (call it current).
// Process current (e.g., print its value).
// Add current.left to the queue (if it exists).
// Add current.right to the queue (if it exists).

// Because a queue processes nodes in the order they were added, we always visit the root first, then its children (left then right),
//  then grandchildren, etc

// Implementation :
// class BFS {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new BFS(5);
// root.left = new BFS(9);
// root.right = new BFS(11);
// root.left.left = new BFS(21);
// root.left.left.right = new BFS(23);
// root.left.left.right.left = new BFS(26);
// root.right.left = new BFS(13);
// root.right.left.right = new BFS(15);

// BFS function
// function BFSTraversal(root) {
//   // base case
//   if (root === null) return;
//   // use the optimized queue optimization...
//   const queue = [];
// push root in queue (first node)
//   queue.push(root);

//   while (queue.length > 0) {
//     const current = queue.shift();
//     console.log(current.value);

//     if (current.left !== null) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//     // with ternary
//   //  current.left !== null ? queue.push(current.left) : null;
//   //  current.right !== null ? queue.push(current.right) : null;
//   }
// }
// BFSTraversal(root);

// Time & Space Complexity -
// Time Complexity : O(n)
// Space Complexity : O(w) - max width - worst case

// / avoid shift (re-index problem with this)
// some optimized approach
// function levelOrder(root) {
//   // base case
//   if (root === null) return;
//   let queue = [];
//   let result = [];
//   // push root in queue (first node)
//   queue.push(root);
//   let front = 0; // pointer to the current front
//   while (front < queue.length) {
//     const current = queue[front++]; // current = queue[front] the next line , front = front+1; get and advance pointer
//     // console.log(current.value);
//     result.push(current.value);
//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return result;
// }
// console.log(levelOrder(root));