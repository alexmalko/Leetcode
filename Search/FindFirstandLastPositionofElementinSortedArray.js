var searchRange = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) {
      if (result.length === 0) {
        result[0] = i;
        result[1] = i;
      } else {
        result[1] = i;
      }
    } else if (nums[i] > target) {
      break;
    }
  }
  if (result.length === 0) return [-1, -1];
  return result;
};
