// using splice => splice argument = index where to insert, how many items to delete, what to insert
function duplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
}

console.log(duplicate([1, 0, 2, 3, 0, 6, 5, 0]));

// [1, 0, 0, 2, 3, 0, 0, 6];

// // createing new array
// function duplicate(arr) {
//   let result = [],
//     index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       result.push(0);
//       index++;
//       result.push(0);
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   arr = result.slice(0, arr.length);
//   return arr;
// }

// console.log(duplicate([1, 0, 2, 3, 0, 4, 5, 0]));
