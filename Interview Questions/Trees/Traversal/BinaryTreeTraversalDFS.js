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
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
};

// LRN - PostOrder
// recursive
var postorderTraversal = function (root) {
  let result = [];
  function traverse(node) {
    if (!nood) return null;
    traverse(node.left);
    traverse(node.right);
    result.push(node.val);
  }
  traverse(root);
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

// DFS
function traverse(root) {
  let arr = [];
  function traverse1(node) {
    if (node === null) return null;
    traverse1(node.left);
    arr.push(node.val);
    traverse1(node.right);
  }
  traverse1(root);
  return arr;
}

console.log(traverse(root));
