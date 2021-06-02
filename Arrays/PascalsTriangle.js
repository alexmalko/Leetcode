var generate = function (numRows) {
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prev = result[i - 1];
    let curr = [];
    curr.push(1);
    for (let j = 1; j < prev.length; j++) {
      curr.push(prev[j - 1] + prev[j]);
    }
    curr.push(1);
    result.push(curr);
  }
  return result;
};

console.log(generate(5));
