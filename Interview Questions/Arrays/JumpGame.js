function jump(nums) {
  let lastIndex = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= lastIndex) {
      lastIndex = i;
    }
  }
  return lastIndex === 0;
}

console.log(jump([3, 2, 1, 0, 4]));
