// var isPowerOfThree = function (n) {
//   while (n > 1) {
//     if (n % 3 === 0) {
//       n /= 3;
//     } else break;
//   }
//   return true;
// };

var isPowerOfThree = function (n) {
  if (n === 0 || n < 0) return false;
  while (n > 1) {
    console.log(n);
    if (n % 3 === 0) {
      n /= 3;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPowerOfThree(27));
