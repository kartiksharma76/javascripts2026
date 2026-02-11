/*
Stack that returns minimum in O(1)
*/

class MinStack { 
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }
    pop() {
        let removed = this.stack.pop();

        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// usage
const s = new MinStack();
s.push(5);
s.push(2);
s.push(10);
s.push(1);

console.log("Min:", s.getMin()); // 1
s.pop();
console.log("Min:", s.getMin()); // 2