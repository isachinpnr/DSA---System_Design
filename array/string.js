// reverse strings

// function reverseStr(s){
//     let result = '';
//     return s.reverse().join("");
//     // }
// }
// let str = 'sachin';
// let arr = str.split('');
// console.log(reverseStr(arr));

// two pointer to reverse a strings

// function reverseString(s){
//     let arr = s.split("");
//     let left = 0;
//     let right = arr.length-1;
//     while(left <= right){
//         // array distructring..
//         [arr[left] , arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join("");
// }
// let str = 'sachin';
// // let arr = str.split('');
// console.log(reverseString(str));