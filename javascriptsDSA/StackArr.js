/*
================ STACK USING ARRAY (LIFO) =================

Stack follows LIFO:
Last In First Out

Operations:
1. push()   → add element
2. pop()    → remove element
3. peek()   → top element
4. isEmpty()
5. size()
6. print()

Time Complexity:
push → O(1)
pop → O(1)
peek → O(1)
==========================================================
*/


class Stack {
    constructor(){
        this.items = [];
    }

    // push element 
    push(element){
        this.items.push(element);
    }
    // pop element 
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return null;
        }
        return this.items.pop();
    }

    // peek (top element)
    peek(){
        if(this.isEmpty()){
            console.log("Stack empty");
            return null;
            
        }
        return this.items[this.items.length-1];
    }

    //check empty
    isEmpty(){
        return this.items.length === 0;
    }

    // size
    size(){
        return this.items.length;
    }

    // print stack
    print(){
        console.log(this.items.join("<-"));
    }
}

// ===== Usage =====
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();      
// 10 <- 20 <- 30

console.log("Top:", stack.peek());  
// 30

stack.pop();
stack.print();      
// 10 <- 20

console.log("Size:", stack.size());