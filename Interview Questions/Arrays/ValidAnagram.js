function anagram(s, t) {
  if (s.length !== t.length) return false;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  console.log(obj);

  for (let i = 0; i < t.length; i++) {
    console.log(obj[t[i]]);
    if (obj[t[i]]) {
      obj[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(anagram("aacc", "ccac"));
