{
  class Node {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }

  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val) {
      if (this.length === 0) {
        var newNode = new Node(val);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      } else {
        var newNode = new Node(val);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
      }
    }

    pop() {
      if (this.length === 0) {
        return undefined;
      }

      var poppedNode = this.tail;

      if (this.length === 1) {
        this.tail = null;
        this.head = null;
        this.length--;
        return poppedNode;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        poppedNode.prev = null;
        this.length--;
        return poppedNode;
      }
    }

    shift() {
      if (this.length === 0) {
        return undefined;
      }

      var shiftedNode = this.head;

      if (this.length === 1) {
        this.tail = null;
        this.head = null;
      } else {
        this.head = shiftedNode.next;
        this.head.prev = null;
        shiftedNode.next = null;
      }

      this.length--;
      return shiftedNode;
    }

    unshift(val) {
      var newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    get(idx) {
      if (idx >= this.length || idx < 0) {
        return null;
      }

      if (idx <= this.length / 2) {
        var current = this.head;
        for (let i = 0; i < idx; i++) {
          current = current.next;
        }
      } else if (idx > this.length / 2) {
        var current = this.tail;
        for (let i = this.length - 1; i > idx; i--) {
          console.log(current);
          current = current.prev;
        }
      }
      return current;
    }

    set(idx, val) {
      if (idx < 0 || idx >= this.length) {
        return false;
      }
      this.get(idx).val = val;
      return true;
    }

    insert(idx, val) {
      if (idx < 0 || idx > this.length) {
        return false;
      }

      var newNode = new Node(val);

      if (idx === 0) {
        return !!this.unshift(val);
      }
      if (idx === this.length) {
        return !!this.push(val);
      }

      // set surrounding nodes as vars
      var prev = this.get(idx - 1);
      var next = this.get(idx);

      // old nodes
      prev.next = newNode;
      next.prev = newNode;

      // new nodes
      newNode.prev = prev;
      newNode.next = next;

      this.length++;

      return newNode;
    }

    remove(idx) {
      if (idx < 0 || idx >= this.length) {
        return undefined;
      }

      var nodeToRemove = this.get(idx);

      if (idx === 0) {
        return this.shift();
      }
      if (idx === this.length - 1) {
        return this.pop();
      }

      nodeToRemove.prev.next = nodeToRemove.next;
      nodeToRemove.next.prev = nodeToRemove.prev;

      nodeToRemove.next = null;
      nodeToRemove.prev = null;

      this.length--;

      return nodeToRemove;
    }
  }

  var list = new DoubleLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(33);
  list.push(44);
  list.push(55);
  list.push(66);
}
