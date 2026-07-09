// inserstion in js .....

// function inserArr(nums, newEl, position) {
//   // edge case
//   if (position < 0 || position > nums.length) {
//     return "Invalid position";
//   }
//   // shifting elements to the right
//   for (let i = nums.length; i > position; i--) {
//     nums[i] = nums[i - 1];
//   }
//   nums[position] = newEl;
//   return nums;
// }
// let arr = [10, 20, 40, 50];
// console.log(inserArr(arr, 30, 2));


// Dynamic input from user.....

// let nums = [10, 20, 40, 50];

// function inserArr() {
//   let newEl = document.getElementById("newel").value;
//   let position = document.getElementById("position").value;

//   // edge case
//   if (position < 0 || position > nums.length) {
//     return "Invalid position";
//   }
//   // shifting elements to the right

//   for (let i = nums.length; i > position; i--) {
//     nums[i] = nums[i - 1];
//   }

//   nums[position] = newEl;
  
//   // displaying the updated array
//   document.getElementById("output").innerHTML = "Updated Array: " + nums.join(", ");
// }


// // In a JavaScript you can insert a element by using splice method also...
// let arr = [10, 20, 40, 50];
// arr.splice(2,0,30); // (position, deleteCount, newElement)
// console.log(arr); // Output: [10, 20, 30, 40, 50]