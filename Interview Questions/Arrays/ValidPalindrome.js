function palindrome(s) {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(palindrome("racecar"));
