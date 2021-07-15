var findDuplicate = function (nums) {
  let obj = {},
    result = [];
  for (const num of nums) {
    if (obj[num]) {
      result.push(num);
    } else {
      obj[num] = 1;
    }
  }
  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicate(nums));
