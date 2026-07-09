// let data = [1, 2, 3, 4, 5];
// for (let i = 0; i < data.length; i++) {
//   document.write(`Array ${i} = ${data[i]}<br>`);

//   // document.write(data[3]);
// }
// let x = 12;
// document.write(x);
// // Target Element Problem.

// //make a findelement function
// function findElement() {
//      let el = document.getElementById("element").value;
//   if (el < data.length && typeof parseInt(el) === "number" && el >= 0) {
   
//     alert(data[el]);
//   } else {
//     alert("Element not found in array");
//   }
// }


// array prefix reverse (index based rotate)...

// function prefixRev(nums){
//     let result = [];
//     if(k >= nums.length) return nums;
    
//     for(let i = k; i >= 0; i--){
//         result.push(nums[i]);
//     }
//     for(let i = k + 1; i < nums.length; i++){
//         result.push(nums[i]);
//     }
//     return result;
// }

// reverse prefix value based ...

// function prefixRotate(nums , value){
//     value = nums.indexOf(value);
//     let left = 0;
//     let right = k;
//     if(k === -1) return arr;
//     while(left < right){
//         [nums[left] , nums[right]] = [nums[right] , nums[left]];
//         left++;
//         right--;
//     }
//     return nums;
// }

// let arr = [3,4,5,2,1];
// let k = 4;
// console.log(prefixRotate(arr , k));


//  string prefix reverse .....

// function prefixStr(s,position){
//     let result = "";
    
//     if(position >= s.length) return s;
    
//     for(let i = position; i >= 0; i--){
//         result += s[i];
//     }
//     for(let i = position + 1; i < s.length; i++){
//         result += s[i];
//     }
//     return result;
// }

// value based ..... 

// function prefixStr(s , value){
        
//     let k = s.indexOf(value);
//     let left = 0;
//     let right = k;
//     if(k === -1) return s;
//     let arr = s.split("");
    
//     while(left < right){
//         [arr[left] , arr[right]] = [arr[right] , arr[left]];
//         left++;
//         right--;
//     }
//     return arr.join("");
// }

// let str = 'sachin';
// let position = 'i';
// console.log(prefixStr(str , position));


// array prefix and postfix logic 
// function prefixReverse(nums , k){
//     let n = nums.length;
//     let result = [];
//     k = k % n;
//     for(let i = k - 1; i >= 0; i--){
//         result.push(nums[i]);
//     }
//     for(let i = k; i < n; i++){
//         result.push(nums[i]);
//     }
//     return result;
// }
// array postfix concept ...

// function postfixReverse(nums , k){
//     let n = nums.length;
//     k = k % n;
//     let result = [];
//     for(let i = 0; i < n - k; i++){
//         result.push(nums[i]);
//     }
//     for(let i = n -1; i >= n - k; i--){
//         result.push(nums[i]);
//     }
//     return result;
// }

// let arr = [5,4,7,9,3,5,6,1,7];
// let k = 0;
// console.log(postfixReverse(arr , k));

// reverse a array with hep of stack 

// function reverseArr(arr){
//     let stack = [];
//     for(let i = 0; i < arr.length; i++){
//         stack.push(arr[i]);
//     }
    
//     let reverseStack = [];
//     while(0 < stack.length){
//         reverseStack.push(stack.pop());
//     }
   
//     return reverseStack;
// }
// let nums = [1,2,3,4,5];
// console.log(reverseArr(nums));
