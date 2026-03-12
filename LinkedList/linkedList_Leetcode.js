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

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  appendNode(data) {
    const node = { value: data, next: null };

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return;
  }

  traverse() {
    let current = this.head;
    let result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// delete node function
function deleteNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
}

let list = new LinkedList();
list.appendNode(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.appendNode(5);
console.log("Before Delete");
list.traverse();
// get node
let node = list.head.next.next;

deleteNode(node);

console.log("After Delete");
list.traverse();
