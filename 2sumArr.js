//Given an array and a target number, find the indices of the two values from the array that sum up to the given target number.

// The function returns an array of size two where the two elements specify the input array indices whose values sum up to the given target number.
// In case when no answer exists, return an array of size two with both values equal to -1, i.e., [-1, -1].
// In case when multiple answers exist, you may return any of them.
// The order of the returned indices does not matter.
// A single index cannot be used twice.

let numbers = [4, 1, 5, 0, -1]
let target = 10

//TIME OPTIMIZED
// function two_sum(numbers, target) {
//     // Write your code here.
//     let map1 = new Map()
//     for(let i=0;i<numbers.length;i++) {
//         if(map1.has(target-numbers[i])) return [i, map1.get(target-numbers[i])]
//         else map1.set(numbers[i], i)
//     }
    
//     return [-1,-1];
// }

//MEMORY OPTIMIZED
function two_sum(numbers, target) {
    for(let i=0;i<numbers.length;i++){
        const b = target - numbers[i];
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[j]===b){
                return [i,j]
            }
        }
    }
    return [-1,-1];
}

console.log(two_sum(numbers, target))