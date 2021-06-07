// recursive with memoization
function climbStairs(n) {
  let cache = {};

  function helper(n) {
    if (n == 0 || n == 1) {
      return 1;
    }
    if (!cache[n]) {
      cache[n] = helper(n - 1) + helper(n - 2);
    }
    return cache[n];
  }
  return helper(n);
}

console.log(climbStairs(4));
