// creating a new array
function removeDups(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result.length;
}

console.log(removeDups([1, 1, 2]));

// push all unique elements to the front and return the index
function removeDups1(arr) {
  let index = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[index] = arr[i + 1];
      index++;
    }
  }
  return index;
}

console.log(removeDups1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
