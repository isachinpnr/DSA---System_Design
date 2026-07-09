// queue data structure work on a FIFO basis first in first out

// let queue = [];
// let currentSize = queue.length;
// let max = 5;

// // // insert element in queue.....(enqueue)

// function enqueue(newEl) {
//   if (currentSize >= max) {
//     console.log("Queue is full !");
//   } else {
//     queue[currentSize] = newEl;
//     currentSize += 1;
//   }
//   return queue;
// }

// // // delete element in queue.....(dequeue)

// function dequeue() {
//   if (currentSize > 0 && currentSize <= max) {
//     for (let i = 0; i < queue.length; i++) {
//       queue[i] = queue[i + 1];
//     }
//     currentSize -= 1;
//     queue.length = currentSize;
//   } else {
//     alert("Queue is already empty !");
//   }
// }

// function display() {
//   console.log(queue);
// }

// enqueue(34);
// enqueue(45);
// enqueue(78);
// enqueue(25);
// enqueue(17);
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// dequeue();
// display();

// Queue operations with an input fields.....(Dynamic Approach)

// let queue = [];
// let currentSize = queue.length;
// let max = 5;

// // insert element in queue

// let enqueue = () => {
//   let newEl = Number(document.getElementById("QueueEl").value);
//   if (currentSize >= max) {
//     alert("Queue is Full !");
//   } else {
//     queue[currentSize] = newEl;
//     currentSize += 1;
//   }
// };

// // delete element in queue

// let dequeue = () => {
//   if (!isEmpty()) {
//     for (let i = 0; i < queue.length; i++) {
//       queue[i] = queue[i + 1];
//     }
//     currentSize -= 1;
//     queue.length = currentSize;
//   } else {
//     alert("Queue is also empty !");
//   }
// };

// // check a front of queue....

// let front = () => {
//   if (!isEmpty()) {
//     console.log(queue[0]);
//   } else {
//     console.log("Front is Empty !");
//   }
// };

// // check rear of the queue....

// let rear = () => {
//   if (isEmpty()) {
//     console.log("Rear is Empty !");
//   } else {
//     console.log(queue[currentSize - 1]);
//   }
// };

// // isEmpty function ...

// function isEmpty() {
//   if (currentSize <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // display queue function ....

// let display = () => {
//   console.log(queue);
// };

// circular queue .....

// class CircularQueue {
//   constructor(size) {
//     this.size = size;
//     this.queue = new Array(size);     // fixed size array
//     this.front = 0;
//     this.rear = 0;
//   }

//   // Queue khali hai kya?
//   isEmpty() {
//     return this.front === this.rear;
//   }

//   // Queue full hai kya?
//   isFull() {
//     return (this.rear + 1) % this.size === this.front;
//   }

//   // Element add karo
//   enqueue(item) {
//     if (this.isFull()) {
//       console.log("❌ Queue is Full!");
//       return false;
//     }
//     this.queue[this.rear] = item;
//     this.rear = (this.rear + 1) % this.size;   // circular move
//     console.log(`✅ Enqueued: ${item}`);
//     return true;
//   }

//   // Element nikaalo
//   dequeue() {
//     if (this.isEmpty()) {
//       console.log("❌ Queue is Empty!");
//       return null;
//     }
//     const item = this.queue[this.front];
//     this.front = (this.front + 1) % this.size;   // circular move
//     console.log(`✅ Dequeued: ${item}`);
//     return item;
//   }

//   // Front element dekho (without removing)
//   peek() {
//     if (this.isEmpty()) return null;
//     return this.queue[this.front];
//   }

//   // Queue ko print karo (circular handling ke saath)
//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//       return;
//     }

//     let result = [];
//     let i = this.front;

//     while (i !== this.rear) {
//       result.push(this.queue[i]);
//       i = (i + 1) % this.size;
//     }
//     console.log("Queue:", result.join(" → "));
//   }
// }

// // ================== DEMO ==================
// const cq = new CircularQueue(4);

// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.print();           // 10 → 20 → 30

// cq.dequeue();         // 10
// cq.enqueue(40);
// cq.print();           // 20 → 30 → 40   ← yahan magic dikhega!

// cq.dequeue();
// cq.dequeue();
// cq.dequeue();
// cq.print();           // empty