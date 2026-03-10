// Here i make a lot's of Operations  List related ...

function linkedList() {
  return {
    head: null,
    tail: null,
    size: 0,

    // appendNode
    appendNode: function (data) {
      let newNode = { value: data, next: null };
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
      return;
    },
    // traverse a List
    traversing: function () {
      let result = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        result.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return result;
    },

    // Reverse a List
    // reverseList() {
    //   if (!this.head) return null;

    //   let prev = null;
    //   let current = this.head;
    //   let next = null;

    //   // Swap head and tail pointers

    //   while (current !== null) {
    //     next = current.next;
    //     current.next = prev;
    //     prev = current;
    //     current = next;
    //   }

    //   this.tail = this.head;
    //   this.head = prev;
    // },

    // reverse a k nodes in List

    // reverseKNodes(k) {
    //   // edge cases
    //   if (k <= 1 || !this.head) return this.head;

    //   let prev = null;
    //   let current = this.head;
    //   let next = null;
    //   let count = 0;

    //   // store a original head to reconnect later
    //   let originalHead = this.head;

    //   while (count < k && current !== null) {
    //     next = current.next;
    //     current.next = prev;
    //     prev = current;
    //     current = next;
    //     count++;
    //   }

    //   // connect a rest node
    //   originalHead.next = current;
    //   this.head = prev;

    //   // if k was the entire list
    //   if (current === null) {
    //     this.tail = originalHead;
    //   }
    // },

    // reverse a node with k groups

    // reverseKGroup: function (k) {
    //   if (!this.head || k === 1) return this.head;

    //   let dummy = { value: -1, next: this.head };
    //   let prevGroup = dummy;

    //   while (true) {
    //     // 1. find kth node
    //     let kth = prevGroup;

    //     for (let i = 0; i < k && kth !== null; i++) {
    //       kth = kth.next;
    //     }

    //     if (kth === null) break;

    //     let groupNext = kth.next;

    //     // 2. reverse group
    //     let prev = groupNext;
    //     let current = prevGroup.next;

    //     while (current !== groupNext) {
    //       let temp = current.next;
    //       current.next = prev;
    //       prev = current;
    //       current = temp;
    //     }

    //     // 3. reconnect
    //     let temp = prevGroup.next;
    //     prevGroup.next = kth;
    //     prevGroup = temp;
    //   }

    //   this.head = dummy.next;
    //   // update tail
    //   let t = this.head;
    //   while (t.next !== null) {
    //     t = t.next;
    //   }
    //   this.tail = t;
    // },

    // find a middle node of any List
    // findMiddle() {
    //   let middle = Math.floor(this.size / 2);
    //   let current = this.head;
    //   for (let i = 0; i < middle; i++) {
    //     current = current.next;
    //   }
    //   return current.value;
    // },

    // find a middle node in List (optimal) - slow & fast pointer technique
    // findMiddle() {
    //   let slow = this.head;
    //   let fast = this.head;
    //   while (fast !== null && fast.next !== null) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //   }
    //   return slow.value;
    // },

    // find a cycle node of any List
    // findCycle(index) {
    //   // first we create a cycle (tail points to again any node in List)
    //   // edge cases
    //   if (index < 0 || index >= this.size) {
    //     return "Invalid Index";
    //   }
    //   let currentNode = this.head;
    //   let count = 0;
    //   while (count < index) {
    //     currentNode = currentNode.next;
    //     count++;
    //   }
    //   this.tail.next = currentNode;

    //   // find a cycle
    //   let slow = this.head;
    //   let fast = this.head;
    //   let hasCycle = false;
    //   while (fast !== null && fast.next !== null) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if (slow === fast) {
    //       hasCycle = true;
    //       break;
    //     }
    //   }
    //   // reset slow
    //   slow = this.head;

    //   while (slow !== fast) {
    //     slow = slow.next;
    //     prev = fast;
    //     fast = fast.next;
    //   }
    //   return slow.value;
    //   // return fast.value; (both are same place)
    // },

    // remove a cycle in any List
    // removeCycleInList(index) {
    //   let current = this.head;
    //   let count = 0;
    //   while (count < index) {
    //     current = current.next;
    //     count++;
    //   }
    //   this.tail.next = current;

    //   let slow = this.head;
    //   let fast = this.head;
    //   let hasCycle = false;

    //   while (fast !== null && fast.next !== null) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if (slow === fast) {
    //       hasCycle = true;
    //       break;
    //     }
    //   }

    //   slow = this.head;

    //   while (slow !== fast) {
    //     slow = slow.next;
    //     fast = fast.next;
    //   }
    //   // remove a cycle

    //   let prev = fast;
    //   // find a point where a meeting point address ( who point 30 in this case )
    //   while (prev.next !== slow) {
    //     prev = prev.next;
    //   }
    //   prev.next = null;
    //   return slow.value;
    // },

    // remove a Kth node from end in List
    // removeKthNode(k) {
    //   // edge cases...
    //   if (k < 0 || k >= this.size) {
    //     return "Invalid Index";
    //   }

    //   // create a dummy node
    //   let dummy = { value: -1, next: this.head };
    //   let firstPtr = dummy;
    //   let secondPtr = dummy;

    //   // move second ptr to k times
    //   for (let i = 0; i < k; i++) {
    //     secondPtr = secondPtr.next;
    //     if (secondPtr === null) return this.head;
    //   }

    //   // move pointer to-gether
    //   while (secondPtr.next !== null) {
    //     firstPtr = firstPtr.next;
    //     secondPtr = secondPtr.next;
    //   }
    //   if (firstPtr !== null) {
    //     firstPtr.next = firstPtr.next.next;
    //   }

    //   this.size--;
    // },
  };
}

let list = new linkedList();
list.appendNode(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);
list.appendNode(50);
list.appendNode(60);
// traverse a List
console.log(list.traversing());

// reverse a List
// list.reverseList();
// console.log(`After reverse a List ${list.traversing()}`);

// reverse k nodes
// list.reverseKNodes(2);
// console.log(`After reverse K nodes in list : ${list.traversing()}`);

// reverse with k group node (reverse in chunk)
// list.reverseKGroup(2);
// console.log(list.traversing());

// middle node of any List -
// console.log(list.findMiddle());

// find a Cycle in List
// console.log(list.findCycle(3));

// remove cycle in List
// console.log(list.removeCycleInList(2));

// remove kth node from end in List
// list.removeKthNode(6);
// console.log(`after remove a Kth Node form end : ${list.traversing()}`);

// console.log(list);
// console.log(`Current Size : ${list.size}`);
