var merge = function (nums1, m, nums2, n) {
  let first = m - 1,
    second = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
};

var merge = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0,
    result = [];
  for (let i = 0; i < m + n; i++) {
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
    } else {
      result.push(nums2[p2]);
      p2++;
    }
  }
  console.log(result);
  return result;
};

console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));
