function greatest(arr) {
  let rightMax = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(rightMax, arr[i]);
    arr[i] = rightMax;
    rightMax = newMax;
  }
  return arr;
}

console.log(greatest([17, 18, 5, 4, 6, 1]));
