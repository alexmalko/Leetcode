function matrixSum(arr) {
  let n = arr.length - 1,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i] + arr[i][n - i];
  }
  if ((n + 1) % 2 === 1) {
    sum -= arr[n / 2][n / 2];
  }
  return sum;
}

console.log(
  matrixSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
