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
    let p1 = obj[s[i]];
    let p2 = obj[s[i + 1]];
    if (p1 < p2) {
      total -= p1;
    } else {
      total += p1;
    }
  }
  return total;
};

console.log(romanToInt("III"));
