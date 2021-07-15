// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;
//   let result = 0,
//     final = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       continue;
//     } else {
//       final.push(nums[i]);
//     }
//   }
//   return final;
// };

// two pointer solution
var removeDuplicates = function (nums) {
  let result = [];
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      result.push(nums[j]);
    }
  }
  return result;
};

console.log(removeDuplicates([1, 1, 2, 3]));
