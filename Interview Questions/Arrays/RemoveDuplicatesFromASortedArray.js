function removeDups(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
