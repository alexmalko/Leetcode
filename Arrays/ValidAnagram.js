var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let obj = {};
  for (const char of s) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  for (const char of t) {
    if (obj[char]) {
      obj[char]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
