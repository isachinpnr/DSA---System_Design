// This is a testing file for sorting algorithms in JavaScript
//########################################1 .Bubble Sort Implementation ##########################################

// let bubbleSort = (arr)=>{
//     let n = arr.length;
//     for(let i = 0; i < n-1; i++){
//         for(let j = 0; j < n - i - 1; j++){
//             if(arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

// array destructring concept (less of syntax)
// [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//             }
//         }
// }
// return arr;

// }

// effeient way to write a bubble sort if you are think a loop can sort your array in early moments so you don't need to go through all the loops

// function bubbleSort1(arr) {
//   let n = arr.length;
//   let swapped;
//   for (let i = 0; i < n - 1; i++) {
//     swapped = false;
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;

//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// }

// let nums = [5, 2, 9, 1, 5, 6, 3, 7];
// let result = bubbleSort1(nums);
// console.log(result);

// reverse array based on indexing - (brute force)

// function reverseArr(nums , e){
//     if(!nums.length) return [];
//     let n = nums.length;

//     e = e % n;
//     if(k === 0) return [...nums];

//     let result = [];
//     for(let i = n - e; i < n; i++){
//       result.push(nums[i]);
//     }
//     for(let i = 0; i < n - e; i++){
//         result.push(nums[i]);
//     }
//     return result;
// }

// another efficient way.....
// function rotateArr(arr , r){
//     let n = arr.length;
//     r = r % n;

//     reverse(arr , 0 , n - 1);
//     reverse(arr , 0 , r - 1);
//     reverse(arr , r , n - 1);

//     return arr;
// }
// function reverse(arr , left , right){
//     while(left < right){
//         [arr[left] , arr[right]] = [arr[right] , arr[left]];
//         left++;
//         right--;
//     }
// }
// let nums = [3,4,5,1,2];
// let k = 0;
// console.log(rotateArr(nums , k));

// ###################################### 2. Selection Sort #########################################################

// in a selection sort we pick a one element in left side , means assume this is a very small and large ( based on assending
//         or desinding choice) and compare this element to another remaining elements , and repeat a process whenever all the small or larger number come to
//         // one side of array )

// ascending order .....

// function selectionSort(arr) {
//   let minVal;
//   for (let i = 0; i < arr.length; i++) {
//     minVal = i;
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[j] < arr[minVal]){
//                 minVal = j;
//         }
//     }
//     let temp = arr[minVal];
//     arr[minVal] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }

// let nums = [7, 2, 6, 5, 48, 9, 5, 4];
// console.log(selectionSort(nums));

// descending order.....

// function selectionSort(nums) {
//   let maxVal;
//   for (let i = 0; i < nums.length; i++) {
//     maxVal = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > nums[maxVal]) {
//         maxVal = j;
//       }
//     }
//     let temp = nums[maxVal];
//     nums[maxVal] = nums[i];
//     nums[i] = temp;
//   }
//   return nums;
// }

// let arr = [4, 2, 76, 19, -8, 7];
// console.log(selectionSort(arr));

// @@@@@@@@@@@@@@#################### 3. Insertion Sort @##@@###################################################

// ascending order of inserstion sort .....

// function inserstionSort(nums) {
//   let current, j;
//   for (let i = 1; i < nums.length; i++) {
//     current = nums[i];
//     j = i - 1;
//     while (j >= 0 && nums[j] > current) {
//       nums[j + 1] = nums[j];
//       j = j - 1;
//     }
//     nums[j + 1] = current;
//   }
//   return nums;
// }
// let arr = [7, 2, 0, 6, 4, 9]; // [1,2,3,8,5,6];

// console.log(inserstionSort(arr));

// descending order of selection sort

// function selectionSort(nums) {
//   let current, j;
//   for (let i = 1; i < nums.length; i++) {
//     current = nums[i];
//     j = i - 1;
//     while (j >= 0 && nums[j] < current) {
//       nums[j + 1] = nums[j];
//       j--;
//     }
//     nums[j + 1] = current;
//   }
//   return nums;
// }
// let arr = [4, 1, 0, 2, 3, 9, 4, 7, 5];
// console.log(selectionSort(arr));

