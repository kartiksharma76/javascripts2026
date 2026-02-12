/*
==================== CIRCULAR QUEUE (JavaScript) ====================

Definition:
Circular Queue is an advanced version of a normal queue in which the 
last position connects back to the first position forming a circle.

It follows FIFO (First In First Out) but uses memory efficiently by
reusing empty spaces.

======================================================================

WHY CIRCULAR QUEUE?
In normal queue (array implementation):
- After many dequeues, front moves forward
- Empty spaces at beginning are wasted

Circular queue solves this by rotating indices:
rear reaches end -> goes back to index 0

======================================================================

REAL LIFE EXAMPLES:
• CPU scheduling
• Keyboard buffer
• Printer queue
• Music playlist loop
• Network data streaming

======================================================================

IMPORTANT CONDITIONS:

Queue Empty:
front === -1

Queue Full:
(rear + 1) % size === front

======================================================================

TIME COMPLEXITY:
Enqueue -> O(1)
Dequeue -> O(1)
Peek    -> O(1)

======================================================================

ALGORITHM ENQUEUE:
1. Check if queue is full.
2. If first element -> set front = 0.
3. Move rear circularly:
   rear = (rear + 1) % size
4. Insert element.

ALGORITHM DEQUEUE:
1. Check if queue empty.
2. Store front element.
3. If only one element -> reset front & rear = -1
4. Else move front circularly:
   front = (front + 1) % size

======================================================================
*/

class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }
    // check full
    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
    // check empty
    isEmpty() {
        return this.front === -1;
    }

    // Enqueue 
    enqueue(data) {
        if (this.isFull()) {
            console.log("Queue Overflow");
            return;

        }
        if (this.front == -1) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = data;
    }
    // Dequeue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Underflow");
            return -1;
        }

        const data = this.queue[this.front];

        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return data;
    }

    // Peek
    peek() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
            return -1;
        }
        return this.queue[this.front];
    }
    print() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
            return;
        }

        let i = this.front;
        let result = "";

        while (true) {
            result += this.queue[i] + " ";
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }

        console.log(result);
    }
}

// ===== Example =====
const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

cq.print();
console.log("Dequeued:", cq.dequeue());

cq.enqueue(50);
cq.enqueue(60);

cq.print();