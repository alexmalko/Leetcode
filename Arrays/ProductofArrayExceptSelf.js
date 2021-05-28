// solution without devistion
var productExceptSelf = function (nums) {
  let left = [],
    right = [],
    final = [],
    productFromLeft = 1,
    productFromRight = 1;
  for (let i = 0; i < nums.length; i++) {
    left[i] = productFromLeft;
    productFromLeft *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = productFromRight;
    productFromRight *= nums[i];
  }
  for (let i = 0; i < left.length; i++) {
    final.push(left[i] * right[i]);
  }

  return final;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// solution with devisiton
// var productExceptSelf = function (nums) {
//   let product = 1;
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     product = product * nums[i];
//   }
//   nums.forEach((e) => {
//     arr.push(product / e);
//   });
//   return arr;
// };
