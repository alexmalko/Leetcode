var titleToNumber = function (columnTitle) {
  let result = 0,
    exp = 0;
  for (i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle[i].charCodeAt() % 64) * 26 ** exp;
    exp++;
  }
  return result;
};

console.log(titleToNumber("AB"));
