var maxProfit = function (prices) {
  let minPrice = Infinity,
    profit = 0;
  prices.forEach((e) => {
    if (minPrice > e) {
      minPrice = e;
    } else if (profit < e - minPrice) {
      profit = e - minPrice;
    }
  });
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
