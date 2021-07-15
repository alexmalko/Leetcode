// var permute = function (nums) {
//   let res = [],
//     used = new Array(nums.length).fill(false);
//   console.log(used);
//   function permuteHelper(depth, used, cur) {
//     if (depth == nums.length) {
//       res.push(cur.slice());
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (used[i] == false) {
//         // nums[i] is already being used
//         cur.push(nums[i]);
//         used[i] = true;

//         // move to the next depth
//         permuteHelper(depth + 1, used, cur);

//         // backtrack to previous state
//         cur.pop();
//         used[i] = false; // nums[i] is no more being used
//       }
//     }
//   }
//   permuteHelper(0, used, []);
//   return res;
// };

var permute = function (nums, set = [], answer = []) {
  if (!nums.length) {
    answer.push([...set]);
  }
  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => index !== i);
    set.push(nums[i]);
    permute(newNums, set, answer);
    set.pop();
  }
  return answer;
};

console.log(permute([1, 2, 3]));
