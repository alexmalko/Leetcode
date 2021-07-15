var trailingZeroes = function (n) {
  let result = 0;
  while (n > 0) {
    result += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }
  return result;
};

console.log(trailingZeroes(10));
