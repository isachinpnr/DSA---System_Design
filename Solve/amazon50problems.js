// -------------------------------  Amazon 50 Freq Problems ----------------------------------------

// 1. Valid Parenthesis?
// function isValidParenthesis(str) {
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else {
//       let top = stack.pop();
//       if (char === ")" && top !== "(") return false;
//       if (char === "]" && top !== "[") return false;
//       if (char === "}" && top !== "{") return false;
//     }
//   }
//   return stack.length === 0;
// }
// let str = "({[]})()[]";
// console.log(isValidParenthesis(str));

// 2. MaxiMum SubArray?
// (Brute-Force Approach):
// function maxSubArray(nums) {
//   let maxSum = -Infinity;

//   //   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let subArray = [];
//     for (let j = i; j < nums.length; j++) {
//       subArray.push(nums[j]);
//       let sum = 0;

//       for (let k = 0; k < subArray.length; k++) {
//         sum += subArray[k];
//       }
//       if (sum > maxSum) {
//         maxSum = sum;
//       }
//     }
//   }
//   return maxSum;
// }

// Optimal Approach - Kadane's algorithm.....
// function maxSubArray(nums) {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums));

// 3. Search a 2D Matrix?
// function searchMatrix(matrix, target) {
//   let row = matrix.length;
//   let col = matrix[0].length;
//   let left = 0;
//   let right = row * col - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let r = Math.floor(mid / col);
//     let c = mid % col;
//     let value = matrix[r][c];

//     if (value === target) return true;
//     if (value < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return false;
// }
// let target = 34;
// let matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// console.log(searchMatrix(matrix, target));

// 4.Permutations?
// function permute(nums) {
//   let result = [];

//   function backtrack(current, used) {
//     if (current.length === nums.length) {
//       result.push([...current]);
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (used[i]) {
//         continue;
//       }
//       current.push(nums[i]);
//       used[i] = true;

//       backtrack(current, used);

//       current.pop();
//       used[i] = false;
//     }
//   }
//   backtrack([], new Array(nums.length).fill(false));
//   return result;
// }
// let nums = [1, 2, 3];
// console.log(permute(nums));

// 5.Search in Rotate Sorted Array?
// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;

//     if (nums[left] <= nums[mid]) {
//       if (target >= nums[left] && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (target > nums[mid] && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   return -1;
// }
// let nums = [4, 5, 6, 7, 0, 1, 2];
// let target = 2;
// console.log(search(nums, target));

//6. Reverse LinkedList?
// class Node {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   appendNode(value) {
//     let newNode = { value: value, next: null };
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   traverse() {
//     let result = [];
//     let current = this.head;
//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }
//     return result;
//   }
//   reverse() {
//     let prev = null;
//     let current = this.head;
//     let next = null;

//     while (current !== null) {
//       next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     this.tail = this.head;
//     this.head = prev;
//     return this.head;
//   }
// }
// const list = new Node();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// console.log(list);
// console.log(list.traverse());
// list.reverse();
// console.log(list.traverse());
// function reverseList(head) {}

// 7. Top K Frequent Element?
// function topKFrequent(nums, k) {
//   let map = new Map();
//   for (let num of nums) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }
//   // sort element by their frequency..
//   let entries = Array.from(map.entries());
//   entries.sort((a, b) => b[1] - a[1]);
//   return entries.slice(0, k).map((entry) => entry[0]);
// }
// let nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2];
// let k = 2;
// console.log(topKFrequent(nums, k));

// 8. Decode String? // (remaining topic to understand)
// function decodeString(s) {
//   let numStack = []; // Stack to store repeat counts
//   let strStack = []; // Stack to store previous strings
//   let currentStr = ""; // String being built in current context
//   let currentNum = 0; // Number being built (may have multiple digits)

//   for (let char of s) {
//     // 1. If character is a digit
//     if (char >= "0" && char <= "9") {
//       currentNum = currentNum * 10 + Number(char);
//     }
//     // 2. If character is '['
//     else if (char === "[") {
//       // Save current context onto stacks
//       numStack.push(currentNum);
//       strStack.push(currentStr);
//       // Reset for the new context inside brackets
//       currentNum = 0;
//       currentStr = "";
//     }
//     // 3. If character is ']'
//     else if (char === "]") {
//       // Pop the repeat count and the previous string.....
//       let repeatTimes = numStack.pop();
//       let prevStr = strStack.pop();
//       // Repeat currentStr and append to previous string....
//       let repeated = currentStr.repeat(repeatTimes);
//       currentStr = prevStr + repeated;
//     }
//     // 4. It's a letter.....
//     else {
//       currentStr += char;
//     }
//   }

//   return currentStr;
// }
// let s = "3[a2[c]]";
// console.log(decodeString(s));

// 9. Reorganize String?
// function reorganizeString(s) {
//   let map = new Map();
//   for (let char of s) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   let entries = Array.from(map.entries());
//   entries.sort((a, b) => b[1] - a[1]);

//   let n = s.length;
//   let maxFreq = entries[0][1];
//   if (maxFreq > Math.ceil(n / 2)) {
//     return "";
//   }

//   let result = new Array(n);
//   let idx = 0;

//   for (let [char, count] of entries) {
//     for (let i = 0; i < count; i++) {
//       if (idx >= n) {
//         idx = 1;
//       }
//       result[idx] = char;
//       idx += 2;
//     }
//   }
//   return result.join("");
// }
// let s = "aabcbb";
// console.log(reorganizeString(s));

// 10. Construct Binary Tree From PreOrder and inorder Traversal?
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// function buildTree(preorder, inorder) {
//   let map = new Map();
//   for (let i = 0; i < inorder.length; i++) {
//     map.set(inorder[i], i);
//   }
//   let preIdx = 0;

//   function build(start, end) {
//     if (start > end) return null;
//     let rootVal = preorder[preIdx++];
//     let root = new Node(rootVal);
//     let mid = map.get(rootVal);

//     root.left = build(start, mid - 1);
//     root.right = build(mid + 1, end);

//     return root;
//   }
//   return build(0, inorder.length - 1);
// }
// let preorder = [3, 9, 20, 15, 7];
// let inorder = [9, 3, 15, 20, 7];
// console.log(buildTree(preorder, inorder));

// 11. Lowest Common Ancestor of a Binary Tree?
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// function BinaryTreeLCA(root, p, q) {
//   // base case
//   if (root === null) return null;

//   if (root === p || root === q) return root;
//   let left = BinaryTreeLCA(root.left, p, q);
//   let right = BinaryTreeLCA(root.right, p, q);
//   if (left !== null && right !== null) return root.value;
//   // other-wise return non-null side
//   return left !== null ? left : right;
// }
// const root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(3);
// root.right = new Node(5);
// root.right.right = new Node(7);
// root.right.left = new Node(6);
// root.right.left.left = new Node(9);
// root.right.left.left.right = new Node(10);
// root.right.right.left = new Node(8);
// console.log(root);
// let p = root.left.left;
// let q = root.left.right;
// console.log(BinaryTreeLCA(root, p, q));

// 12. Minimum Window Substring? - remaining to understand.....
// function minWindow(s, t) {
//   if (s.length < t.length) return "";

//   let need = new Map();

//   for (let char of t) {
//     need.set(char, (need.get(char) || 0) + 1);
//   }

//   let required = need.size;
//   let formed = 0;
//   let window = new Map();
//   let left = 0;
//   let minLength = Infinity;
//   let startIndex = 0;

//   for (let right = 0; right < s.length; right++) {
//     let currentChar = s[right];
//     window.set(currentChar, (window.get(currentChar) || 0) + 1);

//     if (
//       need.has(currentChar) &&
//       window.get(currentChar) === need.get(currentChar)
//     ) {
//       formed++;
//     }
//     while (formed === required) {
//       if (right - left + 1 < minLength) {
//         minLength = right - left + 1;
//         startIndex = left;
//       }
//       let leftChar = s[left];
//       window.set(leftChar, window.get(leftChar) - 1);

//       if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
//         formed--;
//       }
//       left++;
//     }
//   }
//   return minLength === Infinity
//     ? ""
//     : s.substring(startIndex, startIndex + minLength);
// }
// let s = "ADOBECODEBANC";
// let t = "ABC";
// console.log(minWindow(s, t));

// 13. Best Time to Buy & Sell Stock III
// function maxProfit(prices) {
//   if (prices.length === 0) return 0;

//   let buy1 = -prices[0];
//   let sell1 = 0;
//   let buy2 = -prices[0];
//   let sell2 = 0;

//   for (let i = 1; i < prices.length; i++) {
//     buy1 = Math.max(buy1, -prices[i]);
//     sell1 = Math.max(sell1, buy1 + prices[i]);

//     buy2 = Math.max(buy2, sell1 - prices[i]);
//     sell2 = Math.max(sell2, buy2 + prices[i]);
//   }
//   return sell2;
// }
// let prices = [3, 3, 5, 0, 0, 3, 1, 4];
// console.log(maxProfit(prices));

// 14. Integer to English? - Remaining topic to understand
// function numbertoWords(num) {
//   // edge case.....

//   const below20 = [
//     "",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//     "Ten",
//     "Eleven",
//     "Twelve",
//     "Thirteen",
//     "Fourteen",
//     "Fifteen",
//     "Sixteen",
//     "Seventeen",
//     "Eighteen",
//     "Nineteen",
//   ];
//   const tens = [
//     "",
//     "",
//     "Twenty",
//     "Thirty",
//     "Forty",
//     "Fifty",
//     "Sixty",
//     "Seventy",
//     "Eighty",
//     "Ninety",
//   ];
//   const scales = ["", "Thousand", "Million", "Billion"];
//   function helper(n) {
//     if (n === 0) return "";
//     if (n < 20) return below20[n];
//     if (n < 100) {
//       return (
//         tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + below20[n % 10] : "")
//       );
//     }
//     // n >= 100
//     return (
//       below20[Math.floor(n / 100)] +
//       " Hundred" +
//       (n % 100 !== 0 ? " " + helper(n % 100) : "")
//     );
//   }

//   let result = "";
//   let scaleIndex = 0;
//   while (num > 0) {
//     const chunk = num % 1000;
//     if (chunk !== 0) {
//       const chunkWords = helper(chunk);
//       result =
//         chunkWords +
//         (scales[scaleIndex] ? " " + scales[scaleIndex] : "") +
//         (result ? " " + result : "");
//     }
//     num = Math.floor(num / 1000);
//     scaleIndex++;
//   }
//   return result;
// }
// let num = 1212043;
// console.log(numbertoWords(num));

// 15. Concatenated Words? - Remaining Topic to Understand
// function findAllConcatenatedWordsInADict(words) {
//   words.sort((a, b) => a.length - b.length);

//   const wordSet = new Set();
//   const result = [];

//   function canForm(word) {
//     if (word.length === 0) return false;
//     const n = word.length;
//     const dp = new Array(n + 1).fill(false);
//     dp[0] = true;

//     for (let i = 1; i <= n; i++) {
//       for (let j = 0; j < i; j++) {
//         if (dp[j] && wordSet.has(word.substring(j, i))) {
//           dp[i] = true;
//           break;
//         }
//       }
//     }
//     return dp[n];
//   }
//   for (const word of words) {
//     if (canForm(word)) {
//       result.push(word);
//     }
//     wordSet.add(word);
//   }
//   return result;
// }
// let words = [
//   "cat",
//   "cats",
//   "catsdogcats",
//   "dog",
//   "dogcatsdog",
//   "hippopotamuses",
//   "rat",
//   "ratcatdogcat",
// ];
// console.log(findAllConcatenatedWordsInADict(words));

// 16. Two Sum?
// function twoSum(nums, target) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     } else map.set(nums[i], i);
//   }
//   return [-1, -1];
// }

// let nums = [4, 3, 2, 7, 9, 5, 6, 8];
// let target = 15;
// console.log(twoSum(nums, target));

// 17. Majority Element?
// function majorityElement(nums) {
//   let n = nums.length;
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//   }
//   let entries = Array.from(map.entries());
//   entries.sort((a, b) => b[1] - a[1]);
//   return entries[0][0];
// }
// // let nums = [0, 1, 1, 3, 2, 1, 2];
// let nums = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums));

// 18. Spiral Matrix?
// function spiralOrder(matrix) {
//   if (matrix.length === 0) return [];

//   let row = matrix.length;
//   let col = matrix[0].length;
//   let result = [];

//   let rowBegin = 0;
//   let rowEnd = row - 1;
//   let colBegin = 0;
//   let colEnd = col - 1;

//   while (rowBegin <= rowEnd && colBegin <= colEnd) {
//     // 1. Traverse top row (left to right)
//     for (let i = colBegin; i <= colEnd; i++) {
//       result.push(matrix[rowBegin][i]);
//     }
//     rowBegin++;

//     // 2. Traverse right column (top to bottom)
//     for (let i = rowBegin; i <= rowEnd; i++) {
//       result.push(matrix[i][colEnd]);
//     }
//     colEnd--;

//     // 3. Traverse bottom row (right to left)
//     if (rowBegin <= rowEnd) {
//       for (let i = colEnd; i >= colBegin; i--) {
//         result.push(matrix[rowEnd][i]);
//       }
//       rowEnd--;
//     }

//     // 4. Traverse left column (bottom to top)
//     if (colBegin <= colEnd) {
//       for (let i = rowEnd; i >= rowBegin; i--) {
//         result.push(matrix[i][colBegin]);
//       }
//       colBegin++;
//     }
//   }

//   return result;
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(spiralOrder(matrix));

// 19. Product of Array Except Self?
// function productExceptSelf(nums) {
//   let n = nums.length;
//   let answer = new Array(n);

//   answer[0] = 1;
//   for (let i = 1; i < n; i++) {
//     answer[i] = answer[i - 1] * nums[i - 1];
//   }
//   let right = 1;
//   for (let i = n - 1; i >= 0; i--) {
//     answer[i] = answer[i] * right;
//     right = right * nums[i];
//   }
//   return answer;
// }
// let nums = [1, 2, 3, 4];
// console.log(productExceptSelf(nums));

// 20. Word Search?
// function exist(board, word) {
//   const rows = board.length;
//   const cols = board[0].length;

//   // Helper function for DFS
//   function dfs(row, col, index) {
//     // Base case: found all characters
//     if (index === word.length) {
//       return true;
//     }

//     // Check boundaries and character match
//     if (
//       row < 0 ||
//       row >= rows ||
//       col < 0 ||
//       col >= cols ||
//       board[row][col] !== word[index]
//     ) {
//       return false;
//     }

//     // Mark current cell as visited
//     const temp = board[row][col];
//     board[row][col] = "#";

//     // Explore all 4 directions: up, down, left, right
//     const found =
//       dfs(row - 1, col, index + 1) || // up
//       dfs(row + 1, col, index + 1) || // down
//       dfs(row, col - 1, index + 1) || // left
//       dfs(row, col + 1, index + 1); // right

//     // Backtrack: restore the original character
//     board[row][col] = temp;

//     return found;
//   }

//   // Try starting from every cell
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (dfs(i, j, 0)) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// let board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ];
// let word = "ABCCEDAS";
// console.log(exist(board, word));

//21. find duplicate numbers?
// function findDuplicate(nums){

//     let slow = nums[0];
//     let fast = nums[0];

//     do{
//         slow = nums[slow];
//         fast = nums[nums[fast]];
//     }while(slow !== fast);

//      slow = nums[0];
//     while(slow !== fast){
//         slow = nums[slow];
//         fast = nums[fast];
//     }
//     return slow;
// }
// let nums = [1,3,4 ,4,2,2];
// console.log(findDuplicate(nums));

// 22. K-Diff Pairs in an Array?
// function findPairs(nums , k){
//     if(k < 0) return 0;

//     const seen = new Set();
//     const pairs = new Set();

//     for(let num of nums){
//         if(seen.has(num - k)){
//             pairs.add(`${num - k},${num}`);
//         }
//         if(seen.has(num + k)){
//             pairs.add(`${num} , ${num + k}`);
//         }
//         seen.add(num);
//     }
//     return pairs.size;
// }
// let nums = [3,1,4,1,5];
// let k = 2;
// console.log(findPairs(nums , k));

// 23. Subarray Sums Divisble By K?
// function subArrayDivByK(nums , k){
//     let remainderCount = new Map();
//     remainderCount.set(0 , 1);

//     let prefixSum = 0;
//     let count = 0;

//     for(let num of nums){
//         prefixSum += num;

//         let remainder = ((prefixSum % k) + k) % k;

//         if(remainderCount.has(remainder)){
//             count += remainderCount.get(remainder);
//         }
//         remainderCount.set(remainder , (remainderCount.get(remainder) || 0) + 1);
//     }
//     return count;
// }
// let nums = [4,5,0,-2,-3,1];
// let k = 5;
// console.log(subArrayDivByK(nums , k));

// 24. First Missing Positive?
// function firstMissingPositive(nums){
//     let n = nums.length;

//     for(let i = 0; i < n; i++){
//         while(nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]){
//             let temp = nums[nums[i] - 1];
//             nums[nums[i] - 1] = nums[i];
//             nums[i] = temp;
//         }
//     }
//     for(let i = 0; i < n; i++){
//         if(nums[i] !== i + 1){
//             return i + 1;
//         }
//     }
//     return n + 1;
// }
// let nums = [1,2,0];
// console.log(firstMissingPositive(nums));

// 25. Max Value of Equation?
// function findMaxValueOfEquation(points, k) {
//     // Deque to store indices of points
//     const deque = [];
//     let maxValue = -Infinity;

//     for (let j = 0; j < points.length; j++) {
//         const [xj, yj] = points[j];

//         // Remove points from front that are out of range (xj - xi > k)
//         while (deque.length > 0 && xj - points[deque[0]][0] > k) {
//             deque.shift();
//         }

//         // If deque is not empty, calculate equation value with front element
//         if (deque.length > 0) {
//             const i = deque[0];
//             const [xi, yi] = points[i];
//             const value = yi + yj + xj - xi;
//             maxValue = Math.max(maxValue, value);
//         }

//         // Maintain deque in decreasing order of (yi - xi)
//         while (deque.length > 0) {
//             const lastIdx = deque[deque.length - 1];
//             const [xl, yl] = points[lastIdx];
//             // If current point has larger or equal (y - x), remove last
//             if (yl - xl <= yj - xj) {
//                 deque.pop();
//             } else {
//                 break;
//             }
//         }

//         // Add current point index to deque
//         deque.push(j);
//     }

//     return maxValue;
// }
// let points = [[1,3],[2,0],[5,10],[6,-10]];
// let k = 1;
// console.log(findMaxValueOfEquations(points , k));

// 26. Word break?
// function wordBreak(s , wordDict){
//     const wordSet = new Set(wordDict);

//     const dp = new Array(s.length + 1).fill(false);
//     dp[0] = true;

//     for(let i = 1; i <= s.length; i++){
//         for(let j = 0; j < i; j++){
//             if(dp[j] && wordSet.has(s.substring(i , j))){
//                 dp[i] = true;
//                 break;
//             }
//         }
//     }
//     return dp[s.length];
// }
// let s = "leetcode";
// let wordDict = ["leet" , "code"];
// console.log(wordBreak(s , wordDict));

// 27. Knight Dialer?
// function knightDialer(n){
//       // If n is 1, we can start from any of the 10 digits
//     if (n === 1) return 10;

//     const MOD = 10**9 + 7;

//     // Map each number to possible next numbers using knight moves
//     const moves = {
//         0: [4, 6],
//         1: [6, 8],
//         2: [7, 9],
//         3: [4, 8],
//         4: [0, 3, 9],
//         5: [],
//         6: [0, 1, 7],
//         7: [2, 6],
//         8: [1, 3],
//         9: [2, 4]
//     };

//     // dp[digit] = number of ways to end at this digit
//     let dp = new Array(10).fill(1);

//     // For length from 2 to n
//     for (let step = 2; step <= n; step++) {
//         const newDp = new Array(10).fill(0);

//         for (let digit = 0; digit <= 9; digit++) {
//             // For each possible next digit from current digit
//             for (const nextDigit of moves[digit]) {
//                 newDp[nextDigit] = (newDp[nextDigit] + dp[digit]) % MOD;
//             }
//         }

//         dp = newDp;
//     }

//     // Sum all ways for all ending digits
//     let total = 0;
//     for (let digit = 0; digit <= 9; digit++) {
//         total = (total + dp[digit]) % MOD;
//     }

//     return total;
// }

// 28. Unique Paths?
// function uniquePaths(m , n){
//     const dp = new Array(n).fill(1);

//     for(let i = 1; i < m; i++){
//         for(let j = 1; j < n; j++){
//             dp[j] = dp[j] + dp[j - 1];
//         }
//     }
//     return dp[n - 1];
// }
// let m = 3;
// let n = 7;
// console.log(uniquePaths(m , n));

// 29. Longest Airthmetic Subsequence?

// function longestAirthSeqLength(nums){
//     const n = nums.length;
//     if(n <= 2) return n;

//     const dp = new Array(n).fill().map(() => new Map());
//     let maxLen = 2;

//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < i; j++){
//             const diff = nums[i] - nums[j];
//             const prevLen = dp[j].get(diff) || 1;
//             const curLen = prevLen + 1;
//             dp[i].set(diff , Math.max(dp[i].get(diff) || 0 , curLen));
//             maxLen = Math.max(maxLen , curLen);
//         }
//     }
//     return maxLen;
// }

// let nums = [3,6,9,12];
// console.log(longestAirthSeqLength(nums));

// 30. Regular Expression Matching?
// function isMatch(s, p) {
//     const m = s.length;
//     const n = p.length;

//     // dp[i][j] = true if first i chars of s match first j chars of p
//     const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(false));

//     // Empty string matches empty pattern
//     dp[0][0] = true;

//     // Handle patterns like a*, a*b*, a*b*c* that can match empty string
//     for (let j = 2; j <= n; j++) {
//         if (p[j - 1] === '*') {
//             dp[0][j] = dp[0][j - 2];
//         }
//     }

//     // Fill the DP table
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             const sChar = s[i - 1];
//             const pChar = p[j - 1];

//             if (pChar === '*') {
//                 // Star can match zero or more of preceding element
//                 const prevChar = p[j - 2];

//                 // Case 1: Match zero occurrences (skip the pattern 'prevChar*')
//                 dp[i][j] = dp[i][j - 2];

//                 // Case 2: Match one or more occurrences
//                 // Check if current char matches the pattern's preceding char
//                 if (prevChar === '.' || prevChar === sChar) {
//                     dp[i][j] = dp[i][j] || dp[i - 1][j];
//                 }
//             } else {
//                 // Regular character or '.'
//                 if (pChar === '.' || pChar === sChar) {
//                     dp[i][j] = dp[i - 1][j - 1];
//                 }
//             }
//         }
//     }

//     return dp[m][n];
// };
// let s = "aa";
// let p = "a";
// console.log(isMatch(s , p));

// 31. Longest Valid Parantheses?
// function longestValidParentheses(s) {
// let maxLen = 0;
// let stack = [-1];

// for(let i = 0; i < s.length; i++){
//     if(s[i] === '('){
//         stack.push(i);
//     }else{
//         stack.pop();

//         if(stack.length === 0){
//             stack.push(i);
//         }else{
//             maxLen = Math.max(maxLen , i - stack[stack.length - 1]);
//         }
//     }
// }
// return maxLen;


// another approach.....
// efficient method....

//     let open = 0;
//     let close = 0;
//     let maxLength = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(") {
//             open++;
//         }
//         else if (s[i] === ")") {
//             close++;
//         }
//         if (open === close) {
//             maxLength = Math.max(maxLength, open + close);
//         }
//         else if (close > open) {
//             open = 0;
//             close = 0;
//         }
//     }
//     open = 0;
//     close = 0;

//     for (let i = s.length; i >= 0; i--) {
//         if (s[i] === "(") {
//             open++;
//         }
//         if (s[i] === ")") {
//             close++;
//         }
//         if (open === close) {
//             maxLength = Math.max(maxLength, open + close);
//         }
//         else if (open > close) {
//             open = 0;
//             close = 0;
//         }
//     }
//     return maxLength;
// }
// let s = ")()())";
// console.log(longestValidParentheses(s));

// 32.Minimum Difficulty of a job Schedule?
// function minDifficulty(jobDifficulty, d) {
//     let n = jobDifficulty.length;

//     if (d > n) return -1;

//     const memo = Array.from({ length: n }, () => new Array(d + 1).fill(-1));
//     function dfs(start, daysLeft) {
//         if (start === n && daysLeft === 0) return 0;
//         if (start === n || daysLeft === 0) return Infinity;
//         if (n - start < daysLeft) return Infinity;
//         if (memo[start][daysLeft] !== -1) return memo[start][daysLeft];

//         let currentDayMax = 0;
//         let minResult = Infinity;

//         for (let end = start; end <= n - daysLeft; end++) {
//             currentDayMax = Math.max(currentDayMax, jobDifficulty[end]);
//             const remainingCost = dfs(end + 1, daysLeft - 1);
//             const totalCost = currentDayMax + remainingCost;
//             minResult = Math.min(minResult, totalCost);
//         }
//         memo[start][daysLeft] = minResult;
//         return minResult;
//     }
//     const answer = dfs(0 , d);
//     return answer === Infinity ? -1 : answer;
// }
// let jobDifficulty = [6, 5, 4, 3, 2, 1];
// let d = 2;
// console.log(minDifficulty(jobDifficulty, d));

// 33. Minimum Cost to cut a Stick?
// function minCost(n, cuts) {
//     // Add boundaries and sort
//     const extendedCuts = [0, ...cuts, n];
//     extendedCuts.sort((a, b) => a - b);

//     const m = extendedCuts.length;

//     // DP table: dp[i][j] = min cost to cut stick from extendedCuts[i] to extendedCuts[j]
//     const dp = Array.from({ length: m }, () => new Array(m).fill(0));

//     // length = number of segments in the current stick piece
//     // We start from length 2 (need at least 2 points to make a cut)
//     for (let length = 2; length < m; length++) {
//         for (let i = 0; i + length < m; i++) {
//             const j = i + length;

//             // Initialize with infinity
//             dp[i][j] = Infinity;

//             // Try all possible first cuts between i and j
//             for (let k = i + 1; k < j; k++) {
//                 const cost = (extendedCuts[j] - extendedCuts[i]) + dp[i][k] + dp[k][j];
//                 dp[i][j] = Math.min(dp[i][j], cost);
//             }
//         }
//     }

//     return dp[0][m - 1];
// };

// 34. Find the Index of the first Occurrence in a String?
// function strStr(haystack, needle) {
//     // edge cases
//     if (needle === "") return 0;
//     if (needle.length > haystack.length) return -1;

//     for (let i = 0; i <= haystack.length - needle.length; i++) {
//         let match = true;

//         for (let j = 0; j < needle.length; j++) {
//             if (haystack[i + j] !== needle[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) return i;
//     }
//     return -1;
// }
// let haystack = "leetcode";
// let needle = "leeto";
// console.log(strStr(haystack, needle));




















