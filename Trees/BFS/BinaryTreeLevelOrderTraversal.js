var levelOrder = function (root) {
  let result = [];
  if (root === null) return result;
  let queue = [];
  queue.push(root);
  let node;
  while (queue.length) {
    let row = [];
    let rowSize = queue.length;
    while (rowSize) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      row.push(node.val);
      rowSize--;
    }
    result.push(row);
  }
  return result;
};
