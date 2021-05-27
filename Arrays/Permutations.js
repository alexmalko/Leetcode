var permute = function (nums) {
  let res = [],
    used = new Array(nums.length).fill(false);
  function permuteHelper(depth, used, cur) {
    if (depth == nums.length) {
      res.push(cur.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] == false) {
        // nums[i] is already being used
        cur.push(nums[i]);
        used[i] = true;

        // move to the next depth
        permuteHelper(depth + 1, used, cur);

        // backtrack to previous state
        cur.pop();
        used[i] = false; // nums[i] is no more being used
      }
    }
  }
  permuteHelper(0, used, []);
  return res;
};
