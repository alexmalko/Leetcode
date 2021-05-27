var isValidBST = function (root) {
  return validate(root, null, null);
  function validate(root, max, min) {
    if (root == null) return true;
    else if (
      (max !== null && root.val >= max) ||
      (min !== null && root.val <= min)
    )
      return false;
    else {
      return (
        validate(root.left, root.val, min) &&
        validate(root.right, max, root.val)
      );
    }
  }
};

var isValidBST = function (root) {
  let prev = null;
  return inoder(root);
  function inorder(root) {
    if (root == null) return true;
    if (!inorder(root.left)) return false;
    if (prev != nul && root.val < +prev) return false;
    prev = root.val;
    return inorder(root.right);
  }
};
