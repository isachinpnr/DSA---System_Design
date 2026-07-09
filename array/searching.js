// Array Searching Algorithms to find an element in an array...

// Linear Search.....

// Linear Search .....
// function linearSearch(arr){
//     let index = undefined;
//     let data = 2;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === data){
//             index = i;
//             // break;
//         }else{
//             continue;
//         }
//     }
//     return index;
// }

// linear Search with reucrsion.....
// function linearSearch(arr , data , index = 0){

//     if(index >= arr.length){
//         return undefined;
//     }

//     if(arr[index] === data){
//         return index;
//     }

//   return linearSearch(arr , data , index + 1);
// }

// function linearSearch(arr ,data){
//     function helper(index){
//         if(index >= arr.length) return undefined;
//         if(arr[index] === data) return index;

//         return helper(index + 1)
//     }
//     return helper(0);
// }

// let nums = [4,2,3,1,4,6,3,9,2,8];
// console.log(linearSearch(nums));

// function linearSearch(arr , target , index = 0){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             index = i;
//             return index;
//         }
//     }
//     return -1;
// }
// let nums = [10, 23, 45, 70, 11, 15];
// let target = 70;
// console.log(linearSearch(nums , target))

// delete any element with an splice method ..
// let target = 45;
// nums.splice(2,1)
//   console.log(nums);

// dynamic deletion function ..

// function searchArr() {
//   let target = document.getElementById("searchEl").value;
//   let nums = [10, 23, 45, 70, 11, 15, 11, 70, 45];
//   let index = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       index = i;
//       break;
//     }
//   }
//   let output = document.getElementById("searchoutput");
//   if (index != -1) {
//     output.innerText = `Element found at index ${index}`;
//   } else {
//     output.innerText = "Element not found in the array";
//   }
//   return index;
// }

// Linear Search with dynamically .....

// function linearSearch() {
//   let data = Number(document.getElementById("data").value);
//   let index = undefined;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === data) {
//       index = i;
//       break;
//     } else {
//       continue;
//     }
//   }
//   // display element for users....

//   if (index !== undefined) {
//     alert("Element found at index: " + index);
//   } else {
//     alert("Elment not found in the Array");
//   }
//   return index;
// }

// let arr = [8, 1, 2, 0, 3, 1, 4, 6, 9];
// // console.log(linearSearch(arr));

// leetcode problem related to a linear search .....

// 1295. Find Numbers with Even Number of Digits
// var findNumbers = function (nums) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let digitLength = nums[i].toString().length;

//         if(digitLength % 2 === 0){
//             count++;
//         }
//     }
//         return count;
// };

// let arr= [7,1,212,47,554,45,44 ,21];
// console.log(findNumbers(arr));

//..........########################__________Binary Search in DSA_______________#########################

// Binary Search in DSA
// Binary Search is mainly Two Types
// 1. Iterative Search
// 2. Recursive Search

// Note : given data is should have sorted in binary search other it's not work;

// 1. iterative approach...

// function binarySearch(arr , target){
//     let left = 0;
//     let right = arr.length -1;

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if(arr[mid] < target) {
//             left = mid + 1;
//         }else if(arr[mid] > target){
//             right = mid -1;
//         }else{
//             return mid;
//         }
//     }
//     return -1;
// }

// let nums = [1,2,3,4,5,6,7,8,9];
// let t = 5;
// console.log(binarySearch(nums , t));

// such leetcode problem based on searhing (binary search).....

// 1. Find a last and first position of element in Sorted Array .....(Brute-Force)

// function findPosition(arr , target){
//     let first = -1;
//     let last = -1;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             if(first === -1){
//                 first = i;
//             }
//             last = i;
//         }
//     }
//     return [first , last];
// }

// let searchRange = (arr, target) => {
//   // find first element.....
//   function firstEl(arr, target) {
//     let first = -1;
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//         first = mid;
//         right = mid - 1;
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//     return first;
//   }

//   // last element...
//   function lastEl(arr , target){
//     let left = 0;
//     let right =arr.length - 1;
//     let last = -1;

//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);

//         if(arr[mid] === target){
//             last = mid;
//             left = mid + 1;
//         }else if(arr[mid] > target){
//             right = mid - 1;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return last;
//   }
//   return [firstEl(arr , target) , lastEl(arr , target)];
// };

// let nums = [0, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];
// let target = 4;
// console.log(searchRange(nums, target));

// 2. Recursive Approach.....##########################################_____________________________________

// Implement a Binary Search Algorithm with Recursion ...

// function recursionBinary(arr , target){
//     left = 0;
//     let right = arr.length - 1;
//     function indexFind(left , right){
//         // base case
//         if(left > right){
//             return -1;
//         }
//         let mid = Math.floor((left + right) / 2);
        
//         if(arr[mid] === target){
//             return mid;
//         }else if(arr[mid] < target){
//             return indexFind(mid + 1 , right);
//         }else{
//             return indexFind(left , mid - 1);
//         }
//     }
//     return indexFind(0 , arr.length - 1);
// }

// let nums = [1,5,7,9,45,74,88];
// let t = 70;
// console.log(recursionBinary(nums , t));