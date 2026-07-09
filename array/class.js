// class stack {
//   item = [];
//   currentSize;
//   maxSize;
//   constructor(size) {
//     this.maxSize = size;
//     this.currentSize = this.item.length;
//   }
//   push(newEl) {
//     if (this.currentSize >= this.maxSize) {
//       console.log("Stack is Full");
//     } else {
//       this.item[this.currentSize] = newEl;
//       this.currentSize += 1;
//     }
//   }

//   pop() {
//     if(this.currentSize <= 0){
//         console.log("stack is already empty");
//     }else{
//         this.currentSize -=1;
//         this.item.length = this.currentSize;
//     }
//   }

//   display() {
//     console.log(this.item);
//   }
// }

// let st1 = new stack(5);
// st1.push(54);
// st1.push(45);
// st1.pop();
// st1.display();



// reverse a array with in recursion.....

// class reverseWithRecursion{
//     constructor(arr){
//         this.arr = arr;
//     }
//     reverseArr(arr){
//       const helper = (start , end) =>{
//             if(start >= end) {
//                 return;
//             }
//                 // swap values......
//                 [this.arr[start] , this.arr[end]] =
//                 [this.arr[end] , this.arr[start]];
                
//                 helper(start + 1 , end - 1);
//         }
//         helper(0 , this.arr.length-1)
//         return this.arr;
//     }
// }

// let nums = [8,2,6,7,6,0];
// let obj = new reverseWithRecursion(nums);
// console.log(obj.reverseArr());


// class based prefix reverse logic .....

// class prefixReverse{

//     constructor(arr , move){
//         this.arr = arr;
//         this.move = move;
//     }
//      reverseArr(){
//         let result = [];
        
//         for(let i = this.move -1; i >=0; i--){
//             result.push(this.arr[i]);
//         }
//         for(let i = this.move; i < this.arr.length; i++){
//             result.push(this.arr[i]);
//         }
//          return result;
//     }
   
// }


// let nums = [7,5,6,9,4,1,2,0];
// let k = 4;

// let obj = new prefixReverse(nums , k);
// console.log(obj.reverseArr())
