// Given a list of numbers, find all the unique quadruples that sum up to a given target value.

// Two quadruples are considered different if there exists a number whose frequencies differ in those two quadruples.
// The quadruples can be returned in any order.
// The order of numbers inside any quadruple does not matter.


  // This function will take the input array arr, the current_target, the starting index start of arr and the value of k as its inputs.
    // The current_target will initially be equal to the given target value and the start will be equal to 0. 
    // The function will return all the distinct sets of size k such that they sum up to the current_target.
    // We will then check for the following base cases: 
    // If start + k > n: It means that there are not enough elements present in the array to form a set of size k. Therefore, we will return the empty result.
    
let arr = [0, 0, 1, 3, 2, -1];
let target = 3;

//TIME OPTIMIZED

// function four_sum(nums, target) {
//     const res = [];
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length - 3; i++) {
//         // Correct the condition to correctly skip duplicates
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }

//         for (let j = i + 1; j < nums.length - 2; j++) {
//             // Correct the condition to correctly skip duplicates
//             if (j > i + 1 && nums[j] === nums[j - 1]) {
//                 continue;
//             }

//             let l = j + 1;
//             let r = nums.length - 1;

//             while (l < r) {
//                 let sum = nums[i] + nums[j] + nums[l] + nums[r];
//                 if (sum < target) {
//                     l++;
//                 }
//                 else if (sum > target) {
//                     r--;
//                 }
//                 else {
//                     res.push([nums[i], nums[j], nums[l], nums[r]]);
//                     l++;
//                     // Move l right past duplicates
//                     while (l < r && nums[l] === nums[l - 1]){
//                         l++;
//                     }
                    

//                 }
//             }
//         }
//     }

//     return res;
// }

//MEMORY OPTIMIZED
function four_sum(arr, target) {
    // Write your code here.
    
    const result = [];
    
    const n = arr.length;
    
    arr.sort((a,b) => a-b);
    
    
    for(let i=0;i< n - 3;i++){
        //skip duplicate
        if(i > 0 && arr[i] === arr[i-1]){
            continue;
        }
        
        for(let j = i+1; j < n -2; j++){
            if(j>i+1 && arr[j] === arr[j-1]){
                continue;
            }
            let left = j +1;
            let right = n - 1;
            
            while(left < right){
                const sum = arr[i]+arr[j] + arr[left]+arr[right]
                if( sum === target){
                    result.push([arr[i],arr[j],arr[left],arr[right]]);
                    //skip duplicates
                    while(left < right && arr[left] === arr[left + 1] ){
                        left++
                    }
                    while(left < right && arr[right] === arr[right - 1] ){
                        right--
                    }
                    
                    left++;
                    right--;
                } else if(sum<target){
                    left++
                } else {
                    right--
                }
                
                
            }
        }
        
    }
    return result;
}



console.log(four_sum(arr, target));