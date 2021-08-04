var isIsomorphic = function (s, t) {
  let obj1 = {},
    obj2 = {};
  for (let i = 0; i < s.length; i++) {
    console.log(obj1, obj2);
    if (obj1[s[i]] !== obj2[t[i]]) {
      return false;
    } else {
      (obj1[s[i]] = i), (obj2[t[i]] = i);
    }
  }
  return true;
};

console.log(isIsomorphic("paper", "title"));
