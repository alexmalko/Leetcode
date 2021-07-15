var isPalindrome = function (s) {
  // convert a string to a lower case and remove all of the special characters using regex
  s = s
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "");
  console.log(s);
  let beg = 0,
    end = s.length - 1;
  while (beg < end) {
    if (s[beg] !== s[end]) {
      return false;
    }
    beg++;
    end--;
  }

  //   for (let i = 0, j = s.length - 1; i < j; i++, j--) {
  //     if (s[i] !== s[j]) return false;
  //   }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
