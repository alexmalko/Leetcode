var reverse = function (x) {
  let negative = x < 0 ? -1 : 1;
  let output = 0;
  x = Math.abs(x);
  let remainder;

  while (x > 0) {
    remainder = x % 10;
    output = output * 10 + remainder;
    x = Math.floor(x / 10);
    console.log(x);
  }
  if (output > Math.pow(2, 31)) return 0;
  return output * negative;
};

console.log(reverse(123));
