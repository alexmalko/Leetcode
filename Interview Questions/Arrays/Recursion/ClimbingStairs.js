// recursive with memoization
let memo = {};
var climbStairs = function (n) {
  if (n < 2) return 1;
  if (memo[n]) {
    return memo[n];
  }
  let result = climbStairs(n - 2) + climbStairs(n - 1);
  memo[n] = result;
  return result;
};

console.log(climbStairs(40));
