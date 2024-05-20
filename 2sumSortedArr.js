//Given an array sorted in non-decreasing order and a target number, find the indices of the two values from the array that sum up to the given target number.

// In case when no answer exists, return an array of size two with both values equal to -1, i.e., [-1, -1].
// In case when multiple answers exist, you may return any of them.
// The order of the indices returned does not matter.
// A single index cannot be used twice.

numbers = [1, 2, 3, 5, 10]
target = 7


//TIME OPTIMIZED
// function pair_sum_sorted_array(numbers, target) {
//     let start = 0;
//     let end = numbers.length - 1;
    
//     while (start < end) {
//         let value = numbers[start] + numbers[end];
//         if (value === target) {
//             return [start, end];
//         } else if (value > target) {
//             end--;
//         } else {
//             start++;
//         }
//     }
    
//     return [-1, -1];
// }


//MEMORY OPTIMIZED
function pair_sum_sorted_array(numbers, target) {
    // Write your code here.
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        const evaluatedValue = numbers[i] + numbers[j] - target;
        if (evaluatedValue > 0) {
            j--;
        } else if (evaluatedValue < 0) {
            i++;
        } else {
            return [i, j]
        }
    }
    
    return [-1, -1];
}

console.log(pair_sum_sorted_array(numbers, target))