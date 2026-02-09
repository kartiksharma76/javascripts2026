/*
DECLARING VARIABLE IN JAVASCRIPTS
JavaScripts uses is the container to store data values in memory.
In javaScripts,variable store number,text,boolean,object and many more data types.
 In javaScripts we can declare variable using var,let and const keywords.
1. var: The var keyword is used to declare a variable in JavaScript. 
It has function scope, which means that it is accessible within the function in which it is declared.
 Variables declared with var can be re-assigned and re-declared.

2. let: The let keyword is used to declare a block-scoped variable in JavaScript.
 It is similar to var but has block scope, which means that it is only accessible within the block in which it is declared. 
 Variables declared with let can be re-assigned but cannot be re-declared within the same scope.

3. const: The const keyword is used to declare a block-scoped variable that cannot be re-assigned. 
It is similar to let but with the added restriction that the variable cannot be re-assigned after it has been declared.
 Variables declared with const must be initialized at the time of declaration.

Think: variable = container to store data values in memory
*/
// Example of declaring variables using var, let, and const
/*
Var is  old way to declare variable in javaScripts,let and const are new way to declare variable in javaScripts. 
Var is function scope,let and const are block scope. Var can be re-assigned and re-declared,let can be re-assigned but cannot be
 re-declared within the same scope,const cannot be re-assigned after it has been declared.
*/
var name = "John";
/*
let and const are block scope,which means that they are only accessible within the block in which they are declared. 
variable declared with let can be re-assigned but cannot be re-declared within the same scope. 
variable declared with const cannot be re-assigned after it has been declared.
*/
let age = 30;
const PI = 3.14;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(PI); // Output: 3.14  
// Re-assigning variables
name = "Jane";
age = 25;
console.log(name);
console.log(age);
// Re-declaring variables
var name = "Doe"; // This is allowed with var
// let age = 35; // This will cause an error because age is already declared with let
// const PI = 3.14159; // This will cause an error because PI is already declared with const


// Variable naming rules in JavaScript
/*
1. Variable names must begin with a letter, underscore (_), or dollar sign ($).
2. Variable names cannot contain spaces or special characters like @, #, %, etc.
3. Variable names are case-sensitive (e.g., age and Age are different variables).
4. Variable names cannot be reserved keywords in JavaScript (e.g., var, let, const, function, etc.).
*/
var _name = "Alice";
var $age = 25;
// var 1name = "Bob"; // This will cause an error because variable names cannot start with a number
// var my name = "Charlie"; // This will cause an error because variable names cannot contain spaces
// var @age = 30; // This will cause an error because variable names cannot contain special characters


// Best practices for naming variables in JavaScript
/*
1. Use meaningful and descriptive names that indicate the purpose of the variable (e.g., firstName, totalPrice, isLoggedIn).
2. Use camelCase for variable names (e.g., firstName, totalPrice) to improve readability.
3. Avoid using single-letter variable names (e.g., x, y, z) unless they are used in a very specific context (e.g., loop counters).
4. Use constants (const) for values that should not change throughout the program to improve code readability and maintainability.
5. Avoid using reserved keywords as variable names to prevent syntax errors.
*/
var firstName = "Alice";
var totalPrice = 100;
var isLoggedIn = true;
const MAX_USERS = 1000;

console.log(firstName); // Output: Alice
console.log(totalPrice); // Output: 100
console.log(isLoggedIn); // Output: true
console.log(MAX_USERS); // Output: 1000 

// Variable hoisting in JavaScript
/*
Variable hoisting is a behavior in JavaScript where variable declarations are moved to the top of their containing 
scope during the compilation phase.
This means that you can use a variable before it is declared in the code. However, only the declaration is hoisted, not the initialization.
*/
console.log(hoistedVar); // Output: undefined (declaration is hoisted, but not the initialization)
var hoistedVar = "I am hoisted!";

// Temporal Dead Zone (TDZ) in JavaScript
/*The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when using let and const variables. 
It refers to the time between the start of the block scope and the point where the variable is declared. 
During this time, the variable is in a "dead zone" and cannot be accessed or used until it is declared.
*/
// console.log(tdzVar); // This will cause a ReferenceError because tdzVar is in the Temporal Dead Zone
let tdzVar = "I am in the Temporal Dead Zone!";

// Variable scope in JavaScript
/*
Variable scope refers to the accessibility of variables in different parts of the code.
1. Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
2. Function Scope: Variables declared within a function have function scope and can only be accessed within that function.
3. Block Scope: Variables declared with let or
    const within a block (e.g., inside an if statement or loop) have block scope and can only be accessed within that block.
*/
var globalVar = "I am a global variable!"; // Global scope
function myFunction() {
    var functionVar = "I am a function variable!"; // Function scope
    console.log(globalVar); // Output: I am a global variable!
    console.log(functionVar); // Output: I am a function variable!
}
myFunction();
// console.log(functionVar); // This will cause a ReferenceError because functionVar is not accessible outside the function
if (true) {
    let blockVar = "I am a block variable!"; // Block scope
    console.log(blockVar); // Output: I am a block variable!
}
// console.log(blockVar); // This will cause a ReferenceError because blockVar is not accessible outside the block

// Variable shadowing in JavaScript
/*
Variable shadowing occurs when a variable declared within a certain scope (e.g., function or block)
 has the same name as a variable declared in an outer scope.
In this case, the inner variable "shadows" the outer variable, meaning that the inner variable
 takes precedence over the outer variable within its scope.
*/
var shadowVar = "I am the outer variable!";
function shadowingExample() {
    var shadowVar = "I am the inner variable!";
    console.log(shadowVar); // Output: I am the inner variable! (the inner variable shadows the outer variable)
}
shadowingExample();
console.log(shadowVar); // Output: I am the outer variable! (the outer variable is still accessible outside the function)

// Variable redeclaration in JavaScript
/*
Variable redeclaration refers to the ability to declare a variable with the same name multiple times within the same scope.
1. With var: Variables declared with var can be redeclared within the same scope without causing an error. 
The last declaration will overwrite the previous ones.
2. With let and const: Variables declared with let and const cannot be redeclared within the same scope.
 Attempting to redeclare a variable with let or const will result in a syntax error.
*/
var redeclareVar = "First declaration";
var redeclareVar = "Second declaration"; // This is allowed with var, but it overwrites the first declaration
console.log(redeclareVar); // Output: Second declaration
// let redeclareLet = "First declaration";
// let redeclareLet = "Second declaration"; // This will cause a syntax error because let cannot be redeclared
// const redeclareConst = "First declaration";
// const redeclareConst = "Second declaration"; // This will cause a syntax error because const cannot be redeclared


// Variable reassignment in JavaScript
/*
Variable reassignment refers to the ability to assign a new value to an existing variable.
1. With var and let: Variables declared with var and let can be reassigned to a new value without any restrictions.
2. With const: Variables declared with const cannot be reassigned to a new value after they have been initialized. 
Attempting to reassign a const variable will result in a TypeError.
*/
var reassignVar = "Initial value";
reassignVar = "Reassigned value";
console.log(reassignVar); // Output: Reassigned value
let reassignLet = "Initial value";
reassignLet = "Reassigned value";
console.log(reassignLet); // Output: Reassigned value
const reassignConst = "Initial value";
// reassignConst = "Reassigned value"; // This will cause a TypeError because const cannot be reassigned


// Variable initialization in JavaScript
/*
Variable initialization refers to the process of assigning an initial value to a variable at the time of declaration.
1. With var and let: Variables declared with var and let can be initialized at the time of declaration or later in the code.
2. With const: Variables declared with const must be initialized at the time of declaration.
 Attempting to declare a const variable without initializing it will result in a syntax error.
*/
var initVar; // This is allowed with var, but the variable is initialized to undefined
initVar = "Initialized value";
console.log(initVar); // Output: Initialized value
let initLet; // This is allowed with let, but the variable is initialized to undefined
initLet = "Initialized value";
console.log(initLet); // Output: Initialized value
// const initConst; // This will cause a syntax error because const must be initialized at the time of declaration
const initConst = "Initialized value";
console.log(initConst); // Output: Initialized value    


//Types of variables in JavaScript
/*
1. Primitive Variables: These variables store primitive data types such as numbers, strings, booleans, null, and undefined. 
They are immutable, meaning that their values cannot be changed after they are created. Examples of primitive variables include:
- var name = "Alice"; 
- let age = 25;
- const isStudent = true;   
2. Reference Variables: These variables store references to objects, arrays, and functions.
 They are mutable, meaning that their values can be changed after they are created. Examples of reference variables include:
- var person = { name: "Alice", age: 25 };
- let numbers = [1, 2, 3, 4, 5];
- const greet = function() { console.log("Hello!"); };
*/

