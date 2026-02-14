/*
==================== N-ARY TREE IN JAVASCRIPT ====================

N-ary Tree:
Tree where each node can have any number of children.
(Not limited to 2 like binary tree)

Used in:
- File system (folder structure)
- HTML DOM
- Organization hierarchy
- Menu systems

Each node stores:
data + list of children
*/


// ----------- Node Class -----------
class NaryNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    // add child
    addChild(node) {
        this.children.push(node);
    }
}


// ----------- CREATE N-ARY TREE -----------
let root = new NaryNode("A");

let B = new NaryNode("B");
let C = new NaryNode("C");
let D = new NaryNode("D");

root.addChild(B);
root.addChild(C);
root.addChild(D);

let E = new NaryNode("E");
let F = new NaryNode("F");

B.addChild(E);
B.addChild(F);

/*
Tree structure:

        A
     /  |  \
    B   C   D
   / \
  E   F
*/


// ----------- DFS Traversal (Depth First) -----------
function dfs(node) {
    if (!node) return;

    console.log(node.data);

    for (let child of node.children) {
        dfs(child);
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

console.log("BFS Traversal:");
bfs(root);


// ----------- COUNT TOTAL NODES -----------
function countNodes(node) {
    if (!node) return 0;

    let count = 1;
    for (let child of node.children) {
        count += countNodes(child);
    }
    return count;
}

console.log("Total Nodes:", countNodes(root));


// ----------- FIND NODE -----------
function search(node, value) {
    if (!node) return false;

    if (node.data === value) {
        console.log("Found:", value);
        return true;
    }

    for (let child of node.children) {
        if (search(child, value)) return true;
    }

    return false;
}

search(root, "F");


/*
==================== SUMMARY ====================

N-ary Tree:
Node can have many children

Traversals:
DFS → Depth first
BFS → Level order

Used in:
DOM tree
File explorer
Game tree
Hierarchy system

Important for DSA + interview.
*/
