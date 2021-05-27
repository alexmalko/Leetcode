var threeSumClosest = function (nums, target) {
  let result = Number.MAX_SAFE_INTEGER;
  let sorted = nums.sort();
  console.log(sorted);

  for (let i = 0; i < nums.length - 2; i++) {
    let a = i + 1;
    let b = nums.length - 1;

    while (a < b) {
      let current_sum = nums[i] + nums[a] + nums[b];
      if (current_sum > target) {
        b--;
      } else {
        a++;
      }
      if (Math.abs(current_sum - target) < Math.abs(result - target)) {
        result = current_sum;
      }
    }
  }
  return result;
};

let arr = [-1, 2, 1, -4];
console.log(threeSumClosest(arr, 1));
