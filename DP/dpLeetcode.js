// LeetCode Problem : 70 : Climb StairCase....

// function stairCase(n){
//     // base case
//     if(n === 1) return 1;
//     if(n  === 2) return 2;

//   let prev2 = 1;
//   let prev1 = 2;

//   for(let i = 3; i <= n; i++){
//       let current = prev2 + prev1;

//       prev2 = prev1;
//       prev1 = current;
//   }
//   return prev1;
// }
// let n = 7; // 0,1,1,2,3,5,8,13,21,34
// console.log(stairCase(n));

// LeetCode Problem : 746 : Min Cost Climbing Stairs....all the way solve - DP.....

// 1. recursion + memoization......

// function minCostClimbStairs(cost){
//   let n = cost.length;
//     let memo = new Array(n).fill(-1);  // Memo array to store results
//     function dp(i) {
//         // Base cases
//         if (i === 0) return cost[0];
//         if (i === 1) return cost[1];
//         // If we already calculated this step, return stored result
//         if (memo[i] !== -1) return memo[i];
//         // Recursive formula.....
//         memo[i] = cost[i] + Math.min(dp(i - 1), dp(i - 2));
//         return memo[i];
//     }
//     // // Final answer: min cost to reach top
//     return Math.min(dp(n - 1), dp(n - 2));
// }

// 2. Bottom-Up Approach - Tabulation method....

// function minCostClimbStairs(cost){
//     let n = cost.length;

//     let dp = new Array(n);
//     dp[0] = cost[0];
//     dp[1] = cost[1];

//     for(let i = 2; i < n; i++){
//         dp[i] = cost[i] + Math.min(dp[i - 1] , dp[i - 2]);
//     }
//     return Math.min(dp[n - 1] , dp[n - 2]);
// }

// let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// console.log(minCostClimbStairs(cost));

// 3.Space Optimal Solution...

// function minCostClimbStairs(cost){
//     let n = cost.length;

//     if(n === 0) return cost[0];
//     if(n === 1) return Math.min(cost[1],cost[0]);

//     let prev2 = cost[0];
//     let prev1 = cost[1];

//     for(let i = 2; i < n; i++){
//         let current = cost[i] + Math.min(prev1 , prev2);

//         prev2 = prev1;
//         prev1 = current;
//     }
//     return Math.min(prev1 ,prev2);
// }
// let cost =[1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// console.log(minCostClimbStairs(cost));

// LeetCode Problem 198 : House Robber.......................

// brute - force approach...
// function rob(nums) {
//   let maxMoney = 0;
//   function combo(index, currMoney) {
//     if (index >= nums.length) {
//       maxMoney = Math.max(maxMoney, currMoney);
//       return;
//     }
//          Rob the house...
//     combo(index + 2, currMoney + nums[index]);
//          Skip the house...
//     combo(index + 1, currMoney);
//   }
//   combo(0, 0);
//   return maxMoney;
// }

// recursive approach.......
// function rob(nums) {
//   function solve(i) {
//     if (i >= nums.length) return 0;

//     let rob = solve(i + 2) + nums[i];
//     let skip = solve(i + 1);
//     return Math.max(rob , skip);

//     // return Math.max(nums[i] + solve(i + 2), solve(i + 1));
//   }
//   return solve(0);
// }

// recursive + memoization... - Top-Down Approach.....
// function rob(nums) {
//   let memo = {};
//   function solve(i) {
//     if (i in memo) return memo[i];

//     // base case...
//     if (i >= nums.length) return 0;

//     let rob = nums[i] + solve(i + 2);
//     let skip = nums[i + 1];

//     memo[i] = Math.max(rob, skip);
//     return memo[i];
//   }
//   return solve(0);
// }

// Bottom-Up Approach - Tabulation.....
// function rob(nums) {
//   let n = nums.length;

//   // base case
//   if (n === 0) return 0;
//   if (n === 1) return nums[0];

//   let dp = new Array(n);
//   dp[0] = nums[0];
//   dp[1] = Math.max(nums[0], nums[1]);

//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//   }
//   return dp[n - 1];
// }

// Space Optimization.....
// function rob(nums) {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];

//   let prev2 = nums[0];
//   let prev1 = Math.max(nums[0], nums[1]);

//   for (let i = 2; i < nums.length; i++) {
//     let current = Math.max(prev1, nums[i] + prev2);
//     prev2 = prev1;
//     prev1 = current;
//   }
//   return prev1;
// }
// let nums = [1, 2, 3, 1];
// console.log(rob(nums));

// LeetCode Problem : 213 : House Robber-II...

// function rob(nums){
//     let n = nums.length;
//     // base case
//     if(n === 0) return 0;
//     if(n === 1) return nums[0];
//     if (n === 2) return Math.max(nums[0], nums[1]);

//     function solveLinear(start , end){
//          let memo = {};
//         function solve(i){
//             if(i in memo) return memo[i];
//             // base case.....
//             if(i > end) return 0;

//             let rob = solve(i + 2) + nums[i];
//             let skip = solve(i + 1);
//             memo[i] = Math.max(rob , skip);
//             return memo[i];
//         }
//         return solve(start);
//     }
//     let case1 = solveLinear(0 , n - 2);
//     let case2 = solveLinear(1 , n - 1);
//     return Math.max(case1 , case2);
//  }
// let nums = [2,3,2];
// console.log(rob(nums));

// Bottom-Up Approach : Tabulation......

// function rob(nums) {
//     let n = nums.length;

//     // Edge cases
//     if (n === 0) return 0;
//     if (n === 1) return nums[0];
//     if (n === 2) return Math.max(nums[0], nums[1]);

//     function linearSolve(start, end) {
//         let length = end - start + 1;

//         // Base cases for this range
//         if (length === 1) return nums[start];
//         if (length === 2) return Math.max(nums[start], nums[end]);

//         let dp = new Array(length);

//         // Initialize
//         dp[0] = nums[start];
//         dp[1] = Math.max(nums[start], nums[start + 1]);

//         // Build dp array
//         for (let i = 2; i < length; i++) {
//             let currentIndex = start + i;
//             dp[i] = Math.max(dp[i - 1], nums[currentIndex] + dp[i - 2]);
//         }

//         return dp[length - 1];
//     }

//     let case1 = linearSolve(0, n - 2);  // Exclude last
//     let case2 = linearSolve(1, n - 1);  // Exclude first

//     return Math.max(case1, case2);
// }

//Space Optimization.........................................
// function rob(nums) {
//   let n = nums.length;

//   if (n === 0) return 0;
//   if (n === 1) return nums[0];
//   if (n === 2) return Math.max(nums[0], nums[1]);

//   function solveLinear(start, end) {
//     let prev2 = 0;
//     let prev1 = 0;

//     for (let i = start; i <= end; i++) {
//       let current = Math.max(prev1, prev2 + nums[i]);

//       prev2 = prev1;
//       prev1 = current;
//     }
//     return prev1;
//   }
//   let case1 = solveLinear(0, n - 2);
//   let case2 = solveLinear(1, n - 1);
//   return Math.max(case1, case2);
// }

// let nums = [2, 3, 2];
// console.log(rob(nums)); // Output: 3

// LeetCode Problem : 322 : Coin Change.........
// function coinChange(coins, amount) {
//     let dp = new Array(amount + 1).fill(Infinity);

//     dp[0] = 0;

//     for (let i = 1; i <= amount; i++) {

//         for (let coin of coins) {

//             if (coin <= i) {

//                 dp[i] = Math.min(dp[i], dp[i - coin] + 1);

//             }
//         }
//     }

//     return dp[amount] === Infinity ? -1 : dp[amount];
// }

// LeetCode Problem : 518 : coin change - II .....

// function change(amount, coins) {
//     const dp = new Array(amount + 1).fill(0);

//     dp[0] = 1;

//     for (const coin of coins) {
//         for (let i = coin; i <= amount; i++) {
//             dp[i] += dp[i - coin];
//         }
//     }
//     return dp[amount];
// };

//  LeetCode Problem : 300 : Longest Increasing Subsequence.....

// function lengthOfLIS(nums) {
//   // edge case:
//   if (nums.length === 0) return 0;

//   const dp = new Array(nums.length).fill(1);
//   let maxLength = 1;

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     maxLength = Math.max(maxLength, dp[i]);
//   }
//   return maxLength;
// }

// let nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log(lengthOfLIS(nums));

// LeetCode Problem : 1143 : Longest Common Subsequence.....
// function longestCommonSubsequence(text1, text2) {
//   const m = text1.length;
//   const n = text2.length;

//   const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
//   // fill the table
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (text1[i - 1] === text2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + 1;
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//       }
//     }
//   }
//   return dp[m][n];
// }
// let text1 = "abcde";
// let text2 = "ace";
// console.log(longestCommonSubsequence(text1, text2));

// function canPartition(nums) {
//   const totalSum = nums.reduce((sum, num) => sum + num, 0);
//   if (totalSum % 2 !== 0) return false;

//   const target = totalSum / 2;
//   const n = nums.length;

//   const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));
//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = true;
//   }
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= target; j++) {
//       const exclude = dp[i - 1][j];

//       const include = j >= nums[i - 1] ? dp[i - 1][j - nums[i - 1]] : false;
//       dp[i][j] = exclude || include;
//     }
//   }
//   return dp[n][target];
// }
// let nums = [1, 5, 11, 5];
// console.log(canPartition(nums));



