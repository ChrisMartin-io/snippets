class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return this;
    } else {
      var temp = this.last;
      this.last = newNode;
      temp.next = newNode;
      this.size++;
      return this;
    }
  }

  dequeue() {
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
      this.first = temp.next;
      this.size--;
      return temp;
    }
  }
}

var q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
