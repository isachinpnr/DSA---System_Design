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
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
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


// function hasPathSum(root, targetSum) {
//     // base case...
//    if(root === null) return false;
//    if(root.left === null && root.right === null){
//     return root.value === targetSum;
//    }
//    const remaining = targetSum - root.value;
//    return hasPathSum(root.left , remaining) || hasPathSum(root.right ,remaining)
// }

// let targetSum = 22;
// console.log(hasPathSum(root , targetSum));

// LeetCode problem : 113 : Path Sum || Returns All Paths


