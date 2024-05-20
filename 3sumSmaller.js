// Given a list of numbers, count the number of triplets having a sum less than a given target.The original array's indexes identify a triplet. Therefore, any two triplets will differ if they are denoted by a different triplet of indexes, even if the values present at those indexes are the same. Please observe Example Two for more details on this.


let target = 4
let numbers = [5, 0, -1, 3, 2]
// {numbers[1], numbers[2], numbers[3]} and {numbers[1], numbers[2], numbers[4]} are the triplets having sum less than 4.


// let target = 7
// let numbers = [2, 2, 2, 1]
//{numbers[0], numbers[1], numbers[2]}, {numbers[0], numbers[1], numbers[3]}, {numbers[0], numbers[2], numbers[3]} and {numbers[1], numbers[2], numbers[3]} are the triplets having sum less than 7.

//TIME OPTIMIZED
// function checkSumSmaller(sum, target) {
//     return sum < target;
// }

// function count_triplets(target, numbers) {
//     // const foundTriplets = new Set();
//     let count = 0;
//     numbers.sort((a, b) => a - b);
//     const n = numbers.length;
    
//     for(let index = 0; index < n - 2; index++) {
//         let currentElement = numbers[index];
//         let left = index + 1, right = n - 1;
        
//         while (left < right) {
//             let sum = currentElement + numbers[left] + numbers[right];
            
//             if(sum < target) {
//               count += right - left;
//               left++;
//             } else {
//               right--;
//             }
//         }
        
//     }
//     // return Array.from(foundTriplets).length;
//     return count;
// }


//MEMORY OPTIMIZED
function checkSumSmaller(sum, target) {
    return sum < target;
}

function count_triplets(target, numbers) {
    // const foundTriplets = new Set();
    let count = 0;
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    
    for(let index = 0; index < n - 2; index++) {
        let currentElement = numbers[index];
        let left = index + 1, right = n - 1;
        
        while (left < right) {
            let sum = currentElement + numbers[left] + numbers[right];
            
            if(sum < target) {
              count += right - left;
              left++;
            } else {
              right--;
            }
        }
        
    }
    // return Array.from(foundTriplets).length;
    return count;
}

console.log(count_triplets(target, numbers));