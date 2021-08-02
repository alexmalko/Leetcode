function maxProduct(arr) {
  let curMax = arr[0],
    curMin = arr[0],
    result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    tempMax = curMax;
    curMax = Math.max(curMax * arr[i], arr[i], curMin * arr[i]);
    curMin = Math.min(tempMax * arr[i], arr[i], curMin * arr[i]);
    result = Math.max(curMax, result);
  }
  return result;
}

console.log(maxProduct([2, 3, -2, 4]));
