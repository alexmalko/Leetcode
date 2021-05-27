var maxSubArray = function (nums) {
  let current = nums[0];
  let max = nums[0];

  for (const num of nums) {
    current = Math.max(num, current + num);
    max = Math.max(current, max);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
