function twoSum(nums, target) {
  let map = new Map(),
    result = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result.push(i, map.get(nums[i]));
      return result;
    } else {
      map.set(target - nums[i], i);
    }
  }
  return map;
}

console.log(twoSum([2, 7, 11, 15], 9));
