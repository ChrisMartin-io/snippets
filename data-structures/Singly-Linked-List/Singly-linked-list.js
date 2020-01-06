{
    class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // PUSH - add one node to end
    push(val) {

        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // POP - remove one node from end
    pop() {
        if (!this.head) {
            return undefined;
        }

        var newTail = this.head;

        // check if there's any other nodes after head
        if (!this.head.next) {
            this.length--;
            this.tail = null;
            this.head = null;
            return newTail;
        }

        while (newTail.next.next != null) {
            newTail = newTail.next
        }
        
        var oldTail = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        // return node that was deleted
        return oldTail;
    }

    // SHIFT - remove node from beginning of linked list
    shift() {
        if (!this.length) {
            return undefined;
        }
        var oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    // UNSHIFT - add node to beginning
    unshift(val) {

        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        else {
            var oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            this.length++;
            return this;
        }
    }

    // GET - retrieve node by its position in the Linked List

    get(idx) {

        // check if index is higher than list length
        if (idx >= this.length || idx < 0) {
            return null;
        }

        // traverse list find val
        var currentNode = this.head;
        for (let i = 0; i < idx; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    // SET - change value specific index

    set(idx, val) {

        // if index does not exist return false
        if (!this.get(idx)) {
            return false;
        }

        // change value at given index
        var node = this.get(idx);
        node.val = val;
        return true;
    }

    // INSERT - create new node at specified index

    insert(idx, val) {

        // check if beginning idx
        if (idx === 0) {
            return !!this.unshift(val);
        }

        // check if end idx
        else if (idx === this.length) {
            return !!this.push(val);
        }

        // check if idx exists in list
        else if (!this.get(idx)) {
            return false;
        }

        else {
            // create new node, assign before and after nodes
            var newNode = new Node(val);
            var pre = this.get(idx - 1);
            var aft = pre.next;

            // insert node after before node, assign 
            // new node next to the after node
            pre.next = newNode;
            newNode.next = aft;

            // increase list length return list
            this.length++;
            return true;
        }
    }

    // REMOVE - remove node at specific index

    remove(idx) {

        // check if beginning idx
        if (idx === 0) {
            return this.shift();
        }

        // check if end idx
        else if (idx === this.length - 1) {
            return this.pop();
        }

        // check if idx exists
        if (!this.get(idx)) {
            return undefined;
        }

        // remove node reset next value on previous node
        else {
            var removed = this.get(idx);
            var prev = this.get(idx - 1);
            var after = this.get(idx + 1);

            prev.next = after;
            this.length--;
            return removed;
        }
    }

    // REVERSE - reverse the list

    reverse() {
        var current = this.head;
        this.head = this.tail;
        this.tail = current;

        var prev = null;
        var next = null;

        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

}