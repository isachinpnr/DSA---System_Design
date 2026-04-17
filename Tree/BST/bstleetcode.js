// LeetCode Problem 700 : Search In Binary Search Tree

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(5);
// root.left = new Node(3);
// root.left.right = new Node(4);
// root.right = new Node(7);
// root.left.left = new Node(1);
// root.right.left = new Node(6);
// root.right.right = new Node(9);
// console.log(root);

// var searchBST = function (root, val) {

//     // base case
//     if (root === null) return null;

//     // value found
//     if (root.val === val) return root;

//     // if not so search left and right
//     if (val < root.val) {
//         return searchBST(root.left, val);
//     } else {
//         return searchBST(root.right, val);
//     }

// };

// another approach to store a element such like an LeetCode style

// function searchBST(root, val) {
//   // base case
//   if (root === null) return result;

//   if (root.value === val) {
//     return collectSubtree(root);
//   }
//   // find left and right
//   if (val < root.value) {
//     return searchBST(root.left, val);
//   } else {
//     return searchBST(root.right, val);
//   }
// }

// function collectSubtree(node, result = []) {
//   if (node === null) return result;

//   result.push(node.value);
//   collectSubtree(node.left, result);
//   collectSubtree(node.right, result);

//   return result;
// }

// let val = 5;
// console.log(searchBST(root, val));

// LeetCode Problem 701 : Insert into BST

// function insertBST(root, val) {
//   let newNode = new TreeNode(val);
//   let current = root;
//   // handle duplicate
//   if (val === root.val) return root;
//   if (root === null) return newNode;

//   while (true) {
//     if (val < current.val) {
//       if (current.left === null) {
//         current.left = newNode;
//         break;
//       }
//       current = current.left;
//     } else {
//       if (current.right === null) {
//         current.right = newNode;
//         break;
//       }
//       current = current.right;
//     }
//   }
//   return root;
// }

// LeetCode Problem : 450 : Delete Node in BST

// function deleteNode(root, key) {
//   // base case
//   if (root === null) return null;

//   // search key/node to delete in left & right in BST
//   if (key < root.left) {
//     root.left = deleteNode(root.left, key);
//   } else if (key > root.right) {
//     root.right = deleteNode(root.right, key);
//   } else {
//     // node found - handle 3 case
//     // 1. if node has only 1 child or none of child
//     if (root.left === null) return root.right;
//     if (root.right === null) return root.left;

//     // 2. if node has both child
//     // find a successor to right subtree
//     const successor = findMin(root.right);
//     // copy successor value
//     root.value = successor.value;
//     // delete successor
//     root.right = deleteNode(root.right , successor.value);
//   }
//   return root;
// }
// function findMin(node){
//     while(node.left !== null){
//         node = node.left;
//     }
//     return node;
// }

// LeetCode Problem 98 : Validate Binary Search Tree

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(5);
// root.left = new Node(1);
// root.left.left = new Node(0);
// root.left.right = new Node(3);
// root.right = new Node(7);
// root.right.left = new Node(6);
// root.right.right = new Node(9);
// root.right.right.right = new Node(11);
// console.log(root);

// function isValidBST(root) { //***
//   function check(node, min, max) {
//     // base case
//     if (node === null) return true;

//     if (node.value <= min || node.value >= max) return false;

//     return (
//       check(node.left, min, node.value) && check(node.right, node.value, max)
//     );
//   }
//   return check(root, -Infinity, Infinity);
// }

// console.log(isValidBST(root));

// LeetCode Problem : 230 : Kth Smallest element in BST

// optimal way - no space hold , and early return when element found
// function kthSmallest(root, k) {
//   let ans = null;
//   let count = 0;

//   function find(node) {
//     if (node === null) return;

//     find(node.left);

//     count++;
//     if (count === k) {
//       ans = node.value;
//       return;
//     }

//     find(node.right);
//   }
//   find(root);
//   return ans;

// store the value first then calculate element - not optimal
// let result = [];
// function find(node) {
//   if (node === null) return;

//   find(node.left);
//   result.push(node.value);
//   find(node.right);
// }
// find(root);
// return result[k - 1];
// }
// let k = 5;
// console.log(kthSmallest(root, k));

// optional - if you find to kth largest ---------
// function findKthLargest(root, k) {
//     let count = 0;
//     let answer = null;

//     function reverseInorder(node) {
//         if (node === null) return;
//         // Step 1: Go RIGHT first
//         reverseInorder(node.right);
//         // Step 2: Process node
//         count++;
//         if (count === k) {
//             answer = node.value;
//             return;
//         }
//         // Step 3: Go LEFT
//         reverseInorder(node.left);
//     }
//     reverseInorder(root);
//     return answer;
// }

// LeeCode Problem : 235 : Lowest Common Ancestor of a Binary Search Tree

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
// root.right.right = new Node(18);
// root.left.right = new Node(7);
// // console.log(root);

// function lowestCommonAncestor(root, p, q) {
//   // base case
//   if (root === null) return null;

//   if (p.value < root.value && q.value < root.value) {
//     return lowestCommonAncestor(root.left, p, q);
//   } else if (p.value > root.value && q.value > root.value) {
//     return lowestCommonAncestor(root.right, p, q);
//   } else {
//     return root;
//   }
// }
// let p = root.left.right.left;
// let q = root.left.right.right;
// console.log(lowestCommonAncestor(root, p, q));

// iterative approach :
// function lowestCommonAncestor(root, p, q) {
//     let current = root;
//     while (current) {
//         if (p.value < current.value && q.value < current.value)
//             current = current.left;
//         else if (p.value > current.value && q.value > current.value)
//             current = current.right;
//         else
//             return current;
//     }
//     return null;
// }

// GFG Problem : find ceil and Floor value in BST

// function findFloorCeil(root, key) {
//   let ceil = -1;
//   let floor = -1;

//   while (root) {
//     if (root.value === key) {
//       floor = ceil = root.value;
//       return { floor, ceil };
//     }
//     if (key > root.value) {
//       // current node is a candidate for floor
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

// remember this line  -
// floor - biggest value who is equal and less then key  - floor <= key
// ceil - smallest value who is equal and greater then key - ceil >= key

// LeetCode 938 : Range Sum Of BST ---------------------------------------

// function rangeSumBST(root, low, high) {
//   let sum = 0;
//   // base case
//   if (root === null) return 0;

//   if (low < root.value) {
//     sum += rangeSumBST(root.left, low, high);
//   }
//   if (low <= root.value && high >= root.value) {
//     sum += root.value;
//   }
//   if (high > root.value) {
//     sum += rangeSumBST(root.right, low, high);
//   }
//   return sum;
// }

// let low = 7;
// let high = 15;
// console.log(rangeSumBST(root , low , high));

// 173 : Binary Search Tree Iterator

// const BSTIterator = function (root) {
//   this.stack = [];
//   this.pushLeft(root);
// };

// // Helper function to push all left nodes

// BSTIterator.prototype.pushLeft = function (node) {
//   while (node !== null) {
//     this.stack.push(node);
//     node = node.left;
//   }
// };

// BSTIterator.prototype.next = function () {
//   let node = this.stack.pop(); // smallest node

//   if (node.right !== null) {
//     this.pushLeft(node.right); // process right subtree
//   }

//   return node.val;
// };

// BSTIterator.prototype.hasNext = function () {
//   return this.stack.length > 0;
// };

//LeetCode Problem : 108 : Convert Sorted Array to Binary Search Tree...
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function makeBST(nums) {
//   if (nums.length === 0) return null;
//   function BST(arr, left, right) {
//     if (left > right) return null;

//     const mid = Math.floor((left + right) / 2);

//     const root = new Node(arr[mid]);

//     root.left = BST(arr, left, mid - 1);
//     root.right = BST(arr, mid + 1, right);

//     return root;
//   }
//   return BST(nums, 0, nums.length - 1);
// }

// let arr = [1, 2, 3, 4, 5];
// const root = makeBST(arr);
// console.log(root);

// LeetCode Problem : 1008 : Construct BST from PreOrder Traversal
// this is a not optimal solution of this problem -

// function bstFromPreorder(arr) {
//   function build(arr) {
//     // base case
//     if (arr.length === 0) return null;
//     let rootVal = arr[0];
//     const root = new Node(rootVal);

//     let left = [];
//     let right = [];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < rootVal) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     root.left = build(left);
//     root.right = build(right);

//     return root;
//   }
//   return build(arr);
// }
// // Time & Space Complexity :
// // Time Complexity : O(n^2) (because : we loop + create array every time)

// optimal (range based solution)
// function bstFromPreorder(arr) {
//   let i = 0;
//   function build(bound = Infinity) {
//     // base case
//     if (i === arr.length || arr[i] > bound) return null;

//     let rootVal = arr[i++];
//     const root = new Node(rootVal);

//     // build left subtree (value < rootVal)
//     root.left = build(rootVal);
//     // build right subtree (value < bound)
//     root.right = build(bound);

//     return root;
//   }
//   return build();
// }

// let nums = [8, 5, 1, 7, 10, 12];
// const root = bstFromPreorder(nums);
// console.log(root);

// LeetCode Problem : 1382 : Balance a Binary Search Tree.....
// 1. Create node
// 2. Build left subtree
// 3. Build right subtree
// 4. Return node

// function balanceBST(root) {
//   let result = [];
//   function traverse(node) {
//     // base case
//     if (node === null) return;

//     traverse(node.left);
//     result.push(node.value);
//     traverse(node.right);
//   }
//   traverse(root);

//   // convert array into BST ...
//   function makeBST(result, left, right) {
//     // base case
//     if (left > right) return null;

//     const mid = Math.floor((left + right) / 2);
//     let node = new Node(result[mid]);

//     node.left = makeBST(result, left, mid - 1);
//     node.right = makeBST(result, mid + 1, right);

//     return node;
//   }
//   return makeBST(result, 0, result.length - 1);
// }

// console.log(balanceBST(root));

// LeetCode Problem : 653 : Two Sum In BST ............

// function findTarget(root, k) {
//   let result = [];
//   function traverse(node) {
//     if (node === null) return null;

//     traverse(node.left);
//     result.push(node.value);
//     traverse(node.right);
//   }
//   traverse(root);

//   //   // a target element is exist or not
//   function isNum(result) {
//     let left = 0;
//     let right = result.length - 1;
//     while (left < right) {
//       const sum = result[left] + result[right];
//       if (sum === k) return true;
//       if (sum < k) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//     return false;
//   }
//   return isNum(result);
// }
// let k = 13;
// console.log(findTarget(root, k));

// LeetCode Problem 99 : Recover Binary Search Tree ..........
// brute - force approach .............
// function recoverTree(root) {
//   let result = [];
//   function traverse(node) {
//     if (node === null) return;

//     traverse(node.left);
//     result.push(node.value);
//     traverse(node.right);
//   }
//   traverse(root);

//   // find a swapped value form array
//   let first = null;
//   let second = null;
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] > result[i + 1]) {
//       if (first === null) {
//         first = result[i];
//       }
//       second = result[i + 1];
//     }
//   }

//   // find nodes and swap value
//   let node1 = null;
//   let node2 = null;
//   let count = 0;

//   function search(node) {
//     if (node === null || count === 2) return;

//     if (node.value === first) {
//       node1 = node;
//       count++;
//     }
//     if (node.value === second) {
//       node2 = node;
//       count++;
//     }
//     search(node.left);
//     search(node.right);
//   }
//   search(root);

//   if (node1 && node2) {
//     [node1.value, node2.value] = [node2.value, node1.value];
//   }
//   return root;
// }
// console.log(recoverTree(root));

// optimal way -

// function recoverTree(root) {
//   let first = null;
//   let second = null;
//   let prev = null;

//   function inOrder(node) {
//     if (node === null) return;

//     inOrder(node.left);

//     // detect violation
//     if (prev !== null && prev.value > node.value) {
//       if (first === null) {
//         first = prev;
//       }
//       second = node;
//     }
//     prev = node;

//     inOrder(node.right);
//   }
//   inOrder(root);

//   if(first && second){
//     [first.value , second.value] = [second.value , first.value];
//   }
//   return root;
// }
// console.log(recoverTree(root));

// GFG : Largest BST in Binary Tree................................

// function largestBST(root) {
//   let maxSize = 0;

//   function helper(node) {
//     // base case
//     if (node === null) {
//       return {
//         isBST: true,
//         size: 0,
//         min: Infinity,
//         max: -Infinity,
//       };
//     }

//     let left = helper(node.left);
//     let right = helper(node.right);

//     // check BST condition
//     if (
//       left.isBST &&
//       right.isBST &&
//       node.value > left.max &&
//       node.value < right.min
//     ) {
//       let size = left.size + right.size + 1;

//       maxSize = Math.max(maxSize, size);

//       return {
//         isBST: true,
//         size: size,
//         min: Math.min(node.value, left.min),
//         max: Math.max(node.value, right.max),
//       };
//     }
//     // if not BST
//     return {
//       isBST: false,
//       size: 0,
//       min: -Infinity,
//       max: Infinity,
//     };
//   }
//   helper(root);
//   return maxSize;
// }
// console.log(largestBST(root));

// LeetCode Problem : 226 : Invert Binary Tree.....

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(4);
// root.left = new Node(2);
// root.right = new Node(7);
// root.left.left = new Node(1);
// root.left.right = new Node(3);
// root.right.right = new Node(9);
// root.right.left = new Node(6);

// function invertTree(root) {
//   let front = 0;
//   const queue = [root];

//   while (front < queue.length) {
//     const node = queue[front++];
// // swap nodes
//     [node.left , node.right] = [node.right , node.left]

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   return root;
// }
// console.log(invertTree(root));

// LeetCode Problem 437 : Path Sum - III
// function pathSum(root, targetSum) {
//   // map to store frequency of prefix sums
//   const prefixSumMap = new Map();

//   prefixSumMap.set(0, 1);

//   let count = 0;

//   function dfs(node, currentSum) {
//     if (node === null) return;

//     currentSum += node.value;

//     if (prefixSumMap.has(currentSum - targetSum)) {
//       count += prefixSumMap.get(currentSum - targetSum);
//     }
//     prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

//     dfs(node.left, currentSum);
//     dfs(node.right, currentSum);

//     prefixSumMap.set(currentSum, prefixSumMap.get(currentSum) - 1);
//   }
//   dfs(root, 0);
//   return count;
// }
// let targetSum = 8;
// console.log(pathSum(root, targetSum));

// LeetCode Problem : 572 : Subtree of Another Tree
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class Node2 {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(3);
// root.left = new Node(4);
// root.right = new Node(5);
// root.left.left = new Node(1);
// root.left.right = new Node(2);
// // console.log(root);

// const subRoot = new Node(4);
// subRoot.left = new Node(1);
// subRoot.right = new Node(2);
// // console.log(subRoot);

// // brute - force 
// function isSubtree(root, subRoot) {
//   if (!root) return false;
//   if (isSameTree(root, subRoot)) return true;
//   return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// }

// function isSameTree(node1, node2) {
//   if (!node1 && !node2) return true;
//   if (!node1 || !node2) return false;
//   if (node1.value !== node2.value) return false;
//   return (
//     isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
//   );
// }
// console.log(isSubtree(root, subRoot));

// // optimal approach 
