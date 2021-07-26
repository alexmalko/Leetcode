// // returning new array
// function merge(nums1, m, nums2, n) {
//   let arr = [],
//     p1 = 0,
//     p2 = 0;

//   for (let i = 0; i < m + n; i++) {
//     while ((p1 < m) & (p2 < n)) {
//       if (nums1[p1] < nums2[p2]) {
//         arr.push(nums1[p1]);
//         p1++;
//       } else {
//         arr.push(nums2[p2]);
//         p2++;
//       }
//     }
//   }

//   if (p1 === m) {
//     while (p2 < n) {
//       arr.push(nums2[p2]);
//       p2++;
//     }
//   } else {
//     while (p1 < m) {
//       arr.push(nums1[p1]);
//       p1++;
//     }
//   }

//   return arr;
// }

// console.log(
//   merge((nums1 = [1, 2, 3, 4, 10, 11]), (m = 3), (nums2 = [2, 5, 6]), (n = 3))
// );

// in place operation
function merge(nums1, m, nums2, n) {
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
}

console.log(
  merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3))
);
