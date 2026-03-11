// Problem1  : find a intersection of any LinkedList ?.....

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendNode(value) {
    const node = { value: value, next: null };

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
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

  // find intersection in Lists
  function intersectionList(headA, headB) {
    let PA = headA;
    let PB = headB;
    while (PA !== PB) {
      PA = PA === null ? headB : PA.next;
      PB = PB === null ? headA : PB.next;
    }
    return PA;
  }

// make list 1
let list1 = new LinkedList();
let list2 = new LinkedList();

list1.appendNode(2);
list1.appendNode(3);
list1.appendNode(5);
list1.appendNode(8);
list1.appendNode(9);

// make list2
list2.appendNode(0);
list2.appendNode(4);
list2.appendNode(6);

// create intersection in both list
let intersectionNode = list1.head.next.next;
list2.tail.next = intersectionNode;

// prints Lists
console.log("List 1");
list1.traverse();

console.log("List 2");
list2.traverse();

// find intersection
let result = intersectionList(list1.head, list2.head);

if (result) {
  console.log("Intersection Node :", result.value);
} else {
  console.log("Intersection not found");
}
// list1.intersectionList();
// console.log(result);

// Problem2:  merge a two k sorted List .....

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendNode(value) {
    const node = { value: value, next: null };

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
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

// merge a both List

function mergeList(list1, list2) {
  let dummy = { value: -1, next: null };
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  // remaining node
  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
}

let list1 = new LinkedList();
let list2 = new LinkedList();

// create a list1
list1.appendNode(2);
list1.appendNode(4);
list1.appendNode(6);

// create a list2
list2.appendNode(1);
list2.appendNode(3);
list2.appendNode(5);

console.log("List 1");
list1.traverse();
console.log("List 2");
list2.traverse();

let result = mergeList(list1.head, list2.head);
// print list in array forms...
let current = result;
let arr = [];
while(current !== null){
  arr.push(current.value);
  current = current.next;
}

console.log('Merged List :',arr.join('->'));

// 3. rotate list in linkedList.....

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

// 
function rotateList(head , k){
   if(head === null || head.next === null || k === 0){
       return head;
   }
   // find length
   let length = 1;
   let tail = head;
   
   while(tail.next !== null){
       tail = tail.next;
       length++;
   }
   // handle k > length
   k = k % length;
   if(k === 0){
       return head;
   }
   
  make list circular 
    tail.next = head;
    
    // find new tail
    let stepsToNewNode = length - k - 1;
    let newTail = head;
    
    for(let i = 0; i < stepsToNewNode; i++){
        newTail = newTail.next;
    }
    
    // Break the circle
    let newHead = newTail.next;
    newTail.next = null;
    
    return newHead;
}

let list = new LinkedList();

list.appendNode(2);
list.appendNode(4);
list.appendNode(6);
list.appendNode(1);
list.appendNode(3);
list.appendNode(5);
console.log(`List Size : ${list.size}`);
list.traverse();

let k = 4;
let result = rotateList(list.head , k);
let current = result;
let arr = [];
while(current !== null){
    arr.push(current.value);
    current = current.next;
}
console.log('Rotate List : ',arr.join(' -> '));