// // Implementation of LinkedList (again);

// class linkedList{
//     constructor(){
//         this.head = null,
//         this.tail = null,
//         this.size = 0;
//     }
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
//     // traversing a linkedlist
//     traversing(){
//         let currentNode = this.head;
//         let result = [];
//         while(currentNode){
//             result.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return result;
//     }
//     // insert a node in linkedlist
//     insertNode(index , value){
//          let newNode = {value : value , next : null};
//         // testcases
//         if( index < 0 || index > this.size){
//             'Invalid Index';
//         }
//         if(index === 0){
//             newNode.next = this.head;
//             this.head = newNode;
//             this.size++;
//             return;
//         }
//       let currentNode = this.head;
//         let count = 0;
//         while(count < index - 1){
//              currentNode = currentNode.next;
//              count++;
//         }
//         newNode.next = currentNode.next;
//         currentNode.next = newNode;
//         this.size++;
//     }
//     // remove a node in linkedlist
//   removeNode(index){
//         if(index < 0 || index >= this.size){
//             return 'Invalid Data';
//         }
//         if(index === 0){
//             let removeNode = this.head;
//             this.head = this.head.next;
            
//             if(this.size === 1){
//                 this.tail = null;
//             }
//             this.size--;
//             // conosole.log(`Removed Element : ${removeNode.value}`);
//             return removeNode.value;
//         }
        
//         let currentNode = this.head;
//         let count = 0;
//         while(count < index -1){
//             currentNode = currentNode.next;
//             count++;
//         }
//       let removeNode = currentNode.next;
//         currentNode.next = currentNode.next.next;
//         // console.log(`Removed Element :',${removeNode.value}`);
//       this.size--;
//       return removeNode.value;
//     }
//     // search node in linkedList
//     searchNode(index){
//         // edges cases...
//         if(index < 0 || index > this.size){
//             return 'Invalid value';
//         }
//         // if(index === 1) return this.head;
//         // if(index === this.size - 1) return this.tail;
        
//         let current = this.head;
//          let count = 0;
         
//         while(count < index){
//             current = current.next;
//             count++;
//         }
//         return current.value;
//     }
    
// }
// let list = new linkedList();
// list.appendNode(10);
// list.appendNode(20);
// list.appendNode(30);
// list.appendNode(40);
// list.appendNode(50);
// // traverse a linkedlist
// // console.log(list.traversing());
// // inset a node in linkedList
// // list.insertNode(1,555);
// // console.log(list.traversing());
// // remove a node in linkedlist
// // list.removeNode(4);
// // list.removeNode(3);
// // console.log(list.removeNode());
// console.log(list.traversing());
// // search node in linkedList
// console.log(list.searchNode(3));
// // console.log(list);


// Functional based CRUD Operations in LinkedList...

// function linkedList(){
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
//         // 1. search by value
//         // searchNode : function(val){
//         //     let currentNode = this.head;
//         //     let position = 0;
//         //     while(currentNode !== null){
//         //         if(currentNode.value === val){
//         //             return position;
//         //         }
//         //         currentNode = currentNode.next;
//         //         position++;
//         //     }
//         //     return -1;
//         // }
        
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


// 27 - feb - online js compiler ( programmiez code )- 
// // Leetcode Problem 203 : Remove Linked List Element.....

// function linkedList(){
//     return {
//         head : null,
//         tail : null,
//         size : 0,
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
//         traverse : function(){
//             let currentNode = this.head;
//             let result = [];
//             while(currentNode !== null){
//                 result.push(currentNode.value);
//                 currentNode = currentNode.next;
//             }
//             return result;
//         },
//         // remove node at given value based.....
//         removeByValue : function(value){
            
//             while(this.head !== null && this.head.value === value){
//                 this.head = this.head.next;
//             }
            
//             // let count = 0;
//             let currentNode = this.head;
//             while(currentNode !== null && currentNode.next !== null){
//                 if(currentNode.next.value === value){
//                     currentNode.next = currentNode.next.next;
//                 }else{
//                     currentNode= currentNode.next;
//                 }
//             }
            
//             let temp = this.head;
//             while(temp !== null && temp.next !== null){
//                 temp = temp.next;
//             }
//             this.tail = temp;
//             return this.head;
//         }
        
//     }
// }

// let list = new linkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(6);
// list.appendNode(3);
// list.appendNode(4);
// list.appendNode(5);
// list.appendNode(6);
// // traverse a linkedlist
// console.log(list.traverse());
// // remove node by value based 
// list.removeByValue(6);
// console.log(list.traverse());
// // console.log(list.removeByValue());
// // console.log(list);


// 28-feb (online js compliler remaining code)

// LinkedList related all the operations in here

function linkedList(){
    return{
        head : null,
        tail : null,
        size : 0,
        appendNode(data){
            let newNode = {value : data , next : null};
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
                this.size++;
                return;
            }
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
            return;
        },
        traverse : function(){
            let currentNode = this.head;
            let result = [];
            while(currentNode !== null){
                result.push(currentNode.value);
                currentNode = currentNode.next;
            }
              return result;
        },
        // removed value in linkedlist
        // removeValue(data){
        //     // edge cases
        //     while(this.head !== null & this.head.value === data){
        //         this.head = this.head.next;
        //     }
        //     if(this.head === null){
        //         this.tail = null;
        //         return;
        //     }
        //     let current =  this.head;
        //     while(current.next !== null){
        //         if(current.next.value === data){
        //             current.next = current.next.next;
        //         }else{
        //             current = current.next;
        //         }
        //     }
        //     // update tail
        //     current = this.head;
        //     while(current && current.next){
        //         current = current.next;
        //     }
        //     this.tail = current;
        // },
        // return a middle node of any LinkedList
        // returnMiddle : function(){
        //     let middle = Math.floor(this.size / 2);
        //     let current = this.head;
        //     for(let i = 0; i < middle; i++){
        //         current = current.next;
        //     }
        //     return current.value;
        // }
        // reverse a linkedlist...
        // reverseLinkedList : function(){
        //      let prev = null;
        //      let current = this.head;
        //      let next = null;
             
             
        //      while(current !== null){
        //          next = current.next; //save the position
        //          current.next = prev; // make connection backward
        //          prev = current; // move prev to current
        //          current = next; // move curret to next
        //      }
        //      this.head = this.tail;
        //      return list.traverse();
        // },
    //
    }
}

let list = new linkedList();
list.appendNode(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(4);
list.appendNode(5);
list.appendNode(6);
// list.appendNode(6);
// list.appendNode(6);
// traverse linkedlist
console.log(`Before Removed Value : ${list.traverse()}`);
// remove value in linkedList
// list.removeValue(6);
// after remove value traverse linkedlist
// console.log(`after removed value : ${list.traverse()}`);
// reverse a linkedList
console.log(list.reverseLinkedList());
// console.log(list.returnMiddle());
// console.log(list);



2 mar-2025 code : // LinkList based all the operations in here

function linkedList(){
    return {
        head : null,
        tail : null,
        size : 0,
        
        // create a new Node with in a linkedList
        appendNode : function(data){
            let newNode = {value : data , next : null};
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
                this.size++;
                return;
            }
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        },
        
        // traverse a linkedList
        traversing : function(){
            let currentNode = this.head;
            let result = [];
            while(currentNode !== null){
                result.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return result;
        },
        
        // insert a new node in linedList
        // insertNode : function(index , data){
        //     let newNode = {value : data , next : null};
        //     // test cases
        //     if(index < 0 || index >= this.size){
        //         return 'Invalid Index';
        //     }
        //     if(index === 0){
        //         newNode.next = this.head;
        //         this.head = newNode;
        //         if(this.size === 0){
        //             this.tail = newNode;
        //         }
        //         this.size++;
        //         return;
        //     }
            
        //     let count = 0;
        //     let currentNode = this.head;
        //     while(count < index - 1){
        //         currentNode = currentNode.next;
        //         count++;
        //     }
        //     newNode.next = currentNode.next;
        //     currentNode.next = newNode;
        //     this.size++;
        // },
        // remove a node in linkedList (by index based)
        // removeNode : function(index){
            
        //     // test cases .....
        //     if(index < 0 || index >= this.size){
        //         return 'Invalid Index';
        //     }
        //     if(index === 0){
        //         let removeValue = this.head.value;
        //         this.head = this.head.next;
        //         if(this.size === 1){
        //             this.tail = null;
        //         }
        //         this.size--;
        //         return removeValue;
        //     }
        //      let currentNode = this.head;
        //     let count = 0;
        //     while(count < index -1){
        //         currentNode = currentNode.next;
        //         count++;
        //     }
        //     removeValue = currentNode.next;
        //     currentNode.next = removeValue.next;
        //     this.size--;
        //     return removeValue.value;
        // },
        
        // remove a node in linkedList(value based)
        // removeNode : function(data){
        //     while(this.head !== null && this.head.value === data){
        //         this.head = this.head.next;
        //         this.size--;
        //     }
        //     if(this.head === null){
        //         this.tail = null;
        //         return;
        //     }
        //     let currentNode = this.head;
        //     while(currentNode.next !== null){
        //         if(currentNode.next.value === data){
        //             currentNode.next = currentNode.next.next;
        //             this.size--;
        //         }else{
        //             currentNode = currentNode.next;
        //         }
        //     }
        //     // updata tail
        //     this.tail = currentNode;
        // }
        
        // search a node by indexed based
    //     searchNode : function(index){
    //         // test cases
    //         if(index < 0 || index >=this.size){
    //             return 'Invalid Index';
    //         }

    //         let currentNode = this.head;
    //         let position = 0;
    //         while(position < index){
    //             currentNode = currentNode.next;
    //             position++;
    //         }
    //         return currentNode.value;
    //         // return traversing();
    //   }
    
    // Search a node by value based 
    // searchNode : function(data){
    //     let currentNode = this.head;
    //     let index = 0;
    //     while(currentNode !== null){
    //         if(currentNode.value === data){
    //             return index;
    //         }
    //         currentNode = currentNode.next;
    //         index++;
    //     }
    //     return 'Not Found';
    // }
    
    // reverse a linkedList
    // reverseLinkedList : function(){
    //     let prev = null;
    //     let current = this.head;
    //     let next = null;
        
    //     while(current !== null){
    //         next = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = next;
    //     }
    //     this.head = this.tail;
    //     // return list.traversing();
    // }
    
    // find a middle node of any LinkedList
    // findMiddle : function(){
    //     let middle = Math.floor(this.size / 2);
    //     let currentNode = this.head;
    //     for(let i = 0; i < middle; i++){
    //         currentNode = currentNode.next;
    //     }
    //     return currentNode.value;
    // }
    
    // find a middle with slow and fast pointer concept 
    // findMiddle : function(){
    //     let slow = this.head;
    //     let fast = this.head;
        
    //     while(fast !== null && fast.next !== null){
    //         slow = slow.next;
    //         fast = fast.next.next;
    //     }
    //     return slow.value;
    // }
    
    // find a linkedList has a cycle or not then find a point where they meet
    cycleList :function(position){
        if(position < 0 || position >= this.size) return;
        let current = this.head;
        let index = 0;
        while(index < position){
            current = current.next;
            index++;
        }
        this.tail.next = current;
        
        // then check a point where they actually meet to each other
        let slow = this.head;
        let fast = this.head;
        let isCycle = false;
        
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast){
                isCycle = true;
                break;
            }
        }
         if(!isCycle) return false;
         
        slow = this.head;
        // let prev = null;
        
        while(slow !== fast){
            slow = slow.next;
            // prev = fast;
            fast = fast.next;
        }
        prev.next = null;
        return slow.value;
    },
   
   
  }
}


let list = new linkedList();
list.appendNode(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);
list.appendNode(50);
list.appendNode(60);
// list.appendNode(70);

// traversing a linkedList
console.log(list.traversing());

// // insert a newnode in linkedList -
// list.insertNode(1,45);
// console.log(list.traversing());

// remove a node in linkedList(by index)
// console.log(`Value of removedNode :${list.removeNode(0)}`);
// console.log(list.traversing());

// remove a node in linkeList (by value)
// list.removeNode(5);
// console.log(list.traversing());

// search a node by indexed based
// console.log(`value is : ${list.searchNode(2)}`);

// search a node by value based
// console.log(`Value at Indexed : ${list.searchNode(40)}`);

// reverse a linkedlist
// list.reverseLinkedList();
// console.log(list.traversing());

// find a middle node;
// console.log(list.findMiddle());

// find middle node with slow and fast pointer techniques
// console.log(list.findMiddle());

// create a cycle linkedList
console.log(list.cycleList(3));

// check a list is cycle?
// console.log(list.isCycleList());










console.log(`current Size : ${list.size}`);
// console.log(list);





// 7th of march 2026 - @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// // LinkedList various Opetations implementations in here 
// function linkedList(){
//     return {
//         head : null,
//         tail : null,
//         size : 0,
//         // appendNode in List
//         appendNode : function(data){
//             let newNode = {value : data , next : null};
//             if(!this.head){
//                 this.head = newNode;
//                 this.tail = newNode;
//             }else{
//                 this.tail.next = newNode;
//                 this.tail = newNode;
//             }
//             this.size++;
//             return;
//         },
//         // traversing a List
//         traversing : function(){
//             let currentNode = this.head;
//             let result = [];
//             while(currentNode !== null){
//                 result.push(currentNode.value);
//                 currentNode = currentNode.next;
//             }
//             return result;
//         },
        
        // 1. reverse a List
        // reverseList : function(){
        //     let current = this.head;
        //     let next = null;
        //     let prev = null;
        //     while(current !== null){
        //         next = current.next;
        //         current.next = prev;
        //         prev = current;
        //         current = next;
        //     }
        //     this.head = prev;
        // }
        
        // 2. merge two sorted List
        // mergeTwoList : function(list1 , list2){
        //     let dummy = {value : -1 , next : null};
        //     let tail = dummy;
            
        //     while(list1 !== null && list2 !== null){
        //         if(list1.value < list2.value){
        //             tail.next = list1;
        //             list1 = list1.next;
        //         }else{
        //             tail.next = list2;
        //             list2 = list2.next;
        //         }
        //         tail = tail.next;
        //     }
        //     if(list1 !== null){
        //         tail.next = list1;
        //     }
        //     if(list2 !== null){
        //         tail.next = list2;
        //     }
        //     return dummy.next;
        // }
        
        // 3. linked list cycle
        // linkedListCycle : function(index){
        //     if(index < 0 || index >= this.size){
        //         return {
        //             hasCycle : false,
        //             meetingPoint : null,
        //             error : 'out of bond index'
        //         };
        //     }
            
        //     let currentNode = this.head;
        //     let count = 0;
        //     while(count < index){
        //         currentNode = currentNode.next;
        //         count++;
        //     }
        //     this.tail.next = currentNode;
        //     // find a list is circular or not ?
        //     let slow = this.head;
        //     let fast = this.head;
        //     let hasCycle = false;
        //     while(fast !== null && fast.next !== null){
        //         slow = slow.next;
        //         fast = fast.next.next
        //         if(slow === fast){
        //             hasCycle = true;
        //             break;
        //         }
        //     }
        //     if(!hasCycle) return{
        //         hasCycle: false,
        //         meetingPoint : null
        //     };
        //     slow = this.head;
        //     while(slow !== fast){
        //         slow = slow.next;
        //         fast = fast.next;
        //     }
        //     return {
        //         hasCycle : true,
        //         meetingPoint : slow.value
        //     };
        // },
        // // remove cycle 
        // removeCycle : function(){
        //     let slow = this.head;
        //     let fast = this.head;
        //     let hasCycle = false;
        //     while(fast !== null && fast.next !== null){
        //         slow = slow.next;
        //         fast = fast.next.next;
        //         if(slow === fast){
        //             hasCycle = true;
        //             break;
        //         }
        //     }
        //     if(!hasCycle) {
        //         console.log('No Cycle Found');
        //         return false;
        //     }
            
        //     slow = this.head;
            
        //     let prev = null;
        //     while(slow !== fast){
        //         slow = slow.next;
        //         prev  = fast;
        //         fast = fast.next;
        //     }
        //     prev.next = null;
        //     this.tail = fast;
        //     // return true;
        // }
        
        // 4. remove nth node from the end 
        // removeNthNode : function(n){
        //     if(n < 1 || n > this.size){
        //         console.log(`Invalid Index n : ${n} Size is {this.size}`);
        //         return;
        //     }
        //     let dummy = {value : -1, next : this.head};
        //     let firstPtr = dummy;
        //     let secondPtr = dummy;
        //     for(let i = 0; i < n; i++){
        //         if(secondPtr.next === null) return this.head;
        //         secondPtr = secondPtr.next;
        //     }
        //     while(secondPtr.next !== null){
        //         firstPtr = firstPtr.next;
        //         secondPtr = secondPtr.next;
        //     }
        //     let nodeToRemove = first.next;
        //     first.next = nodeToRemove.next;
        //     // firstPtr.next = firstPtr.next.next;
        //     this.head = dummy.next;
        //     this.size--;
        //     console.log(`removed node with value : ${nodeToRemove}`);
        // }
    }
}
// let list = new linkedList();
// list.appendNode(10);
// list.appendNode(20);
// list.appendNode(30);
// list.appendNode(40);
// list.appendNode(50);
// // traverse a List
// console.log(list.traversing());
// // remove Nth Node
// list.removeNthNode(0);
// console.log(list.traversing());
// reverse a List
// list.reverseList();
// console.log(list.traversing());

// LinkedList cycle
// console.log(list.linkedListCycle(3));

// remove a cycle in List

// let cycleInfo = list.linkedListCycle(3);
// console.log('cycle detaction after creation :',cycleInfo);
// console.log('----------remove cycle-----------');
// list.removeCycle();
// // console.log('Cycle removed');

// console.log('Cycle is gone ?');
// let checkAgain = list.linkedListCycle(2);
// console.log('cycle detaction after removal : ',checkAgain);
// // let checkAgain = list.linkedListCycle(3);
// // console.log('Cycle detaciton after removal', checkAgain);
// console.log(list);
// console.log(`List Current Size : ${list.size}`);
