var isHappy = function (n) {
  let seen = new Set();
  while (n != 1) {
    sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);
      n = Math.floor((n /= 10));
    }
    if (seen.has(sum)) {
      return false;
    }
    seen.add(sum);
    n = sum;
  }
  return true;
};

console.log(isHappy(19));
