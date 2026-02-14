/*
==================== AVL TREE (SELF-BALANCING BST) ====================

AVL Tree:
AVL is a self-balancing Binary Search Tree.
After every insertion or deletion, tree balances itself.

Balance Factor:
height(left subtree) - height(right subtree)

Balance factor must be:
-1, 0, +1

If balance factor becomes >1 or <-1 → rotation required.

Rotations:
1. Right Rotation (LL case)
2. Left Rotation (RR case)
3. Left-Right Rotation (LR case)
4. Right-Left Rotation (RL case)

Time Complexity:
Search: O(log n)
Insert: O(log n)
Delete: O(log n)
*/

// ----------- Node Class -----------
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// ----------- AVL TREE CLASS -----------
class AVLTree {
    // Get Height
    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }
    // Get balance factor
    getBalance(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Right Rotation (LL case)

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return x;
    }
    // Left Rotation (RR case)
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        return y;


    }
    insert(node, data) {
        // Normal BST insert
        if (!node) return new Node(data);

        if (data < node.data) {
            node.left = this.insert(node.left, data);
        }
        else if (data > node.data) {
            node.right = this.insert(node.right, data);
        }
        else {
            return node; // duplicate not allowed
        }
        // Update height
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Check balance
        let balance = this.getBalance(node);

        // ====== ROTATIONS ======

        // LL case
        if (balance > 1 && data < node.left.data) {
            return this.rightRotate(node);
        }

        // RR case
        if (balance < -1 && data > node.right.data) {
            return this.leftRotate(node);
        }

        // LR case
        if (balance > 1 && data > node.left.data) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // RL case
        if (balance < -1 && data < node.right.data) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }
    // Preorder
    preorder(root) {
        if (root) {
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    // Postorder
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.data);
        }
    }
}

// ----------- USE AVL TREE -----------
let avl = new AVLTree();
let root = null;

root = avl.insert(root, 10);
root = avl.insert(root, 20);
root = avl.insert(root, 30);
root = avl.insert(root, 40);
root = avl.insert(root, 50);
root = avl.insert(root, 25);

console.log("Inorder (Sorted):");
avl.inorder(root);

console.log("Preorder:");
avl.preorder(root);

console.log("Postorder:");
avl.postorder(root);



