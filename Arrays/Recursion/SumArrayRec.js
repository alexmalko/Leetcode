let arr = [1, 2, 3, 4, 5, 6];

function add(arr) {
  if (arr.length == 1) return arr[0]; // base case
  return arr[0] + add(arr.slice(1)); // recurse
}
console.log(add(arr));
