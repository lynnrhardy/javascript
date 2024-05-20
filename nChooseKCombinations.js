//Given two integers n and k, find all the possible unique combinations of k numbers in range 1 to n.

let n = 5
let k = 2

// let n = 6
// let k = 6

//TIME OPTIMIZED
function find_combinations(n, k) {
    let result = []
    let nums = []
    for (let num = 1; num <= n; num++) {
        nums.push(num)
    }
    combinationsHelper(nums, k, 0, [], result)
    return result;
}

function combinationsHelper(s, target, i, slate, results) {
    if (slate.length === target) {
        results.push([...slate])
        return
    }
    if (i === s.length) {
        return
    }
    slate.push(s[i])
    combinationsHelper(s, target, i + 1, slate, results)
    slate.pop()
    combinationsHelper(s, target, i + 1, slate, results)
}


//MEMORY OPTIMIZED
// function find_combinations(n, k) {
//     let result = [];
//     function helper(i, slate) {
//         if(slate.length===k) {
//             result.push(slate)
//             return
//         }
//         if(i === n + 1) {
//             return
//         }
        
//         //Include
//         slate.push(i)
//         helper(i+1, [...slate])
//         slate.pop()
//         //Exlude
//         helper(i+1, slate)
//     }
//     helper(1, [])
//     return result;
// }



console.log(find_combinations(n, k))