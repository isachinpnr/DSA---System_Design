// Linked list is a linear data structure used to store a collection of elements. Linked used a nodes
// that are connected
// via pointers , each node contained :
// 1. Data : The actual value store in node
// 2. Next : A reference (or link) to the next node in the sequence.
// The first node is called head , and the last node typically point to null (or none) , indicating the end of
// the list.

// class List {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

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

//   traversing() {
//     let currentNode = this.head;
//     let result = [];

//     while(currentNode !== null) {
//         result.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return result;
//   }

// }

// let list = new List();
// list.appendNode(500);
// list.appendNode(600);
// list.appendNode(700);
// list.appendNode(800);
// list.appendNode(900);
// // traverse a linkedList.....
// list.traversing();
// console.log(list);
// console.log(list.traversing());

// functional based approach implementation of an Linked List

// let linkedList = () => {
//   return {
//     head: null,
//     tail: null,
//     size: 0,

//     // add a node to one to another functions.....
//     addNode: function (data) {
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
//       traversing : function(){
//         let currentNode = this.head;
//         let result = [];
//         while(currentNode !== null){
//             result.push(currentNode.value);
//           currentNode = currentNode.next;
//         }
//         return result;
//       }
//   };
// };

// let list = linkedList();
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);
// list.addNode(4);
// list.addNode(5);
// list.traversing();
// console.log(list.traversing());
// console.log(list);

// CRUD operations in LinkedList
// 1. Delete node in linkedList.....

// functional based approach in linkedListr ( traverse , remove node);

// function LinkedList(){
//     return{
//         head : null,
//         tail : null,
//         size : 0,
//         // add node in linkedlist
//         addNode : function (data){
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
//         // traverse node in linkedlist
//         traversing : function(){
//             let currentNode = this.head;
//             let result = [];
//             while(currentNode !== null){
//                 result.push(currentNode.value);
//                 currentNode = currentNode.next;
//             }
//             return result;
//         },
//         // remove node in linkedlist
//         removeNode : function(index){
//             if(!this.head || index < 1 || index > this.size){
//                 return 'invailed index';
//             }
//             if(index === 1){
//                 this.head =  this.head.next;

//             if(this.size === 1){
//                 this.tail = null;
//             }
//             this.size--;
//             return;
//         }
//             let count = 1;
//             let current = this.head;
//             while(count < index - 1){
//                 current = current.next;
//                 count++;
//             }
//             let nodeToDelete = current.next;
//             current.next = nodeToDelete.next;

//             // if deleting last node
//             if(nodeToDelete === this.tail){
//                 this.tail = current;
//             }
//             this.size--;
//         }
//     }
// }

// let list = LinkedList();
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);
// list.addNode(4);
// list.addNode(5);
// // compute size of linkedlist
// console.log('size of array :',list.size)
// // Traversing array
// console.log('Before : ', list.traversing());
// // remove element in linkelist
// list.removeNode(3);
// console.log('After :', list.traversing());
// // console.log(list);

// Functional based fully linkedlist...
// - CRUD

//  function linkedList(){
//     return{
//         head : null,
//         tail : null,
//         size : 0,
//         // add node in linkedlist
//         appendNode : function(data){
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
//         // traverse a linkedlist
//         traversing : function(){
//             let currentNode = this.head;
//             let result = [];
//             while(currentNode !== null){
//                 result.push(currentNode.value);
//                 currentNode = currentNode.next;
//             }
//             return result;
//         },
//         // remove node in linkedlist
//         removeNode : function(index){
//             // edge cases
//             if(index < 0 || index >= this.size){
//                 return 'Invalid Index';
//             }
//             if(index === 0){
//                 let removeValue = this.head.value;
//                 this.head = this.head.next;
//                if(this.size === 1){
//                    this.tail = null;
//                }
//                this.size--;
//                return removeValue;
//             }
//             let count = 0;
//             let currentNode = this.head;
//             while(count < index -1){
//                 currentNode = currentNode.next;
//                 count++;
//             }
//             removeValue = currentNode.next.value;
//             currentNode.next = currentNode.next.next;
//             this.size--;
//             return removeValue;
//         },
//         // insert node in linkedList
//         insertNode : function(index , value){
//             let newNode = {value : value , next : null};
//             // edge cases
//             if(index < 0 || index >= this.size){
//                 return 'Invalid Index';
//             }
//             if(index === 0){
//                 newNode.next = this.head;
//                 this.head = newNode;
//                 if(this.size === 0){
//                     this.tail = newNode;
//                 }
//                 this.size++;
//                 return;
//             }
//             let count = 0;
//             let currentNode = this.head;
//             while(count < index - 1){
//                 currentNode = currentNode.next;
//                 count++;
//             }
//             newNode.next = currentNode.next;
//             currentNode.next = newNode;
//             this.size++;
//         },
//         // search node in linkedlist
// //         // 1. search by value
//         searchNode : function(val){
//             let currentNode = this.head;
//             let position = 0;
//             while(currentNode !== null){
//                 if(currentNode.value === val){
//                     return position;
//                 }
//                 currentNode = currentNode.next;
//                 position++;
//             }
//             return -1;
//         }

//     }
// }

// let list = new linkedList();

// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);

// console.log(list);




//         // search by index;
//         // searchNode : function(index){
//         //     if(index < 0 || index >= this.size){
//         //         return 'invalid index';
//         //     }
//         //     let currentNode = this.head;
//         //     let count = 0;
//         //     while(count < index){
//         //         currentNode = currentNode.next;
//         //         count++;
//         //     }
//         //     return currentNode.value;
//         }
//     }
// }



////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?????????????????????????????/

// reverse a linkedList

// function linkedList() {
//   return {
//     head: null,
//     tail: null,
//     size: 0,
//     // add node in linkedlist
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
//     // traverse a linkedlist
//     traversing: function () {
//       let currentNode = this.head;
//       let result = [];
//       while (currentNode !== null) {
//         result.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return result;
//     },
//     // reverse a linkedList
//     reverseLinkedList: function () {
//       let prev = null;
//       let current = this.head;
//       let next = null;

//       while (current !== null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//       }
//       this.head = this.tail
//       return list.traversing();
//     }
//   }
// }

// let list = new linkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// // traverse a LinkedList
// // console.log(list.traversing());
// list.reverseLinkedList();
// console.log(list.traversing());

// console.log(list);

// Prefix reverse in List

// function linkedList() {
//   return {
//     head: null,
//     tail: null,
//     size: 0,
//     // add node in linkedlist
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
//     // traverse a linkedlist
//     traversing: function () {
//       let currentNode = this.head;
//       let result = [];
//       while (currentNode !== null) {
//         result.push(currentNode.value);
//         currentNode = currentNode.next;
//       }
//       return result;
//     },
//     // reverse k nodes in List
//     reverseNode : function(k){
//         // edge cases 
//         if(k <= 1 || !this.head){
//             return this.head;
//         }
//         if(k >= this.size){
//             k = this.size
//         }

//         let prev = null;
//         let current = this.head;
//         let next = null;
//         let count = 0;

//         let originalHead = this.head;

//         while(count < k && current !== null){
//                 next = current.next;
//                 current.next = prev;
//                 prev = current;
//                 current = next;
//                 count++;
//         }
//           originalHead.next = current;
//           this.head = prev;
//           return this.head;
//     }
//  }

// }

// let list = new linkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// // traverse a LinkedList
// console.log(list.traversing());
// list.reverseNode(5);
// console.log(list.traversing());
// // reverse k node in List

