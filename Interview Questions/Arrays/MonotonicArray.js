function mono(nums) {
  let increasing = true,
    decreasing = true;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      increasing = false;
    }

    if (nums[i] < nums[i + 1]) {
      decreasing = false;
    }
  }
  return increasing || decreasing;
}

console.log(mono([1, 2, 2, 3]));
