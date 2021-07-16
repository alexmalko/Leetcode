// string as an input
// function reverseString1(str) {
//   if (str.length === 0) return "";
//   return reverseString1(str.slice(1)) + str[0];
// }

// console.log(reverseString1("hello"));

// array as an input
var reverseString = function (s) {
  function helper(left, right) {
    if (left < right) {
      temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      helper(left + 1, right - 1);
    }
  }
  helper(0, s.length - 1);
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
