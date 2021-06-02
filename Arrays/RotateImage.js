var rotate = function (matrix) {
  let n = matrix.length,
    temp;
  // transpose a matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // swap first and last index
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
  return matrix;
};

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(arr));
