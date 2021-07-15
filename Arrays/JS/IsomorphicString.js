const isIsomorphic = function (s, t) {
  const hash1 = {};
  const hash2 = {};
  for (let idx = 0; idx < s.length; idx++) {
    if (hash1[s[idx]] !== hash2[t[idx]]) return false;
    hash1[s[idx]] = idx;
    hash2[t[idx]] = idx;
  }
  return true;
};

let s = "paper",
  t = "title";

console.log(isIsomorphic(s, t));
