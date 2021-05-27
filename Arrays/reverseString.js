var reverseString = function (s) {
  let left = 0,
    right = s.length - 1,
    temp;
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "O"]));
