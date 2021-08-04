var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let intersectionSet = new Set();

  for (const num of nums2) {
    if (set1.has(num)) {
      intersectionSet.add(num);
    }
  }

  return [...intersectionSet];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
