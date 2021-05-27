var isBalanced = function (root) {
  let balanced = true;

  function findHeight(root) {
    if (!root) return 0;
    if (balanced === false) return;

    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);
    let diff = Math.abs(leftHeight - rightHeight);

    if (diff > 1) balanced = false;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  findHeight(root);
  return balanced;
};
