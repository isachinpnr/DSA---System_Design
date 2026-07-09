// Rotate any array in a last position - right rotation

// let rightRotation = (arr, k) => {
//   let result = [];
//   let n = arr.length;
//   k = k % n; //(if any this happend in dsa to it goes on a circular path , so use a % operation)
//   //last element shift to starting position.....
//   for (let i = n - k; i < n; i++) {
//     result.push(arr[i]);
//   }
//   // push first element in result (stack);
//   for (let i = 0; i < n - k; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// };

// let nums = [3, 4, 5, 0, 1, 2];
// let k = 5;
// console.log(rightRotation(nums, k));

// left rotate array logic .......................

// function leftRotate(arr, k) {
//   let n = arr.length;
//   k = k % n;
//   let result = [];

//   // contain remaining k last elements
//   for (let i = k; i < n; i++) {
//     result.push(arr[i]);
//   }
//   // remaining elements contain in lastly ...
//   for (let i = 0; i < k; i++) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// let nums = [1, 2, 3, 4, 5];
// let k = 1;
// console.log(leftRotate(nums, k));
