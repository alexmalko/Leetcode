function parity(nums) {
  let index = 0,
    temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
  return nums;
}

console.log(parity([3, 1, 2, 4]));
