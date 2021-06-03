var diagonalSum = function (mat) {
  let sum = 0,
    n = mat.length - 1;
  for (let i = 0; i <= n; i++) {
    sum += mat[i][i] + mat[i][n - i];
    console.log(mat[i][n - i]);
  }
  if ((n + 1) % 2) {
    sum -= mat[n / 2][n / 2];
  }
  return sum;
};

// var diagonalSum = function (mat) {
//     let sum = 0;
//     for (let j = mat.length - 1, i = 0; j >= 0; j--, i++) {
//       sum += mat[i][j] + mat[i][i];
//     }
//     if (mat.length % 2 !== 0) {
//       return sum - mat[(mat.length - 1) / 2][(mat.length - 1) / 2];
//     }
//     return sum;
//   };

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(mat));
