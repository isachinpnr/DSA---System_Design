// this is a merge sort algo.....

// function mergeSort(nums) {
//   // base case
//   if (nums.length <= 1) return nums;
//   // find a middle of array
//   let mid = Math.floor(nums.length / 2);
//   // part in 2 half
//   let left = mergeSort(nums.slice(0, mid)); ///
//   let right = mergeSort(nums.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let sortedArr = [];
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       sortedArr.push(left[i++]);
//     } else {
//       sortedArr.push(right[j++]);
//     }
//   }
//   return [...sortedArr, ...left.slice(i), ...right.slice(j)];
// }

// let arr = [5, 2, 3, 0, 4, 8, 9, 7, 5, 3];
// console.log(mergeSort(arr));
