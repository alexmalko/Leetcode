function swap(arr) {
  let index = 0,
    temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
      index++;
    }
  }
  return arr;
}

console.log(swap([1, 1, 0, 0, 1, 1]));
