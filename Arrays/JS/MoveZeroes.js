var moveZeroes = function (nums) {
  let p1 = 0,
    p2 = 0,
    temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return nums;
};

let arr = [0, 0, 6, 0, 12, 1];
console.log(moveZeroes(arr));
