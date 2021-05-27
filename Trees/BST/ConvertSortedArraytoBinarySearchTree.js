var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  return helper(nums, 0, nums.length - 1);
};

var helper = function (nums, left, right) {
  if (left > right) {
    return null;
  }
  let mid = Math.floor(left + (right - left) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = helper(nums, left, mid - 1);
  node.right = helper(nums, mid + 1, right);
  return node;
};

// // second version
// var sortedArrayToBST = function (nums) {
//   return createBST(nums);
//   function createBST(nums) {
//     if (nums.length == 0) return null;
//     let mid = Math.floor(nums.length / 2);
//     let root = new TreeNode(nums[mid]);
//     root.left = createBST(nums.slice(0, mid));
//     root.right = createBST(nums.slice(mid + 1));
//     return root;
//   }
// };
