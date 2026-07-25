// What is Sliding Window : Sliding Window is a technique where we maintain a window
// (a continuous group of elements) and slide it from left to right while updating only the necessary
// information, reducing unnecessary computations.

// Types of Sliding Windows
// 1. Fixed Size Windows
// 2. Variable Size Windows

// example of Fixed Size Windows :

// some LeetCode Problem :

// function maxSubArraySum(nums, size) {
//   // edge case :
//   if (size <= 0 || size > nums.length) return null;

//   let currSum = 0;
//   let maxSumSeen = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     currSum += nums[i];
//     if (i >= size - 1) {
//       maxSumSeen = Math.max(currSum, maxSumSeen);
//       currSum -= nums[i - (size - 1)];
//     }
//   }
//   return maxSumSeen; // maSumSeen/k - related to the maxSum average problem in LeetCode.
// }

// let arr = [1, 2, 3, 5, 4, 8, 6, 2];
// console.log(maxSubArraySum(arr, 3));

// Gfg : Count Distinct Element in every window

// function countDistinct(arr , k){
//    let map = new Map();
//    let ans = [];

//    for(let i = 0; i < arr.length; i++){
//        map.set(arr[i] , (map.get(arr[i]) || 0) + 1);
//        if(i >= k - 1){
//            ans.push(map.size);
//            let leftElement = arr[i - (k - 1)];
//            map.set(leftElement , map.get(leftElement) -1);
//            if(map.get(leftElement) === 0){
//                map.delete(leftElement);
//            }
//        }
//    }
//    return ans;
// }
// let nums = [1, 2, 1, 3, 4, 2, 3];
// let k = 4;
// console.log(countDistinct(nums , k));

// variable size sliding window : Variable Size Sliding Window is a technique where the window does
//  not have a fixed size. Instead, it expands or shrinks dynamically based on a given condition
// until the desired result is found.

// LeetCode Problem : 209 : Minimum Size Subarray Sum.....
// function minSubarrayLen(target, nums) {
//   let minLength = Infinity;
//   let left = 0;
//   let windowSum = 0;

//   for (let right = 0; right < nums.length; right++) {
//     windowSum += nums[right];

//     while(windowSum >= target){
//         minLength = Math.min(minLength , right - left + 1);
//         windowSum -= nums[left];
//         left++;
//     }
//   }
//   return minLength === Infinity ? 0 : minLength;
// }

// let nums = [2, 3, 1, 2, 4, 3];
// let target = 7;
// console.log(minSubarrayLen(target, nums));

// LeetCode Problem : 3 : Longest Substring without repeating character ....

// function lengthOfLongestSubstring(s) {
//   let set = new Set();
//   let longestStr = 0;
//   let left = 0;
//   let right = 0;

//   while (right < s.length) {
//     let letter = s[right];
//     if (!set.has(letter)) {
//       set.add(letter);
//       longestStr = Math.max(longestStr, set.size);
//       right++;
//     } else {
//       set.delete(s[left]);
//       left++;
//     }
//   }
//   return longestStr;
// }

// let s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));

// LeetCode Problem : 904 : Fruit Into Basket .......
// (Find the longest subarray containing at most 2 distinct numbers.)

// function totalFruits(fruits) {
//   let left = 0;
//   let maxLength = 0;

//   let map = new Map();

//   for (let right = 0; right < fruits.length; right++) {
//     map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

//     while (map.size > 2) {
//       map.set(fruits[left], map.get(fruits[left]) - 1);

//       if (map.get(fruits[left]) === 0) {
//         map.delete(fruits[left]);
//       }
//       left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }

// let fruits = [1, 2, 3, 2, 2];
// console.log(totalFruits(fruits));

// LeetCode Problem : 424 : Longest Repeating Character ReplaceMent

// function characterReplacement(s, k) {
//   let left = 0;
//   let maxLength = 0;
//   let maxFreq = 0;

//   let map = new Map();

//   for (let right = 0; right < s.length; right++) {
//     map.set(s[right], (map.get(s[right]) || 0) + 1);
//     maxFreq = Math.max(maxFreq, map.get(s[right]));

//     while (right - left + 1 - maxFreq > k) {
//       map.set(s[left], map.get(s[left]) - 1);
//       left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }

// let s = "AABABBA";
// let k = 1;
// console.log(characterReplacement(s, k));

// LeetCode Problem :Minimum Window Substring.......

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
