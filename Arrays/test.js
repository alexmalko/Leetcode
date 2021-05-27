var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let par = s[i];
    if (par === "(") {
      stack.push(")");
    } else if (par == "{") {
      stack.push("}");
    } else if (par == "[") {
      stack.push("]");
    } else {
      if (stack.pop() !== par) {
        return false;
      }
    }
  }
  console.log(stack);
  return stack.length == 0;
};

console.log(isValid("(()))"));
