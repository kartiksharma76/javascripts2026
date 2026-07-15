class Node {
    constructor(char, freq, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

function printCodes(root, code = "") {
    if (!root) return;

    if (root.char !== null) {
        console.log(root.char + " : " + code);
    }

    printCodes(root.left, code + "0");
    printCodes(root.right, code + "1");
}

let a = new Node('A', 5);
let b = new Node('B', 9);
let c = new Node('C', 12);

let left = new Node(null, 14, a, b);
let root = new Node(null, 26, left, c);

printCodes(root);