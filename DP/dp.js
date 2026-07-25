// DP - Dynamic Programming : "DP is an optimization over plain recursion. Whenever we see a recursive solution
// that repeats the same subproblems many times, we store the results of those subproblems in a cache (memo)
//  and reuse them instead of recalculating."

// 3️⃣ The Two Approaches of DP......
// DP can be implemented in two opposite ways:......

// Approach	Nickname	Process	Code Style	Example Code (Fibonacci)
// Top-Down (Memoization)	Lazy DP	Start from the big problem (n). Recursively go down to the smallest problem (0/1). Store results in a cache (memo) to avoid recomputation.	Recursion + Hash Map / Array	memo[n] = fib(n-1) + fib(n-2)
// Bottom-Up (Tabulation)	Eager DP	Start from the smallest problem (base case) and iteratively build upwards to n. Fill a table (dp array) in a specific order.	Iteration (Loops) + Array	dp[i] = dp[i-1] + dp[i-2]

// Top-Down is easier to write (because you just modify recursion).
// Bottom-Up is usually faster (no recursion stack overhead) and avoids stack overflow errors.

// 5️Common Classification of DP Problems (Types)
// Here are the standard "patterns" you will see in coding interviews:

// A) 1-D DP (Linear DP)
// Definition: State depends only on the immediate previous indices (like i-1, i-2).
// Classic Problems: Fibonacci, Climbing Stairs, House Robber, Decode Ways.

// B) 2-D Grid DP
// Definition: Moving on a grid (matrix). State depends on top (i-1) and left (j-1).
// Classic Problems: Unique Paths, Minimum Path Sum, Dungeon Game.

// C) 0/1 Knapsack (Choice-based)
// Definition: Given items with weight and value, choose items to maximize value with a weight limit. Each item can be taken at most once.
// Classic Problems: Partition Equal Subset Sum, Target Sum.

// D) Unbounded Knapsack
// Definition: Same as 0/1, but you have infinite supply of each item.
// Classic Problems: Coin Change (Minimum Coins), Coin Change (Ways), Rod Cutting. (Note: The canSum you solved earlier is an Unbounded Knapsack variant!)

// E) Longest Common Subsequence (LCS) / String DP
// Definition: Comparing two strings. Checking characters match or not.
// Classic Problems: Longest Common Subsequence, Edit Distance (Levenshtein), Longest Palindromic Subsequence.

// F) Intervals DP (Matrix Chain)
// Definition: DP on SubArrays where dp[i][j] depends on dp[i][k] and dp[k][j]. Usually involves two nested loops expanding the interval length.
// Classic Problems: Matrix Chain Multiplication, Burst Balloons.

// Space Optimization Trick (Crucial for Interviews)
// Often, the dp table is huge, but the state only depends on the previous row or the previous two values.

// How to do it:
// Instead of dp[n] or dp[n][m], just use variables (prev, prev2) or a 1D array of size m to save space.

// Approach	Space Complexity	Improvement
// Recursive/Memo	O(n) stack + O(n) cache	-
// Bottom-up (Full Table)	O(n) or O(n*m)	-
// Space-Optimized	O(1) or O(m)	Huge boost for large constraints!

// best Example to understand DP - with fibonacci series

// 1. Recursion..........
// function fib(n){
//     // base case :
//     if(n <= 1) return n;

//     return fib(n - 1) + fib(n - 2);
// }
// let n = 7;
// console.log(fib(n));

// 2. Recursion + Memoization - Top-Down Approach
// function fib(n , memo = {}){
//     if(n in memo) return memo[n];
//     // base case
//     if(n <= 1) return n;

//     memo[n] = fib(n - 1) + fib(n - 2);
//     return memo[n];
// }
// let n = 8;
// console.log(fib(n));

// 3. Bottom-Up Approach..... - Tabulation....
// function fib(n) {
//   // base case...
//   if (n <= 1) return n;

//   const dp = new Array(n + 1);
//   dp[0] = 0;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }
// let n = 8;
// console.log(fib(n));

// 4. Space Optimization......

// function fib(n) {
//   // base case
//   if (n <= 1) return n;

//   let prev2 = 0;
//   let prev1 = 1;

//   for (let i = 2; i < n; i++) {
//     let current = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = current;
//   }
//   return prev1;
// }
// let n = 10;
// console.log(fib(n));



