//Reverse Prefix of Word

// var reversePrefix = function(s, k) {
//     let prefix = s.slice(0 , k).split("");
//     prefix.reverse();
//     return prefix.join("")+ s.slice(k);

//     // one liner solution
//     // const reversePrefix = (s, k) => s.slice(0, k).split('').reverse().join('') + s.slice(k);

// };

// let s = "abcdefg";
// let k = 2;
// console.log(reversePrefix(s , k));

// without using built in function (with String)

// var reversePrefix = function(s, k) {
//     let result = "";

//     // 1. Manually build the reversed part
//     // We start from k-1 (the end of the prefix) and move to 0
//     for (let i = k - 1; i >= 0; i--) {
//         result += s[i];
//     }
//     // 2. Manually add the rest of the string
//     // We start from k and go to the end
//     for (let j = k; j < s.length; j++) {
//         result += s[j];
//     }
//     return result;
// };

// console.log(reversePrefix("sachin", 4)); // Output: "dcbaefd"

// Two Sum Problem ( brute-Force Approach)

// function twoSum(arr , target){
//     for(let i = 0; i < arr.length; i++){

//         for(let j = i + 1; j < arr.length; j++){
//             let sum = arr[i]  + arr[j];
//             if(sum === target){
//                 return (`frist Index: ${i} and value is: ${arr[i]} and Second Index : ${j} and value is :${arr[j]}`);
//             }
//         }
//     }
//     return null;
// }
// let nums = [7,4,5,9,6,4,7,2,3,0];
// let t = 16;
// console.log(twoSum(nums , t));

// optimal approach ... (Two Pointer Approach)

// let twoSum = (arr, target) => {
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//       return { left, right };
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return null;
// };
// let nums = [7, 2, 6, 4, 9, 8, 7]; // sorted - [2,4,6,7,7,8,9]
// let t = 15;
// console.log(twoSum(nums, t));

// solve two pointer with in an recursion

// function twoSum(arr, target) {
//   arr.sort((a, b) => a - b);

//   function helper(left, right) {
//     // base case
//     if (left >= right) return null;
//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//       return { left, right };
//     }
//     if (sum < target) {
//       return helper(left + 1, right);
//     } else {
//       return helper(left, right - 1);
//     }
//   }
//   return helper(0, arr.length - 1);
// }

// let nums = [7, 2, 3, 4, 58, 9, 2, 4, 5, 4]; // sort - [2,2,3,4,4,4,5,7,9,58]
// let t = 62;
// console.log(twoSum(nums, t));

// 2. Best Time to Buy and Sell Stock

// function maxProfit(prices) {
//   let left = 0; // buy day
//   let right = 1; // sell day
//   let maxProfit = 0;

//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let currentProfit = prices[right] - prices[left];

//       if (currentProfit > maxProfit) {
//         maxProfit = currentProfit;
//       }
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return maxProfit;
// }
// let prices = [7, 1, 5, 3, 7, 2];
// console.log(maxProfit(prices));

// brute-force approach to solve this problem .....

// let maxProfit = (prices) => {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let currentProfit = prices[j] - prices[i];
//       if (currentProfit > maxProfit) {
//         maxProfit = currentProfit;
//       }
//     }
//   }
//   return maxProfit;
// };
// let num = [7, 1, 2, 4, 5, 6, 7];
// console.log(maxProfit(num));

// 3. find a maxSubArray with it's some.....

// function subArray(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(currentSum, maxSum);
//   }
//   return maxSum;
// }

// let nums = [-7, 1, -3, 4, -1, 2, 1, 0, 4];
// console.log(subArray(nums));

// move zero in last - brute-force;

// function moveZero(arr) {
//   let zero = [];
//   let ordinary = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zero.push(arr[i]);
//     } else {
//       ordinary.push(arr[i]);
//     }
//   }
//   return [...ordinary , ...zero];
// }

// test code

// let searchRange=(arr , target)=>{
//     let left = 0;
//     let right = arr.length - 1;
//     let result = [];

//     while(left <= right){
//         if(arr[left] === target){
//             result.push(left);
//         }
//         if(left !== right && arr[right] === target){
//             result.push(right);
//         }
//         left++;
//         right--;
//     }
//     return result.sort((a , b) => a - b);
// }

// let nums = [1, 2, 3, 3, 4, 4, 5, 6, 6];
// let t = 4;
// console.log(searchRange(nums, t));

// find an only even number of any array

// function findEven(arr) {
//   let even = [];
//   let odd = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (nums[i] % 2 === 0) {
//         count++;
//       even.push(nums[i]);
//     }else{
//         odd.push(nums[i]);
//     }
//   }
//   console.log(`the length of array is: ${count} and even number of double is: ${even}`);
// //   return [...even , ...odd];
// return count;
// }
// let nums = [7, 8, 2, 5, 4, 9, 3, 7, 16, 10 ,11,22, 9];
// console.log(findEven(nums));

// find a a strings is anagram or not?

// function anagramStr(str1, str2) {
//     //edge case
//   if (str1.length !== str2.length) return false;

//   let objStr = {};

//   for (let ch of str1) {
//     objStr[ch] = (objStr[ch] ?? 0) + 1;
//   }

//   for (let ch of str2) {
//     if (!objStr[ch]) {
//       return false;
//     }
//     objStr[ch]--;
//   }
//   return true;
// }
// let s1 = "sachin";
// let s2 = "chnias";
// console.log(anagramStr(s1, s2));

// make a product array with some conditions

// function printNum(arr) {
//   let n = arr.length;
//   if (n === 0) return -1;
//   let left = 0;
//   let right = n;
//   let total = [];
//   function helper(left, right) {
//     while (left <= right) {
//       total.push(arr[left] + arr[right]);
//     }
//      left++;
//      right--;
//   }
//   return total;
// }

// let num = [1, 2, 3, 4, 5];
// console.log(printNum(num));

// map in js

// let arr = new Map([
//     ['name','sachin' ],
//     ["gender" ,'male']
// ]);

// get value of for of loop
// for (let x of arr){
//     console.log(x);
//     // all key in array
//     console.log(x[0]);
//     // all values in array
//     console.log(x[1]);
// }

// get values in for each loop

// arr.forEach((val , key)=>{
//     console.log(val);
//     console.log(key);
// })
// delete a specific value in Map
// arr.delete('name');
// console.log(arr);

// console.log(arr.size);
// console.log(arr);
// console.log(arr.has('gender'));
// arr.clear();

// Set Data Structure in DSA
// note: you can't store a duplicate value in a Set

// let arr = new Set(['sachin','rahul','sachin']);
// // add value in set using add
// arr.add('krishna');
// // still can't add a duplicate value
// arr.add('krishna');
// // you can add a object into a Set
// arr.add(obj1 = {'email' : 'uttarakhandtechnology@gmail.com'})
// // check a property in Set
// console.log(arr.has('krishna'));
// // check a size of set
// console.log(arr.size);
// // want to clear a entire Set
// // arr.clear();
// // want to delete a specific value
// // arr.delete('sachin');
// // print a value with an for of loop
// // for(let x of arr){
// //     console.log(x);
// // }
// // use a forEach loop
// // arr.forEach((val)=>{
// //     console.log(val);
// // })

// // want to see value, pair and data form
// console.log(arr.keys());
// console.log(arr.values());
// console.log(arr.entries());

// console.log(arr);

// to insert a new node in linkedlist we create a empty node ;
//             let newNode = {value : value , next : null};

//             if(index === 1) {
//                 newNode.next = this.head;
//                 this.head = newNode;
//                 if(this.size === 0){
//                     this.tail = newNode;
//                 }
//                 this.size++;
//                 return;
//             }

//             let count = 1;
//             let currentNode = this.head;
//             while(count < index - 1){
//                 currentNode = currentNode.next;
//                  count++;
//             }
//               newNode.next = currentNode.next;
//               currentNode.next = newNode;
//               this.size++;

//               if(newNode.next === null){
//                   this.tail = newNode;
//               }
//         },

//// test js compiler remaining code : // // linkedList fully implementation (CRU)

// function linkedList(){
//     return {
//         head : null ,
//         tail : null ,
//         size : 0,

//         addNode : function(data){
//             let newNode = {value : data , next : null};
//             if(!this.head){
//                 this.head = newNode;
//                 this.tail = newNode;
//                 this.size++;
//                 return;
//             }
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.size++;
//         },
//         traversing : function(){
//             let currentNode = this.head;
//             let result = [];
//             while(currentNode !== null){
//                 result.push(currentNode.value);
//                 currentNode = currentNode.next;
//             }
//             return result;
//         },
//         // remove element in linkedList
//         removeElement : function(index){
//             // base cases -
//             if(!this.head || index < 1 || index > this.size){
//                 return 'Invailed Index';
//             }
//             if(index === 1){
//                 this.head = this.head.next;
//                 if(this.size === 1){
//                     this.tail = null;
//                 }
//                 this.size--;
//                 return;
//             }
//             let count = 1;
//             let current = this.head;
//             while(count < index - 1){
//                 current = current.next;
//                 count++;
//             }
//             let nodeToDelete = current.next;
//             current.next = nodeToDelete.next;
//             this.size--;
//         },
//         insertNode : function(index , value){
//             if(index < 1 || index > this.size + 1){
//                 return "invailed index";
//             }
//             // to insert a new node in linkedlist we create a empty node ;
//             let newNode = {value : value , next : null};

//             if(index === 1) {
//                 newNode.next = this.head;
//                 this.head = newNode;
//                 if(this.size === 0){
//                     this.tail = newNode;
//                 }
//                 this.size++;
//                 return;
//             }

//             let count = 1;
//             let currentNode = this.head;
//             while(count < index - 1){
//                 currentNode = currentNode.next;
//                  count++;
//             }
//               newNode.next = currentNode.next;
//               currentNode.next = newNode;
//               this.size++;

//               if(newNode.next === null){
//                   this.tail = newNode;
//               }
//         },
// search node in linkedList
// searchNode : function(data){
//     let current = this.head;
//     let position = 1;

//     while(current !== null){
//         if(current.value === data){
//             return position;
//         }
//         current = current.next;
//         position++;
//     }
//     return 'Not Found';
// }

// }
// }

// let list = new linkedList();
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);
// list.addNode(4);
// list.addNode(5);
// // linkedlist traversing
// console.log('Before : ', list.traversing());
// // remove node in linkeList
// list.removeElement(2);
// // linkedlist traversing
// console.log('after : ',list.traversing());
// // insert node in linkeList
// list.insertNode(3,500);
// // traverse linkedList after insert a node in specific index;
// console.log('after insert node :', list.traversing());
// // search element in linkedList
// console.log('element found in Position :',list.searchNode(50));
// // console.log(list);

// again implementation of a linked list : CRUD

// class LinkedList{
//     constructor(){
//         this.head = null,
//         this.tail = null,
//         this.size = 0
//     }
//     // append node in any linkedlist;
//     appendNode(data){
//         let newNode = {value : data , next : null};
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//             this.size++;
//             return;
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.size++;
//     }
//     // traversing linkedlist
//     traversing(){
//          let result = [];
//          let currentNode = this.head;
//          while(currentNode){
//              result.push(currentNode.value);
//              currentNode = currentNode.next;
//          }
//          return result;
//     }
//     // remove element in linkedlist
//     removeNode(index){
//         if(index < 0 || index >= this.size) return null;
//         if(index === 0){
//             this.head = this.head.next;
//             this.size--;
//             return;
//         }

//         let currentNode = this.head;
//         let count = 0;
//         while(count < index -1){
//             currentNode = currentNode.next;
//             count++;
//         }
//         // delete the target node
//         let nodeToDelete = currentNode.next;
//         currentNode.next = nodeToDelete.next;
//         if(index === this.size-1){
//             this.tail = currentNode;
//         }
//         this.size--;
//     }
//     // insert node in specific place in linkedlist
//     insertNode(){
//         let newNode = {value : value , next : null};
//         // edges cases .....
//         if(index === 1){
//             newNode.next = this.head;
//             this.head = newNode;
//             if(this.size === 0){
//                 this.tail = newNode;
//             }
//             this.size++;
//             return;
//         }

//         let count = 1;
//         let currentNode = this.head;
//         while(count < index - 1){
//             currentNode =  currentNode.next;
//         }
//     }

// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// // traversing linkedlist
// console.log('first traversing list :',list.traversing());
// // remove node in linkedlist
// list.removeNode(2);
// console.log('after remove node :' ,list.traversing());
// console.log(list);

// remove element in array by vaclass LinkedList{
// constructor(){
//     this.head = null,
//     this.tail = null,
//     this.size = 0
// }
// // append node in any linkedlist;
// appendNode(data){
//     let newNode = {value : data , next : null};
//     if(!this.head){
//         this.head = newNode;
//         this.tail = newNode;
//         this.size++;
//         return;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size++;
// }
// // traversing linkedlist
// traversing(){
//      let result = [];
//      let currentNode = this.head;
//      while(currentNode){
//          result.push(currentNode.value);
//          currentNode = currentNode.next;
//      }
//      return result;
// }lue based

// function removeEl(arr,k){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== k){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let nums = [1,2,3,6,4,5,6];
// let val = 6;
// console.log(removeEl(nums,val));

// function middle(arr) {
//   let n = arr.length;
//   let middle = Math.floor(n / 2);
//   return arr[middle];
// }

// let nums = [1, 2, 3, 4, 5, 6];
// console.log(middle(nums));

//

// class LinkedList {
//   constructor() {
//     ((this.head = null), (this.tail = null), (this.size = 0));
//   }
//   // append node in any linkedlist;
//   appendNode(data) {
//     let newNode = { value: data, next: null };
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       this.size++;
//       return;
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.size++;
//   }
//   // traversing linkedlist
//   traversing() {
//     let result = [];
//     let currentNode = this.head;
//     while (currentNode) {
//       result.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return result;
//   }

//   // so make List cyclic , then validate it or also check a cyclic point and remove a point
//   // 1.make a list cyclic
//   cycleList(index) {
//     if (index < 0 || index >= this.size) {
//       return 'Invalid Position';
//     }

//     let position = 0;
//     let currentNode = this.head;
//     while (position < index) {
//       currentNode = currentNode.next;
//       position++;
//     }
//     this.tail.next = currentNode;
//     console.log('cycle create on Position :',currentNode.value);
//   }

//   // 2. check a list make a cycle or not

//   isCycle() {
//     let slow = this.head;
//     let fast = this.head;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;

//       if (slow === fast) {
//         return {
//           hasCycle: true,
//           meetingPoint: slow.value,
//         };
//       }
//     }
//     return {
//       hasCycle: false,
//       meetingPoint: null,
//     };
//   }

//   // 3. find a meeting point
//   findPoint() {
//     let slow = this.head;
//     let fast = this.head;
//     let hasCycle = false;
//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//       if (slow === fast) {
//         hasCycle = true;
//         break;
//       }
//     }
//     if (!hasCycle) return false;

//     slow = this.head;
//     while (slow !== fast) {
//       slow = slow.next;
//       fast = fast.next;
//     }
//     return slow.value;
//   }

//   // remove a cycle in list
//   removeCycle() {
//     let slow = this.head;
//     let fast = this.head;
//     let hasCycle = false;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;

//       if (slow === fast) {
//         hasCycle = true;
//         break;
//       }
//     }

//     if (!hasCycle) return "no cycle to remove";

//     let prev = null;
//     slow = this.head;

//     while (slow !== fast) {
//       slow = slow.next;
//       prev = fast;
//       fast = fast.next;
//     }

//     prev.next = null;
//     this.tail = fast;
//     return "cycle removed";
//   }

// }

// let list = new LinkedList();
// list.appendNode(45);
// list.appendNode(89);
// list.appendNode(95);
// list.appendNode(35);
// list.appendNode(93);
// list.appendNode(39);
// list.appendNode(35);
// console.log(list.traversing());

// // cyclic create at index
// console.log(list.cycleList(3));

// //check cycle ?
// console.log(list.isCycle());

// // find meeting point
// console.log(`meeting Point : ${list.findPoint()}`);

// // remove meeting point
// console.log(list.removeCycle());

// console.log(`current size ${list.size}`);
// // console.log(list);

// function deletionEl(nums, idx) {
//   // edge case...
//   if (idx < 0 || idx >= nums.length) return "Invalid Index";
//   for (let i = idx; i < nums.length -1; i++) {
//     nums[i] = nums[i + 1];
//   }
//   nums.length -= 1;
//   return nums;
// }

// let nums = [10, 20, 40, 50, 60];
// let idx = 5;
// console.log(deletionEl(nums, idx));
