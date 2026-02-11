/*
================ STACK USING LINKED LIST =================
Stack follows LIFO:
Last In First Out

In linked list stack:
Insertion & deletion from HEAD (top)

Operations:
1. push()   → insert at top
2. pop()    → remove from top
3. peek()   → show top
4. isEmpty()
5. size()
6. print()

Time Complexity:
push → O(1)
pop → O(1)
peek → O(1)
==========================================================
*/

// ===== NODE CLASS =====
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ===== STACK CLASS =====
class Stack {
  constructor() {
    this.top = null;   // head of linked list
    this.length = 0;
  }

  // push element
  push(data) {
    const node = new Node(data);

    node.next = this.top;
    this.top = node;
    this.length++;
  }

  // pop element
  pop() {
    if (!this.top) {
      console.log("Stack underflow");
      return null;
    }

    let removed = this.top.data;
    this.top = this.top.next;
    this.length--;

    return removed;
  }
// peek top
  peek() {
    if (!this.top) return null;
    return this.top.data;
  }

  // check empty
  isEmpty() {
    return this.length === 0;
  }

  // size
  size() {
    return this.length;
  }

 // print stack
  print() {
    let temp = this.top;
    let res = "";

    while (temp) {
      res += temp.data + " -> ";
      temp = temp.next;
    }

    console.log(res + "null");
  }
}
// ===== USAGE =====
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();      
// 30 -> 20 -> 10 -> null

console.log("Top:", stack.peek());

stack.pop();
stack.print();

console.log("Size:", stack.size());

