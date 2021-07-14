// binary search tree class
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// BST class
class BST {
  constructor() {
    this.root = null;
  }

  insert(val, root = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    if (val < root.val) {
      if (!root.left) {
        root.left = new Node(val);
      } else {
        this.insert(val, root.left);
      }
    } else {
      if (!root.right) {
        root.right = new Node(val);
      } else {
        this.insert(val, root.right);
      }
    }
  }
}

let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

console.log(tree1.root);
