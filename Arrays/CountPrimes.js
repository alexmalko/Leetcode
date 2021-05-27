var countPrimes = function (n) {
  let primes = new Array(n).fill(true);
  (primes[0] = false), (primes[1] = false);
  for (let i = 2; i < n; i++) {
    console.log("i: " + i);
    for (let j = i ** 2; j < n; j += i) {
      console.log("j: " + i);
      primes[j] = false;
    }
  }

  let numberOfPrimes = 0;
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] === true) {
      numberOfPrimes++;
    }
  }
  return numberOfPrimes;
};

console.log(countPrimes(10));
