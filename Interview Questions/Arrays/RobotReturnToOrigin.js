function robot(s) {
  let UD = 0,
    LR = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "U") {
      UD++;
    } else if (s[i] === "D") {
      UD--;
    } else if (s[i] === "L") {
      LR++;
    } else {
      LR--;
    }
  }

  return UD === 0 && LR === 0;
}

console.log(robot("UD"));
