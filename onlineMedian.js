// Given a list of numbers, the task is to insert these numbers into a stream and find the median of the stream after each insertion. If the median is a non-integer, consider it’s floor value.
// The median of a sorted array is defined as the middle element when the number of elements is odd and the mean of the middle two elements when the number of elements is even.

let stream = [3, 8, 5, 2]

//TIME OPTIMIZED .10 SEC
// function online_median(stream) {

//     class MinHeap {
//         constructor() {
//             this.arr = [ ];
//         }

//         insert(num){
//             this.arr.push(num);
//             let i = this.arr.length - 1;
//             while (i > 0) {
//                 let parentIndex = Math.floor((i-1)/2);
//                 if (this.arr[parentIndex] > this.arr[i]) {
//                     let temp = this.arr[parentIndex];
//                     this.arr[parentIndex] = this.arr[i];
//                     this.arr[i] = temp;
//                     i = parentIndex;
//                 } else {
//                     break;
//                 }                
//             }
//         }

//         extract() {

//                 let min = this.arr[0];
//                 let end = this.arr.pop();
//                 this.arr[0] = end;
//                 let i = 0;                
//                 while (true)  {
//                     let leftIndex = 2*i + 1;
//                     let rightIndex = 2*i + 2;
//                     let swap = null;

//                     if (leftIndex < this.arr.length) {
//                         if (this.arr[leftIndex] < end) {
//                             swap = leftIndex;
//                         }
//                     }
//                     if (rightIndex < this.arr.length) {
//                         if ((swap === null && this.arr[rightIndex] < end) || (swap !== null && this.arr[leftIndex] > this.arr[rightIndex])) {
//                             swap = rightIndex;
//                         }
//                     }

//                     if (swap === null) {
//                         break;
//                     }

//                     this.arr[i] = this.arr[swap];
//                     this.arr[swap] = end;
//                     i = swap;
//                 }
                
//                 return min;
//         }
//     }
    
//     // Initialize the minheap and maxheap
//     let minH = new MinHeap();
//     let maxH = new MinHeap();
//     let result = [];
    
//     if (stream.length === 0) {
//         return result;
//     }
    
//     let median = stream[0];
//     minH.insert(median);
//     result.push(median);
    
//     // Loop through the stream
//     for (let i = 1; i < stream.length; i++) {
//         if (stream[i] >= median) { // If the number is larger than median, it will go to min heap
//             minH.insert(stream[i]);
            
//             if (minH.arr.length - maxH.arr.length == 2) { // If min heap has over two elements than max heap, move the median to max heap
//                 maxH.insert(-1 * minH.extract()); // Need to reverse the sign of the number when inserting into maxH
//             }
//         } else { // If the number is smaller than median, it will go to max heap (with reverse sign)
//             maxH.insert(-1 * stream[i]);
            
//             if (maxH.arr.length - minH.arr.length == 2) { // If max heap has over two elements than min heap, move the median to min heap after reversing the sign
//                 minH.insert(-1 * maxH.extract());
//             }
//         }
        
//         if ((minH.arr.length + maxH.arr.length) % 2 == 0) { // If total number is even, median is the average of two roots
//             median = Math.floor((minH.arr[0] + (-1 * maxH.arr[0])) / 2);
//         } else if (minH.arr.length > maxH.arr.length) { // If min heap has more numbers, median should be root of min heap
//             median = minH.arr[0];
//         } else { // If max heap has more numbers, median should be root of max heap after reversing the sign
//             median = -1 * maxH.arr[0];
//         }
        
//         result.push(median);  
//     }
    
//     return result;
// }

//MEMORY OPTIMIZED 58.27 MB
class MinHeap {
     
    constructor(array = []) {
        this.heap = this.buildHeap(array);
        this.length=0;
    }
    
    buildHeap(array) {
        let firstParentIndex = Math.floor((array.length-1-1)/2);
        for(let currentIndex = firstParentIndex; currentIndex >=0; currentIndex--) {
            this.siftDown(currentIndex, array.length-1, array);
        }
        return array;
    }
    
    siftDown(currentIndex, endIndex, heap) {
        let childOneIndex = currentIndex * 2 + 1;
        while(currentIndex <= endIndex) {
            let childTwoIndex = currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
            let idxToSwap;
            if(childTwoIndex != -1 && heap[childTwoIndex] < heap[childOneIndex]) {
                idxToSwap = childTwoIndex
            } else {
                idxToSwap = childOneIndex;
            }
            if(heap[currentIndex] > heap[idxToSwap]) {
               this.swap(currentIndex, idxToSwap, heap);
               currentIndex = idxToSwap;
               childOneIndex = currentIndex * 2 + 1;
            } else {
                break;
            }
        }
    }
    
    
    siftUp(currentIndex, heap) {
        let parentIndex = Math.floor((currentIndex-1)/2);
        while(currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
            this.swap(currentIndex, parentIndex, heap);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex-1)/2);
        }
    }
    
    peek() {
        return this.heap[0];
    }
    
    remove() {
        this.swap(0, this.heap.length-1, this.heap);
        let valueToRemove = this.heap.pop();
        this.length--;
        this.siftDown(0, this.heap.length-1, this.heap);
        return valueToRemove;
    }
    
    insert(value) {
        this.heap.push(value);
        this.length++;
        this.siftUp(this.heap.length-1, this.heap)
    }
    
    size() {
       return this.length;
   }
    
    swap(i, j, heap) {
        let temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
    
}

class MaxHeap {
    
         constructor(array =[]) {
        this.heap = this.buildHeap(array);
        this.length=0;
    }
    
    buildHeap(array) {
        let firstParentIndex = Math.floor((array.length-1-1)/2);
        for(let currentIndex = firstParentIndex; currentIndex >=0; currentIndex--) {
            this.siftDown(currentIndex, array.length-1, array);
        }
        return array;
    }
    
    siftDown(currentIndex, endIndex, heap) {
        let childOneIndex = currentIndex * 2 + 1;
        while(currentIndex <= endIndex) {
            let childTwoIndex = currentIndex * 2 + 2 <= endIndex ? currentIndex * 2 + 2 : -1;
            let idxToSwap;
            if(childTwoIndex != -1 && heap[childTwoIndex] > heap[childOneIndex]) {
                idxToSwap = childTwoIndex
            } else {
                idxToSwap = childOneIndex;
            }
            if(heap[currentIndex] < heap[idxToSwap]) {
               this.swap(currentIndex, idxToSwap, heap);
               currentIndex = idxToSwap;
               childOneIndex = currentIndex * 2 + 1;
            } else {
                break;
            }
        }
    }
    
    siftUp(currentIndex, heap) {
        let parentIndex = Math.floor((currentIndex-1)/2);
        while(currentIndex > 0 && heap[currentIndex] > heap[parentIndex]) {
            this.swap(currentIndex, parentIndex, heap);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex-1)/2);
        }
    }
    
    peek() {
        return this.heap[0];
    }
    
    remove() {
        this.swap(0, this.heap.length-1, this.heap);
        let valueToRemove = this.heap.pop();
        this.length--;
        this.siftDown(0, this.heap.length-1, this.heap);
        return valueToRemove;
    }
    
    insert(value) {
        this.heap.push(value);
        this.length++;
        this.siftUp(this.heap.length-1, this.heap)
    }
    
    size() {
       return this.length;
   }
    
    swap(i, j, heap) {
        let temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
    
    
}


function online_median(stream) {
   // Write your code here.
   let minHeap = new MinHeap();
   let maxHeap = new MaxHeap();
   let result = [];
   
   for(let i = 0; i<stream.length; i++) {
       if(maxHeap.size()>0 && stream[i]<maxHeap.peek()) {
           maxHeap.insert(stream[i]);
       } else {
           minHeap.insert(stream[i]);
       }
       
       if(maxHeap.size() > minHeap.size()) {
           minHeap.insert(maxHeap.remove());
       } else if (minHeap.size()>maxHeap.size()+1) {
           maxHeap.insert(minHeap.remove());
       }
       
       if(minHeap.size() > maxHeap.size()) {
           result.push(minHeap.peek());
       } else {
           result.push(Math.floor((minHeap.peek()+maxHeap.peek())/2));
       }
   }
   
   return result;
}



console.log(online_median(stream));