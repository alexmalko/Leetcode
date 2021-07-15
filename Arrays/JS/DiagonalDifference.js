var difference = function (arr) {
  let left = 0,
    right = 0,
    n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    left += arr[i][i];
    right += arr[i][n - i];
  }
  return Math.abs(left - right);
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(difference(mat));
