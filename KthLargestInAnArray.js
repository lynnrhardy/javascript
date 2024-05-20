//Given an array of integers, find the k-th largest number in it.

let numbers = [5, 1, 10, 3, 2]
let k = 2

// let numbers = [4, 1, 2, 2, 3]
// let k = 4

//TIME OPTIMIZED .08 sec
// function kth_largest_in_an_array(numbers, k) {
//     quickSelect(numbers, 0, numbers.length - 1, numbers.length - k);
//     return numbers[numbers.length-k];
// }

// function quickSelect(nums, start, end, index) {
//     if (start >= end) {
//         return;
//     }

//     const pivotIndex = Math.floor(Math.random() * (end - start + 1) + start);
//     swap(start, pivotIndex, nums);
//     let smaller = start;
//     for (let big = start+1; big <= end; big++) {
//         if (nums[big] < nums[start]) {
//             smaller++;
//             swap(smaller, big, nums);
//         }
//     }
//     swap(start, smaller, nums);
//     if (smaller === index) {
//         return;
//     } else if (smaller < index) {
//         quickSelect(nums, smaller+1, end, index);
//     } else {
//         quickSelect(nums, start, smaller-1, index);
//     }
// }

// function swap(source, target, arr) {
//     const temp = arr[source];
//     arr[source] = arr[target];
//     arr[target] = temp;
// }

//MEMORY OPTIMIZED 53.61 MB
function kth_largest_in_an_array(numbers, k) {
    helper(numbers, 0, numbers.length - 1, numbers.length - k);
    return numbers[numbers.length - k];
}

function helper(arr, start, end, index) {
    if(start === end) return;
    
    const pIdx = start + Math.floor(Math.random() * (end - start) + 1);
    swap(arr, start, pIdx);
    
    let smaller = start;
    for(let j = start + 1; j <= end; j++) {
        if(arr[j] < arr[start]) {
            smaller++;
            swap(arr, j, smaller);
        }
    }
    swap(arr, start, smaller);
    
    if(smaller > index) {
        helper(arr, start, smaller - 1, index);
    } else if(smaller < index) {
        helper(arr, smaller + 1, end, index);
    } else {
        return;
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


/* 
    Approach 1 (Brute force):
    1. Sort it
    2. return numbers[len(numbers) - k];
    T(n) = o(n log n)
    S(n) = o(1)
    
    Approach 2: (Max heap)
    1. Build Max Heap size n - T(n) = O(n)
    2. Extract k times.    T(n) = k * O(log n)
    = O(n + k * log n) 
    = O(n log n)
    
    Approach 3: (Min Heap)
    1. Iterate each element of the given array - o(n)
    2. Insert the element in the min heap - o(log k)
    3. After each insertion check size of heap
        a. If heap exceeds k - o(1)
            1. Remove head element - o(log k)
    4. Repeat on elements of given array
    5. Now the top element of the min heap would be our kth largest element
    
    Time Complexity:
    We iterate n times doing log k of work: o(nlogk)
    T(n) = o(n log k)
    S(n) = o(k)
    
    Approach 4: QuickSelect
    Use quicksort algo initially but instead of sorting the whole thing will use the quickselect
    In helper:
    - Use Ranomized Pivot 
    - Check if the pivot equals k
        - if pivot is greater than k only recurse on left side
        - else if pivot is less than recurse only on right side
        - else return
    
    In Main func return arr[n-k]  
        
    
*/

console.log(kth_largest_in_an_array(numbers, k));
