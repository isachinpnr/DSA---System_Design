// Some leetcode problem where used a recursion.....

// problem 1 : fibonacci Number.......................................

// function fibonacciNum(n, memo = {}) {
//   // 1 . check the cache
//   if (n in memo) return memo[n];
//   // base case
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   // calculate , save in memo , and return
//   memo[n] = fibonacciNum(n - 1, memo) + fibonacciNum(n - 2, memo);
//   return memo[n];
// }

// let num = 100;
// console.log(fibonacciNum(num));

// implementation of

// problem 2 : power function.................................................

// function myPow(x, n) {
//   // base case
//   if (n === 0) return 1;
//   if (n === 1) return x;
//   // handle negative
//   if (n < 0) {
//     x = 1 / x;
//     n = -n;
//   }
//   let half = myPow(x, Math.floor(n / 2));
//   if (n % 2 === 0) return half * half;
//   else return x * half * half;
// }
// let x = 3;
// let n = 3;
// console.log(myPow(x, n));

// problem 3 : is power of two ?.........................................

// function powerOfTwo(n) {
//   //base case
//   // handle negative numbers
//   if (n <= 0) return false;
//   // if we reach 1 , then it is a power of two
//   if (n === 1) return true;
//   // if not a power
//   // if n is not divisible by 2 , it's an odd number
//   if (n % 2 !== 0) return false;
//   //   recursive case:
//   return powerOfTwo(n / 2);
// }

// let num = 33;
// console.log(powerOfTwo(num));

// problem 4 : climbing Stairs ......................................

// function climbStairs(n, memo = {}) {
//   // check cache found first
//   if (n in memo) return memo[n];
//   // base case
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   // recursive function
//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   return memo[n];
// }
// let n = 7;
// console.log(climbStairs(n));

// problem 5 : merge two sorted list

// function linkedList() {
//   return {
//     head: null,
//     tail: null,
//     size: 0,
//     // appendNode
//     appendNode: function (data) {
//       let newValue = { value: data, next: null };
//       if (!this.head) {
//         this.head = newValue;
//         this.tail = newValue;
//       } else {
//         this.tail.next = newValue;
//         this.tail = newValue;
//       }
//       this.size++;
//       return;
//     },
//   };
// }
// // merge list function
// function mergeLists(list1, list2) {
//   // base case.....
//   if (!list1) return list2;
//   if (!list2) return list1;
//   // recursive approach...
//   if (list1.value < list2.value) {
//     list1.next = mergeLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeLists(list2.next, list1);
//     return list2;
//   }
// }

// let list1 = new linkedList();
// list1.appendNode(1);
// list1.appendNode(3);
// list1.appendNode(5);
// let list2 = new linkedList();
// list2.appendNode(2);
// list2.appendNode(4);
// list2.appendNode(6);

// let result = mergeLists(list1.head, list2.head);
// let current = result;
// let arr = [];
// while (current !== null) {
//   arr.push(current.value);
//   current = current.next;
// }
// console.log("Merged Lists : ", arr.join(" -> "));

// problem 5 : Binary Search....................................

// function binarySearch(arr, target) {
//   function helper(left, right) {
//     // base case...
//     if (left > right) return -1;

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) {
//       return helper(mid + 1, right);
//     } else {
//       return helper(left, mid - 1);
//     }
//   }
//   return helper(0, arr.length - 1);
// }

// let nums = [2, 4, 6, 8, 10, 12, 14];
// let target = 10;
// console.log(binarySearch(nums, target));

// problem 6 : merge Sort............................................

// function mergeSort(arr) {
//   //base case
//   if (arr.length <= 1) return arr;
//   // find a middle of an array
//   let mid = Math.floor(arr.length / 2);
//   // part into two half in middle
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   // call to another function (this function sort a array and merge);
//   return merge(left, right);
// }
// function merge(left, right) {
//   // store a sorted array in here
//   let sortedArr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   return [...sortedArr, ...left, ...right]; // left and right in here because of an remaining element ...
// }
// let nums = [1, 2, 6, 4, 8, 2, 4, 8, 21, 0, 4121, 0];
// console.log(mergeSort(nums));

// problem 7: merge intervals.......................................

