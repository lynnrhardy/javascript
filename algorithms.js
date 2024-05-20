// view javascript in terminal with
// ➜  Code node test1.js <<<<<<

const arr = [5, 8, 3, 9, 4, 1, 7]

//__________________________
//use binary search on medium to large sorted array
//binary search is a divide and conquer algorithm
//divide the array into two parts, the left and right, the middle element is the pivot
//the time complexity of binary search is O(log n)
//the space complexity of binary search is O(1), no auxiliary data



function binarySearch(arr) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)
  let search = 8
  while (arr[middle] !== search && left <= right) {
    if (search < arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
    middle = Math.floor((left + right) / 2)
  }
  return arr[middle] === search ? middle : -1
}


//__________________________
//only use for small arrrays. Insertion sort would perform better. 
//brute force
//Selection Sort is similar to Bubble Sort, but instead of the largest values “bubbling” to the top, the smallest values are selected and placed at the beginning.
//Selection Sort is a stable sort, meaning that the order of equal elements is maintained.
//Selection Sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
//Selection Sort is an O(n^2) algorithm, meaning that it requires quadratic time to sort an array of size n.
//Selection Sort is a comparison sort, meaning that it works by comparing adjacent elements and swapping them if they are in the wrong order.

function selectionSort(arr) {
  //initializes variable i set to 0; 
  //checks if i is less than the length of the arry; 
  //increments i by 1 each iteration
  // This process is repeated for each element as the current element, to sort the array in place.
  for (let i = 0; i < arr.length; i++) { 
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    // swap if needed, exchanging the element at the current index i with the minimum element at index min.
    if (min !== i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

console.log("selection sort", selectionSort(arr))


//_______________
//bubble sort is a comparison sort that works by repeatedly swapping the adjacent elements if they are in the wrong order.
//the largest number “bubbles” to the top. This is repeated until the array is sorted.
//Bubble Sort is a stable sort, meaning that the order of equal elements is maintained.
//Bubble Sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
//Bubble Sort is an O(n^2) algorithm, meaning that it requires quadratic time to sort an array of size n.
//Bubble Sort is a comparison sort, meaning that it works by comparing adjacent elements and swapping them if they are in the wrong order.


  
  //initializes variable j set to 0;
    //checks if j is less than the length of the arry;
    //increments j by 1 each iteration
    // This process is repeated for each element as the current element, to sort the array in place.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
console.log("bubble sort", bubbleSort(arr))

//--------------------------
//Insertion Sort is a comparison sort, meaning that it works by comparing adjacent elements and swapping them if they are in the wrong order.
//Insertion Sort is a stable sort, meaning that the order of equal elements is maintained.
//Insertion Sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
//Insertion Sort is an O(n^2) algorithm, meaning that it requires quadratic time to sort an array of size n.
// Insertion Sort a good choice when sorting real-time data, smaller arrays, almost sorted
// Don’t use Insertion Sort for large arrays that aren’t “almost sorted”.


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}
console.log("insertion sort", insertionSort(arr))


//__________________________
//merge sort is a divide and conquer algorithm that works by dividing the array into two halves, sorting each half, and then merging the sorted halves.
//merge sort is a stable sort, meaning that the order of equal elements is maintained.
//merge sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
//merge sort is always an O(n log n) algorithm, meaning that it is a consistent running time, aka logarithmic time, to sort an array of size n.
//most efficient sorting algorithms for sorting large arrays
//use for Linked Lists, large lists, inPlaceMergeSort
//not in-place because needs a temp auxiliary array

function merge_sort(arr) {
  if (arr.length < 2) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  const sortedLeft = merge_sort(left)
  const sortedRight = merge_sort(right)

  return merge(sortedLeft, sortedRight)
}

function merge(left, right) { 
  let result = []
  let n = left.length - 1
  let m = right.lenth - 1

  while (n < m) {
    if (n[0] < m[0]) {
      result.push(n.shift())
    } else {
      result.push(m.shift())
    }
  }
  return result.concat(n, m)
}

console.log("merge sort", merge_sort(arr))


//____________
//hoare's partition is a process that divides an array into two parts, one part containing elements less than or equal to the pivot, and one part containing elements greater than the pivot.
//the pivot is the middle element of the array.
//the partition process is repeated recursively on the two parts.
//inversion, when a pair of elements, one greater than the pivot and one smaller than the pivot, are in the wrong order


function hoarePartition(arr, start, end) {

    //pivot should be random
    const pivot = arr[Math.floor((start+end) / 2)];

    //loop through array until start index is less than end index
    while (start <= end) {

      //increment start index until there is an element greater than the pivot
      while (arr[start] < pivot) {
        start++
      }
      //decrement the end index until there is an element less than pivot
      while (arr[end] > pivot) {
        end--
      }

      //swap the inverted elements at start and end, then increment and decrement respectively
      if (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
    
    //use start to find the partitions
    return start;
}

//_______________________
//quicksort is a divide and conquer algorithm that works by selecting a pivot element, partitioning the array into two subarrays, and recursively sorting the subarrays.
//quicksort is a stable sort, meaning that the order of equal elements is maintained.
//quicksort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
//quicksort is an O(n log n) algorithm, meaning that it requires logarithmic time to sort an array of size n.



function quick_sort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const index = hoarePartition(arr, start, end)
    quick_sort(arr, start, index - 1)
    quick_sort(arr, index, end)
  }
  return arr;
}
console.log("quick sort", quick_sort(arr, 0, arr.length - 1))





//____________
//lomuto partition is a process that divides an array into two parts, one part containing elements less than or equal to the pivot, and one part containing elements greater than the pivot.
//the pivot is the last element of the array.
//the partition process is repeated recursively on the two parts.
//inversion, when a pair of elements, one greater than the pivot and one smaller than the pivot, are in the wrong order



function lomutoPartition(arr, lowerboundIndex, upperboundIndex)  {

  pivot = arr[lowerboundIndex]

  //currentIndex stores the position to swap with
  currentIndex = lowerboundIndex

  //loop through the array
  for (let i = lowerboundIndex + 1; i <= upperboundIndex; i++) {
    if (arr[i] < pivot) {
      currentIndex++
      swap(arr[i], arr[currentIndex])
    }
  }
  swap(pivot, arr[currentIndex])

  return currentIndex;

}

//____________
//heap sort 
//heap sort is a comparison sort that works by repeatedly swapping the largest element in the heap with the last element in the heap.
//the largest element "bubbles" to the top. This is repeated until the heap is sorted.
//heap sort is a stable sort, meaning that the order of equal elements is maintained.
//heap sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
//heap sort is an O(n log n) algorithm, meaning that it requires logarithmic time to sort an array of size n.


// Time Complexity
// Heap sort is a comparison sort, meaning that it works by comparing adjacent elements and swapping them if they are in the wrong order.
// Heap sort is a stable sort, meaning that the order of equal elements is maintained.
// Heap sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.
// Heap sort is an O(n log n) algorithm, meaning that it requires logarithmic time to sort an array of size n.

// Space Complexity
// Heap sort is an in-place sort, meaning that it does not require any additional memory to store the sorted elements.



function heap_sort(arr) {
  //build max heap
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i)
  }

  //work backwards, moving max elements to the end of the arr
  for (let i = arr.length - 1; i >= 0; i--) {
    //max element of unsorted section of arr is at index 0, swap with element at last index in unsorted arr
    swap(arr, 0, i);

    //reheapify arr, from beginning to the end of the unsorted section
    heapify(arr, 0, i);
  }
  return arr
}
function heapify(arr, index, length = arr.length) {
  let largest = index
  let left = index * 2 + 1
  let right = index * 2 + 2

  //comare element to its left and right child
  if (left < length && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right
  }

  //if the parent node isn't the largest element, swap with the largest child
  if (largest !== index) {
    swap(arr, index, largest)

    //continue to heapify down
    heapify(arr, largest, length)
  }

  return arr;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
console.log("heap sort", heap_sort(arr))


//----------------------------
//counting sort is a non-comparative integer sorting algorithm that sorts data with integer keys by counting the number of occurrences of each unique key.
//the time complexity depends on the number of unique elements in the array, n and the length of input array
//out performns merge sort and quick sort
//isn't comparison-based, which is more flexible, so not great for strings or floating point numbers
//average time complexity 0(n+k)
//space complexity 0(n+k)
//out of place
//stable

function counting_sort(arr) {

  //Find out the maximum element from the array and store it in a variable 
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let range = max - min + 1

   ////Create a temporary with 0 zero value 
  //as the same length of max element + 1
  let count = new Array(range).fill(0)
  let output = new Array(arr.length)

  //Count the frequency of each element in the original array
  //And store it in temp array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++
  }

  //Update the count based on the previous index
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }

  //Output arr
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i]
    count[arr[i] - min]--
  }

  return output
}

console.log("counting sort", counting_sort(arr))

//___________________
//Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value.  
//the time complexity depends on the number of digits in the longest number, k and the length of input array
//out performs merge sort and quick sort
//isn't comparison-based, which is more flexible, so not great for strings or floating point numbers
//average time complexity 0(kn)
//space complexity 0(d+n)
//out of place
//stable


function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) { 
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

function radix_sort(arr) {
  let maxDigitCount = mostDigits(arr)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      digitBuckets[digit].push(arr[i])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}

console.log("radix sort", radix_sort(arr))

