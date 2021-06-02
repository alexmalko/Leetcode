var reverseString = function (s) {
  let beg = 0,
    end = s.length - 1,
    temp;
  while (beg < end) {
    temp = s[beg];
    s[beg] = s[end];
    s[end] = temp;
    beg++;
    end--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "O"]));
