/*
================= LINKED LIST OVERVIEW =================
1. Linked List is a linear data structure.
2. It stores data in nodes instead of continuous memory like arrays.
3. Each node contains:
   - Data (value)
   - Next pointer (address of next node)
4. First node is called HEAD.
5. Last node points to NULL.
================= TYPES OF LINKED LIST =================
6. Singly Linked List → one pointer
7. Doubly Linked List → prev + next
8. Circular Linked List → last connects to first
================= ADVANTAGES =================
9. Dynamic size
10. Easy insertion & deletion
11. No continuous memory needed
12. Efficient memory use
================= DISADVANTAGES =================
13. No direct index access
14. Searching slow
15. Extra memory for pointer
================= TIME COMPLEXITY =================
16. Insert beginning → O(1)
17. Insert end → O(n)
18. Delete → O(n)
19. Search → O(n)
========================================================
*/

/*
================ ADVANCED LINKED LIST (JS) ================
Operations:
1. insertFirst
2. insertLast
3. insertAtPosition
4. deleteByValue
5. reverse
6. find middle
7. search
8. size
9. print
==========================================================
*/

// ===== NODE CLASS =====
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// ===== LINKED LIST CLASS =====
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at beginning
    insertFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    // insert at end
    insertLast(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.size++;
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }

        temp.next = node;
        this.size++;
    }

    // insert at position
    insertAtPosition(pos, data) {
        if (pos === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let temp = this.head;

        for (let i = 1; i < pos; i++) {
            temp = temp.next;
        }

        node.next = temp.next;
        temp.next = node;
        this.size++;
    }

    // delete by value
    deleteByValue(value) {
        if (!this.head) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let temp = this.head;

        while (temp.next && temp.next.data !== value) {
            temp = temp.next;
        }

        if (temp.next) {
            temp.next = temp.next.next;
            this.size--;
        }
    }

    // search element
    search(value) {
        let temp = this.head;
        while (temp) {
            if (temp.data === value) return true;
            temp = temp.next;
        }
        return false;
    }

    // find middle
    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow ? slow.data : null;
    }

    // reverse list
    reverse() {
        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    // print list
    print() {
        let temp = this.head;
        let res = "";

        while (temp) {
            res += temp.data + " -> ";
            temp = temp.next;
        }

        console.log(res + "null");
    }

    // size
    getSize() {
        return this.size;
    }
}

// ===== USAGE =====
const list = new LinkedList();

list.insertFirst(10);
list.insertFirst(5);
list.insertLast(20);
list.insertLast(30);

list.print();
console.log("Middle:", list.findMiddle());

list.reverse();
list.print();

console.log("Search 20:", list.search(20));
console.log("Size:", list.getSize());
