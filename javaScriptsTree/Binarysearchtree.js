/*
==================== BINARY SEARCH TREE (BST) IN JAVASCRIPT ====================

Definition:
Binary Search Tree is a special type of binary tree.

Rules:
1. Left child < root
2. Right child > root
3. Applies to every node (recursively)

Used in:
- Searching fast (O(log n))
- Sorting data
- Databases & indexing
*/

// ----------- Node Class -----------
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// ----------- BST Class -----------
class BST {
    constructor() {
        this.root = null;
    }

    // ========== INSERT ==========
    insert(data) {
        let newNode = new Node(data);

        if (this.root === null) {
            this.root = new Node;
            return;
        }

        let current = this.root;

        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    // ========== SEARCH ==========

    search(data) {
        let current = this.root;

        while (current) {
            if (data === current.data) {
                console.log("found :", data);
                return true;

            }
            else if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        console.log("Not Found:", data);
        return false;

    }
    // ========== INORDER TRAVERSAL (Sorted) ==========
    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    // ========== PREORDER ==========
    preorder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    // ========== POSTORDER ==========
    postorder(node = this.root) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    // ========== FIND MIN ==========
    findMin() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        console.log("Minimum value:", current.data);
    }
    // ========== FIND MAX ==========
    findMax() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        console.log("Maximum value:", current.data);
    }
}

// ----------- CREATE BST -----------
let tree = new BST();

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

// ----------- OPERATIONS -----------
console.log("Search 40:");
tree.search(40);

console.log("Inorder Traversal (Sorted):");
tree.inorder();

console.log("Preorder Traversal:");
tree.preorder();

console.log("Postorder Traversal:");
tree.postorder();

tree.findMin();
tree.findMax();

/*
==================== TIME COMPLEXITY ====================

Search: O(log n)
Insert: O(log n)
Delete: O(log n)

Worst case (skewed): O(n)

BST is very important for DSA + interview + exam.
*/
