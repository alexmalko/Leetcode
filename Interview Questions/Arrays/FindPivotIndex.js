let pivotIndex = function (nums) {
  let totalSum = 0,
    leftSum = 0;
  nums.forEach((e) => {
    totalSum += e;
  });

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return nums[i];
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
