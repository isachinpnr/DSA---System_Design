// basic operations in binary tree

// class BT{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// // explore the sum of the all nodes
// function sumOfAllNodes(){

// }

// const root = new BT(5);
// root.left = new BT(8);
// root.right = new BT(10);
// root.right.left = new BT(20);
// root.left.left = new BT(17);
// root.right.right = new BT(22);
// root.left.right = new BT(32);
// root.left.right.right = new BT(25);
// console.log(root);

// Perform a Pre-Order Traverser

// class PreOrder {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new PreOrder(5);
// root.left = new PreOrder(9);
// root.right = new PreOrder(3);
// root.right.right = new PreOrder(2);
// root.left.left = new PreOrder(8);
// root.left.right = new PreOrder(4);
// root.right.right.left = new PreOrder(1);
// root.left.right.left = new PreOrder(6);
// root.right.right.left.right = new PreOrder(5);
// root.right.right.left.right.left = new PreOrder(4);
// root.right.left = new PreOrder(11);

// preOrder Function
// function preOrder(root){
//     let result = [];
//     function traverse(node){
//         // base case
//         if(node === null) return;

//         result.push(node.value);
//         traverse(node.left);
//         traverse(node.right);
//     }
//     traverse(root);
//     return result;
// }
// console.log(preOrder(root));

// In-Order Function
// function inOrder(root){
//     let result = [];
//     function traverse(node){
//         if(node === null) return;

//         traverse(node.left);
//         result.push(node.value);
//         traverse(node.right);
//     }
//     traverse(root);
//     return result;
// }
// console.log(inOrder(root));

// Post-Order function
// function postOrder(root){
//     let result = [];
//     function traverse(node){
//         // base case
//         if(node === null) return;

//         traverse(node.left);
//         traverse(node.right);
//         result.push(node.value);
//     }
//     traverse(root);
//     return result;
// }
// console.log(postOrder(root));

// find a max Height Path Sum of any tree ...

// function maxPathSum(root) {
//   let maxSum = -Infinity;

//   function gain(node) {
//     // base case: null node contribute 0
//     if (node === null) return 0;

//     const leftGain = Math.max(gain(node.left), 0);
//     const rightGain = Math.max(gain(node.right), 0);

//     const pathThroughNode = node.value + leftGain + rightGain;

//     maxSum = Math.max(maxSum, pathThroughNode);

//     return node.value + Math.max(leftGain, rightGain);
//   }
//   gain(root);
//   return maxSum;
// }
// console.log(maxPathSum(root));

// remaining problems

// 124. Binary Tree Maximum Path Sum	Maximum sum of any path (any start/end)
// 437. Path Sum III	Count downward paths (any start) with given sum (remaining topic to learn again)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(3);
// root.left.left = new Node(13);
// root.left.left.left = new Node(3);
// root.left.left.right = new Node(2);
// root.left.right = new Node(12);
// root.left.right.right = new Node(1);
// root.right.right = new Node(23);
// root.right.right.left = new Node(11);
// // console.log(root);

// // find a diameter of any tree

// function diameterTree(root) {
//   let diameter = 0;
//   function height(node) {
//     // base case
//     if (node === null) return 0;

//     let leftHeight = height(node.left);
//     let rightHeight = height(node.right);
//     // update diameter ...
//     diameter = Math.max(diameter, leftHeight + rightHeight);

//     return Math.max(leftHeight, rightHeight) + 1;
//   } 
//   height(root);
//   return diameter;
// }

// console.log(diameterTree(root));


// LeetCode Problem : 2471 : Minimum Number of Operations to Sort a Binary Tree By Level?
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// const root = new Node(1);
// root.left = new Node(4);
// root.left.left = new Node(7);
// root.left.right = new Node(6);
// root.right = new Node(3);
// root.right.left = new Node(8);
// root.right.left.left = new Node(9);
// root.right.right = new Node(5);
// root.right.right.left = new Node(10);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// function minimumOperations(root) {
//     // Step 1: Level Order Traversal to collect values by level
//     const levels = [];
//     const queue = [root];

//     while (queue.length > 0) {
//         const levelSize = queue.length;
//         const currentLevel = [];

//         for (let i = 0; i < levelSize; i++) {
//             const node = queue.shift();
//             currentLevel.push(node.val);

//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }

//         levels.push(currentLevel);
//     }

//     // Step 2: Calculate minimum swaps for each level
//     let totalOperations = 0;

//     for (const level of levels) {
//         totalOperations += minSwapsToSort(level);
//     }

//     return totalOperations;
// }

// function minSwapsToSort(arr) {
//     const n = arr.length;
//     if (n <= 1) return 0;   

//     // Create array of pairs [value, originalIndex]
//     const pairs = arr.map((val, idx) => [val, idx]);

//     // Sort pairs by value
//     pairs.sort((a, b) => a[0] - b[0]);

//     // Track visited elements
//     const visited = new Array(n).fill(false);
//     let swaps = 0;

//     // Visit each position
//     for (let i = 0; i < n; i++) {
//         // If already visited or already in correct position
//         if (visited[i] || pairs[i][1] === i) continue;

//         // Find cycle length
//         let cycleSize = 0;
//         let current = i;

//         while (!visited[current]) {
//             visited[current] = true;
//             current = pairs[current][1]; // Move to where this element should be
//             cycleSize++;
//         }

//         // For a cycle of size k, we need (k - 1) swaps
//         if (cycleSize > 1) {
//             swaps += cycleSize - 1;
//         }
//     }

//     return swaps;
// }
// console.log(minSwapsToSort(arr));

// Construct Uniform Parity Array I
// var canConstruct = function(nums1) {
//     let oddCount = 0;
//     let evenCount = 0;
    
//     // Count odd and even numbers in the array
//     for (let i = 0; i < nums1.length; i++) {
//         if (nums1[i] % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }
    
//     // Check if we can make all elements even
//     const canMakeAllEven = (oddCount === 0) || (oddCount >= 2);
    
//     // Check if we can make all elements odd
//     const canMakeAllOdd = (evenCount === 0) || (evenCount >= 2);
    
//     // Return true if either is possible
//     return canMakeAllEven || canMakeAllOdd;
// };
// let nums1 = [2, 3];
// console.log(canConstruct(nums1));

































