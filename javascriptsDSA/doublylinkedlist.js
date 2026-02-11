/*
================ DOUBLY LINKED LIST =================
Each node contains:
1. data
2. next pointer
3. prev pointer

Allows traversal in both directions.
====================================================
*/

// ===== NODE CLASS =====

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// ===== DOUBLY LINKED LIST CLASS =====

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // insert at beginning

    insertFirst(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

    // insert at end
    insertLast(data) {
        const node = new Node(data);

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    // delete by value
    delete(value) {
        if (!this.head) return;

        let temp = this.head;

        while (temp && temp.data !== value) {
            temp = temp.next;
        }

        if (!temp) return;

        // if head
        if (temp === this.head) {
            this.head = temp.next;
            if (this.head) this.head.prev = null;
        }
        // if tail
        else if (temp === this.tail) {
            this.tail = temp.prev;
            this.tail.next = null;
        }
        // middle
        else {
            temp.prev.next = temp.next;
            temp.next.prev = temp.prev;
        }

        this.size--;
    }

    // search
    search(value) {
        let temp = this.head;

        while (temp) {
            if (temp.data === value) return true;
            temp = temp.next;
        }
        return false;
    }

    // print forward
    printForward() {
        let temp = this.head;
        let res = "";

        while (temp) {
            res += temp.data + " <-> ";
            temp = temp.next;
        }

        console.log(res + "null");
    }

    // print backward
    printBackward() {
        let temp = this.tail;
        let res = "";

        while (temp) {
            res += temp.data + " <-> ";
            temp = temp.prev;
        }

        console.log(res + "null");
    }

    // size
    getSize() {
        return this.size;
    }
}


// ===== USAGE =====

const list = new DoublyLinkedList();
list.insertFirst(10);
list.insertFirst(5);
list.insertLast(20);
list.insertLast(30);

list.printForward();
// 5 <-> 10 <-> 20 <-> 30 <-> null

list.printBackward();
// 30 <-> 20 <-> 10 <-> 5 <-> null

list.delete(20);
list.printForward();

console.log("Search 10:", list.search(10));
console.log("Size:", list.getSize());