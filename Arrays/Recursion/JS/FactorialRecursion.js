// function fact(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return fact(n - 1) * n;
// }

// console.log(fact(100));

let memo = {};

function factMemo(n) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  let ans = factMemo(n - 1) * n;
  memo[n] = ans;
  return ans;
}

console.log(factMemo(6));
console.log(memo);
