// binary search tree class
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function construct(preorder, inorder) {
  if (preorder.length === 0 && inorder.length === 0) return null;
}

console.log(construct([], []));
