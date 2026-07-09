// This is a array deletion utility function that removes an element from an array at a specified index.

// function delArr(nums , position){
//     // edge case
//     if(position < 0 || position >= nums.length){
//         return "Invalid position";
//     }

//     // shifting elements to the left
//     for(let i = position; i < nums.length - 1; i++){
//         nums[i] = nums[i + 1];
//     }

//     // removing the last element as it's now a duplicate
//     nums.length-= 1;

//     return nums;
// }

// let data = [10, 20, 30, 40, 50];
// console.log(delArr(data, 0)); // Output: [10, 20, 40, 50]

// Dynamic input from user.....

// let nums = [10, 20, 30, 40, 50];

// function deleteArr() {
//     let position = document.getElementById("delposition").value;
//     // position = parseInt(position);

//     // edge case 
//     if (position < 0 || position >= nums.length){
//         alert("Invalid position");
//         return;
//     }
//     // shifting elements to the left
//     for(let i = position; i < nums.length -1; i++){
//         nums[i] = nums[i + 1];
//     }
//     // removing the last element as it's now a duplicate
//     nums.length -= 1;

//     return document.getElementById("deloutput").innerText = "Updated Array: " + nums.join(", ");
// }
