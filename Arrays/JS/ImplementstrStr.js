var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  const lps = kmp(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; ) {
    if (haystack[i] === needle[j]) {
      if (j < needle.length - 1) {
        i++;
        j++;
      } else {
        return i - j;
      }
    } else if (haystack[i] !== needle[j]) {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
  }
  return -1;
};

var kmp = function (needle) {
  const lps = new Array(needle.length).fill(0);
  let j = 0;
  for (let i = 1; i < lps.length; ) {
    if (needle[i] !== needle[j]) {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    } else if (needle[i] === needle[j]) {
      lps[i] = j + 1;
      j++;
      i++;
    }
  }
  return lps;
};

console.log(strStr("hello", "ll"));
