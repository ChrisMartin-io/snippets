class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  bfs() {
    var queue = [];
    var result = [];
    var current = this.root;
    queue.push(current);

    while (queue.length > 0) {
      console.log('queue', queue);
      console.log('result', result);

      current = queue.shift();
      result.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return result;
  }

  dfsPreOrder() {
    var result = [];
    var current = this.root;

    function traverse(node) {
      result.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    
    traverse(current);
    return result;
  } 

  dfsPostOrder() {
    var result = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.val);
    }

    traverse(current);
    return result;
  }

  dfsInOrder() {
    var result = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.val);
      if (node.left) {
        traverse(node.right);
      }
    }

    traverse(current);
    return result;
    
  }
}

var tree = new Tree();

tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.right.right = new Node(20);
tree.root.left = new Node(6);
tree.root.left.right = new Node(8);
tree.root.left.left = new Node(3);
