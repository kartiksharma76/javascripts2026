/*
====================== NORMAL QUEUE (DATA STRUCTURE) ======================

Definition:
Queue is a linear data structure that follows the FIFO principle:
FIFO = First In First Out

Matlab:
Jo element sabse pehle insert hoga,
wohi sabse pehle remove hoga.

Example (real life):
• ATM line
• Ticket counter
• Call center waiting
• Printer queue

==========================================================================

BASIC OPERATIONS OF QUEUE:

1. Enqueue  -> element add karna (rear/end se)
2. Dequeue  -> element remove karna (front se)
3. Peek     -> front element check (remove nahi hota)
4. isEmpty  -> queue empty hai ya nahi
5. Size     -> total elements

==========================================================================

WORKING:
Queue ke do pointer hote hain:

Front -> first element
Rear  -> last element

Insertion always rear se hota hai.
Deletion always front se hota hai.

Example:
Enqueue: 10, 20, 30

Queue: 10 20 30
Front -> 10
Rear  -> 30

Dequeue:
10 remove hoga (kyunki FIFO)

Queue: 20 30

==========================================================================

TIME COMPLEXITY:
Enqueue -> O(1)
Dequeue -> O(1)
Peek    -> O(1)

==========================================================================

TYPES OF QUEUE:
1. Simple Queue (Normal queue)
2. Circular Queue
3. Priority Queue
4. Deque (Double ended queue)

==========================================================================

WHERE USED IN REAL LIFE / SYSTEM DESIGN:
• CPU scheduling
• Printer queue
• Call center system
• Task scheduling
• BFS traversal (graph)
• Order processing system

==========================================================================

ADVANTAGE:
• Simple implementation
• FIFO ordering
• Efficient insertion/deletion

DISADVANTAGE:
• Array implementation may waste space
• Fixed size (if array used)

==========================================================================

INTERVIEW QUESTIONS:
Q1: Queue follows which principle?
Ans: FIFO (First In First Out)

Q2: Insertion kaha hota hai?
Ans: Rear

Q3: Deletion kaha hota hai?
Ans: Front

==========================================================================

QUEUE FLOW DIAGRAM:

Enqueue -> [10] -> [20] -> [30] <- Rear
            ↑
          Front

Dequeue -> remove from Front

========================================================================== 
*/


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class AllOperationQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Enqueue
    enqueue(data) {
        const node = new Node(data);

        if (this.rear === null) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    // Dequeue
    dequeue() {
        if (this.front === null) {
            console.log("Queue underflow");
            return -1;
        }

        const data = this.front.data;
        this.front = this.front.next;

        if (this.front === null) {
            this.rear = null;
        }

        this.size--;
        return data;
    }

    // Peek
    peek() {
        if (this.front === null) {
            console.log("Queue is empty");
            return -1;
        }
        return this.front.data;
    }

    // Check empty
    isEmpty() {
        return this.front === null;
    }

    // Size
    getSize() {
        return this.size;
    }

    // Print queue
    print() {
        let temp = this.front;
        let result = "";

        while (temp !== null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(result + "null");
    }

    // Count Occurrence
    countOccurance(data) {
        let count = 0;
        let temp = this.front;

        while (temp !== null) {
            if (temp.data === data) count++;
            temp = temp.next;
        }
        return count;
    }

    // Remove by position
    removeByPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.dequeue();
            return;
        }

        let temp = this.front;
        for (let i = 0; i < position - 1; i++) {
            temp = temp.next;
        }

        temp.next = temp.next.next;
        if (temp.next === null) {
            this.rear = temp;
        }

        this.size--;
    }

    // Find middle
    findMiddle() {
        let slow = this.front;
        let fast = this.front;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow ? slow.data : -1;
    }

    // Contains
    contain(data) {
        let temp = this.front;

        while (temp !== null) {
            if (temp.data === data) return true;
            temp = temp.next;
        }
        return false;
    }

    // Remove last
    removeLast() {
        if (this.front === null) {
            console.log("Queue is empty");
            return;
        }

        if (this.front.next === null) {
            this.front = this.rear = null;
        } else {
            let temp = this.front;

            while (temp.next && temp.next.next) {
                temp = temp.next;
            }

            temp.next = null;
            this.rear = temp;
        }
        this.size--;
    }
}


// ===== Example =====
const q = new AllOperationQueue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(20);

q.print();
console.log("Dequeued:", q.dequeue());
console.log("Peek:", q.peek());
console.log("Size:", q.getSize());
console.log("Count 20:", q.countOccurance(20));
console.log("Middle:", q.findMiddle());

q.removeByPosition(1);
q.print();

q.removeLast();
q.print();
