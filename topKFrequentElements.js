//Given an integer array and a number k, find the k most frequent elements in the array.
//If multiple answers exist, return any.
// The order of numbers in the output array does not matter.

// let arr = [1, 2, 3, 2, 4, 3, 1]
// let k = 2

let arr =  [1, 2, 1, 2, 3, 1]
let k = 1

//TIME OPTIMIZED
// function find_top_k_frequent_elements(arr, k) {
//     let result = []
     
//      let hMap = {}
//      for (let val of arr) {
//          hMap[val] = (hMap[val] || 0) + 1
//      }
     
//      const unique = [...new Set(arr)]
     
//      let sorted = unique.sort((a,b) => hMap[a] - hMap[b])
     
//      for (let i=unique.length-k; i<unique.length; i++) {
//          result.push(unique[i])
//      }
//      return result;
//  }


//MEMORY OPTIMIZED

function find_top_k_frequent_elements(arr, k) {
    let result = [];
    let hmap ={};
    //build the frequency map
    for (let val of arr){
        hmap[val] = (hmap[val] || 0) + 1;
    }

    // build a unique array;
    const unique = [...new Set(arr)];
    

    function helper(A, start, end, index) {
        //base case
        if (start === index) {
            return;
        }
        let pivot = Math.floor(Math.random() * (end-start) + start);
        swap(unique,start,pivot);

        let orange = start;
        for (let green = orange + 1; green<=end; green++) {
            //compare the frequency
            if (hmap[A[green]] <= hmap[A[start]]){
                orange++;
                swap(A, orange, green);
            }

        }
        swap(A, orange, start);
        //lucky case
        if (index === orange) {
            return;
        } else if ( orange<index) {
            helper(A, orange+1, end, index);
        } else {
            helper(A, start, orange-1, index);
        }
    }
    helper(unique, 0, unique.length-1, unique.length - k);
    for (let j = unique.length - k; j < unique.length; j++){
        result.push(unique[j]);
    }
    return result;

}

const swap = (A, i, j) => {
    [A[i], A[j]] = [A[j], A[i]];
}



console.log(find_top_k_frequent_elements(arr, k)) 