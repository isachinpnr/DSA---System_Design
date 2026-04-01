// Tree : A Tree is a non-linear data structure representing a hierarchy. it consists of nodes connected by edges.

// - Node : A structure containing a value and references to it's child
// - Root : The TopMost node of the Tree(no Parent)
// - Edge : The link between two nodes
// - Leaf : a node with no child
// - Height of a Node: The number of edges on the longest downward path from that node to a leaf.
// (Deepest leaf from Root to external node / leaf node ) or which one longest depth top to bottom traverse is a height of any node
// - Depth of a node : Number of edges from the root to that node.
// (Root to node - Top to bottom how much edges from root to that node is a depth of that node)
// Level: Depth + 1.
// - siblings : node belonging to the same parents
// ancestor & descendent - like a relation of any social relationship
// - Level : height or root - height of node (that node)
//  note : In a tree with n nodes -> n -1 edges...// problem

// Binary Tree : A Tree  has maximum Two Nodes...
// Types of a Binary Tree-
// 1. Full or Strict Binary Tree : All nodes have either 0 or 2 children...

// example :                     Root
//                               ___O___
//                               |      |
//                             __|__    O
//                      child O    O              - right

//                               ___O____
//                               |      _|__
//                             __|__    O
//                      child O    O               - wrong

// 2. Perfect Binary Tree : Internal Nodes have Two Children + all leaf nodes are on same level

// // example :                _____O_____
//                             |          |
//                           __|          |__
//                           |               |
//                         __O__           __O__
//                         O   O           O    O

// 3. Complete Binary Tree : All levels are completely filled except possibly the last level + last
// level full from left to right must have it's keys as left as possible

// // example :                _____O_____
//                             |          |
//                           __|          |__
//                           |               |
//                         __O__           __O__
//                         O   O           O    O

// 4. Degenerate Tree : Parents node has expect one child

// // example :                _____O_____
//                             |
//                           __|
//                           |
//                         __O__
//                         |
//                         O

// 5. Skewed Tree :

// // example :                _____O_____
//                             |          |
//                           __|          |__
//                           |               |
//                         __O
//                         O

// 6. order tree : every node has some property - BST is a Order binary tree

// - Binary Tree ------
// What exactly is a Binary Tree?
// A Binary Tree is a hierarchical data structure in which each node has at most two children,
// referred to as the left child and the right child.
// The "At Most Two" Rule:
// A node can have:
// 0 children (it's a Leaf node)
// 1 child (either left or right)
// 2 children (both left and right)

// Why is it so special?
// Unlike a Linked List (which is linear), a Binary Tree allows you to branch out.
// This "branching" is what makes searching and organizing data incredibly efficient.
// In a balanced binary tree, you can find an element or reach a leaf in O(n \log n) time,
//  which is much faster than the O(n) time a Linked List requires.

// Key Properties:
// Maximum nodes at Level L: 2^L (where root is at level 0).
// In Perfect Binary tree of Height H: 2^{H+1} - 1. & total no of leaf node = 2^H - 1;
// Minimum Height of a tree with N nodes: \log_2(N + 1) - 1.
// Maximum Height of a tree with N nodes: N - 1 (for a skewed tree).

// How we define a node and manually link them to form a small tree ?

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // if you want to print a tree as a visual representation then use this pretty-print function
/////////////////////////////////////////////////////////////////////
// const prettyPrint = (node, space = 0) => {
//   // Base Case: If the node is empty, don't print anything
//   if (node === null) return;

//   // Increase distance between levels
//   const COUNT = 10;
//   space += COUNT;

//   // 1. Process Right child first (it will appear at the top)
//   prettyPrint(node.right, space);

//   // 2. Print current node after the space
//   console.log(" ".repeat(space - COUNT) + "-> " + node.value);

//   // 3. Process Left child (it will appear at the bottom)
//   prettyPrint(node.left, space);
// };

/////////////////////////////////////////////////////////////////////

// // create nodes
// const root = new Node(10);
// const leftChild = new Node(5);
// const rightChild = new Node(15);
// // link them to form a tree
// root.left = leftChild;
// root.right = rightChild;
// // add another child
// root.left.left = new Node(2);
// root.left.left.left = new Node(0);
// root.right.right = new Node(5);
// // print a tree
// console.log(root);

// // print with pretty print functions
// prettyPrint(root);


//  if you find a all the left nodes in entire BT 

// function sumLeftLeaves(root){
//     let result = [];
//     // let sum = 0;
//     function getLeftLeaves(node , isLeft){
//         // base case
//         if(node === null) return;
        
//         if(isLeft && node.left === null && node.right === null) {
//             result.push(node.value);
//         }
        
//         getLeftLeaves(node.left , true); // change to right side 
//         getLeftLeaves(node.right , false);
//     }
//     getLeftLeaves(root , false);
//     return result;
// }
// console.log(sumLeftLeaves(root));

// if you want to collect all the leaf node as only one side - left / right

// function lefLeaves(root){
//     const store = [];
//     // let sum = 0;
//     function left(node , isLeft){
//         if(node === null) return 0;
        
//         if(node.left === null && node.right === null){
//             store.push(node.value);
//             // sum += node.value;
//         }
//         left(node.left);
//         left(node.right);
//     }
//     // left(root.left); // only traverse left subtree
//     left(root.right); // only traverse right subtree
//     return store;
//     // return sum;
// }
// console.log(lefLeaves(root));










//

// Tree Operations ...
// Binary Search Tree Basic Implementations .....
// what is Binary Search Tree ?
// - A BST is a Binary Tree that follows a specific ordering property for every single node.
// The Rule: 1.Left Subtree: All nodes must be less than the parent node.
// 2. Right Subtree: All nodes must be greater than the parent node.
// The Look: It is always "sorted" from left to right.

// remember this for BST*******left < root < right**********

// basic implementation of an Binary Search Tree.....
// class BSTree {
//   constructor() {
//     this.root = null;
//   }

//   isTreeEmpty() {
//     return this.root === null;
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const myTree = new BSTree();
// // set the root
// myTree.root = new Node(20);
// // set the child directly
// myTree.root.left = new Node(5);
// myTree.root.right = new Node(25);
// //
// myTree.root.left.left = new Node(2);
// myTree.root.left.right = new Node(8);
// console.log(myTree);

// Professional way to handle a node where it to go .. (automatic handle a BST Node)

// class BSTree {
//   constructor() {
//     this.root = null;
//   }
//   // the standard feed method
//   insert(value) {
//     const newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }

//     let current = this.root;

//     while (true) {
//       if (value < current.value) {
//         // go left
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         // go right
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // prettyPrint function to see a output clear in console (debugging purpose)
// const prettyPrint = (node, space = 0) => {
//   // Base Case: If the node is empty, don't print anything
//   if (node === null) return;

//   // Increase distance between levels
//   const COUNT = 10;
//   space += COUNT;

//   // 1. Process Right child first (it will appear at the top)
//   prettyPrint(node.right, space);

//   // 2. Print current node after the space
//   console.log(" ".repeat(space - COUNT) + "-> " + node.value);

//   // 3. Process Left child (it will appear at the bottom)
//   prettyPrint(node.left, space);
// };

// const tree = new BSTree();
// tree.insert(20);
// tree.insert(15);
// tree.insert(25);
// tree.insert(20);
// tree.insert(18);
// tree.insert(30);
// console.log(tree);

// prettyPrint(tree.root);

// class BSTree {
//   constructor() {
//     this.root = null;
//   }
//   // make a call method in here
//   insert(value) {
//     let newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let current = this.root;
//     while (true) {
//       if (value < current.value) {
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const prettyPrint = (node, space = 0) => {
//   // Base Case: If the node is empty, don't print anything
//   if (node === null) return;

//   // Increase distance between levels
//   const COUNT = 10;
//   space += COUNT;

//   // 1. Process Right child first (it will appear at the top)
//   prettyPrint(node.right, space);

//   // 2. Print current node after the space
//   console.log(" ".repeat(space - COUNT) + "-> " + node.value);

//   // 3. Process Left child (it will appear at the bottom)
//   prettyPrint(node.left, space);
// };

// const tree = new BSTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(12);
// tree.insert(20);

// console.log(tree);
// // pretty print function
// prettyPrint(tree.root);
