// / find a min and max element in tree with BFS
// function findMinMax(root) {
//   let queue = [root]; // you can push a root
//   // base case
//   if (root === null) return;

//   // let min = Infinity;
//   // let max = -Infinity;
//   // another way to initialize
//   let min = root.value;
//   let max = root.value;
//   // you can push a root
//   // queue.push(root);

//   while (queue.length > 0) {
//     const current = queue.shift();
//     // if (current.value < min) {
//     //   min = current.value;
//     // }
//     // if (current.value > max) {
//     //   max = current.value;
//     // }

//     // another way
//     min = Math.min(min , current.value);
//     max = Math.max(max , current.value);

//     if (current.left !== null) queue.push(current.left);
//     if (current.right !== null) queue.push(current.right);
//   }
//   return { min, max };
// }
// console.log(findMinMax(root));

// take a tree value as a array
// function levelOrder(root) {
//   let arr = [];
//   // base case
//   if (root === null) return;
//   let queue = [];
//   // push first (root) in queue
//   queue.push(root);

//   while (queue.length > 0) {
//     const current = queue.shift();
//     arr.push(current.value);
//     if(current.left !== null) queue.push(current.left);
//     if(current.right !== null) queue.push(current.right);
//   }
//   return arr;
// }
// console.log(levelOrder(root));

// / Zig Zag Travel

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
