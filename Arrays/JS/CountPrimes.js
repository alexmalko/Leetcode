// const countPrimes = (n) => {
//   let count = 0;
//   const isPrime = Array(n).fill(true);
//   for (let i = 2; i < n; i++) {
//     if (isPrime[i]) {
//       count++;
//       for (let j = i ** 2; j < n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }
//   console.log(isPrime);
//   return count;
// };

var countPrimes = function (n) {
  let primes = new Array(n).fill(true);
  (primes[0] = false), (primes[1] = false);
  for (let i = 2; i < n; i++) {
    for (let j = i ** 2; j < n; j += i) {
      primes[j] = false;
    }
  }
  return primes;
  // let numberOfPrimes = 0;
  // for (let i = 0; i < primes.length; i++) {
  //   if (primes[i] === true) {
  //     numberOfPrimes++;
  //   }
  // }
  // return numberOfPrimes;
};

console.log(countPrimes(10));
