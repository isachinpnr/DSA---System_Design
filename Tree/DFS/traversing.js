// Traversal In Binary Tree....
// There are 3 Types of Binary Tree Traversal Technique
// 1. Pre-Order Traversal  - Root->Left->Right
// 2. In-Order Traversal - Left->Root->Right
// 3. Post-Order Traversal - Left->Right->Root

// - Depth First Search(DFS):
// - In DFS, you go as deep as possible down one branch before you even think about
// looking at the other side.

// example code of depth-first-search(DFS)
// 1. - In-Order Traversal left->root->right ----------------------------------------------
// class BT {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// let root = new BT(1);
// root.left = new BT(10);
// root.right = new BT(2);
// root.left.left = new BT(50);
// root.right.right = new BT(7);
// root.right.left = new BT(23);
// root.left.right = new BT(24);
// root.left.left.right = new BT(55);
// root.right.left.right = new BT(11);

// in-order Traversal Function
// function inOrder(node) {
//   // base case : if base is null
//   if (node === null) return;

//   // recursive call : visit the left subtree
//   inOrder(node.left);
//   // the 'work' print the current node's value
//   console.log(node.value);
//   //recursive call : visit the right subtree
//   inOrder(node.right);

//   // return root;
// }
// console.log("In-Order Traversal Output");
// inOrder(root);

// key point to remember a flow
// - when a node is null then programme return a flow then it print when a return.

// print a value as a array types in tree...........
// function ArrTree(root) {
//   let result = [];
//   // helper function to print an tree as array
//   function traverse(node) {
//     // base case
//     if (node === null) return;

//     traverse(node.left);
//     result.push(node.value);
//     traverse(node.right);
//   }
//   traverse(root);
//   return result;
// }
// console.log("Print Tree As Array");
// console.log(ArrTree(root));

// Time & Space Complexity of BT (it's depends of a tree type)
// Time Complexity : O(n)
// Space Complexity : O(h) or balanced tree O(log n);

// 2. DFS - Pre-Order-Traversal - Root->Left->Right ----------------------------------------
// class BT {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new BT(5);
// root.left = new BT(3);
// root.right = new BT(11);
// root.left.left = new BT(17);
// root.right.left = new BT(25);
// root.left.left.right = new BT(13);
// root.right.left.right = new BT(19);
// root.left.left.right.left = new BT(22);
// console.log(root);

// // pre-order function
// function preOrder(node) {
//   // base case
//   if (node === null) return;

//   //print a node 's value first
//   console.log(node.value);
//   // traverse a left subtree
//   preOrder(node.left);
//   //traverse a right subtree
//   preOrder(node.right);
// }
// console.log("Pre-Order Tree");
// preOrder(root);

// // tree to array print function
// function arrayPrint(root) {
//   let result = [];
//   // helper function
//   function traverse(node) {
//     // base case
//     if (node === null) return;

//     result.push(node.value);
//     traverse(node.left);
//     traverse(node.right);
//   }
//   traverse(root);
//   return result;
// }
// // print a tree Array
// console.log(arrayPrint(root));

// Time & Space Complexity
// Time Complexity : O(n)
// Space Complexity : Depends on Tree Height : O(n)

// 3. Post-Order Traversal - left->right->root -------------------------------------------

// class BT {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new BT(5);
// root.right = new BT(7);
// root.left = new BT(6);
// root.right.right = new BT(9);
// root.left.right = new BT(11);
// root.right.left = new BT(15);
// root.left.right.left = new BT(20);
// root.right.left.left = new BT(22);

// // pre-order function
// function postOrder(node){
//     // base case
//     if(node === null) return;

//     // traverse left subtree
//     postOrder(node.left);
//     // traverse right subtree
//     postOrder(node.right);
//     // print a node's value
//     console.log(node.value);
// }
// postOrder(root);

// // array print function of tree
// function printArr(root , result = []){
//     // base case
//     if(root === null) return;

//     printArr(root.left , result);
//     printArr(root.right , result);
//     result.push(root.value);
//     return result;
// }
// console.log(printArr(root));

// Time & Space Complexity:
// Time Complexity : O(n)
// Space Complexity : O(h)

// key points who i learn form all 3 traversal technique in DFS
// 1. in a pre-order traversal , print a node first where they go ,then explore it's left and right node
// 2. in a in-order traversal , start with root and find the left subtree first , and where they found to as a
// node which has not any left subtree node , so that a time they return or backtrack the previous node when they back
// or return the node that a time it's print a node where the return
// 3. in a post-order traversal a node go to a very depth of a tree and try to find a both left & right subtree
// of all the node , and where they think here has not an this node any left and right node so that a time they return
// with print a node in return time