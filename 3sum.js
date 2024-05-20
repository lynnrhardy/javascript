// Given an integer array arr of size n, find all magic triplets in it.
// Magic triplet is a group of three numbers whose sum is zero.
// Note that magic triplets may or may not be made of consecutive numbers in arr.

// Function must return an array of strings. Each string (if any) in the array must represent a unique magic triplet and strictly follow this format: "1,2,-3" (no whitespace, one comma between numbers).
// Order of the strings in the array is insignificant. Order of the integers in any string is also insignificant. For example, if ["1,2,-3", "1,-1,0"] is a correct answer, then ["0,1,-1", "1,-3,2"] is also a correct answer.
// Triplets that only differ by order of numbers are considered duplicates, and duplicates must not be returned. For example, if "1,2,-3" is a part of an answer, then "1,-3,2", "-3,2,1" or any permutation of the same numbers may not appear in the same answer (though any one of them may appear instead of "1,2,-3").

let arr = [-2, 2, 0, -1, 1]

//TIME OPTIMIZED
// function find_zero_sum(arr) {
//     arr.sort((a,b) => a-b);
//     let result = [];
//     for (let i = 0; i < arr.length - 2; i++) {
       
//         if (i > 0 && arr[i] == arr[i-1]) continue;
       
//         let left = i + 1;
//         let right = arr.length - 1;
      
//         while (left < right) {
//             let sum = arr[i] + arr[left] + arr[right];
//             if (sum < 0) {
//                 ++left;
//             } else if (sum > 0) {
//                 --right;
//             } else {
//                 result.push(`${arr[i]},${arr[left]},${arr[right]}`);
                
//                 while(left < right && arr[left] == arr[left + 1]) ++left;
//                 while(left < right && arr[right] == arr[right - 1]) --right;
                
//                 ++left;
//                 --right;
//             }
//         }
//     }
//     return result;
// }


//MEMORY OPTIMIZED
function find_zero_sum(arr) {
    arr.sort((a,b) => a-b);
    let returnArr = new Set();
    
    for(let i = 0; i < arr.length; i++) {
        let target = 0 - arr[i];
        let high = arr.length - 1;
        let low  = i + 1;
        while(low < high) {
            if(arr[low] + arr[high] === target) {
                returnArr.add(`${arr[i]},${arr[low]},${arr[high]}`);
                high--;
            } else if (arr[low] + arr[high] < target) {
                low++;
            } else {
                high--;
            }
        }
    }
    
    return Array.from(returnArr);
}


console.log(find_zero_sum(arr))