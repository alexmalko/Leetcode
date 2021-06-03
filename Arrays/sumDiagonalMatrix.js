/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let N = mat.length;

  for (let i = 0; i < N; i++) {
    if (i == N - 1 - i) sum += mat[i][i];
    else sum += mat[i][i] + mat[i][N - 1 - i];
  }
  return sum;
};
console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
