// Stack Implemetion of DSA (LIFO) last in first out

// push operation in stack (add element to stack)
// let arr = [];
// let currentSize = arr.length;
// let max = 5;

// function stack(newEl) {
//   if (currentSize < max) {
//     arr[currentSize] = newEl;
//     currentSize += 1;
//     console.log(arr);
//   } else {
//     console.log("Stack Full");
//   }
//   return arr;
// }

// stack(78);
// stack(58);
// stack(8);
// stack(68);
// stack(98);
// stack(17);
// stack(53);

// implement a stack using a for loop..

// let loopStack = (el)=>{
//     let arr = [];
//     let max = 5;

//     for(let i = 0; i < el.length; i++){
//         if(arr.length < max){
//             arr[arr.length] = el[i];
//             console.log("add element:" + el[i] + " stack :", arr);
//         }else{
//             alert("stack full remove element" + el[i]);
//         }
//     }
//     return arr;
// }

// loopStack([7,5,9,4,2,6,7,5,6,0]);

// implement a pop operation in stack (remove element from stack)

// full stack implemention (push and pop operations)

// let arr = [];
// let max = 5;
// let currentSize = 0;

// // push

//     function push(newEl){
//          if(currentSize >= max){
//         console.log("stack is full , cann't add" + newEl);
//     }else{
//         arr[currentSize] = newEl;
//         currentSize+=1;
//         console.log(arr);
//     }
//     return arr;
// }

// // pop

// function pop(){
//     if(currentSize > 0){
//         currentSize-=1;
//         arr.length = currentSize;
//     }else{
//         console.log("Stack is already empty !");
//     }
//     return arr;
// }

// push(95);
// push(78);
// push(85);
// push(58);
// pop();
// pop();

// push(78);
// push(85);

// dynamic input for stack.....

// let stack = [];
// let currentSize = stack.length;
// let max = 5;

// // push operation for dynamic stack
// function push() {
//   let newEl = document.getElementById("stackEl").value;

//   if (currentSize >= max) {
//     console.log("Stack is Full , please remove some element first");
//   } else if (newEl === "") {
//     console.log("Please enter some element to add in stack");
//   } else if (isNaN(newEl)) {
//     console.log("Please enter a valid number to add in stack");
//   } else {
//     stack[currentSize] = newEl;
//     currentSize += 1;

//     document.getElementById("stackEl").value = "";
//     console.log("element added : " + newEl + " stack : ", stack);
//   }
//   return stack;
// }

// // pop operation for dynamic stack

// function pop() {
//   if (currentSize > 0) {
//     currentSize -= 1;
//     stack.length = currentSize;
//   } else {
//     console.log("Stack is already empty , please some element");
//   }
//   return stack;
// }

// // display stack element

// function display() {
//   console.log("____________current Stack_________");
//   for (let i = 0; i < stack.length; i++) {
//     console.log("stack element at index " + i + " is : " + stack[i]);
//   }
// }

// reverse a string with an stack.....

//  let arr = [];
//  let currentSize = 0;

// function push(newEl){
//     arr[currentSize] = newEl;
//     currentSize+=1;
// }

// function pop(){
//     if(currentSize === 0) return null;
    
//     let lastEl = arr[currentSize - 1];
//     currentSize-=1;
//     arr.length = currentSize;
//     return lastEl;
// }

// function reverseStr(str){
//     for(let i = 0; i < str.length; i++){
//         push(str[i]);
//     }
//     for(let i = 0; i < str.length; i++){
//         str[i] = pop();
//     }

//     return arr.join("");
// }

// let str = 'sachin';
// str = str.split("");
// reverseStr(str);
// console.log(str.join(""));

// valid parentheses problem using stack....

// function isVailed(s){
//     let stack = [];
//     for(let i = 0; i < s.length; i++){
//         let char = s[i];
        
//         if(char === '(' || char === '[' || char === '{'){
//             stack.push(char);
//         }else{
//             let top = stack.pop();
//             if(char === ')' && top !== '(') return false;
//             if(char === ']' && top !== '[') return false;
//             if(char === '}' && top !== '{') return false;
//         }
//     }
//     return stack.length  ===0;
// }

// let string = '[{}}]';
// console.log(isVailed(string));



