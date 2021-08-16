function difference(s, t) {
  let obj = {};

  for (let e of s) {
    if (obj[e]) {
      obj[e]++;
    } else {
      obj[e] = 1;
    }
  }

  for (let e of t) {
    if (obj[e]) {
      obj[e]--;
    } else {
      return e;
    }
  }
}

console.log(difference("abcdd", "abcde"));
