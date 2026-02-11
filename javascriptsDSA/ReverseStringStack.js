function reverseString(str) {
  let stack = [];

  for (let ch of str) {
    stack.push(ch);
  }

  let reversed = "";

  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("kartik")); 
// kitrak
