var intersect = function (nums1, nums2) {
  let result = [],
    obj = {};
  for (let num of nums1) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  for (let num of nums2) {
    if (obj[num]) {
      result.push(num);
      obj[num]--;
    }
  }
  return result;
};

console.log(intersect([2, 2, 2, 2, 2], [2, 2, 1, 1, 1, 1, 1]));
