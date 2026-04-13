// BST (Binary Search Tree) : Binary Search is a types of binary tree where it follow always this rule :

// ********************Left subtree < Root < Right subtree **********(Remember This one)

// 🌳 Binary Search Tree (BST) – Complete Digital Notes
// 1. Definition
// A Binary Search Tree is a binary tree that satisfies the BST property for every node:
// All nodes in the left subtree have keys less than the node’s key.
// All nodes in the right subtree have keys greater than the node’s key.
// Both left and right subtrees are themselves BSTs.
// No duplicate keys are allowed (unless explicitly permitted; usually we enforce uniqueness).
// In short: left < root < right for every node.

// 2. Visual Example
//         50
//        /  \
//       30   70
//      / \   / \
//     20 40 60 80

// - Left subtree of 50 → all values < 50
// - Right subtree of 50 → all values > 50
// - This ordering holds recursively.

// 3. Key Properties

// Property                -                   Explanation
// Order                   -                   Inorder traversal yields sorted ascending order.
// Dynamic                 -                   Supports efficient insert, delete, search (average O(log n)).
// Unique keys             -                   Typically no duplicates; if allowed, store count or adopt a convention (e.g., left ≤ root).
// Recursive structure     -                   Every subtree is itself a BST.
// No balance guarantee    -                   Worst‑case degenerates into a linked list (O(n) operations).

// BST Definition:
//    left subtree < root < right subtree

// Inorder → sorted order

// Operations (time O(height)):
//    search, insert, delete, min, max

// Height:
//    balanced ~ log₂ n
//    skewed = n

// To fix worst‑case → use self‑balancing trees:
//    AVL, Red‑Black, B‑Tree, Treap, Splay

// valid bST example :
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// to see in console a tree in visually , this on function help to debugging
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

// const root = new Node(5);
// root.left = new Node(3);
// root.left.right = new Node(4);
// root.right = new Node(7);
// root.left.left = new Node(1);
// root.right.left = new Node(6);
// root.right.right = new Node(9);
// console.log(root);
// prettyPrint(root);

// To handle a node value in BST (auto fill in BST place)
// left < root < right - value feed in this manner

// class BST {
//   constructor() {
//     this.root = null;
//   }
//   // insert method
//   insert(value) {
//     // create new Node
//     const newNode = new Node(value);
//     // if root is null or tree empty
//     if (this.root === null) {
//       this.root = newNode;
//       //method chaining
//       return this;
//     }
//     // start from root
//     let current = this.root;
//     // when inserted node then return (true in while)
//     while (true) {
//       //handle duplicates
//       if (value === current.value) return this;
//       // new value < current Value
//       if (value < current.value) {
//         // go left ...
//         if (current.left === null) {
//           current.left = newNode;
//           return this;
//         }
//         // go left deeper if slot not empty
//         current = current.left;
//         // right check
//       } else {
//         if (current.right === null) {
//           current.right = newNode;
//           return this;
//         }
//         current = current.right;
//       }
//     }
//   }
//   // traverse or print value in array function..................................
// traverse(root) {
//   const result = [];
//   function store(node) {
//     // base case...
//     if (node === null) return;

//     // InOrder Traversal
//     store(node.left);
//     result.push(node.value);
//     store(node.right);
//   }
//   store(root);
//   return result;
// }

// search node in tree..................................................
// search(root, val) {
//   let current = this.root;
//   while (current) {
//     if (current.value === val) return true;
//     // ternary
// if(val < current.value){
//   current = current.left;
// }else{
//   current = current.right;
// }
//     current = val < current.value ? current.left : current.right;
//   }
//   return false;

// another way to find value/search node
// base case
//   if (root === null) return false;

//   if ((root.value === val)) return true;

//   if (val < root.value) {
//     return this.search(root.left, val);
//   } else {
//     return this.search(root.right, val);
//   }
// }

// delete node in BST................................................

// add delete method to the class
//     delete(value) {
//       this.root = this.deleteNode(this.root, value);
//       return this;
//     }
//     deleteNode(node, value) {
//       // Base case: tree is empty
//       if (node === null) return null;

//       // Search for the node to delete
//       if (value < node.value) {
//         node.left = this.deleteNode(node.left, value);
//       } else if (value > node.value) {
//         node.right = this.deleteNode(node.right, value);
//       } else {
//         // Node found - handle 3 cases

//         // Case 1 & 2: Node has 0 or 1 child
//         if (node.left === null) return node.right;
//         if (node.right === null) return node.left;

//         // Case 3: Node has 2 children
//         // Find successor (smallest in right subtree)
//         let successor = this.findMin(node.right);
//         // Copy successor's value
//         node.value = successor.value;
//         // Delete the successor
//         node.right = this.deleteNode(node.right, successor.value);
//       }
//       return node;
//     }
//     findMin(node) {
//       while (node.left !== null) {
//         node = node.left;
//       }
//       return node;
//     }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const tree = new BST();
// tree.insert(5);
// tree.insert(7);
// tree.insert(3);
// tree.insert(9);
// tree.insert(6);
// tree.insert(1);
// tree.insert(4);
// tree.insert(10);
// tree.insert(5);
// traverse a tree...
// console.log(tree.traverse(tree.root));
// search node in tree...
// console.log(tree.search(1));
// another search method call -
// console.log(tree.search(tree.root , 8));
// delete node in tree...
// console.log(tree.delete(5));
// console.log(tree);

// Traverse a BST .....
// we can perform to traverse a BST with InOrder Traverse.....
// inOrder - left -> root -> right

// function traverseBST(tree){
//   const result = [];
//   function store(node){
//     if(node === null ) return;

//     store(node.left);
//     result.push(node.value);
//     store(node.right);
//   }
//   store(tree.root);
//   return result;

// }
// console.log(traverseBST(tree));

// search node in BST...................
// function searchNode(node, val) {
//   if (node === null) return false;

//   if (node.value === val) return true;

//   // search left or right
//   if (val < node.value) {
//     return searchNode(node.left, val);
//   } else {
//     return searchNode(node.right, val);
//   }
// }
// // let num = 11; // false
// let num = 9 // true;
// console.log(searchNode(tree.root , num));

// Deleting a node is the most complex BST operation because you must maintain the BST property after removal
// The 3 Cases of Deletion
// Case 1: Node has NO children (leaf node)
// Case 2: Node has ONE child
// Case 3: Node has TWO children
// Case 1: Delete Leaf Node (No Children)
// Simplest case - just remove the node.
// example
// Before:           After:
//     5               5
//    / \             / \
//   3   7           3   7
//  / \             / \
// 1   4           4
// Process
// Find node with value 1
// Set parent's left/right pointer to null
// Node gets garbage collected

// Case 2: Delete Node with One Child
// Replace the node with its child.
// Example: Delete 3 (has right child 4)
// Before:           After:
//     5               5
//    / \             / \
//   3   7           4   7
//    \
//     4
// Process
// Find node with value 3
// Connect parent (5) to child (4)
// Node 3 is removed

// Case 3: Delete Node with Two Children
// Most complex - find a replacement node.
// Two strategies:

//1. Find Inorder Successor (smallest in right subtree) - Most common
//2. Find Inorder Predecessor (largest in left subtree)

// Example: Delete 5 (has both children)
// Before:               After (using successor):
//       5                    6
//      / \                  / \
//     3   7                3   7
//    / \   \              / \   \
//   1   4   9            1   4   9
//          /                   /
//         6

// Process with Successor:
// 1.Find node to delete (5)
// 2.Find successor: smallest in right subtree (6)
// 3.Copy successor's value to node (5 becomes 6)
// 4.Delete the successor node (original 6)
// 4.Successor will have 0 or 1 child → easy deletion

// delete node in BST ...........................
// function deleteNode(node, value) {
//   // base case : tree is empty
//   if (node === null) return null;

//   // search for the node to delete
//   if (value < node.value) {
//     node.left = deleteNode(node.left, value);
//   } else if (value > node.value) {
//     node.right = deleteNode(node.right, value);
//   } else {
//     // node found - handle 3 case
//     // if node has 1 or both child
//     if (node.left === null) return node.right;
//     if (node.right === null) return node.left;

//     // node has both child
//     // find successor - smallest in right subtree
//     let successor = findMin(node.right);
//     // copy successor value
//     node.value = successor.value;
//     // Delete the successor
//     node.right = deleteNode(node.right, successor.value);
//   }
//   return node;
// }

// function findMin(node) {
//   while (node.left !== null) {
//     node = node.left;
//   }
//   return node;
// }
// let value = 5;
// tree.root = deleteNode(tree.root, value);
// console.log(tree);
// console.log("Root Value After deletion : ", tree.root.value);

// find floor and ceil value in BST

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(3);
// root.left.right = new Node(8);
// root.right.right = new Node(20);
// console.log(root);

// find floor and ceil value function

// function findFloorCeil(root, key) {
//   let ceil = -1;
//   let floor = -1;

//   while (root) {
//     if (root.value === key) {
//       floor = ceil = root.value;
//       return { floor, ceil };
//     }
//     if (key > root.value) {
//       // current node is a candidate for ceil
//       floor = root.value;
//       root = root.right;
//     } else {
//       ceil = root.value;
//       root = root.left;
//     }
//   }
//   return { floor, ceil };
// }
// let key = 9;
// console.log(findFloorCeil(root, key));
