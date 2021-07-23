function squares(nums) {
  console.log("hello");
  let left = 0,
    right = nums.length - 1,
    position = nums.length - 1,
    result = [];
  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[position] = nums[left] ** 2;
      position--;
      left++;
    } else {
      result[position] = nums[right] ** 2;
      position--;
      right--;
    }
  }
  return result;
}

console.log(squares([-4, -1, 0, 3, 10]));
