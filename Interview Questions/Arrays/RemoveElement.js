function remove(nums, val) {
  let index = 0,
    temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
  return nums;
}

console.log(remove([0, 2, 2, 0], 0));
