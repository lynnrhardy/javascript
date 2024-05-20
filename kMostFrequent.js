// Given a number and a list of words, return the given number of most frequent words.
// Every word consists of only lowercase English letters.
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.




let k = 4
let words = ["car", "bus", "taxi", "car", "driver", "candy", "race", "car", "driver", "fare", "taxi"]

//TIME OPTIMIZED
function k_most_frequent(k, words) {
    words.sort();
    let temp = [];
    let prevWord = null;
    for (let i = 0; i<words.length;i++) {
        if (words[i] === prevWord) {
            temp[temp.length -1].push(words[i]);
        } else {
            temp[temp.length] = [words[i]];
            prevWord = words[i];
        }
    }

    return temp.sort((a, b) => b.length - a.length)
                .slice(0, k)
                .map((item)=> item[0]);
}


//MEMORY OPTIMIZED
// function k_most_frequent(k, words) {
//     let map = new Map();
    
//     for (let word of words) {
//         if (map.has(word)) {
//             map.set(word, map.get(word)+1);
//         } else {
//             map.set(word, 1);
//         }
//     }
//     let arr = new Array();
//     for (let key of map.keys()) {
//         arr.push(key);
//     }
    
//     arr.sort();
//     arr.sort((a,b) => map.get(b) - map.get(a))
//     return arr.slice(0,k)
// }

console.log(k_most_frequent(2, ["i", "love", "leetcode", "i", "love", "coding"]));
