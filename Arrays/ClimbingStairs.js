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

// // no memoization
// var climbStairs = function (n) {
//   let cache = {};
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   if (!cache[n]) {
//     cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
//   }
//   return cache[n];
// };

// // no memoization
// var climbStairs = function (n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

// // iterative
// function climbStairs(n) {
//   let result = [1, 1];
//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 2] + result[i - 1]);
//   }
//   return result[n];
// }

console.log(climbStairs(4));
