// Algorithm: segregate_evens_and_odds()
// 1) Initialize two index variables left and right:  
//             left = 0,  right = size -1 
// 2) Keep incrementing left index until we see an odd number.
// 3) Keep decrementing right index until we see an even number.
// 4) If left < right then swap arr[left] and arr[right]

// Time Complexity: O(n)
// Auxiliary Space: O(1)
// linked list use comparative sorting algorithms: use Merge Sort

arr = [1, 2, 3, 4]


//TIME OPTIMIZED
// function segregate_evens_and_odds(numbers) {
//     let start = 0;
//     let end = numbers.length-1;
//     while(start < end){
//         let n1 = numbers[start];
//          let n2 = numbers[end];
//         if(isOdd(n1) && !isOdd(n2)){
//             swap(numbers,start,end)
//             start++;
//         }else if(!isOdd(n1) && !isOdd(n2)){
//              start++;
//         }else{
//             end--;
//         }
//     }
//     return numbers;
// }

// function isOdd(number){
//      if(number % 2 == 0){
//          return false;
//      }else{
//          return true;
//      }
//  }
//  const swap = (arr,idx1,idx2)=>{
//      [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
//  }


//MEMORY OPTMIZED
// function segregate_evens_and_odds(numbers) {
    
//     if (numbers.length <= 1) {
//     return numbers
//     }
    
//     let i = 0,
//         j = numbers.length-1;
//     while (j >= i) {
//         if (numbers[j] % 2 == 0 ) {
//             swap(numbers, i, j);
//             i++;
//         } 
//         else {
//             j--;
//         }
//     }
//     return numbers
// }
// const swap = (nums, i, j ) => {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }
 
//JOSH SEIDES PSEUDOCODE
//If red, do nothing
//If white, swap with left most red
//use Lumotos to get random index
function segregate_evens_and_odds(arr) {
    let white = 0 //pointer is 1 past the left element
    for i > [0, length(arr) -1] //bottom up from i
    //if red, then nothing
    //if white, then swap with left most red
        if arr[i] is white
            swap (arr[i], arr[white])
            white + = 1 //increase white by +1
    return arr
}

console.log(segregate_evens_and_odds(arr))