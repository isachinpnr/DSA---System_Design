// This is a re-cursion datastructure in DSA.....

// find a factrorial of a Number

// function factorial(num){
//     if(num === 0) return 1;
//     return num * factorial(num - 1);
// }

// let data = factorial(5);
// console.log(data);

// print a number on recursion.....

// function printNum(num){
//     if(num < 1) return;
//     console.log(num);
//     return printNum(num - 1);
//     // console.log(num);
// }
// let data = 10;
// console.log(printNum(data));

// Indirect Recursion.....

// function isEven(n){
//     if(n === 0) return true;
//     console.log(`isEven checking {n}, calling isOdd(${n - 1}) `);
//     return isOdd(n - 1);
// }

// function isOdd(n){
//     if(n === 0) return false;
//     console.log(`isOdd checking {n}, calling isEven(${n - 1}) `);
//     return isEven(n - 1);
// }

// console.log("final Result: ", isEven(10));

// head and Teil recursion.....

// function printNum(num) {
//   if (num >= 11) return;
// //   console.log(num); // head recursion
//   printNum(num + 1);
// //   console.log(num); // tail recursion
// }
// let data = 1;
// printNum(data);

// reverse a array using recursion.....

// function reverseArray(arr , start , end){
//     if(start >= end) return;
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
// }

        // var reverseString = function (s) {
        // // let result = [];
        // let arr = s.split("");

        // const saver = (start, end) => {
        //     //base case
        //     if (start >= end) return;
        //     temp = arr[start];
        //     arr[start] = arr[end];
        //     arr[end] = temp;
        //     saver(start + 1, end - 1);
        // };
        // saver(0, arr.length - 1);

        // return arr.join("");
        // };

        // let s = "Sachin";
        // console.log(reverseString(s));


        // this is a one the most


//     const reverseArray = (arr , start , end) =>{
    
//     const helper = ( start , end)=>{
        
//     if(start >= end) return;
    
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     helper(start+ 1 , end - 1);
//     }
//     helper(0 , arr.length-1);
// }

// let nums = [4,8,3,4,7,9,0,5,4];
// reverseArray(nums);
// console.log(nums);

// reverse vowels 

// reverse a vowels with use a recursion.....
// const reverseVowels =(s)=>{
//     let arr = s.split("");
//     let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    
//     function helper(left , right){
//         if(left >= right) return;
        
//         if(!vowels.has(arr[left])){
//             helper(left + 1 , right);
//         }
//         else if(!vowels.has(arr[right])){
//             helper(left , right - 1);
//         }else{
//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
            
//             helper(left + 1 , right - 1);
//         }
//     }
//     helper(0 , arr.length-1);
//     return arr.join("");
// };

// let string = 'sachin';
// console.log(reverseVowels(string));


// reverse string with using recursion.....

// function reverseStr(str){
//     // base case
//     if(str=== "") return "";
    
//     let arr = str.split("");
//     function helper(left , right){
//         if(left < right){
//         [arr[left] , arr[right]] = [arr[right] , arr[left]];
//         helper(left + 1 , right - 1);
//         }
//     }
//     helper(0 , arr.length -1)
//     return arr.join("");
// }


// let string = 'sachin';
// console.log(reverseStr(string));


