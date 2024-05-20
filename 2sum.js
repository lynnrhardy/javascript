
// 2 sum an an numbers sorted
// Given an numbers sorted in non-decreasing order and a target number, find the indices of the two values from the numbers that sum up to the given target number.
//https://interviewing.io/questions/two-sum#solution1
//use hash table
// Time Complexity: O(n), where n is the size of the numbers. We iterate over every number in the numbers and the hash table lookup/add operations take constant time.
// Space Complexity: O(n), where n is the size of the numbers. Our hash map stores every number in the input numbers.

numbers = [5, 3, 10, 45, 1]
target = 6

function pair_sum_sorted_numbers(numbers, target) {
    // Our hash table that stores at which index the number is at
    let numToIndex = {};

    // 1. Iterate over every number in the numbers
    for (let i = 0; i < numbers.length; i++) {
        // 2. Calculate the complement that would sum to our target
        complement = target - numbers[i];
        // console.log('complement', complement)
        // console.log('numbers[i]', numbers[i])
        // console.log('target', target)
        
        // 3. Check if that complement is in our hash table
        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        } 
        
        // 4. Add the current number to our hash table
        numToIndex[numbers[i]] = i;
    }
    
        return [-1, -1]
   
};
console.log(pair_sum_sorted_numbers(numbers, target));



// 2 Sum in an numbers
// Given an numbers and a target number, find the indices of the two values from the numbers that sum up to the given target number.
//if no numbers then [-1, -1]



// https://plainenglish.io/blog/ways-to-solve-the-classic-two-sum-algorithm-question-with-an-explanation-on-big-o

//BRUTE FORCE
//  two for loops to look through the numbers to check if they add up to the target number and then push the two numbers into an empty numbers and return that, otherwise if no two numbers add up, I'll return the original empty numbers.
// The Big-O notation of this solution would be O(n^2) for time complexity and O(1) for space complexity, which indicates that it is not a very efficient solution for how fast it solves the problem.

function twoNumberSum(numbers, target) {
    let nums = [];
    // loop start at the first element (that is why i is equal to 0) and keep on looking through the numbers one by one (i++) until it has looked through all the elements in the numbers (the condition in the middle; i < numbers.length).
    for (let i = 0; i < numbers.length; i++) {
        // second loop will look at the number right next to whatever i represents the first time (j = i+1), each time increasing by one within the first loop (j++) until it looks through every number in the numbers (j<numbers.length). 
        for (let j = i + 1; j < numbers.length; j++) {
            //condition checks if the first element; numbers[i] adds to the second element; numbers[j] to equal the target sum number. If it does then push the two numbers into the numbers. After pushing the elements in there, return the answer which was set to an numbers in the first place to hold our answer.
            // console.log('numbers[i] ', numbers[i])
            // console.log('numbers[j] ', numbers[j])
            if (numbers[i] + numbers[j] === target) {
                nums.push(numbers[i], numbers[j]);
                return [i, j];
            }
        }
    }
    return [-1, -1];
}
console.log(twoNumberSum(numbers, target));

//Sort Method
//loop to check and then move the pointers to the right and left to find the numbers that add up to the target sum
// O(nlog(n)) for time and O(1) for space


//space optimized
// function two_sum(numbers, target) {
//     for(let i=0;i<numbers.length;i++){
//         const b = target - numbers[i];
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[j]===b){
//                 return [i,j]
//             }
//         }
//     }
//     return [-1,-1];
// }


//time optimized
function two_sum(numbers, target) {
    let map1 = new Map()
    for(let i=0;i<numbers.length;i++) {
        if(map1.has(target-numbers[i])) return [i, map1.get(target-numbers[i])]
        else map1.set(numbers[i], i)
    }
    
    return [-1,-1];
}

console.log(two_sum(numbers, target))