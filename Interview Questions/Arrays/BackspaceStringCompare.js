var backspaceCompare = function (s, t) {
  s = parseString(s);
  t = parseString(t);
  return s === t;
  function parseString(string) {
    let count = 0,
      stack = [];
    while (count < string.length) {
      if (string[count] == "#") {
        stack.pop();
      } else {
        stack.push(string[count]);
      }
      count++;
    }
    return stack.join("");
  }
};

console.log(backspaceCompare("ab#c", "ad#c"));
