var intersect = function (nums1, nums2) {
  let result = [],
    map = {};
  for (const char of nums1) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  for (const char of nums2) {
    if (map[char]) {
      console.log(map);
      result.push(char);
      map[char]--;
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
