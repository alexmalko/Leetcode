function test(arr) {
  let index = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[index] = arr[i + 1];
      index++;
    }
  }
  return arr;
}

console.log(test([1, 2, 2, 3, 4]));
