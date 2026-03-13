// Problem1  : find a intersection of any LinkedList ?.....

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   appendNode(value) {
//     const node = { value: value, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

//   // find intersection in Lists
//   function intersectionList(headA, headB) {
//     let PA = headA;
//     let PB = headB;
//     while (PA !== PB) {
//       PA = PA === null ? headB : PA.next;
//       PB = PB === null ? headA : PB.next;
//     }
//     return PA;
//   }

// // make list 1
// let list1 = new LinkedList();
// let list2 = new LinkedList();

// list1.appendNode(2);
// list1.appendNode(3);
// list1.appendNode(5);
// list1.appendNode(8);
// list1.appendNode(9);

// // make list2
// list2.appendNode(0);
// list2.appendNode(4);
// list2.appendNode(6);

// // create intersection in both list
// let intersectionNode = list1.head.next.next;
// list2.tail.next = intersectionNode;

// // prints Lists
// console.log("List 1");
// list1.traverse();

// console.log("List 2");
// list2.traverse();

// // find intersection
// let result = intersectionList(list1.head, list2.head);

// if (result) {
//   console.log("Intersection Node :", result.value);
// } else {
//   console.log("Intersection not found");
// }
// // list1.intersectionList();
// // console.log(result);

// Problem2:  merge a two k sorted List .....

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   appendNode(value) {
//     const node = { value: value, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// // merge a both List

// function mergeList(list1, list2) {
//   let dummy = { value: -1, next: null };
//   let current = dummy;

//   while (list1 !== null && list2 !== null) {
//     if (list1.value < list2.value) {
//       current.next = list1;
//       list1 = list1.next;
//     } else {
//       current.next = list2;
//       list2 = list2.next;
//     }
//     current = current.next;
//   }
//   // remaining node
//   current.next = list1 !== null ? list1 : list2;
//   return dummy.next;
// }

// let list1 = new LinkedList();
// let list2 = new LinkedList();

// // create a list1
// list1.appendNode(2);
// list1.appendNode(4);
// list1.appendNode(6);

// // create a list2
// list2.appendNode(1);
// list2.appendNode(3);
// list2.appendNode(5);

// console.log("List 1");
// list1.traverse();
// console.log("List 2");
// list2.traverse();

// let result = mergeList(list1.head, list2.head);
// // print list in array forms...
// let current = result;
// let arr = [];
// while(current !== null){
//   arr.push(current.value);
//   current = current.next;
// }

// console.log('Merged List :',arr.join('->'));

// problem3 : Rotate List in K time

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }
// // rotate list function in here
// function rotateList(head , k){
//     // key points remembers...
//     // 1. find a length of list
//     // 2. handle K > length
//     // 3. make list circular
//     // 4. find new tail
//     // 5. break list circle

//     // edge case
//     if(head === null || head.next === null || k === 0) return head;

//     // 1. find a length of list
//     let length = 1;
//     let tail = head;
//     while(tail.next !== null){
//         tail = tail.next;
//         length++;
//     }

//     // 2. Handle k > length
//     k = k % length;

//     // 3. make list circular
//     tail.next = head;

//     // 4. find new tail
//     let stepsToNewTail = length - k - 1;
//     let newTail = head;
//     for(let i = 0; i < stepsToNewTail; i++){
//         newTail = newTail.next;
//     }

//     // 5. break list circle
//     let newHead = newTail.next
//     newTail.next = null;
//     return newHead;

// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.traverse();
// // console.log(list);

// let k = 5;
// let result = rotateList(list.head , k)
// let current = result;
// let arr = [];
// while(current !== null){
//     arr.push(current.value);
//     current = current.next;
// }
// console.log('Rotate List :',arr.join(' -> '));

// problem4 : remove kth node from end in List

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// function removeKthNode(head, k) {
//   // edge cases
//   if (!head || k <= 0 || k > this.size) return head;

//   let length = 0;
//   let current = head;
//   while (current) {
//     length++;
//     current = current.next;
//   }
//   if (k > length) return head;

//   let dummy = { value: -1, next: head };
//   let firstPtr = dummy;
//   let secondPtr = dummy;
//   for (let i = 0; i < k; i++) {
//     secondPtr = secondPtr.next;
//   }
//   while (secondPtr.next !== null) {
//     firstPtr = firstPtr.next;
//     secondPtr = secondPtr.next;
//   }
//   firstPtr.next = firstPtr.next.next;
//   return dummy.next;
// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.traverse();

// // remove node in list from end
// let k = 5;
// let result = removeKthNode(list.head, k);
// let current = result;
// let arr = [];
// while (current !== null) {
//   arr.push(current.value);
//   current = current.next;
// }
// console.log("After remove Kth Node :", arr.join(" -> "));
// console.log(list);

// problem5 : reverse LinkedList node

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// function reverseList(head) {
//   let prev = null;
//   let current = head;
//   let next = null;

//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.traverse();

// // reverse a List
// let result = reverseList(list.head);

// let current = result;
// let arr = [];
// while (current !== null) {
//   arr.push(current.value);
//   current = current.next;
// }
// console.log("Reverse List : ", arr.join(" -> "));
// console.log(result);
// // console.log(list);

// problem6 : middle of Linked List
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// // find a middle node function
// function findMiddle(head) {
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow.value;
// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.appendNode(6);
// console.log(list);
// // find a middle node

// let result = findMiddle(list.head);
// console.log('Middle Node :', result);

// Problem 6: Detact ,careate and remove a cycle in list
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// // LinkedList cycle function (first check is a cycle or not) ?
// // create cycle function
// function createCycle(list, index) {
//   // edge case
//   if (index < 0 || index >= this.size) return;
//   // make List cyclic first
//   let current = list.head;
//   let count = 0;

//   while (count < index) {
//     current = current.next;
//     count++;
//   }

//   list.tail.next = current;
// }
// // check cycle function
// function isCycle(head) {
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }
// // check or find a cyclic node
// function whereCycle(head) {
//   let slow = head;
//   let fast = head;
//   let hasCycle = false;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       hasCycle = true;
//       break;
//     }
//   }
//   if (!hasCycle) return false;

//   slow = head;
//   while (slow !== fast) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return slow.value;
// }
// // remove a cyclic node
// function removeCycle(list) {
//   let head = list.head;
//   let slow = head;
//   let fast = head;
//   let hasCycle = false;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       hasCycle = true;
//       break;
//     }
//   }
//   if (!hasCycle) return "No Cycle to remove";

//   slow = head;

//   // if cycle has started at the head.....
//   if (slow === fast) {
//     while (fast.next !== slow) {
//       fast = fast.next;
//     }
//   } else {
//     while (slow.next !== fast.next) {
//       slow = slow.next;
//       fast = fast.next;
//     }
//   }

//   fast.next = null;
//   list.tail = fast;
//   return "cycle successfully remove";
// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.appendNode(6);
// list.traverse();
// console.log(list);

// // check a cyclic condition?

// let result = createCycle(list, 3);
// // check cycle
// let hasCycle = isCycle(list.head);
// console.log("Cycle Status : ", hasCycle);
// // where cycle create (cyclic node in List)
// let cyclicNode = whereCycle(list.head);
// console.log("Cyclic Node Point :", cyclicNode);
// // remove a Cycle
// let afterRemove = removeCycle(list);
// console.log("Cycle remove", afterRemove);
// // after check a cycle
// console.log(list);

// Problem7 : delete a node in List

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// // delete node function
// function deleteNode(node) {
//   node.value = node.next.value;
//   node.next = node.next.next;
// }

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// console.log("Before Delete");
// list.traverse();
// // get node
// let node = list.head.next.next;

// deleteNode(node);

// console.log("After Delete");
// list.traverse();

// Problem8 : Check a List is Palindrome or not......................................
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// palindrome List check function ///

// function checkPalindrome(list) {
//   // edge case
//   if(!list.head || !list.head.next) return true;

//   let current = list.head;
//   let arr = [];

//   while (current !== null) {
//     arr.push(current.value);
//     current = current.next;
//   }

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// Time and Space Complexity
// Time Complexity : O(n)
// Space Complexity : O(1)

// use two pointer technique
// function checkPalindrome() {
//   // edge case
//   if (!list.head || !list.head.next) return true;

//   let slow = list.head;
//   let fast = list.head;

//   // find middle of List
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   // Reverse Second Half
//   let prev = null;
//   let current = slow;
//   let next = null;

//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   let left = list.head;
//   let right = prev;

//   while (right) {                       - // means while(right !== null)
//     if (left.value !== right.value) {
//       return false;
//     }
//     left = left.next;
//     right = right.next;
//   }
//   return true;
// }

// Time and space complexity :
// Time Complexity : O(n)
// Space Complexity : O(1)

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(0);
// list.appendNode(2);
// list.appendNode(1);
// list.traverse();

// let result = checkPalindrome(list);
// console.log(result);

// Problem9 :  Reorder List...
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// Reorder List function - brute force approach
// function reorderList(list) {
//   let current = list.head;
//   let arr = [];
//   while (current !== null) {
//     arr.push(current.value);
//     current = current.next;
//   }

//   let newList = [];
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     newList.push(arr[left]);
//     if (left !== right) {
//       newList.push(arr[right]);
//     }
//     left++;
//     right--;
//   }
//   return newList;
// }
// Time and Space Complexity :
// Time Complexity : O(n)
// Space Complexity : O(n);

// -----------------------------------------------------------------

// key points -
// 1. find middle
// 2 . reverse half
// 3. Join Them
// function reorderList(head) {  // Reorder List - Optimal Way
//   // edge case:
//   if (!head || !head.next) return;

//   // find middle point
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     // slow is now middle of a List
//   }
//   // reverse second Half
//   let prev = null;
//   let current = slow;
//   let next = null;
//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   // join them
//   let left = head;
//   let right = prev; // head of the reversed second half...

//   while (right.next) {
//     // save next nodes
//     let temp1 = left.next;
//     let temp2 = right.next;
//     // Connect Nodes
//     left.next = right;
//     right.next = temp1;
//     // pointer move
//     left = temp1;
//     right = temp2;
//   }
// }

// // Time and Space Complexity -
// // Time Complexity : O(n)
// // Space Complexity : O(1);

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.traverse();

// // reorder list now
// // print as a special format
// let result = reorderList(list.head);
// let arr = [];
// let current = list.head;
// while (current !== null) {
//   arr.push(current.value);
//   current = current.next;
// }
// console.log("Reorder List : ", arr.join(" -> "));

// Problem10: Reverse List - || (special reverse List)............................
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }

// // reverse a List in Specific Position
// function reverseListInPosition(head, left, right) {
//   // edge cases
//   if (!head || left === right) return head;

//   // cerate dummy node
//   let dummy = { value: 0, next: head };
//   let prev = dummy;

//   // move prev to node before left
//   for (let i = 1; i < left; i++) {
//     prev = prev.next;
//   }

//   let current = prev.next;

//   // reverse node between left and right
//     for (let i = 0; i < right - left; i++) {
//       let temp = current.next;
//       current.next = temp.next;
//       temp.next = prev.next;
//       prev.next = temp;
//     }
//     return dummy.next;
//   }
// // Time & Space Complexity
// // Time Complexity : O(n)
// // Space Complexity : O(1)

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.appendNode(6);
// list.traverse();

// // reverse List in Position

// let result = reverseListInPosition(list.head, 2, 5);
// // print list in array forms
// let arr = [];
// let current = list.head;
// while(current !==  null){
//   arr.push(current.value);
//   current = current.next;
// }
// console.log('Reverse List :',arr.join(' -> '));

// Problem11 : Reverse List in K-Group..............................

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   appendNode(data) {
//     const node = { value: data, next: null };

//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//     return;
//   }

//   traverse() {
//     let current = this.head;
//     let result = [];

//     while (current !== null) {
//       result.push(current.value);
//       current = current.next;
//     }

//     console.log(result.join(" -> "));
//   }
// }
// // reverse list in k group problem
// function reverseKGroup(head, k) {
//   if (!head || k === 1) return head;

//   let dummy = { val: 0, next: head };
//   let prevGroupEnd = dummy;

//   while (true) {

//     let kth = prevGroupEnd;

//     for (let i = 0; i < k; i++) {
//       kth = kth.next;
//       if (!kth) return dummy.next;
//     }

//     let groupStart = prevGroupEnd.next;
//     let nextGroupStart = kth.next;

//     let prev = nextGroupStart;
//     let current = groupStart;

//     while (current !== nextGroupStart) {
//       let temp = current.next;
//       current.next = prev;
//       prev = current;
//       current = temp;
//     }

//     prevGroupEnd.next = kth;
//     prevGroupEnd = groupStart;
//   }
// }
// // Time & Space Complexity
// // Time Complexity : O(n)
// // Space Complexity : O(1)

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.appendNode(6);
// list.traverse();

// // reverse k group list

// let result = reverseKGroup(list.head, 2);
// let arr = [];
// let current = result;
// while (current !== null) {
//   arr.push(current.value);
//   current = current.next;
// }
// console.log("Reverse K Group :", arr.join(" -> "));
