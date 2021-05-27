var isPalindrome = function (x) {
  let string = x.toString();
  let beg = 0;
  let end = string.length - 1;
  let half = Math.floor(string.length / 2);
  console.log(half);
  for (let i = 0; i < half; i++) {
    if (string[beg] === string[end]) {
      end--;
      beg++;
    } else {
      return false;
    }
  }
  return true;
};

let x = 1000021;

console.log(isPalindrome(x));
