var thirdMax = function (nums) {
  let max = nums[0],
    secondMax = -Infinity,
    thirdMax = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    if (num > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax && num < secondMax) {
      thirdMax = num;
    }
  }

  return thirdMax === -Infinity ? max : thirdMax;
};

console.log(thirdMax([2, 2, 3, 1]));
