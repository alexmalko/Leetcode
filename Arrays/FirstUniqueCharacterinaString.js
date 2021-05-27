var firstUniqChar = function (s) {
  let obj = {};
  for (const char of s) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"));
