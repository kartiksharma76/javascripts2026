/*
==================== TYPES OF BINARY TREE IN JAVASCRIPT ====================

1. Full Binary Tree
2. Complete Binary Tree
3. Perfect Binary Tree
4. Skewed Binary Tree

Binary Tree:
Each node has maximum 2 children (left and right)
*/

// ----------- Node Class -----------
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

/*
==================== 1. FULL BINARY TREE ====================

Definition:
Every node has either 0 or 2 children.
No node has only one child.
*/

// Example Full Binary Tree

let fullRoot = new Node(1);
fullRoot.left = new Node(2);
fullRoot.right = new Node(3);
fullRoot.left.left = new Node(4);
fullRoot.left.right = new Node(5);
fullRoot.right.left = new Node(6);
fullRoot.right.right = new Node(7);

// Check Full Binary Tree
function isFullTree(node) {
    if (!node) return true;

    // leaf node
    if (!node.left && !node.right) return true;

    // if both children exist
    if (node.left && node.right) {
        return isFullTree(node.left) && isFullTree(node.right);
    }

    return false;
}
console.log("Full Binary Tree:", isFullTree(fullRoot));

/*
==================== 2. COMPLETE BINARY TREE ====================

Definition:
All levels filled except last.
Last level filled from left to right.
*/

function isCompleteTree(root) {
    let queue = [];
    queue.push(root);
    let nullFound = false;

    while (queue.length) {
        let current = queue.shift();

        if (current === null) {
            nullFound = true;
        } else {
            if (nullFound) return false;

            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return true;
}
console.log("Complete Binary Tree:", isCompleteTree(fullRoot));



/*
==================== 3. PERFECT BINARY TREE ====================

Definition:
All internal nodes have 2 children.
All leaf nodes at same level.
Nodes = 2^h - 1
*/

// Find height
function findHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.left;
    }
    return height;
}

// Count nodes
function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

// Check perfect tree
function isPerfectTree(root) {
    let h = findHeight(root);
    let totalNodes = countNodes(root);
    return totalNodes === Math.pow(2, h) - 1;
}

console.log("Perfect Binary Tree:", isPerfectTree(fullRoot));



/*
==================== 4. SKEWED BINARY TREE ====================

Definition:
All nodes have only one child.
Looks like linked list.

Types:
1. Left Skewed
2. Right Skewed
*/

// Left Skewed Tree
let leftSkewed = new Node(1);
leftSkewed.left = new Node(2);
leftSkewed.left.left = new Node(3);
leftSkewed.left.left.left = new Node(4);

// Right Skewed Tree
let rightSkewed = new Node(1);
rightSkewed.right = new Node(2);
rightSkewed.right.right = new Node(3);
rightSkewed.right.right.right = new Node(4);

function isSkewed(root) {
    if (!root) return true;

    if (root.left && root.right) return false;

    if (root.left) return isSkewed(root.left);
    if (root.right) return isSkewed(root.right);

    return true;
}

console.log("Left Skewed:", isSkewed(leftSkewed));
console.log("Right Skewed:", isSkewed(rightSkewed));



/*
==================== SUMMARY ====================

Full Binary Tree:
0 or 2 children only

Complete Binary Tree:
Filled left to right

Perfect Binary Tree:
All levels full (2^h -1 nodes)

Skewed Binary Tree:
All nodes one side (like linked list)

These are most important tree types for DSA + interview.
*/