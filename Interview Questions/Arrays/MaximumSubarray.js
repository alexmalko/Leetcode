function maxArray(arr) {
  let maxSum = arr[0],
    currentSum = maxSum;
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

console.log(maxArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
