var generate = function (numRows) {
  let result = [];
  result.push([1]);
  for (let i = 1; i < numRows; i++) {
    let prev = result[i - 1];
    let current = [];
    current.push(1);
    for (let j = 1; j < prev.length; j++) {
      current.push(prev[j - 1] + prev[j]);
    }
    current.push(1);
    result.push(current);
  }
  return result;
};

console.log(generate(5));
