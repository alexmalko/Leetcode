var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n));
  console.log(dp);

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row == 0 || col == 0) {
        dp[row][col] = 1;
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
