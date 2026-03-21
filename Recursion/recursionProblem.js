// here i wrote a recursion related all the problem

// problem1 : print a value 1 to 10 or 10 to 1..................................

// function printNum(n){
//     // base case
//     if(n === 0) return;
//     // if you print a value 10 to 1 , then write a console before a recursive call function
//     // console.log('value : ', n) // Head Recursion
//          printNum(n - 1);
//     // if you want to print a value 1 to 10 , then write a console after recursive call function
//     console.log('value : ', n);
//     return 'end';
// }
// let num = 10;
// console.log(printNum(num));

// problem2 : factorial of any numbers...............................................

// function factorialNum(n){
//     // base case
//     if(n === 0) return 1;
//     return n * factorialNum(n - 1);
// }
// let num = 5;
// console.log(`Factorial of ${num}: ${factorialNum(num)}`);

// print a value with base case conditions...
// function factorialNum(n){
//     // base case
//     if(n === 5) return n;
//      return n * factorialNum(n + 1);
// }
// let num = 1;
// console.log(factorialNum(num));

// problem3 : Sum of first N Number..................................

// function sumOfFirstNNumber(n){
//     if(n === 0) return 0;
//     return n + sumOfFirstNNumber(n - 1);
// }
// let num = 10;
// console.log(sumOfFirstNNumber(num));

// problem4 : Sum of Array...............................................

// function sumOfArray(arr, index = 0) {
//   // base case...
//   if(index === arr.length) return 0;

//   return arr[index] + sumOfArray(arr , index + 1);

// }
// let nums = [2, 4, 6, 8];
// console.log(sumOfArray(nums));

// problem5 : find maximum in array......................................

// function findMaxArr(arr, index = 0, currentMax = -Infinity) {
//   // base case
//   if (index === arr.length) return currentMax;
//     if(arr.length === Infinity) return -Infinity;

//     if(arr[index] > currentMax){
//         currentMax = arr[index];
//     }
//     return findMaxArr(arr , index + 1 , currentMax);
// }
// let nums = [1, 8, 3, 6, 4, 5];
// console.log(findMaxArr(nums));

// another way to solve this..........................................

// function findMaxEl(arr, index = 0) {
//   // base case
//   if (index === arr.length - 1) {
//     return arr[index];
//   }
//   let maxEl = findMaxEl(arr, index + 1);

//   return Math.max(maxEl, arr[index]);
// }
// let nums = [5, 1, 7, 8, 9, 6, 4];
// console.log(findMaxEl(nums));

//problem6: check array is sorted or not...............................

// function checkSort(arr, index = 0) {
//   // base case...
//   if (index === arr.length - 1) return true;

//   if (arr[index] > arr[index + 1]) return false;

//   return checkSort(arr, index + 1);
// }
// let nums = [0, 1, 2, 3, 4, 9];
// console.log(checkSort(nums));

// problem7 : reverse a string....................................................

// function reverseStrings(s, left = 0, right = s.length - 1) {
//   // base case
//   if (left >= right) return s;
//   // convert to array since string are immutable
//   let arr = s.split("");
//   // swap characters
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
//   // convert back to string and recurse.....
//   return reverseStrings(arr.join(""), left + 1, right - 1);
// }

// let str = "sachin";
// console.log(reverseStrings(str));

// problem8 : check a palindrome number.................................................

// function palindromeCheck(str, left = 0, right = str.length - 1) {
//   // base case...
//   if (left >= right) return true;
//   if (str[left] !== str[right]) return false;
//   return palindromeCheck(str, left + 1, right - 1);
// }
// let s = "racecar";
// console.log(palindromeCheck(s));

// problem9 : count digit.........................................................

// function countDigits(n) {
//     // Base Case : when n become 0 (or handle negative numbers)
//     if(Math.abs(n) < 10) return 1;
//     return 1 + countDigits(Math.floor(Math.abs(n) / 10));
// }
// let num = '123454875';
// console.log(countDigits(num));

// problem10 : power function....................................................

// function powerFunction(n, p) {
//   // base case
//   if (p === 0) return 1;
//   if (p === 1) return n;
//   return n * powerFunction(n, p - 1);
// }
// let n = 3;
// let p = 2;
// console.log(powerFunction(n, p));

// optimal code of power function (power handle in max range)

// var myPow = function (x, n) {
//   // base case
//   if (n === 0) return 1;
//   if (n === 1) return x;
//   //  handle negative number
//   if (n < 0) {
//     x = 1 / x;
//     n = -n;
//   }
//   let half = myPow(x, Math.floor(n / 2));
//   if (n % 2 === 0) return half * half;
//   else return x * half * half;
// };
// let x = 2;
// let n = -3;
// console.log(myPow(x, n));

// problem 10 : remove duplicates

// function removeDuplicates(arr, result = [], index = 0) {
//   // base case
//   if (index === arr.length) return result;

//   if (index === arr.length - 1 || arr[index] !== arr[index + 1]) {
//     result.push(arr[index]);
//   }
//   return removeDuplicates(arr, result, index + 1);

//   // one liner solution...
//   // return [...new Set(arr)];
// }

// let nums = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(nums));

// problem 11 : move all x to end

// function move0(arr, rest = [], zero = [], index = 0) {
//   // base case
//   if (index === arr.length) return [...rest, ...zero];

//   arr[index] === 0 ? zero.push(arr[index]) : rest.push(arr[index]);
//   // recursive function
//   return move0(arr, rest, zero, index + 1);
// }
// let nums = [1, 2, 0, 4, 0, 7, 0, 3, 0, 9, 0];
// console.log(move0(nums));

// problem 
