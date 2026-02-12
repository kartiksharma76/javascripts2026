/*
==================== PRIORITY QUEUE (JavaScript) ====================

Definition:
Priority Queue is a special queue where elements are removed based on
their priority instead of FIFO (First In First Out).

High priority element -> removed first
Low priority element  -> removed later

Example:
Hospital emergency system
Critical patient (priority 1) -> first
Normal patient (priority 3)  -> later

======================================================================

TYPES OF PRIORITY QUEUE:
1. Min Priority Queue  -> smaller number = higher priority
2. Max Priority Queue  -> larger number = higher priority

======================================================================

TIME COMPLEXITY:
Insert   -> O(n)  (array implementation)
Delete   -> O(n)
Peek     -> O(1)

Heap implementation is best: O(log n)

======================================================================
ALGORITHM:
1. Insert element with priority.
2. Compare priority and place at correct position.
3. Highest priority element always at front.
4. Remove from front when dequeue.

======================================================================
REAL LIFE USES:
• CPU scheduling
• Dijkstra shortest path algorithm
• Printer priority system
• Job scheduling
• Network routing
• AI pathfinding

======================================================================
*/
class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    // Insert element with priority
    enqueue(element, priority) {
        const obj = { element, priority };
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (obj.priority < this.queue[i].priority) {
                this.queue.splice(i, 0, obj);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(obj);
        }
    }
    // Remove highest priority
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue empty");
            return null;
        }
        return this.queue.shift();
    }

    // Peek
    peek() {
        if (this.isEmpty()) return null;
        return this.queue[0];
    }

    // Check empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Size
    size() {
        return this.queue.length;
    }
    // Print
    print() {
        console.log(this.queue);
    }

}
// ===== Example =====
const pq = new PriorityQueue();

pq.enqueue("Low task", 3);
pq.enqueue("High task", 1);
pq.enqueue("Medium task", 2);

pq.print();

console.log("Removed:", pq.dequeue());
pq.print();