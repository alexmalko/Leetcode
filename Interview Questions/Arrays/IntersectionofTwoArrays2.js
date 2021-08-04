var intersect = function (nums1, nums2) {
  let obj = {},
    result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (obj[nums1[i]]) {
      obj[nums1[i]]++;
    } else {
      obj[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]]) {
      result.push(nums2[i]);
      obj[nums2[i]]--;
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
