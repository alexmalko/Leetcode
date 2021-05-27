var productExceptSelf = function (nums) {
  let output = [],
    left = [],
    right = [];
  let productFromLeft = 1,
    productFromRight = 1;
  for (let i = 0; i < nums.length; i++) {
    left[i] = productFromLeft;
    productFromLeft *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = productFromRight;
    productFromRight *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = left[i] * right[i];
  }
  return left;
};

console.log(productExceptSelf([1, 2, 3, 4]));
