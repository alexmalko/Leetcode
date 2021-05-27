// LNR - InOrder
// recursive
var inorderTraversal = function (root) {
  let result = [];
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
};

// NLR - PreOrder
// recursive
var preorderTraversal = function (root) {
  let result = [];
  function traverse(node) {
    if (node === null) return null;
    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return result;
};

// LRN - PostOrder
// recursive
var postorderTraversal = function (root) {
  let result = [];
  function traverse(node) {
    if (node === null) return null;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val);
  }
  traverse(root);
  return result;
};
