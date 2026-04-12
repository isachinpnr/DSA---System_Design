// Tree Data structure Implementation - Revision

// 1. Traversing
// I Depth-First-Search
// II Breadth-First-Search

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root = new Node(5);
// root.left = new Node(7);
// root.right = new Node(3);
// root.left.left = new Node(12);
// root.left.right = new Node(15);
// root.left.right.left = new Node(9);
// root.right.right = new Node(21);
// root.right.left = new Node(26);
// root.right.left.left = new Node(16);
// root.right.left.left.right = new Node(18);

// // a1. InOrder Traversing : left->root->right
// function inOrder(root) {
//   const result = [];
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
// console.log(`Inorder : ${inOrder(root)}`);

// // a2. preOrder Traversing : root->left->right
// function preOrder(root) {
//   const result = [];
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
// console.log(`PreOrder ${preOrder(root)}`);

// // a3. PostOrder Traversing left->right->root
// function postOrder(root) {
//   const result = [];
//   function traverse(node) {
//     // base case
//     if (node === null) return;

//     traverse(node.left);
//     traverse(node.right);
//     result.push(node.value);
//   }
//   traverse(root);
//   return result;
// }
// console.log(`PostOrder : ${postOrder(root)}`);

// // 2. LevelOrder Traversing

// function levelOrder(root) {
//   // base case
//   if (root === null) return;

//   let result = [];
//   const queue = [root];
//   let front = 0;

//   while (front < queue.length) {
//     const node = queue[front++];
//     result.push(node.value);
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return result;
// }

// console.log(`LevelOrder : ${levelOrder(root)}`);

// // 3. Height of Binary Tree :
// function heightBT(root) {
//   function height(node) {
//     // base case
//     if (node === null) return 0;

//     let left = height(node.left);
//     let right = height(node.right);
//     // maxHeight = Math.max(maxHeight);
//     return Math.max(left, right) + 1;
//   }
//   return height(root);
// }
// console.log(`height : ${heightBT(root)}`);

// // 4. DEPTH OF TREE
// function depthBT(root, target) {
//   if (root === null) return -1;
//   if (root.value === target) return 0;

//   let leftDepth = depthBT(root.left, target);
//   let rightDepth = depthBT(root.right, target);

//   if (leftDepth !== -1) return leftDepth + 1;
//   if (rightDepth !== -1) return rightDepth + 1;
//   return -1;
// }
// let target = 18;
// console.log(`Depth : ${depthBT(root, target)}`);

// // 5. check tree is Balance?
// function isBalance(root) {
//   let balance = true;
//   function check(node) {
//     // base case
//     if (node === null || !balance) return 0;

//     let left = check(node.left);
//     let right = check(node.right);

//     if (Math.abs(left - right) > 1) balance = false;
//     return Math.max(left, right) + 1;
//   }
//   check(root);
//   return balance;
// }
// console.log(`Is Tree Balance : ${isBalance(root)}`);

// // 6. Diameter of Tree
// function diameterBT(root) {
//   let diameter = 0;
//   function check(node) {
//     if (node === null) return 0;

//     let left = check(node.left);
//     let right = check(node.right);

//     diameter = Math.max(diameter, left + right);
//     return Math.max(left, right) + 1;
//   }
//   check(root);
//   return diameter;
// }
// console.log(`Diameter Of Tree : ${diameterBT(root)}`);

// 7. Find LCA in BT
// function findLCA(root, p, q) {
//   // base case
//   if (root === null) return null;

//   if (root.value === p || root.value === q) return root;

//   let left = findLCA(root.left, p, q);
//   let right = findLCA(root.right, p, q);

//   if (left && right) return root;

//   return left || right;
// }

// let p = 26;
// let q = 15;
// let result = findLCA(root, p, q);
// console.log(`LCA in Tree : ${result ? result.value : "Not Found"}`);

// 8. LCA of BST
// console.log(bstRoot);
// function findLCAInBST(bstRoot, p, q) {
//   // base case
//   if (bstRoot === null) return null;

//   if (p < bstRoot.value && q < bstRoot.value) {
//     return findLCAInBST(bstRoot.left, p, q);
//   }

//   if (p > bstRoot.value && q > bstRoot.value) {
//     return findLCAInBST(bstRoot.right, p, q);
//   }

//   return bstRoot.value;
// }

// let p = 1;
// let q = 4;
// console.log(`LCA of BST : ${findLCAInBST(bstRoot, p, q)}`);

//9. Path Sum of Binary Tree
// function hasPathSum(root, targetSum) {
//   // base case
//   if (root === null) return false;

//   if (root.left === null && root.right === null) {
//     return root.value === targetSum;
//   }
//   const remaining = targetSum - root.value;
//   return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
// }
// let targetSum = 24;
// console.log(hasPathSum(root, targetSum));

// 10. Path Sum II - Binary Tree
// function pathSumII(root, targetSum) {
//   // all possible paths
//   const allPaths = [];

//   function dfs(node, remainingSum, paths) {
//     if (node === null) return;

//     paths.push(node.value);

//     if (
//       node.left === null &&
//       node.right === null &&
//       remainingSum === node.value
//     ) {
//       allPaths.push([...paths]);
//     } else {
//       dfs(node.left, remainingSum - node.value, paths);
//       dfs(node.right, remainingSum - node.value, paths);
//     }
//     paths.pop();
//   }
//   dfs(root, targetSum, []);
//   return allPaths;
// }
// let targetSum = 35;
// console.log(pathSumII(root, targetSum));

// 11. Binary Tree Paths......................
// function BTPaths(root) {
//   const allPaths = [];

//   function dfs(node, path) {
//     // base case
//     if (node === null) return;

//     path.push(node.value);

//     if (node.left === null && node.right === null) {
//       allPaths.push([...path]);
//     } else {
//       dfs(node.left, path);
//       dfs(node.right, path);
//     }
//     path.pop();
//   }
//   dfs(root , []);
//   return allPaths;
// }
// console.log(BTPaths(root));

// 12. Sum root to leaves number
// function sumRootToLeaf(root) {
//   const allPaths = [];
//   function dfs(node, path) {
//     if (node === null) return;

//     path.push(node.value);

//     if (node.left === null && node.right === null) {
//       const num = Number(path.join(''));
//       allPaths.push(num);
//     } else {
//       dfs(node.left, path);
//       dfs(node.right, path);
//     }
//     path.pop();
//   }
//   dfs(root, []);
//   // const sum = allPaths.reduce((total , num) => total + num , 0);
//   let sum = 0;
//   for(let num of allPaths){
//     sum+= num;
//   }
//   return sum;
// }
// console.log(sumRootToLeaf(root));

// 13. path Sum - III -  Remaining Topic
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

// 14 . Binary Tree Maximum Path Sum
// function maxPathSum(root) {
//   let maxSum = -Infinity;
//   function dfs(node) {
//     if (node === null) return 0;

//     let leftGain = Math.max(dfs(node.left), 0);
//     let rightGain = Math.max(dfs(node.right), 0);

//     let pathThroughNode = node.value + leftGain + rightGain;
//     maxSum = Math.max(maxSum, pathThroughNode);

//     return node.value + Math.max(leftGain, rightGain);
//   }
//   dfs(root);
//   return maxSum;
// }
// console.log(maxPathSum(root));

// 15. Zig-Zag Travel .....................
// function zigZag(root) {
//   const result = [];

//   const queue = [root];
//   let front = 0;
//   let level = 0;

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
//     level++;
//     result.push(levelNodes);
//   }

//   return result;
// }
// console.log(zigZag(root));

// 16. max-width of BT.....
// function maxWidth(root) {
//   let maxWidth = 0;

//   // base case
//   if (root === null) return 0;

//   let queue = [[root, 0n]];

//   while (queue.length > 0) {
//     let levelSize = queue.length;
//     let firstIndex = queue[0][1];
//     let lastIndex = queue[levelSize - 1][1];

//     let width = Number(lastIndex - firstIndex + 1n);
//     maxWidth = Math.max(maxWidth, width);

//     for (let i = 0; i < levelSize; i++) {

//       const [node, index] = queue.shift();

//       if (node.left) {
//         queue.push([node.left, 2n * index + 1n]);
//       }
//       if (node.right) {
//         queue.push([node.right, 2n * index + 2n]);
//       }
//     }
//   }
//   return maxWidth;
// }

// console.log(maxWidth(root));

//17.  Maximum Depth Of Binary Tree
// function maxDepth(root) {
//   function dfs(node){
//     if(node === null) return 0;

//     let left = dfs(node.left)
//     let right = dfs(node.right);

//     return Math.max(left , right) + 1;
//   }
//   return dfs(root);
// }
// console.log(maxDepth(root));

// 18. Top View Of Binary Tree
// function topView(root) {
//   // base case
//   if (!root) return [];
//   let front = 0;
//   const queue = [[root, 0]];
//   const map = new Map();

//   while (front < queue.length) {
//     const [node, hd] = queue[front++];

//     if (!map.has(hd)) {
//       map.set(hd, node.value);
//     }
//     if (node.left) queue.push([node.left, hd - 1]);
//     if (node.right) queue.push([node.right, hd + 1]);
//   }
//   const sorted = [...map.entries()].sort((a, b) => a[0] - b[0]);
//   return sorted.map(([_, val]) => val);
// }
// console.log(topView(root));

//19. bottom view in BT..................
// function bottomView(root) {
//   // base case
//   if (root === null) return [];

//   const queue = [[root, 0]];
//   let front = 0;
//   const map = new Map();

//   while (front < queue.length) {
//     const [node, hd] = queue[front++];

//      map.set(hd, node.value); // always overwrite

//     if (node.left) queue.push([node.left, hd - 1]);
//     if (node.right) queue.push([node.right, hd + 1]);
//   }
//   const sorted = [...map.entries()].sort((a, b) => a[0] - b[0]);
//   return sorted.map(([_, val]) => val);
// }
// console.log(bottomView(root));

//20. left view of Binary tree
// function leftView(root) {
//   const result = [];
//   const queue = [root];
//   let front = 0;

//   while (front < queue.length) {
//     let levelSize = queue.length - front;
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue[front++];
//       if (i === 0) {
//         result.push(node.value);
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return result;
// }
// console.log(leftView(root));

// 21. Right View Of Binary Tree
// function rightView(root) {
//   // base case
//   if (root === null) return;

//   const result = [];
//   const queue = [root];
//   let front = 0;

//   while (front < queue.length) {
//     let levelSize = queue.length - front;
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue[front++];
//       if (i === levelSize - 1) {
//         result.push(node.value);
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return result;
// }
// console.log(rightView(root));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// const root1 = new Node(1);
// root1.left = new Node(2);
// root1.right = new Node(3);

// const root2 = new Node(1);
// root2.left = new Node(2);
// root2.right = new Node(3);

// 22. Same Tree?
// function sameTree(root1, root2) {
//   // base case
//   if (root1 === null && root2 === null) return true;
//   if (root1 === null || root2 === null) return false;
//   if (root1.value !== root2.value) return false;

//   // recursive check
//   return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);
// }
// console.log(sameTree(root1, root2));

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
// root.left.right = new Node(4);
// root.right.right = new Node(3);
// root.right.left = new Node(4);
// // 23. symmetric tree?
// function symmetricTree(root) {
//   // base case
//   if (root === null) return true;

//   function check(leftNode, rightNode) {
//     if (leftNode === null && rightNode === null) return true;
//     if (leftNode === null || rightNode === null) return false;
//     if (leftNode.value !== rightNode.value) return false;

//     // recursive check
//     return (
//       check(leftNode.left, rightNode.right) &&
//       check(leftNode.right, rightNode.left)
//     );
//   }
//   return check(root.left, root.right);
// }

// console.log(symmetricTree(root));

// 23. serialize & de-serialize BT..............
// function serializeDeserialize(root) {
//   const result = [];
//   function dfs(node) {
//     if (node === null) {
//       result.push("#");
//       return;
//     }
//     result.push(node.value);
//     dfs(node.left);
//     dfs(node.right);
//   }
//   dfs(root);
//   return result.join(",");
// }
// console.log(serializeDeserialize(root));

// // Deserialize function
// function deSerialize(data) {
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

// 24. Count Complete Tree Node
// function countCompleteTreeNodes(root) {
//   if (root === null) return 0;
//   let count = 0;
//   let front = 0;
//   const queue = [root];

//   while (front < queue.length) {
//     const node = queue[front++];
//     count++;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return count;
// }
// console.log(countCompleteTreeNodes(root));

//25. // LeetCode 965: Univalued Binary Tree

// function uniValuedTree(root) {
//   // base case
//   if (root === null) return true;

//   const queue = [root];
//   let front = 0;

//   while (front < queue.length) {
//     const node = queue[front++];
//     if (node.value !== root.value) return false;
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return true;
// }
// console.log(uniValuedTree(root));

// 26. sum of left leafs
// function sumLeftLeafs(root) {
//   let sum = 0;
//   function dfs(node, isLeft) {
//     if (node === null) return;

//     if (isLeft && node.left === null && node.right === null) {
//       sum += node.value;
//     }

//     dfs(node.left, true);
//     dfs(node.right, false);
//   }
//   dfs(root, false);
//   return sum;
// }
// console.log(sumLeftLeafs(root));

// 27. Average Of Leafs in BT........
// function averageBTLeafs(root) {
//   const result = [];
//   const queue = [root];
//   let front = 0;
//   while (front < queue.length) {
//     let levelSize = queue.length - front;
//     let levelSum = 0;
//     for (let i = 0; i < levelSize; i++) {
//       const node = queue[front++];
//       levelSum += node.value;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     let average = levelSum / levelSize;
//     result.push(average);
//   }
//   return result;
// }
// console.log(averageBTLeafs(root));

// 28. flatten BT to LinkedList.................
// function flattenBT(root) {
//   let current = root;

//   while (current) {
//     if (current.left) {
//       let predecessor = current.left;
//       while (predecessor.right) {
//         predecessor = predecessor.right;
//       }
//       predecessor.right = current.right;

//       current.right = current.left;
//       current.left = null;
//     }

//     current = current.right;
//   }
// }
// // Function to print flattened tree
// function printFlattenedTree(root) {
//   let result = [];
//   let current = root;
//   while (current) {
//     result.push(current.value);
//     current = current.right;
//   }
//   console.log(result.join(" → "));
// }
// // Run flatten
// flattenBT(root);
// // Print result
// printFlattenedTree(root);

//29. Search Node in BST.....................

// function searchInBST(root, val) {
//   // base case
//   if (root === null) return null;

//   if (root.value === val) return root;

//   if (val < root.value) {
//     return searchInBST(root.left, val);
//   } else {
//     return searchInBST(root.right, val);
//   }
// }
// let val = 13;
// console.log(searchInBST(root, val));

// 30. Insert Into BST............
// function insertIntoBST(root, val) {
//   // base case
//   if (root === null) return new Node(val);
//   // handle duplicate
//   if (val === root.val) return root;
//   let newNode = new Node(val);
//   let current = root;

//   while (true) {
//     if (val < current.value) {
//       if (current.left === null) {
//         current.left = new Node(val);
//         break;
//       }
//       current = current.left;
//     } else {
//       if (current.right === null) {
//         current.right = new Node(val);
//         break;
//       }
//       current = current.right;
//     }
//   }
//   return root;
// }
// insertIntoBST(root, 8);
// console.log(root);

// console.log(root);
// 31. delete Node in BST................
// function deleteNodeInBST(root, key) {
//   // base case
//   if (root === null) return null;

//   if (key < root.value) {
//     root.left = deleteNodeInBST(root.left, key);
//   } else if (key > root.value) {
//     root.right = deleteNodeInBST(root.right, key);
//   } else {
//     if (root.left === null) return root.right;
//     if (root.right === null) return root.left;

//     const successor = findMin(root.right);
//     root.value = successor.value;
//     root.right = deleteNodeInBST(root.right, successor.value);
//   }
//   return root;
// }
// function findMin(node) {
//   if (node.left !== null) {
//     node = node.left;
//   }
//   return node;
// }
// let key = 7;
// let result = deleteNodeInBST(root, key);
// console.log(result);

// 32. Validate BST........................
// function validateBST(root) {
//   let prev = null;
//   function inorder(node) {
//     // base case
//     if (node === null) return true;

//     if (!inorder(node.left)) return false;

//     if (prev !== null && node.value <= prev) return false;
//     prev = node.value;

//     return inorder(node.right);
//   }
//   return inorder(root);
// }
// console.log(validateBST(root));

// range way ...
// function isValid(root) {
//   function check(node, min, max) {
//     if (node === null) return true;

//     if (node.value <= min || node.value >= max) return false;

//     return (
//       check(node.left, min, node.value) && check(node.right, node.value, max)
//     );
//   }
//   return check(root, -Infinity, Infinity);
// }
// console.log(isValid(root));

// 33. Kth Smallest Element in BST
// function kthSmallest(root, k) {
//   let count = 0;
//   let ans = null;
//   function dfs(node) {
//     if (node === null) return 0;

//     dfs(node.left);
//     count++;
//     if (count === k) {
//       ans = node.value;
//       return;
//     }

//     dfs(node.right);
//   }
//   dfs(root);
//   return ans;
// }
// let k = 2;
// console.log(kthSmallest(root, k));
// if you want to find a largest value then you just simply traverse a BST in right to left;

//34. LCA of BST
// function LCABST(root, p, q) {
//   // base case
//   if (root === null) return null;

//   if (root.value === p || root.value === q) return root;

//   if (p < root.value && q < root.value) {
//     return LCABST(root.left, p, q);
//   }
//   if (p > root.value && q > root.value) {
//     return LCABST(root.right, p, q);
//   }
//   return root;
// }
// let p = 21;
// let q = 6;
// console.log(LCABST(root, p, q));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.right = new Node(21);
root.left.right = new Node(7);
root.left.left = new Node(3);
root.left.right.left = new Node(6);
root.left.right.right = new Node(9);
root.right.left = new Node(13);
root.right.right.right = new Node(25);
root.right.right.left = new Node(20);

// 35. find ceil and floor in BST
function findCeil(root, key) {
  let floor = -1;
  while (root) {
    if (root.value === key) {
      floor = root.value;
      return floor;
    }
    if (key < root.value) {
      // ceil = root.value;
      root = root.left;
    } else {
      floor = root.value;
      root = root.right;
    }
  }
  return floor;
}
console.log(findCeil(root, 4));

// 36. Range Sum of BST
function rangeSum(root) {
  
}
