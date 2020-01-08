class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (current) {
      if (newNode > current && !current.right) {
        current.right = newNode;
        return this;
      } else {
        current = current.right;
      }
    }
  }
}

var tree = new BinarySearchTree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
