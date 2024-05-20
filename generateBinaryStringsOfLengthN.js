//Given a number n, generate all possible binary strings of length n.
// A string consisting of only 0s and 1s is called a binary string.
// Return the output list in any order.

let n = 3

//TIME OPTIMIZED (.09 SEC)
// function get_binary_strings(n) {
//     let res = []
//     function helper(slate, n){
//         if (n === 0){
//             res.push(slate)
//         } else {
//             helper(slate+"0", n-1)
//             helper(slate+"1", n-1)
//         }
//     }
//     helper("", n)
//     return res
// }

//MEMORY OPTIMIZED (53.87MB)

/*
Asymptotic complexity in terms of input `n`:
* Time: O(n * 2^n).
* Auxiliary space: O(n).
* Total space: O(n * 2^n).
*/


function get_binary_strings(n) {
    let result = [];
    
    function getStrings(i, str) {
         if (i === n) {
            result.push(str.join(''));
            return;
        }
        str[i] = '0';
        getStrings(i + 1, str);
        str[i] = '1';
        getStrings(i + 1, str);
        
    }
    
    getStrings(0, []);
    return result;
}


console.log(get_binary_strings(n))