// Given some balls of three colors arranged in a line, rearrange them such that all the red balls go first, then green and then blue ones.
// Do rearrange the balls in place. A solution that simply counts colors and overwrites the array is not the one we are looking for.
// segregate any array consisting of 3 numbers in linear time complexity
// for arrays
// worst time complexity is O(n), space complexity is O(1)
// based on Quick Sort


balls = ["G", "B", "G", "G", "R", "B", "R", "G"]

//TIME OPTIMIZED
// function dutch_flag_sort(balls) {
//   var lowIdx = 0;
//   var midIdx = 0;
//   var highIdx = balls.length - 1;
//   var temp;
  
//   while (midIdx <= highIdx) {
//       if (balls[midIdx] > "G") {
//           temp = balls[midIdx];
//           balls[midIdx] = balls[lowIdx];
//           balls[lowIdx] = temp;
//           lowIdx++;
//           midIdx++;
//       } else if (balls[midIdx] < "G") {
//           temp = balls[midIdx];
//           balls[midIdx] = balls[highIdx];
//           balls[highIdx] = temp;
//           highIdx--;
//       } else {
//           midIdx++
//       }
//   }
  
//   return balls;
// }


//MEMORY OPTMIZED
// function swap(arr, start, end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
// }

// function dutch_flag_sort(balls) {
//   // ["G", "G", "B", "B", "R", "R"]
//   let start = 0;
//   let mid = 0;
//   let end = balls.length - 1;
//   while (mid <= end) {
//       if (balls[mid] === "R") {
//           swap(balls, start, mid);
//           start++;
//           mid++;
//       } else if (balls[mid] === "B") {
//           swap(balls, mid, end);
//           end--;
//       } else if (balls[mid] == "G") {
//           mid++;
//       }
//   }
//   return balls;
// }


//JOSH SEIDES PSEUDOCODE
//if blue, do nothing
//if white, swap with left most blue
//if red, swap twice, first with left most blue, second with left most white (constant amount of work)
//in constant time 0(1)
//two pointers, iterative, left to right
function solution(arr) {
  let red = 0
  let white = 0
  for i > [0, length(arr) -1]
    if arr[i] == "W"
      swap (arr[i], arr[white])
      white +=1
    else if arr [i] == "R"
      swap (arr[i], arr[white])
      swap (arr[white], arr[red])
    //pointer maintenance
    white +=1
    red +=1
  return arr
}

console.log(dutch_flag_sort(balls));

