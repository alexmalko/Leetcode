// bottom-u
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
root.left.left.left = new Node(7);
root.left.right = new Node(13);
root.right = new Node(25);
root.right.left = new Node(22);
root.right.right = new Node(27);

var maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth(root));
