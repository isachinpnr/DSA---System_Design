// what is a Recursion?
// Recursion is a programming technique where a function calls itself
// to solve a smaller part of the same problem until
//  a base condition stops the recursion.

// Every recursion problem has two main parts:
// 1️⃣ Base Case → Condition where recursion stops
// 2️⃣ Recursive Case → Function calls itself with a smaller input

// Basic structure:

// function recursionFunction(input){

//     // Base Case
//     if(condition){
//         return result;
//     }

//     // Recursive Case
//     return recursionFunction(smaller_input);
// }

// Important idea:
// Recursion solves a problem by breaking it into smaller identical subproblems.

// 2. The 3 Golden Rules of Recursion

// Rule 1 — Base Condition is Mandatory
// Without a base condition recursion will run infinite times → Stack Overflow

// Example:
// if(n === 0) return;
// Rule 2 — Work must move toward Base Case

// Each recursive call must make the problem smaller
// Example
// n → n-1 → n-2 → n-3
// Rule 3 — Trust the Recursive Call (This is the most important mindset)

// When writing recursion, assume the recursive call already works correctly.
// You only focus on the current step.

// 3. Understanding the Call Stack

// Recursion internally uses the Call Stack.

// Example:

// factorial(3)

// factorial(3)
//    calls factorial(2)

// factorial(2)
//    calls factorial(1)

// factorial(1)
//    returns 1

// Stack Execution:

// factorial(1) → return 1
// factorial(2) → 2 * 1
// factorial(3) → 3 * 2

// Concepts you must understand:

// • Function Stack
// • Push / Pop
// • Return Flow
// • Memory usage

// 4. Types of Recursion (Interview Important)
// You must understand these patterns.

// 1️⃣ Linear Recursion
// One recursive call.
// Example:

// factorial
// sum of n numbers
// 2️⃣ Binary Recursion

// Two recursive calls.
// Example:

// Fibonacci
// Binary Tree traversal
// 3️⃣ Multiple Recursion

// More than two calls.
// Example:

// Backtracking problems
// 4️⃣ Tail Recursion
// Recursive call happens at the last step

// Example:
// return recursion(n-1)
// Compiler can optimize tail recursion.

// 5️⃣ Head Recursion
// Recursive call happens before doing work

// Example:
// recursion(n-1)
// print(n)


// -----------------------------------------------------------------------------
// example code :

// print a text
// function printText(num) {
// base case
//   if (num === 0) {
//     console.log("all text print");
//     return; // without return , recursive call never stop, or you can write a else block
//   }
//     printText(num - 1);
//     console.log("this is a test text");
// }
// printText(5);

// print number

// function printNumbers(n) {
//   // base case
//   if (n === 0) return;

// //   console.log(n); // print 10 to 1 (Head -  Recursion)
//    printNumbers(n - 1);
//     console.log(n); // print 1 to 10 (Tail - Recursion)
 
//   return "all numbers prints";

// }
// let n = 10;
// console.log(printNumbers(n));

// function print(n){
//  if(n === 0) return
//  console.log(n)
//  return print(n-1)
// }
// console.log(print(10));

// function test(n){
//     if(n=== 0) return;

//     console.log('A',n);
//     test(n -1);
//     console.log('B',n);
// }
// test(3);