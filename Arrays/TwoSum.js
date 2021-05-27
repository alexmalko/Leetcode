var twoSum = function (nums, target) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference)) {
      result[0] = map.get(difference);
      result[1] = i;
      return result;
    }
    map.set(nums[i], i);
    console.log(map);
  }
  return result;
};

console.log(twoSum([11, 2, 4, 7], 9));
