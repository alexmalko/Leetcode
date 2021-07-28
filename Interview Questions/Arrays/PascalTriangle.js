function generate(numRows) {
  let final = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prev = final[i - 1],
      result = [];
    result.push(1);
    for (let j = 1; j < prev.length; j++) {
      result.push(prev[j - 1] + prev[j]);
    }
    result.push(1);
    final.push(result);
  }
  return final;
}

console.log(generate(5));
