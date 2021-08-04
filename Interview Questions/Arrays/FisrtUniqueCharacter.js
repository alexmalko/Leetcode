function unique(s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  for (const e in obj) {
    if (obj[e] === 1) {
      return s.indexOf(e);
    }
  }

  return -1;
}

console.log(unique("leetcode"));
