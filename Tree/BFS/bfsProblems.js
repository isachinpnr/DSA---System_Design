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