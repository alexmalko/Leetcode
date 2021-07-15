var judgeCircle = function (moves) {
  let horizontal = 0;
  let vertical = 0;

  for (let move of moves) {
    if (move === "U") {
      vertical++;
    } else if (move) {
      vertical--;
    } else if (move === "L") {
      horizontal++;
    } else if (move === "R") {
      horizontal--;
    }
  }
  return horizontal === 0 && vertical === 0;
};

console.log(judgeCircle([1, 2, 3, 4, 5, 6]));
