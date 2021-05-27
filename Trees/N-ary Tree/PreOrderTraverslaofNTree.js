var preorder = function (root) {
  let result = [];
  function traverse(root) {
    if (root === null) return null;
    result.push(root.val);
    for (const child of root.children) {
      traverse(child);
    }
  }
  traverse(root);
  return result;
};
