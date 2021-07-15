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
  return stack.length == 0;
};

var isValid = function (s) {
  var stack = [];
  var map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else if (map[stack.pop()] !== s[i]) {
      return false;
    }
  }

  if (stack.length > 0) return false;
  else return true;
  // same as
  // return stack.length == 0;
};

console.log(isValid("()[]{}"));
