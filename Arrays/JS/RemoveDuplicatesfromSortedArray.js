var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      final.push(nums[i]);
    }
  }
  return final;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
