var maxProfit = function (prices) {
  max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      max += prices[i + 1] - prices[i];
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// var maxProfit = function (prices) {
//   let total = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < prices[i + 1]) {
//       total += prices[i + 1] - prices[i];
//     } else {
//       continue;
//     }
//   }
//   return total;
// };
