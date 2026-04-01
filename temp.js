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
