var reverseBits = function (n) {
  let string = n.toString();
  console.log(string);
  let start = 0,
    end = string.length - 1;
  console.log(string[start], string[end]);
};

console.log(reverseBits(000000101));
