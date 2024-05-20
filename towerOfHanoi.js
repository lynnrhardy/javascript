// Tower of Hanoi is a mathematical puzzle where we have three pegs and n disks. The objective of the puzzle is to move the entire stack to another peg, obeying the following simple rules:
// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.
// Given n denoting the number of disks in the first peg, return all the steps required to move all disks from the first peg to the third peg in minimal number of steps.

// Following steps:

// [1, 2] = Shift top disk of the first peg to top of the second peg.
// Picture after this step will be:
// First peg: 2 3 4
// Second peg: 1
// Third peg: Empty

// [1, 3] = Shift top disk of the first peg to top of the third peg.
// Picture after this step will be:
// First peg: 3 4
// Second peg: 1
// Third peg: 2

// Similarly after following remaining steps, the final configuration will be:
// First peg: Empty
// Second peg: Empty
// Third peg: 1 2 3 4

// Hence, our objective is achieved.

// Return a 2d integer array containing all the steps taken to move all n disks from the first peg to the third peg in minimal number of steps. Each row will have two integers denoting from peg and to peg, for example, if the ith row is [2, 3], then it means in this step, we moved the top disk on peg 2 to peg 3.

//DECREASE AND CONQUER
//time complexity O(2^n)
//space complexity O(n)

let n = 4;

//PSEUDOCODE
// function tower_of_hanoi(n, s, aux, d) {
//     // Write your code here.
//     let result = []
//      if (n===1) {
//          result.add({s, d})
//          return result
//      }
//      helper (n-1, s, d, aux);
//      result.add({s, d})

//      helper (n-1, aux, s, d);


//     return [];
// }


//TIME OPTIMIZED (.96SEC)
let s = 1;
let a = 2;
let d = 3;
let res = [];

function towner(n,s,aux,d){
     if(n < 1) return;
     towner(n-1, s, d, aux)
        res.push([s,d]);
     towner(n-1, aux, s ,d)
}

function tower_of_hanoi(n) {
   towner(n, s, a, d);
	return res;
}




//MEMORY OPTIMIZED (414MB)
// function tower_of_hanoi(n) {
//     const result = []
//     helper(n, 1, 2, 3, result)
//     return result
// }

// function helper(n, src, aux, dest, result) {
//     if (n === 1) {
//         result.push([src, dest]) 
//         return
//     }
    
//     helper(n - 1, src, dest, aux, result)
//     result.push([src, dest])
//     helper(n - 1, aux, src, dest, result)
// }
/*
Three pegs: src, dst, aux

discs must be from smallest to largest
no larger disc may appear on top of a smaller disc

move all disks from the first peg to the third peg in minimal number of steps

Strategy #1: Backtrack
-Find all possible routes to accomplish task

Base case:

- largest disk would have to be at the final destination
- all n-1 disks would need to be placed to the aux.
- 


time complex is exponential


                n   =1
            n-1                 n-1.  =4
        n-2    n-2         n-2    n-2.  = 8
    n-i. n-i                              ==16
n-(n-i)     n-(n-i)                         n-(n-i). ==2^n

*/


console.log(tower_of_hanoi(n));