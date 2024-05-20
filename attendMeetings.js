// Given a list of meeting intervals where each interval consists of a start and an end time, check if a person can attend all the given meetings such that only one meeting can be attended at a time.
// A new meeting can start at the same time the previous one ended.
// hint: use a timeline and map out times to look for overlaps

let intervals = [
    [1, 5],
    [5, 8],
    [10, 15]
    ]

//TIME OPTMIZED
// function can_attend_all_meetings(intervals) {
//     // Write your code here.
//     //sort intervals where all start times are in order....
//         intervals.sort((c, d) => c[0] - d[0]);
//     for(let x = 0; x < intervals.length - 1; x++){
//         if(intervals[x][1] > intervals[x+1][0]){
//             return 0;
//         }
//     }
//     return 1;
// }


//MEMORY OPTIMIZED
function can_attend_all_meetings(intervals) {
    // sort by start time
    // if we might have 0min mtgs, then secondary sort by end time
    intervals.sort((a,b)=> a[0]-b[0]===0 ? a[1]-b[1]:a[0]-b[0])
    
    // for each mtg in sorted intervals
    for(let i=1;i<intervals.length;i++){ 
        if(intervals[i][0]<intervals[i-1][1]) return 0
    }
    // if i==0 continue
    // if interval[i][0]<interval[i-1][1]
    // return false
    
    // return true
    return 1
}

console.log(can_attend_all_meetings(intervals))