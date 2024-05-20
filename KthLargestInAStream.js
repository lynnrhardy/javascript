//Given an initial list along with another list of numbers to be appended with the initial list and an integer k, return an array consisting of the k-th largest element after adding each element from the first list to the second list.
//The stream can contain duplicates.

let k = 2
let initial_stream = [4, 6]
let append_stream = [5, 2, 20]

//TIME OPTIMIZED .13 execution time

function kth_largest(k, initial_stream, append_stream) {
    // Write your code here.
    /*
        we can sort given array and keep track of k elements in a new array and as new elements
        come we can compare it with kth largest element and remove smallest and insert this if 
        new number is greater than kth element
        
        since efficient solution is to use min heap.
        -> sort the initial_stream
        -> inset k elements into min heap
        -> for every new element, if new value < peek value ignore
        -> else, removeMax and insert new value
        -> methods to implement on min heap
            -> peek
            -> buildheap using sorted array sliced to k to arr.length
                ->siftDown
            ->insert
                ->siftup
            ->removeMin
    */

    let heap = new MinHeap();
    for(let i=0; i < initial_stream.length; i++) {
        heap.insert(initial_stream[i]);
        if(heap.heap.length > k) {
            heap.extractMin();
        }
    }
    let results = [];
    for (let i=0; i < append_stream.length; i++) {
        if (heap.heap.length !== k) {
            heap.insert(append_stream[i]);
        }
        else if (append_stream[i] > heap.peek()) {
            heap.insert(append_stream[i]);
            heap.extractMin();
        }
        results.push(heap.peek());

    }
    return results;
}

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

class MinHeap {
    constructor(arr = []) {
        this.heap = this.buildHeap(arr);
    }
    
    buildHeap(arr) {
        /* Find last parent and iterate through all parents and siftDown*/
        let lastParent = Math.floor((arr.length - 1 - 1) /2);
        for (let i=lastParent; i>=0; i--) {
            this.siftDown(i, arr.length - 1, arr);
        }
        return arr;
    }
    
    siftDown(currentIndex, endIndex, arr) {
        let childOne = 2 * currentIndex + 1;

        while(childOne <= endIndex) {
            let childTwo = currentIndex * 2 + 2 <= endIndex ?  currentIndex * 2 + 2 : -1;
            let smallest = (childTwo != -1 && arr[childTwo] < arr[childOne]) ? childTwo : childOne;
            if (arr[currentIndex] > arr[smallest]) {
                swap(arr, currentIndex, smallest);
                currentIndex = smallest;
                childOne = currentIndex * 2 + 1;
            }else {
                break;
            }
        }
    }
    
    peek() {
        return this.heap[0];
    }
    
    insert(value) {
        this.heap.push(value);
        this.siftUp();
    }
    
    siftUp() {
        /* 
        From lastIndex get parent of index and 
        make sure parent is greater than child until index === 0 || parent < value
        */
        let childIndex = this.heap.length - 1;
        let parentIndex = Math.floor((childIndex - 1 )/ 2);
        while (childIndex > 0 && this.heap[parentIndex] > this.heap[childIndex]) {
            swap(this.heap, parentIndex, childIndex);
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1)/2);
        }
        
    }
    
    extractMin() {
        swap(this.heap, 0, this.heap.length - 1);
        const val = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return val;
    }
}


//MEMORY OPTIMIZED 62.32 MB
// function kth_largest(k, initial_stream, append_stream) {
//     let size = 0;
//     const pq = buildPQ(initial_stream);
//     let result = [];
//     for (let i = 0; i < append_stream.length; i++) {
//         let root = add(append_stream[i]);
//         result.push(root);
//     }
//     return result;
//     function add(n) {
//         if (size < k) {
//             pq[size++ - 1] = n;
//             heapifyUp(pq);
//         } 
//         else if (n > pq[0]) {
//             pq[0] = n;
//             heapifyDown(pq, 0);
//         }
//         return pq[0];
//     }
    
//     function buildPQ(arr) {
//         let newPQ = new Array(k);
//         for (let i = 0; i < arr.length; i++) {
//             if (i <= k - 1) {
//                 newPQ[i] = arr[i];
//             }
//             else if (arr[i] > newPQ[0]) {
//                 newPQ[0] = arr[i];
//                 heapifyDown(newPQ, 0);
//             }
//             size++;
//             heapifyUp(newPQ, i);
//         }
//         return newPQ;
//     }
    
//     function heapifyUp(heap, i = size - 1) {
//         const parent = idx => Math.floor((idx - 1) / 2);
//         let current = i;
//         while (current >= 1 && heap[parent(current)] > heap[current]) {
//             swap(heap, current, parent(current));
//             current = parent(current);
//         }
//     }
    
//     function heapifyDown(heap, i = 0) {
//         let left = (2 * i) + 1, right = left + 1, minimum = i;
//         if (left < size && heap[left] < heap[minimum]) {
//             minimum = left;
//         }
//         if (right < size && heap[right] < heap[minimum]) {
//             minimum = right;
//         }
//         if (minimum !== i) {
//             swap(heap, minimum, i);
//             heapifyDown(heap, minimum);
//         }
//     }
    
//     function swap(arr, i, j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// }


console.log(kth_largest(k, initial_stream, append_stream));