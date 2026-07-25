// # Hashing : Hashing is a process or technique of converting a value into a unique size code (Hash Code)
// for sharing and accessing data quickly

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(4);
// set.add(3);
// set.add(5);
// console.log(set);
// console.log(set.size); // set size
// console.log(set.has(3)); // true
// set.delete(3); // delete element
// console.log(set);
// console.log(set.has(3)); // false;

// for (let data of set) {
//   console.log(data);
// }

// let arr = [10, 15, 18, 9, 9, 10, 45, 10, 10];
// let set = new Set();
// for(let i = 0; i < arr.length; i++){
//     if(set.has(arr[i])){
//         set.delete(arr[i]);
//     }else{
//         set.add(arr[i]);
//     }
// }
// console.log(set);

// #Map:  map is also similier like an set to store a value inside in key & value pair but can store a duplicate
// values but set can't do this.

// let map = new Map();

// map.set("name", "Sachin");
// map.set("Age", 25);
// map.set("isPassed", true);
// map.set("contact", [8126474905], [8192989227]);
// console.log(map);
// map.delete("Age"); // delete value
// console.log(map);
// console.log(map.has("Age")); //  check value
// console.log(map.has("contact"));
// console.log(map.size); // check size

// for (let [key, value] of map) {
//   console.log(key + " -> " + value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// Count frequency of element....................

// let arr = [10, 3, 5, 6, 10, 1, 3, 5, 5, 7];

// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//   // if (map.has(arr[i])) {
//   //   map.set(arr[i], map.get(arr[i]) + 1);
//   // } else {
//   //   map.set(arr[i], 1);

//   // one liner logic
//   map.set(arr[i], (map.get(arr[i]) || 0) + 1);
// }

// // }
// console.log(map);

//

// function sortPeople(names, heights) {
//   let map = new Map();

//   for (let i = 0; i < names.length; i++) {
//     map.set(heights[i], names[i]);
//   }
//   heights.sort((a, b) => b - a);

//   for (let i = 0; i < heights.length; i++) {
//     names[i] = map.get(heights[i]);
//   }
//   return names;
// }

// let names = ["Mary", "John", "Emma"];
// let heights = [180, 165, 170];
// console.log(sortPeople(names, heights));

// LeetCode Problem : 560 : Subarray Sum Equals to K 

// function countSubarray(arr , k){
//     let map = new Map();
//     let sum = 0 , count = 0;
//     map.set(sum , 1);
    
//     for(let i = 0; i < arr.length; i++){
//         sum+= arr[i];
//         if(map.has(sum - k)) count += map.get(sum - k);
//         map.set(sum , (map.get(sum) || 0) + 1);
//     }
//     return count;
// }

// let nums = [1,2,3];
// let k = 3;
// console.log(countSubarray(nums, k));

// LeetCode Problem : Longest Consecutive numbers in Array....

// function longestConsecutive(nums){
//     if(nums.length === 0) return 0;
    
//     const numSet = new Set(nums);
//     let longest = 0;
    
//     for(let num of numSet){
//         if(!numSet.has(num - 1)){
//             let currentNum = num;
//             let currentCount = 1;
            
//             while(numSet.has(currentNum + 1)){
//                 currentNum++;
//                 currentCount++;
//             }    
//             longest = Math.max(longest , currentCount);
//         }
//     }
//     return longest;
// }

// let nums = [0,3,7,2,5,8,4,6,0,1];
// console.log(longestConsecutive(nums));