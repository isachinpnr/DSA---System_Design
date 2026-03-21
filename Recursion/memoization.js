// 📘 Memoization (Recursion Optimization) —
// 🔴 1. Definition

// Memoization is an optimization technique where we store already computed results and reuse them to avoid repeated calculations in recursion.

// 🔴 2. Why Memoization is Needed

// In recursion, sometimes the same function is called multiple times with the same input.

// This leads to:

// ❌ Repeated calculations
// ❌ High time complexity
// ❌ Slow performance

// 🔍 Example: Fibonacci
// fib(5) → fib(4) + fib(3)

// fib(4) → fib(3) + fib(2)
// fib(3) → fib(2) + fib(1)

// 👉 fib(3) and fib(2) are calculated multiple times.

// This problem is called:

// Overlapping Subproblems

// 🔴 3. Key Idea of Memoization
// If result is already calculated → reuse it
// Else → calculate and store it
// 🔴 4. How Memoization Works

// We use a storage:

// • Array
// • Object
// • Map

// ✅ Steps

// 1️⃣ Create a storage (memo)
// 2️⃣ Check if value exists → return it
// 3️⃣ Otherwise calculate
// 4️⃣ Store result
// 5️⃣ Return result

// 🔴 5. Fibonacci with Memoization
// function fib(n, memo = {}){

//     if(n in memo) return memo[n]; // check

//     if(n <= 1) return n; // base case

//     memo[n] = fib(n-1, memo) + fib(n-2, memo); // store

//     return memo[n];
// }
// 🔴 6. Time Complexity
// Approach	Time Complexity
// Normal Recursion	O(2^n) ❌
// Memoization	O(n) ✅
// 🔴 7. Space Complexity
// O(n) → due to recursion stack + memo storage
// 🔴 8. When to Use Memoization

// Use memoization when:

// 1️⃣ Overlapping Subproblems

// Same function calls repeat.

// 2️⃣ Recursive Solution Exists

// Problem can be broken into smaller subproblems.

// 3️⃣ Optimization Needed

// Brute-force recursion is slow.

// 🔴 9. How to Identify Memoization Problem

// Ask:

// “Is the same input solved multiple times?”

// If YES → use memoization.

// 🔴 10. Types of Dynamic Programming
// 1️⃣ Memoization (Top-Down)
// Start from main problem → go to smaller problems
// Use recursion + storage
// 2️⃣ Tabulation (Bottom-Up)
// Start from base case → build solution iteratively
// 🔴 11. Memoization Template
// function solve(n, memo = {}){

//     if(n in memo) return memo[n];

//     if(base case) return base value;

//     memo[n] = solve(smaller problem);

//     return memo[n];
// }
// 🔴 12. Important Concepts
// ✔ Overlapping Subproblems

// Same problem solved multiple times

// ✔ Optimal Substructure

// Problem can be built using smaller subproblems

// 🔴 13. Memoization vs Normal Recursion
// Feature	Recursion	Memoization
// Speed	Slow ❌	Fast ✅
// Repeated Work	Yes ❌	No ✅
// Storage	No	Yes
// 🔴 14. Real Life Analogy
// Solve once → store → reuse later

// Example:

// ✔ Solving a math question once and remembering it

// 🔴 15. Key Insight

// Memoization converts recursion into efficient Dynamic Programming

// 🔴 16. Common Problems Using Memoization

// • Fibonacci
// • Climbing Stairs
// • Knapsack
// • Coin Change
// • Subset Sum

// 🔴 17. Final Summary
// Recursion → Repeated Work → Slow
// Memoization → Store Results → Fast
// 🧠 Personal Advice for You (Very Important)

// Sachin, follow this pattern always:

// 1️⃣ First solve problem using recursion
// 2️⃣ Then check for repeated calls
// 3️⃣ Then apply memoization

// test a memoization concept...

// used a memoization in fibonacci...

// function fibonacciNum(n, memo = {}) {
//   if (n in memo) return memo[n];

//   // base case
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   memo[n] = fibonacciNum(n - 1 , memo) + fibonacciNum(n - 2 , memo);
//   return memo[n];
// }

// let num = 40;
// console.log(fibonacciNum(num));

// divide and conquer ................................$$$$$###########%%%%%%%%%%%%%%%%%%%

// 1. sum of an array

// function sumArr(arr) {
//   // base case
//   if (arr.length === 0) return 0;
//   if (arr.length === 1) return arr[0];
//   // divide and conquer...
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return sumArr(left) + sumArr(right);
// }

// let nums = [5, 2, 3, 6, 4, 8];
// console.log(sumArr(nums));

// 2. find maximum element in array

// function findMax(arr) {
//   // base case
//   if (arr.length === 1) return arr[0];
//   // divide and conquer ...
//   let mid = Math.floor(arr.length / 2);
//   let left = findMax(arr.slice(0, mid));
//   let right = findMax(arr.slice(mid));
//   return Math.max(left, right);
// }
// let nums = [5, 2, 0, 3, 1, 6, 4, 8, 0, -56, 2, 11, 4, -1, -11];
// console.log(findMax(nums));

// count occurrences

// function countOccurrences(arr, target, index = 0) {
//   // base case...
//   if (index === arr.length) return 0;
//     if (arr.length === 1) return 1;

//   // count a occurrences;
//   let count = arr[index] === target ? 1 : 0;

//   return count + countOccurrences(arr, target, index + 1);
// }

// let nums = [1, 2, 5, 6, 4, 5, 6, 2, 1, 3, 4, 6, 4];
// let target = 1;
// console.log(countOccurrences(nums, target));

// same again
// with divide and conquer

// function countOccurrences(arr, target) {
//   // base case
//   if (arr.length === 0) return 0;
//   if (arr.length === 1) return arr[0] === target ? 1 : 0;

//   // divide and conquer strategy..
//   let mid = Math.floor(arr.length / 2);
//   const leftCount = countOccurrences(arr.slice(0, mid), target);
//   const rightCount = countOccurrences(arr.slice(mid), target);
//   return leftCount + rightCount;
// }
// let nums = [2, 5, 6, 4, 7, 8, 9, 5, 3, 2, 1, 5, 2, 4, 6];
// let target = 2;
// console.log(countOccurrences(nums, target));

// 3. binary search...
// function binarySearch(nums, target, left = 0, right = nums.length - 1) {
//   // base case
//   if (left > right) return -1;

//   let mid = Math.floor((left + right) / 2);
//   if (nums[mid] === target) return mid;
//   else if (nums[mid] < target) {
//     return binarySearch(nums, target, mid + 1, right);
//   } else {
//     return binarySearch(nums, target, left, mid - 1);
//   }
// }
// let arr = [4, 5, 6, 7, 8, 9, 10, 11];
// let target = 12;
// console.log(binarySearch(arr, target));

// 4. mergeSort implementation

// function mergeSort(arr) {
//   // base case
//   if (arr.length === 0) return 0;
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   // 2 part of array
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
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

