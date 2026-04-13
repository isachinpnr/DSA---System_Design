// Node class for all problems (you can modified it , as of your need)
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(5);
// root.left = new Node(4);
// root.right = new Node(8);
// root.left.left = new Node(11);
// root.left.left.left = new Node(7);
// root.left.left.right = new Node(2);
// root.right.left = new Node(13);
// root.right.right = new Node(4);
// root.right.right.right = new Node(1);

// LeetCode Problem : 102 : Level Order Traversal -
// if you want to show a tree as a level size (2D array)
// function levelOrder2D(root){
//   let result = [];
//   // base case
//   if(root === null) return [];
//   const queue = [root];

//   while(queue.length > 0){
//     const levelSize = queue.length; // nodes in current level
//     const currentLevel = [];

//     for(let i = 0; i < levelSize; i++){
//       const node = queue.shift();
//       currentLevel.push(node.value);
//       if(node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right);
//     }
//     result.push(currentLevel);
//   }
//   return result;
// }
// console.log(levelOrder2D(root));

// LeetCode problem 112 : Path Sum:
// first iam implement a node class....
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function hasPathSum(root, targetSum) {
//   // base case...
//   if (root === null) return false;
//   if (root.left === null && root.right === null) {
//     return root.value === targetSum;
//   }
//   const remaining = targetSum - root.value;
//   return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
// }

// let targetSum = 22;
// console.log(hasPathSum(root, targetSum));
// Time & Space Complexity :
// Time Complexity: O(N)
// Space Complexity: O(H) (recursion stack)

// LeetCode problem : 113 : Path Sum II Returns All Paths

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// path sum II function
// - brute - force

// function pathSum(root, targetSum) {
//   const allPaths = [];

//   function getPaths(node, path) {
//     if (node === null) return;

//     path.push(node.value);
//     // leaf node
//     if (node.left === null && node.right === null) {
//       allPaths.push([...path]);
//     } else {
//       getPaths(node.left, path);
//       getPaths(node.right, path);
//     }
//     path.pop(); // backTrack
//   }
//   getPaths(root, []);
//   const result = [];

//   for (p of allPaths) {
//     let sum = p.reduce((a, b) => a + b, 0);
//     if (sum === targetSum) {
//       result.push(p);
//     }
//   }
//   return result;
// }

// let targetSum = 22;
// console.log(pathSum(root, targetSum));

// optimal approach to solve this problem

// function pathSum(root, targetSum) {
//   const result = [];

//   function dfs(node, remainingSum, path) {
//     if (node === null) return;

//     path.push(node.value);

//     // check leaf
//     if (
//       node.left === null &&
//       node.right === null &&
//       remainingSum === node.value
//     ) {
//       result.push([...path]); // store copy
//     } else {
//       dfs(node.left, remainingSum - node.value, path);
//       dfs(node.right, remainingSum - node.value, path);
//     }
//     path.pop(); // backTrack
//   }
//   dfs(root, targetSum, []);
//   return result;
// }
// let targetSum = 22;
// console.log(pathSum(root, targetSum));

// LeetCode Problem : 257 : Binary Tree Paths

// function binaryTreePaths(root) {
//   let allPaths = [];
//   // helper function used
//   function traverse(node, path) {
//     // base case
//     if (node === null) return;

//     path.push(node.value);
//     // check leaf
//     if (node.left === null && node.right === null) {
//       allPaths.push([...path.join("")]);
//     } else {
//       traverse(node.left, path);
//       traverse(node.right, path);
//     }
//     path.pop();
//   }
//   traverse(root , []);
//   return allPaths;
// }
// console.log(binaryTreePaths(root));

// LeetCode Problem 129 : Sum Root to Leaf Numbers.........................

// function sumNumbers(root){
//   let allPath = [];
//   function dfs(node , path){
//     // base case
//     if(node === null) return;

//     path.push(node.value);

//     // check leaf
//     if(node.left === null && node.right === null){
//       const num = Number(path.join(''));
//       allPath.push(num); //
//     }else{
//       dfs(node.left , path);
//       dfs(node.right , path);
//     }
//     path.pop(); // backtrack
//   }
//    dfs(root , []);

//   const sum = allPath.reduce((total , num) => total + num ,0);
//   return sum;
// }
// console.log(sumNumbers(root));

// LeetCode Problem : 437 : PathSum III,................(remaining topic to learn again)

// function pathSumIII(root, targetSum) {
//   let count = 0;
//   const prefixSumMap = new Map();
//   prefixSumMap.set(0, 1); // base : empty prefix sum appears once
//   function dfs(node, currentSum) {
//     if (!node) return;

//     //update running sum
//     currentSum += node.value;

//     // number of valid paths ending at this node
//     const needed = currentSum - targetSum;
//     count += prefixSumMap.get(needed) || 0;

//     // Record current prefix sum
//     prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

//     // Recurse to children
//     dfs(node.left, currentSum);
//     dfs(node.right, currentSum);

//     // BackTrack : remove current prefix sum for sibling branches
//     prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1);
//   }
//   dfs(root, 0);
//   return count;
// }
// let targetSum = 8;
// console.log(pathSumIII(root, targetSum));

// LeetCode Problem : 124 : Binary tree : maximum path sum..............

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(-10);
// root.left = new Node(9);
// root.right = new Node(20);
// root.right.right = new Node(7);
// root.right.left = new Node(15);

// function maxPathSum(root) {
//   let maxSum = -Infinity;

//   function dfs(node) {
//     // base case
//     if (node === null) return 0;

//     let leftGain = Math.max(dfs(node.left), 0);
//     let rightGain = Math.max(dfs(node.right), 0);

//     let pathThrowNode = node.value + (leftGain + rightGain);
//     maxSum = Math.max(maxSum, pathThrowNode);

//     return node.value + Math.max(leftGain, rightGain);
//   }

//   dfs(root);
//   return maxSum;
// }
// console.log(maxPathSum(root));

// LeetCode Problem : 103 : Binary Tree Zigzag Level Order Traversal

// function zigZag(root) {
//   let result = [];
//   let level = 0;

//   // base case
//   if (root === null) return;

//   let queue = [root];
//   let front = 0;
//   while (front < queue.length) {
//     let levelNodes = [];
//     let levelSize = queue.length - front;

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue[front++];
//       levelNodes.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     if (level % 2 === 1) {
//       levelNodes.reverse();
//     }
//     result.push(levelNodes);
//     level++;
//   }
//   return result;
// }
// console.log(zigZag(root));

// LeetCode Problem : 662 : Maximum Width of Binary Tree - remaining to understand this topic

// function widthOfBinaryTree(root) {
//   let maxWidth = 0;
//   // base case
//   if (root === null) return 0;
//   let queue = [[root, 0n]];

//   while (queue.length > 0) {
//     let levelSize = queue.length;
//     let firstIndex = queue[0][1];
//     let lastIndex = queue[levelSize - 1][1];

//     maxWidth = Math.max(maxWidth, Number(lastIndex - firstIndex + 1n));

//     for (let i = 0; i < levelSize; i++) {
//       const [node, index] = queue.shift();

//       if (node.left) {
//         queue.push([node.left, 2n * index]);
//       }
//       if (node.right) {
//         queue.push([node.right, 2n * index + 1n]);
//       }
//     }
//   }
//   return maxWidth;
// }

// console.log(widthOfBinaryTree(root));

// LeetCode Problem 104 : Maximum depth of binary Tree

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(3);
// root.left = new Node(9);
// root.right = new Node(20);
// root.right.left = new Node(15);
// root.right.right = new Node(7);

// depth find function
// function maxDepth(root) {
//   let maxDepth = 0;
//   function depth(node) {
//     if (node === null) return 0;

//     // calculate left depth
//     leftDepth = depth(node.left);
//     // calculate right Depth
//     rightDepth = depth(node.right);
//     return maxDepth = Math.max(leftDepth, rightDepth) + 1;
//   }
//   depth(root);
//   return maxDepth;
// }
// console.log(maxDepth(root));

// GFG Problem : Top View Of Binary Tree
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.right.right = new Node(6);
// root.left.right = new Node(5);
// root.left.left = new Node(4);
// root.left.left.left = new Node(7);

// function topView(root) {
//   // base case
//   if (root === null) return [];

//   //queue store [node , horizontalDistance]
//   let queue = [[root, 0]];
//   // map store horizontalDistance -> node value (first occurrence);
//   const map = new Map();

//   //BFS : level order traversing
//   while (queue.length > 0) {
//     const [node, hd] = queue.shift();

//     // if we haven't see this horizontal distance yet , record it
//     if (!map.has(hd)) {
//       map.set(hd, node.value);
//     }

//     // enqueue children with update horizontal distance
//     if (node.left) queue.push([node.left, hd - 1]);
//     if (node.right) queue.push([node.right, hd + 1]);
//   }

//   // extract value in order of increasing horizontal distance
//   const sorted = [...map.entries()].sort((a, b) => a[0] - b[0]);
//   return sorted.map(([_, value]) => value);
// }
// console.log(topView(root));

// GFG problem : Bottom view of binary tree

// function bottomView(root) {
//   // base case
//   if (!root) return [];
//   const queue = [[root, 0]];
//   const map = new Map();

//   while (queue.length > 0) {
//     const [node, hd] = queue.shift();

//     map.set(hd, node.value); // Always update (overwrite for bottom view)

//     if(node.left) queue.push([node.left, hd - 1]);
//     if(node.right) queue.push([node.right, hd + 1]);
//   }
//   //  sort.....
//   const sorted = [...map.entries()].sort((a, b) => a[0] - b[0]);
//    return sorted.map(([_, val]) => val);
// }
// console.log(bottomView(root));

// GFG Problem : Left View of Binary Tree

// function leftView(root){
//   // base case
//   if(!root) return;

//   let queue = [root];
//   let result = [];
//   let front = 0;

//   while(front < queue.length){
//     let levelSize = queue.length - front;
//     for(let i = 0; i < levelSize; i++){
//       const node = queue[front++];

//       if(i === 0){
//         result.push(node.value);
//       }
//       if(node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right);
//     }

//   }
//   return result;
// }
// console.log(leftView(root));

// LeetCode Problem + GFG : 199 : Right View of Binary tree

// function rightView(root) {
//   // base case
//   if (!root) return;

//   let queue = [root];
//   let result = [];
//   let front = 0;

//   while (front < queue.length) {
//     let levelSize = queue.length - front;
//     for(let i = 0; i < levelSize; i++){
//       const node = queue[front++];

//       if(i === levelSize - 1){
//         result.push(node.value);
//       }
//       if(node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right);
//     }
//   }
//   return result;
// }
// console.log(rightView(root));

// another way to sort a last hd value in map
// function bottomView(root){
//     // base case
//     if(!root) return [];

//     const queue = [[root , 0]];
//     const map = new Map();
//     let front = 0;
//     let min = 0 , max = 0;
//     while(front < queue.length){
//         const [node , hd] = queue[front++];
//         map.set(hd , node.value);
//         min = Math.min(min , hd);
//         max = Math.max(max , hd);
//         if(node.left) queue.push([node.left , hd - 1]);
//         if(node.right) queue.push([node.right , hd + 1]);
//     }
//      let result = [];
//     for(let i = min; i <= max; i++){
//         result.push(map.get(i));
//     }
//     return result;
// }
// console.log(bottomView(root));

// LeetCode Problem 100 : Same Tree ?
// class Tree1 {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root1 = new Tree1(1);
// root1.left = new Tree1(2);
// root1.right = new Tree1(3);

// class Tree2 {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root2 = new Tree2(1);
// root2.left = new Tree2(2);
// root2.right = new Tree2(3);

// function isSame(root1, root2) {
//   // check both null
//   if (root1 === null && root2 === null) return true;
//   // check mismatch structure
//   if (root1 === null || root2 === null) return false;
//   // check both value
//   if (root1.value !== root2.value) return false;

//   // recursive check
//   return (
//     isSame(root1.left , root2.left) && isSame(root1.right , root2.right)
//   );
// }
// console.log(isSame(root1, root2));

// LeetCode Problem 101 : Symmetric Tree
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(2);
// root.left.left = new Node(3);
// root.right.left = new Node(4);
// root.left.right = new Node(4);
// root.right.right = new Node(3);

// function isSymmetric(root) {
//   // empty tree is symmetric
//   if (root === null) return true;
//   function isMirror(node1, node2) {
//     // both null -> mirror
//     if (node1 === null && node2 === null) return true;
//     // one null another not -> not mirror
//     if (node1 === null || node2 === null) return false;
//     // value diff -> not mirrer
//     if (node1.value !== node2.value) return false;

//     // recursively check :
//     return (
//       isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
//     );
//   }
//   return isMirror(root.left, root.right);
// }
// console.log(isSymmetric(root));

// LeetCode Problem:297 : Serialize & Deserialize Binary Tree

// node class
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.right.right = new Node(5);
// root.right.left = new Node(4);
// root.right.right.left = new Node(6);

// // serialized function
// function serialized(root) {
//   const result = [];

//   // traverse with pre-Order traversal
//   function traverse(node) {
//     // base case...
//     if (node === null) {
//       result.push("#");
//       return;
//     }

//     // traverse left and right
//     result.push(node.value);
//     traverse(node.left);
//     traverse(node.right);
//   }
//   traverse(root);
//   return result.join(",");
// }
// // console.log(serialized(root));

// function deserialized(data) {
//   let values = data.split(",");
//   let index = 0;

//   function build() {
//     if (index >= values.length) return null;

//     const val = values[index++];
//     if (val === "#") return null;

//     const node = new Node(parseInt(val));
//     node.left = build();
//     node.right = build();

//     return node;
//   }
//   return build();
// }

// console.log("======testing : Serialized and Deserialized=====");

// // 1. Serialized originalTree
// const serializedData = serialized(root);
// console.log("Original Serialized", serializedData);

// // 2. Deserialized Back to Tree
// const deserializedTree = deserialized(serializedData);
// console.log("Deserialized tree root value", deserializedTree.value);

// // 3. Re-serialize the deserialized tree
// const reSerializedData = serialized(deserializedTree);
// console.log("Re-serialized:", reSerializedData);

// // 4. Compare
// console.log("\n=== Verification ===");
// console.log("Original matches re-serialized:", serializedData === reSerializedData);

// // 5. Optional: Print both strings
// console.log("\nOriginal:  ", serializedData);
// console.log("Re-serialized:", reSerializedData);

// LeetCode 545 : GFG : border traversal of an tree ....
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(5);
// root.left = new Node(0);
// root.right = new Node(7);
// root.left.left = new Node(3);
// root.left.right = new Node(9);
// root.right.right = new Node(10);
// root.right.left = new Node(12);
// root.right.right.left = new Node(13);
// root.right.right.left.right = new Node(15);
// root.right.right.left.left = new Node(16);

// function borderTraversal(root) {
//   if (root === null) return [];
//   if (root.left === null && root.right === null) return [root.value];
//   const result = [];

//   // collect left boundary
//   function getLeftBoundary(node) {
//     if (node === null) return;
//     if (node.left === null && node.right === null) return;
//     result.push(node.value);

//     if (node.left) getLeftBoundary(node.left);
//     else getLeftBoundary(node.right);
//   }
//   // collect leafs value
//   function getLeafs(node) {
//     if (node === null) return;

//     if (node.left === null && node.right === null) {
//       result.push(node.value);
//       return;
//     }
//     getLeafs(node.left);
//     getLeafs(node.right);
//   }
//   // collect right boundary
//   function getRightBoundary(node) {
//     if (node === null) return;
//     if (node.left === null && node.right === null) return;

//     if (node.right) getRightBoundary(node.right);
//     else getRightBoundary(node.left);
//     result.push(node.value);
//   }
//   // add root
//   result.push(root.value);
//   getLeftBoundary(root.left);
//   getLeafs(root);
//   getRightBoundary(root.right);

//   return result;
// }

// console.log(borderTraversal(root));

// LeetCode Problem - 555 : Count Complete Tree Nodes

// const countNodes = function (root) {
//     // base case
//     if(!root) return 0;
//     const queue = [root];
//     let count = 0;
//     let front = 0;

//     while(front < queue.length){
//         const node = queue[front++];
//         count++;
//         if(node.left) queue.push(node.left);
//         if(node.right) queue.push(node.right);
//     }
//     return count;
// };
// (you can use BFS to store and then count )

// most efficient way

// function countNodes(root){
//     // base case
//     if(!root) return 0;

//     return 1 + countNodes(root.left) + countNodes(root.right);
// }
// console.log(countNodes(root));

// if complete binary tree then :

// function countNodes(root) {
//     if (!root) return 0;

//     let leftHeight = 0;
//     let rightHeight = 0;
//     let left = root;
//     let right = root;

//     while (left) {
//         leftHeight++;
//         left = left.left;
//     }

//     while (right) {
//         rightHeight++;
//         right = right.right;
//     }

//     if (leftHeight === rightHeight) {
//         // Perfect binary tree
//         return Math.pow(2, leftHeight) - 1;
//     }

//     // Not perfect, count recursively
//     return 1 + countNodes(root.left) + countNodes(root.right);
// }

// Problem :

// / function sumNodes(root){
// // base case
// if(!root) return 0;
// let result = [];
// let sum = 0;
// // by PreOrder Traversal
// function totalSum(node){
//     if(node === null) return 0;
//     result.push(node.value);
//     totalSum(node.left);
//     totalSum(node.right);
// }
// totalSum(root);
// // count sum of all nodes
// for(let i = 0; i < result.length; i++){
//     sum += result[i];
// }
// return sum;

// by LevelOrder Traversal
// if(!root) return 0;
// // let result = [];
// const queue = [root];
// let sum = 0;
// let front = 0;
// while(front < queue.length){
//     const node = queue[front++];
//     sum+= node.value;
//     // result.push(node.value);
//     if(node.left) queue.push(node.left);
//     if(node.right) queue.push(node.right);
// }
// return sum;
// count sum
// let index = 0;
// while(index < result.length){
//     sum+= result[index];
//     index++;
// }

// with recursive function
// function nodeSum(arr , el = 0){
//     // base case
//     if(el === arr.length) return 0;
//     return arr[el] + nodeSum(arr , el + 1);
// }
// return nodeSum(result);

// more efficient way
//     if(!root) return 0;
//     return root.value + sumNodes(root.left) + sumNodes(root.right);
// }
// console.log(sumNodes(root));

// Problem GFG : count leaves in binary tree

// function countLeaves(root){
//     // base case
//     if(!root) return 0;
//     if(root.left === null && root.right === null) return 1;
//     return countLeaves(root.left) + countLeaves(root.right);
// }

// LeetCode Problem : 404 : Sum of Left Leaves,,,,,,,,,,,,,,,,,,,,,,
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// const root = new Node(3);
// root.left = new Node(9);
// root.right = new Node(20);
// root.right.left = new Node(15);
// root.right.right = new Node(7);

// function sumLeftLeaves(root){
//     let sum = 0;

//     function leftLeaves(node, isLeft){
//         // base case
//         if(node === null) return;

//         if(isLeft && node.left === null && node.right === null){
//             sum+= node.value;
//         }
//         // recursive check
//         leftLeaves(node.left , true);
//         leftLeaves(node.right , false);
//     }
//     leftLeaves(root , false);
//     return sum;
// }
// console.log(sumLeftLeaves(root));

// as like a right leaves sum of binary tree

// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// const root = new Node(5);
// root.left = new Node(7);
// root.right = new Node(15);
// root.left.right = new Node(9);
// root.left.right.left = new Node(11);
// root.left.right.right = new Node(13);
// root.right.left = new Node(19);
// root.right.left.right = new Node(26);
// root.right.right = new Node(21);
// root.right.right.right = new Node(30);

// // collect all the left leaves in Binary Tree
// function lefLeaves(root){
//     // const store = [];
//     let sum = 0;
//     function left(node , isRight){
//         if(node === null) return 0;

//         if(node.left === null && node.right === null && isRight){
//             // store.push(node.value);
//             sum += node.value;
//         }
//         left(node.left , false);
//         left(node.right , true);
//     }
//     left(root , false);
//     // return store;
//     return sum;
// }
// console.log(lefLeaves(root));

// LeetCode Problem : 637 : Average of Levels in Binary Tree:

// function averageOfLevels(root){
//     // base case
//     if(root === null) return [];
//     const result = [];
//     let front = 0;
//     const queue = [root];

//     while(front < queue.length){
//         let levelSize = queue.length - front;
//         let nodeSum = 0;
//         for(let i = 0; i < levelSize; i++){
//             const node = queue[front++];
//             nodeSum+= node.value;
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right);
//         }
//         let average = nodeSum / levelSize;
//         result.push(average);
//     }
//     return result;
// }
// console.log(averageOfLevels(root));

// LeetCode Problem : 114 : Flatten Binary Tree To LinkedList

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(5);
// root.left.left = new Node(3);
// root.left.right = new Node(4);
// root.right.right = new Node(6);
// console.log(root);

// function flatten(root) {
//   // base case
//   if (!root) return;

//   // store original right subtree
//   const originalRight = root.right;

//   // flatten left subtree and move it to right
//   flatten(root.left);
//   root.right = root.left;
//   root.left = null;

//   // Find the rightMost node in the new right chain
//   let current = root;
//   while (current.right) {
//     current = current.right;
//   }
//   flatten(originalRight);
//   current.right = originalRight;
// }
// console.log(flatten(root));
// function flow :
// Save right subtree
// Flatten left subtree
// Move left → right
// Find tail
// Flatten saved right subtree
// Attach it at tail

// LeetCode : 1609 : Even Odd Tree

// check odd even function
// function isEvenOddTree(root){

//     let level = 0;
//     const result = [];
//     let front = 0;
//     const queue = [root];
//     while(front < queue.length){
//         let levelSize = queue.length - front;
//         let prev = (level % 2 === 0) ? -Infinity : Infinity;
//         for(let i = 0; i < levelSize; i++){
//             const node = queue[front++]
//             // check parity
//             if(level % 2 === 0 && node.value % 2 === 0) return false;
//             if(level % 2 === 1 && node.value % 2 !== 0) return false;
//             // check order
//             if(level % 2 === 0 && node.value <= prev) return false;
//             if(level % 2 === 1 && node.value >= prev) return false;

//             prev = node.value;

//                 if(node.left) queue.push(node.left);
//                 if(node.right) queue.push(node.right);
//         }
//         level++;
//     }
//     return true;
// }
// console.log(isEvenOddTree(root));
