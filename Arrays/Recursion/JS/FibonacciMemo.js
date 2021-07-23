let memo = {};
let fib = function (n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  if (memo[n]) {
    return memo[n];
  }
  let result = fib(n - 2) + fib(n - 1);
  memo[n] = result;
  return result;
};

console.log(fib(6));
