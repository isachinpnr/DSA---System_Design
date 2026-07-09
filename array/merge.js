// merge two array into a single array

// let mergerArrays = (arr1 , arr2 , arr3 = [] )=>{
//     for(let i = 0; i < arr1.length; i++){
//         arr3[i] = arr1[i];
//     }

//     for(let j = 0; j < arr2.length; j++){
//         arr3[arr1.length + j] = arr2[j];
//     }
//     return arr3;

// // if you want to reverse the merged array
//     // return arr3.reverse();
// }

// let nums1 = [1,2,3,4,5];
// let nums2 = [10,20,30,40,50];
// let nums3 = [];
// console.log(mergerArrays(nums1 , nums2)); 

// using spread operator

// let arr1 = [1,2,3,4,5];
// let arr2 = [10,20,30,40,50];

// let mergedArr = [...arr1 , ...arr2];
// console.log(mergedArr);

// merge two array using while loop

// let mergeArrays = (arr1 , arr2)=>{
//     arr1.sort((a , b) => a - b);
//     arr2.sort((a  ,b )=> a - b);

//     let d1 = 0;
//     let d2 = 0;
//     let d3 = 0;
//     let arr3 = [];

//     while(d1 < arr1.length && d2 < arr2.length){
//         if(arr1[d1] < arr2[d2]){
//             arr3[d3] = arr1[d1];
//             d1++;
//         }else{
//             arr3[d3] = arr2[d2];
//             d2++;
//         }
//         d3++;
//     }

//     while(d1 < arr1.length){
//         arr3[d3] = arr1[d1];
//         d1++;
//         d3++;
//     }
//     while(d2 < arr2.length){
//         arr3[d3] = arr2[d2];
//         d2++;
//         d3++;
//     }
//     return arr3;
// }

// let nums1 = [1,2,3,4,5];
// let nums2 = [10,20,30,40,50];
// let result = mergeArrays(nums1 , nums2);
// console.log(result);

 