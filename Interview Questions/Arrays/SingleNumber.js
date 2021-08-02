var singleNumber = function (str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let value in obj) {
    if (obj[value] === 1) {
      return value;
    }
  }
  return obj;
};
