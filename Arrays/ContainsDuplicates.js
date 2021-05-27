var containsDuplicate = function (nums) {
  let obj = {};
  for (const num of nums) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
