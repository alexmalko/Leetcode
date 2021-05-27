var maximumWealth = function (accounts) {
  let sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    let max = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      //   console.log(accounts[i][j]);
      max += accounts[i][j];
      if (max > sum) {
        sum = max;
      }
    }
  }
  return sum;
};

console.log(maximumWealth([1, 2, 3], [3, 2, 1]));
