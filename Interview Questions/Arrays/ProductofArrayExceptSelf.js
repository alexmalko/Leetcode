var productExceptSelf = function (nums) {
  let left = [],
    right = [],
    final = [],
    prodRight = 1,
    prodLeft = 1;
  for (let i = 0; i < nums.length; i++) {
    left[i] = prodLeft;
    prodLeft *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = prodRight;
    prodRight *= nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    final.push(left[i] * right[i]);
  }

  console.log(left, right);
  return final;
};

console.log(productExceptSelf([1, 2, 3, 4]));
