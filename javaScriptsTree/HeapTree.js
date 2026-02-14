/*
==================== HEAP IN JAVASCRIPT ====================

Heap:
Heap is a complete binary tree.
Used in priority queue and scheduling.

Types:
1. Max Heap → parent > children
2. Min Heap → parent < children

Stored using ARRAY (not pointer tree)
Parent index = Math.floor((i-1)/2)
Left child = 2*i + 1
Right child = 2*i + 2

Time Complexity:
Insert → O(log n)
Delete → O(log n)
Peek → O(1)
*/


// ==================== MAX HEAP ====================
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // swap helper
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // insert element
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // heapify up
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) break;

            this.swap(parent, index);
            index = parent;
        }
    }

    // delete max element
    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return max;
    }

    // heapify down
    heapifyDown(index) {
        let size = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (left < size && this.heap[left] > this.heap[largest])
                largest = left;

            if (right < size && this.heap[right] > this.heap[largest])
                largest = right;

            if (largest === index) break;

            this.swap(index, largest);
            index = largest;
        }
    }

    // peek max
    peek() {
        return this.heap[0];
    }

    print() {
        console.log(this.heap);
    }
}


// ----------- USE MAX HEAP -----------
let maxH = new MaxHeap();

maxH.insert(50);
maxH.insert(30);
maxH.insert(70);
maxH.insert(10);
maxH.insert(90);

console.log("Max Heap:");
maxH.print();

console.log("Delete Max:", maxH.extractMax());
maxH.print();



// ==================== MIN HEAP ====================
class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] <= this.heap[index]) break;

            this.swap(parent, index);
            index = parent;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return min;
    }

    heapifyDown(index) {
        let size = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < size && this.heap[left] < this.heap[smallest])
                smallest = left;

            if (right < size && this.heap[right] < this.heap[smallest])
                smallest = right;

            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    peek() {
        return this.heap[0];
    }

    print() {
        console.log(this.heap);
    }
}


// ----------- USE MIN HEAP -----------
let minH = new MinHeap();

minH.insert(50);
minH.insert(30);
minH.insert(70);
minH.insert(10);
minH.insert(5);

console.log("Min Heap:");
minH.print();

console.log("Delete Min:", minH.extractMin());
minH.print();


/*
==================== SUMMARY ====================

Max Heap:
Largest element on top

Min Heap:
Smallest element on top

Used in:
Priority Queue
Dijkstra Algorithm
Scheduling
Heap Sort

Important for interview + exam.
*/
