// 1. First & Last Position of Element
// Difficulty - medium
// topic - binary search

// function findFirstLast(arr, target) {
//   // first position...
//   function firstEl(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let first = -1;
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
//   // last position...
//   function lastEl(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let last = -1;
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         last = mid;
//         left = mid + 1;
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//     return last;
//   }
//   return [firstEl(arr, target), lastEl(arr, target)];
// }

// let nums = [0, 1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 8];
// let num = 5;
// console.log(findFirstLast(nums, num));

// 2. Find Minimum in Rotated Sorted Array
// difficulty - medium
// topic - binary search

// function findMin(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] > arr[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return arr[left];
// }
// let nums = [3, 4, 5, 6, 0, 1, 2];
// console.log(findMin(nums));

// 3. find Min and Max element in array

// function minMax(nums){
//     let min = nums[0];
//     let max = nums[0];
//     for(let i = 0; i< nums.length; i++){
//         if(nums[i] < min){
//             min = nums[i];
//         }
//         if(nums[i] > max){
//             max = nums[i];
//         }
//     }
//     return [min , max];
// }
// let arr = [4,5,2,0,7,9,11,,45,47,69,14,2,3,-11];
// console.log(minMax(arr));

// one liner js solution -
// let min = Math.min(...arr);
// let max = Math.max(...arr);

// -- min and max element solve on a recursion

// function minMax(arr, index, currentMin, currentMax) {
//   // base case
//   if (index === arr.length) {
//     return [currentMin, currentMax];
//   }

//   if (arr[index] < currentMin) {
//     currentMin = arr[index];
//   }
//   if (arr[index] > currentMax) {
//     currentMax = arr[index];
//   }
//   return minMax(arr, index + 1, currentMin, currentMax);
// }

// let nums = [1, 7, -1, -9, 0, 5, 12, 6, 3, 4];
// console.log(minMax(nums, 0, nums[0], nums[0]));

// with two pointer...

// function findTarget(arr , target){
//     arr.sort((a , b) => a - b);

//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//          let sum = arr[left] + arr[right];
//         if(sum < target){
//             left++;
//         }else if(sum > target){
//             right--;
//         }else{
//             return [arr[left] , arr[right]];
//         }
//     }
//     return -1;
// }
// let nums = [4,2,3,6,4,8];
// let t = 6;
// console.log(findTarget(nums , t));

// 4. is String palindrome or not?

// function palindromeCheck(str){
//     let left = 0;
//     let right = str.length-1;
//     while(left<= right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// let s = 'racecar';
// console.log(palindromeCheck(s));

// check palindrome with recursion

// function palindromeCheck(str) {
//     if(str.length === 0) return null;
//   function helper(left, right) {
//     if (left >= right) return true;
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     return helper(left + 1, right - 1);
//   }
//   return helper(0, str.length - 1);
// }
// let s = "wxw";
// console.log(palindromeCheck(s));

// 5. find a maximum occuring charactor in string

// let maxAccur = (str) => {
//   if (str.length === 0) return "String is Empty !";
//   str = str.toLowerCase();
//   let freq = {};
//   let maxCount = 0;
//   let maxCh = [];

//   for (let ch of str) {
//     if (!/[a-z0-9]/.test(ch)) continue; // regux function

//     if (freq[ch] === undefined) {
//       freq[ch] = 1;
//     } else {
//       freq[ch] += 1;
//     }
//     if (freq[ch] > maxCount) {
//       maxCount = freq[ch];
//       maxCh = [ch];
//     }else if(freq[ch] === maxCount){
//         maxCh.push(ch);
//     }
//   }
//   return `max frequent character is : ${maxCh} | frequency is : ${maxCount}`;
// };
// let s = " t  S   a      y x l K  l s   achin ";
// console.log(maxAccur(s));

// max count logic with array/...............

// function countFreq(nums) {
//   let freq = {};
//   let maxCount = 0;
//   let maxItem = [];
//   for (let num of nums) {
//     freq[num] = (freq[num] || 0) + 1;

//     if (freq[num] > maxCount) {
//       maxCount = freq[num];
//       maxItem = [num];
//     } else if (freq[num] === maxCount) {
//       maxItem.push(num);
//     }
//   }
//   return `Max Frequent Element : ${maxItem} | Frequency : ${maxCount}`;
//   //   return freq;
// }

// let arr = [7, 5, 2, 6, 5, 4, 8, 8, 2, 4, 5, 8, 6, 6];
// console.log(countFreq(arr));

//6. find an first unique charactor in strings...

// function findEl(str) {
//     let freq = {};
//     for(let ch of str){
//         freq[ch] = (freq[ch] || 0) + 1;
//     }
//     for(let ch of str){
//         if(freq[ch] === 1){
//             return ch;
//         }
//     }
//     return 'not found';
// }
// let s = "xyxyzoz";
// console.log(findEl(s));

// if find an all the unique element not just first so

// function findUnique(str){
//     let freq = {};
//     let unique = [];
//     for(let ch of str){
//         freq[ch] = (freq[ch] || 0) + 1;
//     }
//     for(let ch of str){
//         if(freq[ch] === 1 && !unique.includes(ch)){
//             unique.push(ch);
//         }
//     }
//    return unique;
// }
// let s = 'xyxxzopo';
// console.log(findUnique(s));

// find an index of unique strings index, not val;

// function findUnique(str){
//     let freq = {};
//     let uniqueIndex = [];
//     for(let ch of str){
//         freq[ch] = (freq[ch] || 0) + 1;
//     }

//     for(let i = 0; i < str.length; i++){
//         if(freq[str[i]] === 1){
//             uniqueIndex.push(i);
//         }
//     }
//     return uniqueIndex;
// }
// let s = 'xypxyqz';
// console.log(findUnique(s));

// 7. vailed anagram or not ?

// function vailedAnagram(str1, str2) {
//   if (str1.length !== str2.length) return null;
//   let freq = {};
//   for (let ch of str1) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }
//   for(let ch of str2 ){
//     if(!freq[ch]){
//         return false;
//     }
//     freq[ch]-=1;
//   }
//   return true;
// }
// let s1 = "hello";
// let s2 = "ohlel";
// console.log(vailedAnagram(s1, s2));

// 8. Sort character by frequency (descending)

// function sortString(str) {
//   let freq = {};
//   for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }
//   let charFreq = Object.entries(freq);

//   charFreq.sort((a , b) => b[1] - a[1]);

//   let result = '';
//   for(let [char , count] of charFreq){
//     result+= char.repeat(count);
//   }
//   return result;
// }

// let s = "racecar";
// console.log(sortString(s));

// 9. non-decrising order make an aray with some conditions

// non decresing array.....

// function nonDecresing(nums){
//     let modified = false;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > nums[i + 1]){
//             if(modified) return false;

//             if(i === 0 || nums[i - 1] <= nums[i + 1]){
//                 modified = true;
//             }else if(i + 1 === nums.length - 1 || nums[i] <= nums[i + 2]){
//                 modified = true;
//             }else{
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// let arr = [1,2,0,4,5,6]; // [1,2,3];
// console.log(nonDecresing(arr));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@#################Linked List Problem @@@@@@@@@@###########################

// 10. remove a node in any LinkedList for a given value index;

// function removeNode(head, val) {
//   let dummy = new ListNode(0);
//   dummy.next = head;

//   let current = dummy;

//   while (current.next !== null) {
//     if (current.next.val === val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }
//   return dummy.next;
// }

// 11 . Remove Linked List Element .....

// class LinkedList{
//     constructor(){
//         this.head = null,
//         this.tail = null,
//         this.size = 0;
//     }
//         // add node in LinkedList
//         appendNode(data){
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
//         }
//         // traverse LinkedList
//         traverse(){
//             let currentNode = this.head;
//             let result = [];
//             while(currentNode !== null){
//                 result.push(currentNode.value)
//                 currentNode = currentNode.next;
//             }
//             return result;
//         }
//         // remove a node by value
//         removeNode(val){
//             if(this.head !== null && this.head.value === val){
//                 this.head = this.head.next;
//                 this.size--;
//             }
//             if(this.head === null){
//                 this.tail = null
//                 return;
//             }
//             let current = this.head;

//             while(current !== null && current.next !== null){
//                 if(current.next.value === val ){
//                     current.next = current.next.next;
//                     this.size--;
//                 }
//                 current = current.next;
//             }
//             current = this.head;
//             while(current && current.next){
//                 current = current.next;
//             }
//             this.tail = current;
//         }
// }
// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(6);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.appendNode(6);
// // traverse  a LinkedList
// console.log(list.traverse());
// console.log(list.size);
// // remove a node by value
// list.removeNode(6);
// // traverse after remove node
// console.log(list.traverse());

// console.log(list.size);
// console.log(list);

// 12. Find a middle of a linkedList (slow and fast pointer concept)

// function findMiddle(){
//     let slow = this.head;
//     let fast = this.head;

//     while(fast !== null && fast.next !== null){
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow.value;
// }

// 13. is Cycle LinkedList?

// class LinkedList {
//   constructor() {
//     ((this.head = null), (this.tail = null), (this.size = 0));
//   }
//   // add node in LinkedList
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
//   // traverse LinkedList
//   traverse() {
//     let currentNode = this.head;
//     let result = [];
//     while (currentNode !== null) {
//       result.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return result;
//   }

//   // make a list cyclic or check the point

//   cycleLinkedList(position) {
//     if (position < 0 || position >= this.size) {
//       return {
//         isCycle: false,
//         meetingPoint: null,
//         error: "index out of bound",
//       };
//     }

//     let current = this.head;
//     let index = 0;

//     while (index < position) {
//       current = current.next;
//       index++;
//     }
//     this.tail.next = current;

//     // check the cyclick number

//     let slow = this.head;
//     let fast = this.head;
//     let isCycle = false;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;

//       if (slow === fast) {
//         isCycle = true;
//         break;
//       }
//     }
//     if (!isCycle) {
//       return {
//         isCycle: false,
//         meetingPoint: null,
//       };
//     }

//     slow = this.head;
//     while (slow !== fast) {
//       slow = slow.next;
//       fast = fast.next;
//     }
//     return {
//       isCycle: true,
//       meetingPoint: slow.value,
//     };
//   }
// }

// let list = new LinkedList();
// list.appendNode(10);
// list.appendNode(20);
// list.appendNode(30);
// list.appendNode(40);
// list.appendNode(50);
// list.appendNode(60);
// list.appendNode(70);
// console.log(list.traverse());
// // console.log(list);
// // make a cycle list
// console.log(list.cycleLinkedList(2));

// 14. is linkedList palindrome or not

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
// check a palindrome conditions 1 method
//   checkPalindrome() {
//     if(!this.head || this.head.next === null) return true;
//     // 1. find a middle point

//     let slow = this.head;
//     let fast = this.head;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     // slow is now of middle
//     // 2. reverse a second half of list
//     let prev = null;
//     let current = slow;
//     let next = null;

//     while (current !== null) {
//       next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }

//     // prev is now head;(second half)
//     // 3. compare first half to second half
//     let left = this.head;
//     let right = prev;

//     while (right !== null) {
//       if (left.value !== right.value) {
//         return false;
//       }
//       left = left.next;
//       right = right.next;
//     }
//     return true;
//   }
//  2 method to convert an array then check
//   checkPalindrome(){
//     let values = [];
//     let currentNode = this.head;
//     while(currentNode !== null){
//         values.push(currentNode.value);
//         currentNode = currentNode.next;
//     }
//     let left = 0;
//     let right = values.length-1;
//     while(left <= right){
//         if(values[left] !== values[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
//   }
// }

// let list = new LinkedList();
// list.appendNode(7);
// list.appendNode(2);
// list.appendNode(5);
// list.appendNode(3);
// list.appendNode(5);
// list.appendNode(2);
// list.appendNode(7);
// // traverse a list
// console.log(list.traversing());

// // check a palindrome conditions
// console.log(list.checkPalindrome());
// console.log(list);

// 15. problem : 328 : Odd Even Linked List (4-march-2026);

// function oddEvenLinkedList(){
//   return {
//     head : null,
//     tail : null,
//     size : 0,

//     appendNode : function(data){
//       let newNode = {value : data , next : null};
//       if(!this.head){
//         this.head = newNode;
//         this.tail = newNode;
//         this.size++;
//         return;
//       }
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.size++;
//     },
//     traversing : function(){
//       let currentNode = this.head;
//       let result = [];
//       while(currentNode !== null){
//         result.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return result;
//     },
//     // make odd even indices bases
//     oddEvenNode : function(){
//       let odd = this.head;
//       let even = this.head.next;
//       // maintain the even head
//       let EvenHead = even;
//       while(even !== null && even.next !== null){
//         // change pointer for odd list
//         odd.next = odd.next.next;
//         odd = odd.next;
//         // change pointer for even list
//         even.next = even.next.next;
//         even = even.next;
//       }
//       odd.next = EvenHead;
//       // return this.head;
//       // print a list in array form (optional)
//       let result = [];
//       let current = this.head;
//       while(current !== null){
//         result.push(current.value)
//         current = current.next;
//       }
//       return result;
//     }

//   }
// }

// let list = oddEvenLinkedList() // [2,1,3,5,6,4,7]
// list.appendNode(2)
// list.appendNode(1)
// list.appendNode(3)
// list.appendNode(5)
// list.appendNode(6)
// list.appendNode(4)
// list.appendNode(7)

// console.log(list.traversing());
// console.log(list.oddEvenNode());
// console.log(list);

// 16. Leetcode Problem : 817 : Linked List Components

// function linkedList(){
//   return {
//     head : null,
//     tail : null,
//     size : 0,

//     appendNode : function(data){
//       let newNode = {value : data , next : null};
//       if(!this.head){
//         this.head = newNode;
//         this.tail = newNode;
//         this.size++;
//         return;
//       }
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.size++;
//     },
//     traversing : function(){
//       let currentNode = this.head;
//       let result = [];
//       while(currentNode !== null){
//         result.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return result;
//     },

//     // Number of connected components
//     numComponents : function(nums) {
//       // Step 1: Create a Set from nums for O(1) lookups
//       const set = new Set(nums);

//       // Step 2: Initialize counter and a flag
//       let count = 0;
//       let inComponent = false;

//       // Step 3: Traverse the linked list
//       let current = this.head;
//       while (current !== null) {
//         // Use 'value' instead of 'val'
//         if (set.has(current.value)) {
//           if (!inComponent) {
//             count++;
//             inComponent = true;
//           }
//         } else {
//           inComponent = false;
//         }
//         current = current.next;
//       }

//       return count;
//     }
//   }
// }

// // Create list: 0 → 1 → 2 → 3
// let list = new linkedList();
// list.appendNode(0);
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// console.log("List:", list.traversing()); // [0,1,2,3]

// // Test with nums = [0,1,3]
// let nums = [0, 1, 3];
// console.log("Components:", list.numComponents(nums)); // Expected: 2

// // Additional test: nums = [0,2,4]
// nums = [0, 2,3];
// console.log("Components:", list.numComponents(nums)); // Expected: 3

// 17. Merge two sorted List

// function mergeTwoSortedList(list1, list2) {
//   let dummy = { value: -1, next: null };
//   let tail = dummy;
//   while (list1 !== null && list2 !== null) {
//     if (list1.value < list2.value) {
//       tail.next = list1;
//       list1 = list1.next;
//     } else {
//       tail.next = list2;
//       list2 = list2.next;
//     }
//     tail = tail.next;
//   }
//   if (list1 !== null) {
//     tail.next = list1;
//   }
//   if (list2 !== null) {
//     tail.next = list2;
//   }
//   return dummy.next;
// }

// leetcode problem 19 : remove nth node from end in List

// function removeNthNodeFromEnd(n) {
//   return {
//     head: null,
//     tail: null,
//     size: 0,

//     appendNode: function (data) {
//       let newNode = { value: data, next: null };
//       if (!this.head) {
//         this.head = newNode;
//         this.tail = newNode;
//         this.size++;
//         return;
//       }
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.size++;
//     },
//     traversing: function () {
//       let currentNode = this.head;
//       let result = [];
//       while (currentNode !== null) {
//         result.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return result;
//     },

//     removeNthNode: function (n) {
//       if (n < 0 || !this.head) {
//         return this.head;
//       }

//       let dummy = { value: -1, next: this.head };

//       let firstPtr = dummy;
//       let secondPtr = dummy;

//       for (let i = 0; i < n; i++) {
//         secondPtr = secondPtr.next;
//         if (secondPtr === null) return this.head;
//       }
//       while (secondPtr.next !== null) {
//         firstPtr = firstPtr.next;
//         secondPtr = secondPtr.next;
//       }

//       if (firstPtr.next !== null) {
//         firstPtr.next = firstPtr.next.next;
//       }

//       this.head = dummy.next;
//       return this.head;
//     },
//   };
// }

// let list = new removeNthNodeFromEnd();
// list.appendNode(2);
// list.appendNode(1);
// list.appendNode(3);
// list.appendNode(5);
// list.appendNode(6);
// list.appendNode(4);
// list.appendNode(7);

// console.log(list.traversing());
// // remove nth node from end in List
// list.removeNthNode(0);
// console.log(list.traversing());
// console.log(list);

// 18 . find a intersection of two List

// let findIntersection = (headA , headB) => {
//   // helper function to find a length; of both list
//   function getLength(node){
//     let len = 0;
//     while(node){
//       node = node.next;
//       len++;
//     }
//     return len;
//   }

//   //
//   let lenA = getLength(headA);
//   let lenB = getLength(headB);

  // decrease a len of list who is big

//     while(lenA > lenB){
//       headA = headA.next;
//       lenA--
//     }
//     while(lenB > lenA){
//       headB = headB.next;
//       lenB--;
//     }
//     while(headA!== headB){
//       headA = headA.next;
//       headB = headB.next;
//     }
//     return headA;
// }

// more efficient way to approach this problem

// function getIntersectNode(headA , headB){
//     let pointerA = headA;
//     let pointerB = headB;

//     while(pointerA !== pointerB){
//       pointerA = pointerA === null ? headB : pointerA.next;
//       pointerB = pointerB === null ? headA : pointerB.next;
//     }
//     return pointerA;
// }
