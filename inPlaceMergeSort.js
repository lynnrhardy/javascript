// First array has n positive numbers, and they are sorted in the non-descending order.
// Second array has 2n numbers: first n are also positive and sorted in the same way but the last n are all zeroes.
// Merge the first array into the second and return the latter. You should get 2n positive integers sorted in the non-descending order.
// use Merge Sort and modify the way we merge the list so it's in-place and uses a constant amount of memory space 0(1)
//use shell sorting, similar to Insertion Sort, but instead of only comparing adjacent elements, shell sort elements at different intervals




//Merge Sort with Shell Sort
//first select large interval h = lenth of list/2
//iterate and compare each element which are h distance apart
//if correct order (the current element <= element at h distance), then continue else swap
//repeat with smaller intervals until h = 1
//O(nlogn)
//space complexity is 0(1)
//not a stable sort since shell sort is unstable and doesn't take into account the elements in between while swapping two elements
// function merge_one_into_another(m, n) {
//    //iterate through all elements of first starting from the last element
//    for (let i = n; i >= 0; i--) {
//      //if the element at j is greater than the element at i, swap them
//      let j, last = first[m-1];
//      for (j = m-2; j >= 0 && first[j] > second[i]; j--)
//       first[j+1] = first[j];
//       if (last > second[i]);{
//       first[j+1] = second[i];
//       second[i] = last;
//     }
//    }
   
//    }
 
 
   


// Javascript program to merge two
// sorted arrays with constant auxillary O(1) extra space.

	let first=[1, 3, 5]
	let second=[2, 4, 6, 0, 0, 0]
	//[1, 2, 3, 4, 5, 6]

//TIME OPTIMIZED
// function merge_one_into_another(first, second) {
//     let n = first.length;
//     let last1 = n - 1;
//     let last2 = n - 1;
//     let last = n + n - 1;

//     while (last >= 0) { // While at least one element remains to be processed.
//         if (last1 < 0) {
//             // No elements remain in the first array.
//             // Think about the case when first = [4, 5, 6] second = [1, 2, 3, 0, 0, 0].
//             // Once last1 = -1, second will be [1, 2, 3, 4, 5, 6]. So, we can stop here.
//             break;
//         } else if (last2 < 0) {
//             // No elements remain in the first array.
//             second[last--] = first[last1--];
//         } else if (first[last1] <= second[last2]) {
//             // The next number in the second array is greater,
//             // so it goes to the next position.
//             second[last--] = second[last2--];
//         } else {
//             second[last--] = first[last1--];
//         }
//     }
//     return second;
// }
    

 //MEMORY OPTIMIZED
//  function merge_one_into_another(first, second) {
//     // Write your code here.
//     let i = second.length - 1;
//     while (i > 0) {
//       if (second[i] == 0) i--;
//       else
//         break;
//     }
//     second = second.slice(0, i + 1);
//     return mergesort(first, second);
//   }
 
 
//   function mergesort(left, right) {
//     let arr = [];
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         arr.push(left.shift())
//       } else {
//         arr.push(right.shift())
//       }
//     }
//     return [ ...arr, ...left, ...right ]
//   }
 
 

//JOSH SEIDES PSEUDOCODE
//two pointer pass is always 
//while loop with two points and a condition
// that looks for optimizal condition first where array is within the two bounds
//else enter loop again
//we know the length of the array, so we know the size is 0(n)
function merge_one_into_another(first, second) {
  let n = length(first)
  let top = n-1 //end pointer for first
  let bottom = n-1 //end pointer for second
  let ans = 2n-1 //answer pointer at end of second array, because 2nd arr is 2n

  while top >= 0 and bottom >=0  //two pointers are not negative in right to left within bounds of array, there are still elements to compare
    if arr1[top] >= arr2[bottom] //pick the larger element and place it in the end of the array
      arr2[ans] = arr1[top]  //insert the answer into the bottom array, overwrite with value in top array
        top -= 1    //pointer maintenance, move the pointers to the left
        answer -= 1 //answer pointer maintenance, move the pointer to the left
    else //value in bottom array is bigger
      arr2[ans] = arr2[bottom]
        bottom -= 1
        answer -= 1
    
    //until one of the pointers reaches the end of the array, out of bounds and becomes -1
    //edge case if arr1 is all 1
    //enter the 'gather phase'
    while top >= 0 
      arr2[ans] = arr1[top]
        top -= 1
        answer -= 1
    // while bottom >= 0 //only if merge sort
    //   arr2[ans] = arr2[bottom]
    //     bottom -= 1
    //     answer -= 1 
    return arr2
      
    
}

console.log(merge_one_into_another(first, second))
	



//Brute Force
//JOSH SEIDES: merge first array into end of second array and then sort second array is 0(nlogn) ... upper bound...can do better...need linear solution
//0(n^2)
//worse case occurs when the largest element of the right is smaller then the smallest of the left, so the comparisons are n^2
//worse case time to merge, with row depth of 2^d sublists...
//space complexity is 0(1)
//stable because relative order of any two equal elements in the sorted list stays the same
// function merge(arr, start, mid, end) {
//   let i = start; //p1
//   let j = mid + 1; //p2

//   while (i <= mid && j <= end) {
//     //If the element at p1 <=element at p2, we increment p1 by 1.
//     if (arr[i] <= arr[j]) {
//       i = i + 1;
//       //Else, we compare the element at p1 and p2.
//     } else {
//       temp = arr[j]
//       index = j
//         while (index > j) {
//           arr[index] = arr[index - 1]
//           index = index - 1
//         }
//      arr[i] = temp;
//      i = i + 1;
//      j = j + 1;
//      mid = mid + 1;
//     }
//   }
// }
// console.log(merge(arr, 0, 4, 7))