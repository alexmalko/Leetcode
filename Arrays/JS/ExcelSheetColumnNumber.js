var titleToNumber = function (columnTitle) {
  let sum = 0,
    exp = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    sum += (columnTitle[i].charCodeAt() % 64) * 26 ** exp;
    exp++;
  }

  return sum;
};

console.log(titleToNumber("ABB"));
