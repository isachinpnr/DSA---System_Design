// Height of Tree ? -
// Height - Number of edges (or nodes ) in the longest path form root to leaf

// we measure a height of any tree on a two types mostly
// 1. edge-based : height of empty tree = -1 & height of single node = 0
// 2. node based : height of empty tree = 0 & height of single node = 1

// simple means - Height = "How Deep is the tree?"

//        1
//       / \
//      2   3
//     /
//    4         here height of a tree = 1->2->3 , height = 3; (node based)

// Height is a 'PostOrder Idea'
// why?
// You must know left height + right height
// THEN compute current height

// *Remember - Height is calculated while coming back (post-order)
// class BTHeight {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new BTHeight(1);
// root.left = new BTHeight(2);
// root.right = new BTHeight(3);
// root.left.left = new BTHeight(8);
// root.left.right = new BTHeight(9);
// root.left.right.left = new BTHeight(10);
// root.right.left = new BTHeight(5);
// root.right.right = new BTHeight(4);
// root.right.left.right = new BTHeight(6);
// root.right.left.right.left = new BTHeight(7);
// root.right.right = new BTHeight(4);
// root.right.right.right = new BTHeight(11);
// root.right.left.right.left.right = new BTHeight(12);

// // height calculate function
// function BtHeight(root) {
//   // base case
//   if (root === null) return 0;

//   // calculate a left subtree node height
//   let leftHeight = BtHeight(root.left);
//   // calculate a right subtree node height
//   let rightHeight = BtHeight(root.right);
//   // calculate max one
//   return Math.max(leftHeight, rightHeight) + 1;
// }

// console.log(BtHeight(root));

// Balanced Tree - A Balanced Tree is a tree where the heights of the left and right subtree of every node
// differ by at most some constant (usually 1) . In similar terms , the tree does'nt become to 'Skinny' or 'learning'
// on one side.
// means - left subtree & right subtree difference = 0

// types of balanced tree
// 1. Height Balanced (AVL Tree)
// 2. Weight Balanced
// 3. Red-Black Tree
// 4. Complete Binary Tree

// example of balanced tree check...
// class BalancedTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new BalancedTree(5);
// root.left = new BalancedTree(7);
// root.right = new BalancedTree(9);
// root.left.left = new BalancedTree(1);
// root.left.right = new BalancedTree(10);
// root.right.left = new BalancedTree(12);
// root.right.right = new BalancedTree(8);
// root.right.left.left = new BalancedTree(17);
// root.right.left.left.right = new BalancedTree(19);

// check balanced tree function
// function isBalanced(root) {
//   function check(node) {
//     // base case
//     if (node === null) return 0;

//     // check left subtree height
//     let left = check(node.left);
//     if (left === -1) return -1;

//     let right = check(node.right);
//     if (right === -1) return -1;

//     // actual balance condition check here !
//     if (Math.abs(left - right) > 1) return -1;

//     return Math.max(left, right) + 1;
//   }
//   return check(root) !== -1;
// }
// console.log(isBalanced(root));

// Time & Space Complexity
// Time Complexity : O(n);
// Space Complexity : O(h);

// Diameter of A Tree .....
// Diameter : Length of the Longest path between any two nodes
// path may or may not pass through root
// Count is usually in edges

// Example :
//        1
//       / \
//      2   3
//     / \
//    4   5       Longest path : 4->2->5 OR 4->2->1->3
//                Diameter = 3 edges

// Implementation:

// class BTDiameter {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new BTDiameter(1);
// root.left = new BTDiameter(2);
// root.left.left = new BTDiameter(9);
// root.left.left.right = new BTDiameter(10);
// root.left.left.right.right = new BTDiameter(11);
// root.right = new BTDiameter(5);
// root.right.left = new BTDiameter(3);
// root.right.right = new BTDiameter(7);
// root.right.right.left = new BTDiameter(4);
// console.log(root);

// // find a Diameter function
// function findDiameter(root) {
//   let diameter = 0;
//   function height(node) {
//     // base case
//     if (node === null) return 0;

//     let left = height(node.left);
//     let right = height(node.right);
//     // update diameter
//     diameter = Math.max(diameter, left + right);

//     return Math.max(left, right) + 1;
//   }
//   height(root);
//   return diameter;
// }
// console.log(findDiameter(root));

// Time & Space Complexity
// Time Complexity : O(n)
// Space Complexity : O(h)
// Key Point : find a max left & right path and add it's value


// LCA : Lowest Common Ancestor(LCA) of two nodes p and q is :
// The lowest (deepest) node in the tree that has BOTH p and q as descendants

// Implementation :
// class LCA {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new LCA(1);
// root.left = new LCA(2);
// root.right = new LCA(3);
// root.left.left = new LCA(4);
// root.left.right = new LCA(5);

// // finding LCA function
// function findLCA(root, p, q) {
//   // base case
//   if (root === null) return null;
//   //   if current node is p & q return it
//   if (root === p || root === q) return root;
//   // search in left subtree
//   let left = findLCA(root.left, p, q);
//   //search in right subtree
//   let right = findLCA(root.right, p, q);
//   if (left !== null && right !== null) return root;
//   // otherwise return non-null side
//   return left !== null ? left : right;
// }
// let p = root.left.right;
// let q = root.right;
// console.log(findLCA(root, p, q));

