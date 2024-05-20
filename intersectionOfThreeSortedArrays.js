//Given three arrays sorted in the ascending order, return their intersection sorted array in the ascending order.
//If the intersection is empty, return an array with one element -1.
//Use Three Pointers because the arrays are sorted, time O(n), no aux space O(n)
//Brute Force 0(n^2)
//HashMap 0(n) time complexity, aux space needed O(n)


// let arr1 = [2, 5, 10]
// let arr2 = [2, 3, 4, 10]
// let arr3 = [2, 4, 10]

let arr1 = [1, 2, 3]
let arr2 = []
let arr3 = [2, 2]

// let arr1 = [1, 2, 2, 2, 9]
// let arr2 = [1, 1, 2, 2]
// let arr3 = [1, 1, 1, 2, 2, 2]

//TIME OPTIMIZED 10 SEC
// function find_intersection(arr1, arr2, arr3) {
//     // Write your code here.
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     const result = [];
//     while(i < arr1.length && j < arr2.length && k < arr3.length) {
//         const num1 = arr1[i];
//         const num2 = arr2[j];
//         const num3 = arr3[k];
//         let min = Math.min(num1, num2);
//         min = Math.min(min, num3);
//         if(num1 === num2 && num1 === num3) {
//             result.push(num1);
//             i++;
//             j++;
//             k++;
//         }
//         else if(num1 === min) {
//             i++;
//         }
//         else if(num2 === min) {
//             j++;
//         }
//         else {
//             k++;
//         }
//     }
//     return result.length > 0 ? result : [-1];
// }

//MEMORY OPTIMIZED 72.02MB
function find_intersection(arr1, arr2, arr3) {
    // Write your code here.
    if(arr1.length === 0 || arr2.length === 0 || arr3.length === 0){
        return [-1]
    }
    
    let [i, j, k] = [0, 0, 0];
    let result = [];
    
    while(i < arr1.length && j < arr2.length && k < arr3.length){
       let [x, y, z] = [arr1[i], arr2[j], arr3[k]];
       let min = Math.min(x, y, z);
       if(x === y && x === z){
           result.push(x);
           i++;
           k++;
           j++;
       }else if(x === min){
           i++;
       }else if(y === min){
           j++;
       }else{
           k++
       }
    }
    
    console.log(result)
    
    return result.length > 0 ? result : [-1];
}

console.log(find_intersection(arr1, arr2, arr3))