/*
================ CIRCULAR LINKED LIST =================

In Circular Linked List:
1. Last node points back to first node.
2. No NULL pointer at end.
3. Traversal can start from any node.
4. Used in round-robin scheduling, multiplayer games etc.

Operations:
1. insertFirst
2. insertLast
3. delete
4. search
5. print
=====================================================
*/

// ===== NODE CLASS =====
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// ===== CIRCULAR LINKED LIST CLASS =====
class CircularLinkedList {
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
            node.next = this.head;
        } else {
            node.next = this.head;
            this.head = node;
            this.tail.next = this.head;
        }

        this.size++;
    }

    // insert at end
    insertLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = this.tail = node;
            node.next = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }

        this.size++;
    }

    // delete by value
    delete(value) {
        if (!this.head) return;

        let curr = this.head;
        let prev = this.tail;

        do {
            if (curr.data === value) {
                // if single node
                if (this.head === this.tail) {
                    this.head = this.tail = null;
                }
                // if head
                else if (curr === this.head) {
                    this.head = this.head.next;
                    this.tail.next = this.head;
                }
                // if tail
                else if (curr === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                }

                // middle
                else {
                    prev.next = curr.next;
                }

                this.size--;
                return;
            }

            prev = curr;
            curr = curr.next;
        } while (curr !== this.head);
    }

    // search
    search(value) {
        if (!this.head) return false;

        let temp = this.head;

        do {
            if (temp.data === value) return true;
            temp = temp.next;
        } while (temp !== this.head);

        return false;
    }

    // print circular list
    print() {
        if (!this.head) {
            console.log("List empty");
            return;
        }

        let temp = this.head;
        let res = "";

        do {
            res += temp.data + " -> ";
            temp = temp.next;
        } while (temp !== this.head);

        console.log(res + "(back to head)");
    }

    // size
    getSize() {
        return this.size;
    }
}
// ===== USAGE =====
const list = new CircularLinkedList();

list.insertFirst(10);
list.insertFirst(5);
list.insertLast(20);
list.insertLast(30);

list.print();
// 5 -> 10 -> 20 -> 30 -> (back to head)

list.delete(10);
list.print();

console.log("Search 20:", list.search(20));
console.log("Size:", list.getSize());