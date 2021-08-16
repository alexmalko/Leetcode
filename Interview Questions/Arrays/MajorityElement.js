function majority(nums) {
  if (nums.length === 1) return nums[0];
  let obj = {},
    check = Math.floor(nums.length / 2);
  for (let e of nums) {
    if (obj[e]) {
      if (obj[e] >= check) {
        return e;
      } else {
        obj[e]++;
      }
    } else {
      obj[e] = 1;
    }
  }
}

console.log(majority([8, 8, 7, 7, 7]));
