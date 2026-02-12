/*
==================== DOUBLE ENDED QUEUE (DEQUE) ====================

Definition:
Deque (Double Ended Queue) is a linear data structure where 
insertion and deletion can happen from BOTH ends.

Matlab:
Front se bhi add/remove
Rear se bhi add/remove

So it is more flexible than normal queue.

====================================================================

FIFO + LIFO both possible
Deque can behave like:
• Queue (FIFO)
• Stack (LIFO)

====================================================================

TYPES OF DEQUE:

1. Input Restricted Deque
   → Insert from one side only
   → Delete from both sides

2. Output Restricted Deque
   → Delete from one side only
   → Insert from both sides

====================================================================

OPERATIONS:

1. addFront()     -> front se add
2. addRear()      -> rear se add
3. removeFront()  -> front se delete
4. removeRear()   -> rear se delete
5. peekFront()    -> front element
6. peekRear()     -> last element
7. isEmpty()      -> empty check
8. size()         -> total elements

====================================================================

TIME COMPLEXITY:
Insert front  -> O(1)
Insert rear   -> O(1)
Delete front  -> O(1)
Delete rear   -> O(1)

====================================================================

REAL LIFE USES:
• Undo/Redo operations
• Browser history
• Sliding window problems
• LRU Cache
• Task scheduling
• Palindrome checking

====================================================================

ALGORITHM IDEA:
Deque allows operations at both ends.
So we maintain front and rear pointers.

====================================================================
*/

// Implementation using array

class Deque {
    constructor() {
        this.items = [];
    }

    // Add from front
    addFront(element) {
        this.items.unshift(element);
    }
    // Add From rear 
    addRear(element) {
        this.items.push(element);
    }
    // Remove from front
    removeFront() {
        if (this.isEmpty()) {
            console.log("Deque empty");
            return null;
        }
        return this.items.shift();
    }

    // Remove from rear 
    removeRear() {
        if (this.isEmpty()) {
            console.log("Deque empty");
            return null;
        }
        return this.items.pop();
    }

    // Peek front
    peekFront() {
        return this.isEmpty() ? null : this.items[0];
    }

    // Peek rear
    peekRear() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    // Check empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Size
    size() {
        return this.items.length;
    }

    // Print deque
    print() {
        console.log(this.items.join(" "));
    }
}

// ================= Example =================
const dq = new Deque();

dq.addRear(10);
dq.addRear(20);
dq.addFront(5);
dq.addFront(1);

dq.print();          // 1 5 10 20

dq.removeFront();
dq.removeRear();

dq.print();          // 5 10

console.log("Front:", dq.peekFront());
console.log("Rear:", dq.peekRear());
