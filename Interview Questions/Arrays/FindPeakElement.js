function peak(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = left + 1;
    } else {
      right = right - 1;
    }
  }
  return left;
}

console.log(peak([1, 2, 3, 1]));
