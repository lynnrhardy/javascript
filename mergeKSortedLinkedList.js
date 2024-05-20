//Given k linked lists where each one is sorted in the ascending order, merge all of them into a single sorted linked list.

//3 pointer pass
//min heaps to k sorted lists
//0(nk log k) time
//0(nk) space

//edge case if node is empty


/*
For your reference:
const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};
*/

let lists = [
    [1, 3, 5],
    [3, 4],
    [7]
    ]



//TIME OPTIMIZED

// const mergeList = (a, b) => {
//     const dummy = new LinkedListNode(0); //head: to handle edge case of empty list
//     let current = dummy; //tail
 
//repeatedly extract min element from heap and append to output list then increment pointer while minheap is not empty
//     while (a !== null && b !== null) {
//       if (a.value < b.value) {
//         current.next = a;
//         a = a.next;
//       } else {
//         current.next = b;
//         b = b.next;
//       }
//       current = current.next;
//     }
//     current.next = a || b;
//     return dummy.next;
//   };
  
//   function merge_k_lists(lists) {
//     if (lists.length === 0) {
//       return null;
//     }
  
//     while (lists.length > 1) {
//       const a = lists.shift();
//       const b = lists.shift();
//       const mergedAB = mergeList(a, b);
//       lists.push(mergedAB);
//     }
//     return lists[0];
//   };


//MEMORY OPTIMIZED
function merge_k_lists(lists) {
    let isRun = true
    const head = new LinkedListNode();
    let cur = head
    while(isRun){
        isRun = false;
        let lowIndex = -1
        let currentLow = new LinkedListNode(Number.MAX_SAFE_INTEGER);
        for(let i=0;i<lists.length;i++){
            if(lists[i]){
                isRun = true
                if(lists[i].value <= currentLow.value){
                    currentLow = lists[i]
                    lowIndex = i
                }
            }
        }
        if(isRun){
            cur.next = currentLow     //new LinkedListNode(currentLow.value)
            cur = cur.next
            lists[lowIndex] = currentLow.next;
            cur.next = null;
        }
        
    }
    return head.next;
}


console.log(merge_k_lists(lists))