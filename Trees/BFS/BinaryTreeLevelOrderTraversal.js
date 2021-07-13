// breadth first search is utiliizing queue
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

// binary search tree class
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(15);
root.left = new Node(10);
root.left.left = new Node(7);
root.left.right = new Node(13);
root.right = new Node(25);
root.right.left = new Node(22);
root.right.right = new Node(27);

console.log(root);
console.log(levelOrder(root));
