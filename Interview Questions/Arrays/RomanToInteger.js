var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    num1 = obj[s[i]];
    num2 = obj[s[i + 1]];
    if (num1 < num2) {
      total -= num1;
    } else {
      total += num1;
    }
  }
  return total;
};

console.log(romanToInt("IX"));
