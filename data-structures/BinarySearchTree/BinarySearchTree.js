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

  // INSERT
  insert(val) {
    var newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else if (val === current.val) {
        return undefined;
      }
    }
  }

  find(val) {

    var current = this.root;

    if (!current) return false;

    while (current) {
      if (val === current.val) return current;

      if (val < current.val) {
        if (current.left === null) {
          return false;
        }
        current = current.left;
      }
      else if (val > current.val) {
        if (current.right === null) {
          return false;
        }
        current = current.right;
      }
    }
  }
}

var tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.insert(16);



//       10
//   7         15
//     9
