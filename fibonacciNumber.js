//Given a number n, find the n-th Fibonacci Number.
//2nd Fibonacci Number is the sum of the 0th and 1st Fibonacci Number = 0 + 1 = 1.
// In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1 and F(n) = F(n − 1) + F(n − 2) for n > 1.

let n = 2;


//TIME OPTIMIZED .04sec

function find_fibonacci(n, b1 = 0, b2 = 1) {
    if (n===0) return b1
    else return find_fibonacci(n-1, b2, b1+b2)
}

//MEMORY OPTIMIZED 35.66 mb
// function find_fibonacci(n) {
//     const memo = [0, 1, -1];
    
//     for (let i = 2; i <= n; i++) {
//         memo[i % 3] = memo[(i - 1) % 3] + memo[(i - 2) % 3];
//     }
    
//     return memo[n % 3];
// }



console.log(find_fibonacci(n));