// 📚 Linked List - Complete Guide for Your Notes
// 📖 Standard Definition
// A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, elements are not stored in contiguous memory locations.

// 🎯 Key Components
// Node Structure:
// java
// class Node {
//     int data;      // Data/value stored in node
//     Node next;     // Reference to next node

//     Node(int data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// Types of Linked Lists:
// Singly Linked List - Each node points to next node only

// Doubly Linked List - Nodes point to both next and previous nodes

// Circular Linked List - Last node points back to first node

// ⚡ Characteristics
// Advantages:
// ✅ Dynamic size - Can grow/shrink at runtime

// ✅ Efficient insertions/deletions - O(1) at beginning

// ✅ No memory wastage - Memory allocated as needed

// ✅ Implementation of stacks, queues, graphs possible

// Disadvantages:
// ❌ No random access - Must traverse from head (O(n) access)

// ❌ Extra memory - Stores pointer/reference with each node

// ❌ Not cache-friendly - Nodes scattered in memory

// ❌ Reverse traversal difficult (except doubly LL)

// 📊 Time Complexities
// Operation	Singly LL	Doubly LL
// Access	O(n)	O(n)
// Search	O(n)	O(n)
// Insert at beginning	O(1)	O(1)
// Insert at end	O(n)	O(1) with tail
// Delete at beginning	O(1)	O(1)
// Delete at end	O(n)	O(1) with tail

// CRUD (create , delete , rename ,update ) operations in LinkedList

class LinkedList {
  constructor() {
    this.head = null; // initialize head value
    this.tail = null; // initialize tail value
    this.size = null; // initialize size
  }
  // Append a New Node to List
  appendNode(data) {
    let newNode = { value: data, next: null }; // create a new node
    // if head is null , empty , or invalid
    if (!this.head) {
      // initial value feed
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment size and return
    this.size++;
    return;
  }

  // traverse a List
  traversing() {
    let result = []; // store here
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  // insert a node in beginning of an List
  insertFirst(data) {
    let dummy = { value: -1, next: this.head };
    let newNode = { value: data, next: null };
    newNode.next = dummy.next;
    dummy.next = newNode;
    this.head = dummy.next;
    this.size++;

    return this.head;
  }

  // insert node in last of an List
  insertLast(data) {
    let newNode = { value: data, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  // insert a Node in any Position
  insertNode(index, val) {
    // create a node
    let newNode = { value: val, next: null };
    // edge cases...
    if (index < 0 || index > this.size) {
      return "Invalid Index";
    }

    // handle empty  list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    // insert at beginning
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    // insert in middle or end
    let currentNode = this.head;
    let count = 0;

    while (count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    // update tail
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.size++;
  }

  // remove node in first position (head removal)
  removeHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.size--;
  }

  // remove node in Last Position (remove Tail)
  removeTail() {
    // you can't remove a Last Node (Tail) in directly you must traverse a Entire List First
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    this.size--;
  }

  // remove value in any position (index based)
  removeNodeByIndex(index) {
    // edge Cases...
    if (index < 0 || index >= this.size) {
      return "Invalid Index";
    }
    // if you want to return a remove node value or store it
    let removeNode;

    if (index === 0) {
      removeNode = this.head.value;
      this.head = this.head.next;

      // if List Become Empty
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return removeNode.value;
    }

    let currentNode = this.head;
    let count = 0;
    while (count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }
    // point a address to an variable(removeNode)
    removeNode = currentNode.next;
    currentNode.next = removeNode.next;
    this.size--; // decrease size

    // update tail
    if (currentNode.next === null) {
      this.tail = currentNode;
    }
  }
  
  // remove node in value based
  removeNodeByValue(val) {
    // edges cases
    // 1. empty List
    if (!this.head) {
      console.log("List is Empty !");
      return null;
    }
    // if value at List Head
    if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.value === val) {
        currentNode.next = currentNode.next.next;
        this.size--;
      } else {
        currentNode = currentNode.next;
      }
    }
    // update tail position
    if (currentNode.next === null) {
      this.tail = currentNode;
    }
  }

  // Search a Node in List (value based) - return index
  searchNodeByValue(val) {
    // edge cases
    // if have in head
    if (!this.head) {
      return {
        found: false,
        index: null,
        message: "List is Empty",
      };
    }

    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === val) {
        return {
          found: true,
          index: index,
          value: currentNode.value,
        };
      }
      currentNode = currentNode.next;
      index++;
    }
    return {
      Found: false,
      AtIndex: null,
      error: `value${value} not found in list`,
    };
  }

  // Search a node in List (Index based) - return value;
  searchNodeByIndex(index) {
    // edge cases
    if (index < 0 || index >= this.size) {
      return "Invalid Index";
    }
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    console.log(`Found Value ${currentNode.value} at Index ${index}`);
    return currentNode.value;
  }
}

// create (list) obj to call a class (obj call a method)
let list = new LinkedList();
// insert a value or append a node
list.appendNode(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);
list.appendNode(50);

// print a traverse List
console.log(`Initial List :  ${list.traversing()}`);
// console.log(list.traversing());

// insert Node in first(head)
list.insertFirst(9);
list.insertFirst(8);
list.insertFirst(7);
console.log(`After Append a node in Head : ${list.traversing()}`);

// insert Node in Last(tail)
list.insertLast(51);
list.insertLast(52);
list.insertLast(53);
console.log(`after append a node in tail : ${list.traversing()}`);

// insert node in anywhere ( index based)
list.insertNode(10, 555);
console.log(`After Insert a Value in List : ${list.traversing()}`);

// remove Head in List
list.removeHead();
list.removeHead();
console.log(`after remove a Head : ${list.traversing()}`);

// remove Tail in List
list.removeTail();
list.removeTail();
// list.removeTail();
console.log(`after remove a Tail : ${list.traversing()}`);

// remove node in Any Position (index Based)
list.removeNodeByIndex(6);
console.log(`after remove a node by index : ${list.traversing()}`);

// remove a node in List by Value (Value Based);
// list.removeNodeByValue(50);
// list.removeNodeByValue(40);
list.removeNodeByValue(9);
// list.removeNodeByValue(10);
console.log(`After remove a node by value : ${list.traversing()}`);

// search a node in List (index based)
list.searchNodeByIndex(2);

// search a node in List (Value Based)
console.log(list.searchNodeByValue(30));

// print entire List with Address Points
console.log(list);
// calculate size
console.log(`Current Size : ${list.size}`);
