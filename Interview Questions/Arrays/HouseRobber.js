function robber(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let runningTotal = [];
  runningTotal[0] = nums[0];
  runningTotal[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    runningTotal[i] = Math.max(
      runningTotal[i - 1],
      nums[i] + runningTotal[i - 2]
    );
  }
  return runningTotal[nums.length - 1];
}

console.log(robber([1, 2, 3, 1]));
