/*
Check if brackets are valid: (), {}, []
*/

function isValid(str) {
    let stack = [];

    for (let ch of str) {
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
        } else {
            let top = stack.pop();

            if (
                (ch === ")" && top !== "(") ||
                (ch === "}" && top !== "{") ||
                (ch === "]" && top !== "[")
            ) {
                return false;

            }
        }
    }

    return stack.length === 0;
}
console.log(isValid("(){}[]"));   // true
console.log(isValid("(]"));       // false
