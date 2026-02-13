/*
================ GENERAL TREE IN JAVASCRIPT =================

General Tree:
A general tree is a hierarchical data structure where each node 
can have any number of children (no fixed limit like binary tree).

Used in:
- File system (folders & files)
- HTML DOM structure
- Organization hierarchy

Basic Operations:
1. Create node
2. Add child
3. Traverse tree (DFS/BFS)
*/

// --------------Create Node Class--------------
class TreeNode {
    constructor(data) {
        this.data = data; // value of node
        this.children = [];// array to stored child nodes
    }

    //Add child node
    addChild(node) {
        this.children.push(node);
    }
}

//--------Create Tree--------------
let root = new TreeNode("A");  // root node

let nodeB = new TreeNode("B");
let nodeC = new TreeNode("C");
let nodeD = new TreeNode("D");

root.addChild(nodeB);
root.addChild(nodeC);
root.addChild(nodeD);

let nodeE = new TreeNode("E");
let nodeF = new TreeNode("F");

nodeB.addChild(nodeE);
nodeB.addChild(nodeF);

// ----------- DFS Traversal (Depth First) -----------
function dfs(node) {
    console.log(node.data);   // print node

    for (let child of node.children) {
        dfs(child);             // recursive call
    }
}

console.log("DFS Traversal:");
dfs(root);

// ----------- BFS Traversal (Level Order) -----------

function bfs(root) {
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current.data);

        for (let child of current.children) {
            queue.push(child);
        }


    }
}
console.log("BFS Travrsal:");
bfs(root);
