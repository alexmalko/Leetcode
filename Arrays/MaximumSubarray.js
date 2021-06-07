var maxSubArray = function (nums) {
  let current = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    result = Math.max(result, current);
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
