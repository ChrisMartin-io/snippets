class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.size++;
    }
  }
  pop() {
    if (this.size === 0) {
      return null;
    }
    var temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return temp;
    } else {
      this.first = this.first.next;
      this.size--;
      return temp;
    }
  }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
