// p1 : factorial of an number

// function factorialNum(n) {
//   // base case
//   if (n === 0) return 1;
//   // recursive function
//   let result = n * factorialNum(n - 1);
//   return result;
// }
// let num = 5;
// console.log(factorialNum(num));

// p2 : sum of N

// function sumOfN(n) {
//   // base case
//   if (n === 0) return 0;
//   // recursive approach
//   let result = n + sumOfN(n - 1);
//   return result;
// }
// let num = 10;
// console.log(sumOfN(num));

// p3 : print 1 to N

// function print1ToN(n) {
//     // base case
//     if(n > 10) return 1;
//     // recursive case
//     // console.log(n);
//     let result = print1ToN(n + 1);
//     console.log(n);
//     // return result;
// }
// let num = 1;
// console.log(print1ToN(num));

// p4 : reverse array
// function reverseArr(nums) {
//   const helper = (left, right) => {
//     // base case...
//     if (left >= right) return nums;
//     [nums[left], nums[right]] = [nums[right], nums[left]];
//     return helper(left + 1, right - 1);
//   };
//   return helper(0, nums.length - 1);
// }
// let arr = [5, 4, 3, 2, 1];
// console.log(reverseArr(arr));

// p5 : power basic

// function powerFunction(x, n) {
//   // base case
//   if (n === 0) return 1;
//   if (n === 1) return x;
//   // handle negative
//   if (n < 0) {
//     x = x / 1;
//     n = -n;
//   }
//   let half = powerFunction(x, Math.floor(n / 2));
//   if (n % 2 === 0) return half * half;
//   else return x * half * half;
// }
// let x = 3;
// let n = -4;
// console.log(powerFunction(x, n));

// p6 : Binary Search // requirement : array is sorted;

// function binarySearch(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] < target) {
//       left = left + 1;
//     } else if (nums[mid] > target) {
//       right = right - 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// }

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// let target = 2;
// console.log(binarySearch(arr, target));

// binary search with recursion
// function binarySearch(arr, target) {
//   // helper function
//   function helper(left, right) {
//     // base case ...
//     if (left > right) return -1;

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) {
//       return helper(mid + 1, right);
//     } else {
//       return helper(left, mid - 1);
//     }
//   }
//   return helper(0, arr.length - 1);
// }
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let target = 1;
// console.log(binarySearch(nums, target));

// p7 : merge sort

// function mergeSort(arr) {
//   // base case...
//   // if one element - return them
//   if (arr.length <= 1) return arr;

//   // first-   find a mid of the array
//   let mid = Math.floor(arr.length / 2);
//   // divide an array in just of middle in two parts
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//   let sortedArr = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   return [...sortedArr, ...left, ...right];
// }
// // Time and Space Complexity
// // Time Complexity : O(n log n)
// // Space Complexity : O(n)
// let nums = [4, 2, 3, 0, 1, 6, 9, 5, 4, 2, 7];
// console.log(mergeSort(nums));
