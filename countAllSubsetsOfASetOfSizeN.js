//Given a number denoting the size of a set, count the number of unique subsets of that set.
//If we have a set {1, 2, 3}, then all the possible subsets are: {}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}.
//count emty subsets

let n = 3;

function count_all_subsets(n) {
    if (n == 0) {
        return 1;
    } else {
        return 2 * count_all_subsets(n - 1);
    }

}

console.log(count_all_subsets(n));