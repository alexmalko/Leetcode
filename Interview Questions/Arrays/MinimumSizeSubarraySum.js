function minSize(target, nums) {
  let result = Number.MAX_VALUE,
    left = 0,
    val_sum = 0;
  for (let i = 0; i < nums.length; i++) {
    val_sum += nums[i];
    while (val_sum >= target) {
      result = Math.min(result, i + 1 - left);
      val_sum -= nums[left];
      left++;
    }
  }
  return result !== Number.MAX_VALUE ? result : 0;
}

console.log(minSize(7, [2, 3, 1, 2, 4, 3]));
