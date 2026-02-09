/**
 * Operators in JavaScript
 * Operators are used to perform operations on variables and values.
 * Types of operators in JavaScript:
 * Arithmetic operators: +, -, *, /, %, ++, --
 * Assignment operators: =, +=, -=, *=, /=, %=
 * Comparison operators: ==, ===, !=, !==, >, <, >=, <=
 * Logical operators: &&, ||, !
 * Bitwise operators: &, |, ^, ~, <<, >>, >>>
 * Ternary operator: ? :
 * Type operators: typeof, instanceof 
 * Arithmetic operators are used to perform mathematical operations on numbers. 
 * They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), and decrement (--).  
 * Assignment operators are used to assign values to variables.
 *  They include the basic assignment operator (=) and compound assignment 
 * operators (+=, -=, *=, /=, %=) that combine an arithmetic operation with assignment.
 * Comparison operators are used to compare two values and return a boolean result.
 *  They include equality (==), strict equality (===), inequality (!=), strict inequality (!==), greater than (>), 
 * less than (<), greater than or equal to (>=), and less than or equal to (<=).
 * Logical operators are used to combine multiple conditions and return a boolean result. 
 * They include logical AND (&&), logical OR (||), and logical NOT (!).
 * Bitwise operators are used to perform bit-level operations on integers.
 * They include bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (<<), right
 * shift (>>), and unsigned right shift (>>>).
 * The ternary operator is a shorthand for the if...else statement. 
 * It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
 *  The syntax for the ternary operator is as follows:
 * condition ? value_if_true : value_if_false
 * Type operators are used to check the type of a variable or an object.
 *  The typeof operator returns a string indicating the type of the operand,
 *  while the instanceof operator checks if an object is an instance of a specific constructor or class.
 * Understanding operators is essential for performing various operations in JavaScript, 
 * such as arithmetic calculations, comparisons, logical operations, and type checking. 
 * It allows you to manipulate data and control the flow of your program effectively.
 * 
 * In addition to the basic operators, JavaScript also has some special operators 
 * like the spread operator (...), the rest operator (...), and the optional chaining operator (?.). 
 * The spread operator is used to expand an iterable (like an array) into individual elements, while
 *  the rest operator is used to collect multiple elements into an array. The optional chaining operator 
 * allows you to access properties of an object without having to check if the object or its properties are null or undefined.
 * 
 */
//operators
//operators are used to perform operations on variables and values.
//Types of operators in JavaScript
/*Arithmetic operators: +, -, *, /, %, ++, --
Assignment operators: =, +=, -=, *=, /=, %=
Comparison operators: ==, ===, !=, !==, >, <, >=, <=
Logical operators: &&, ||, !
Bitwise operators: &, |, ^, ~, <<, >>, >>>
Ternary operator: ? :
Type operators: typeof, instanceof
*/

//----------------------------------------------------------------------------------------------------------------
//Arithmetic operators using var and let and const and  number and string
var a = 10;
var b = 5;
//addition
var sum = a + b;
console.log("Sum: " + sum); // Sum: 15
//subtraction
var sub = a - b;
console.log("Subtraction: " + sub); // Subtraction: 5
//multiplication
var mul = a * b;
console.log("Multiplication: " + mul); // Multiplication: 50
//division
var div = a / b;
console.log("Division: " + div); // Division: 2
//modulus
var mod = a % b;
console.log("Modulus: " + mod); // Modulus: 0
//increment
a++;
console.log("Increment: " + a); // Increment: 11
//decrement
b--;
console.log("Decrement: " + b); // Decrement: 4

// using let and const
let x = 20;
const y = 10;
//addition
let sum2 = x + y;
console.log("Sum: " + sum2); // Sum: 30
//subtraction
let sub2 = x - y;
console.log("Subtraction: " + sub2); // Subtraction: 10
//multiplication
let mul2 = x * y;
console.log("Multiplication: " + mul2); // Multiplication: 200
//division
let div2 = x / y;
console.log("Division: " + div2); // Division: 2
//modulus
let mod2 = x % y;
console.log("Modulus: " + mod2); // Modulus: 0

//string concatenation
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log("String Concatenation: " + result); // String Concatenation: Hello World

//using template literals
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!


// using number and string
let num1 = 10;
let num2 = "20";
let sum3 = num1 + num2;
console.log("Sum: " + sum3); // Sum: 1020 (string concatenation)


//using type coercion
let num3 = 5;
let str3 = "10";
let result2 = num3 + str3;
console.log("Result: " + result2); // Result: 510 (string concatenation)


//using type conversion
let num4 = 5;
let str4 = "10";
let result3 = num4 + Number(str4);
console.log("Result: " + result3); // Result: 15 (number addition)





//-------------------------------------------------------------------------------------------------------------
console.log("Comparison Operators:");
//using comparison operators
let p = 10;
let q = 20;
console.log(p == q);// false
console.log(p === q); // false
console.log(p != q); // true
console.log(p !== q); // true
console.log(p > q); // false
console.log(p < q); // true
console.log(p >= q); // false
console.log(p <= q); // true 

//------------------------------------------------------------------------------------------------------------------
//Assignment operators
console.log("Assignment Operators:");
let m = 10;
m = 15; // assignment operator
console.log("m:" + m); // m: 15
m += 5; // m = m + 5
console.log("m:" + m); // m: 15
m -= 3; // m = m - 3;
console.log("m:" + m); // m: 12
m *= 2; // m = m * 2;
console.log("m:" + m); // m: 24
m /= 4; // m = m / 4;
console.log("m:" + m); // m: 6
m %= 5; // m = m % 5;
console.log("m:" + m); // m: 1 

//------------------------------------------------------------------------------------------------------------------
console.log("Logical Operators:");
//using logical operators
let a1 = true;
let b1 = false;
console.log(a1 && b1); // false
console.log(a1 || b1); // true
console.log(!a1); // false
console.log(!b1); // true

//using logical operators with non-boolean values
let c1 = 0;
let d1 = "Hello";
console.log(c1 && d1); // 0 (falsy value)
console.log(c1 || d1); // Hello (truthy value)
console.log(!c1); // true (falsy value)
console.log(!d1); // false (truthy value)   

//using logical operators with multiple conditions
let e1 = 5;
let f1 = 10;
let g1 = 15;
console.log(e1 < f1 && f1 < g1); // true
console.log(e1 > f1 || f1 < g1); // true
console.log(!(e1 < f1)); // false


//-------------------------------------------------------------------------------------------------------------
console.log("Bitwise Operators:");
//using bitwise operators
let x1 = 5; // 0101 in binary   
let y1 = 3; // 0011 in binary
console.log(x1 & y1); // 1 (0001 in binary)
console.log(x1 | y1); // 7 (0111 in binary)
console.log(x1 ^ y1); // 6 (0110 in binary)
console.log(~x1); // -6 (1010 in binary)
console.log(x1 << 1); // 10 (1010 in binary)
console.log(x1 >> 1); // 2 (0010 in binary)
console.log(x1 >>> 1); // 2 (0010 in binary)

//using bitwise operators with negative numbers
let a2 = -5; // 1111 1011 in binary (two's complement)
console.log(a2 & 3); // 3 (0000 0011 in binary)
console.log(a2 | 3); // -5 (1111 1011 in binary)
console.log(a2 ^ 3);    // -8 (1111 1000 in binary) 
console.log(~a2); // 4 (0000 0100 in binary)
console.log(a2 << 1); // -10 (1111 0110 in binary)
console.log(a2 >> 1); // -3 (1111 1101 in binary)
console.log(a2 >>> 1); // 2147483645 (0111 1111 1111 1111 1111 1111 1111 1101 in binary)


//-------------------------------------------------------------------------------------------------------------
console.log("Ternary Operator:");
//using ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote); // Can vote: Yes
age = 16;
canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote); // Can vote: No

//using ternary operator with multiple conditions
let score = 85;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";
console.log("Grade: " + grade); // Grade: B
score = 95;
grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";
console.log("Grade: " + grade); // Grade: A


//using ternary operator with nested conditions
let num = 10;
let result1 = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log("Result: " + result1);
num = -5;
result1 = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log("Result: " + result1);
num = 0;
result1 = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log("Result: " + result1); // Result: Zero

//-------------------------------------------------------------------------------------------------------------
console.log("Type Operators:");
//using typeof operator
let str = "Hello";
let num5 = 10;
let bool = true;
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3];
console.log(typeof str); // string
console.log(typeof num5); // number
console.log(typeof bool); // boolean
console.log(typeof obj); // object
console.log(typeof arr); // object (arrays are objects in JavaScript)
//using instanceof operator
console.log(obj instanceof Object); // true
console.log(arr instanceof Array); // true
console.log(str instanceof String); // false (str is a primitive string, not a String object) 

//using type operators with functions
function greet() {
    console.log("Hello, World!");
}
console.log(typeof greet); // function
console.log(greet instanceof Function); // true

//using type operators with null and undefined
let nullValue = null;
let undefinedValue;
console.log(typeof nullValue); // object (this is a known bug in JavaScript)
console.log(typeof undefinedValue); // undefined
console.log(nullValue instanceof Object); // false (null is not an instance of Object)
console.log(undefinedValue instanceof Object); // false (undefined is not an instance of Object)

//using type operators with symbols
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(typeof sym1); // symbol
console.log(typeof sym2); // symbol
console.log(sym1 === sym2); // false (each symbol is unique)

//using type operators with functions and objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person("Alice", 30);
console.log(typeof Person); // function
console.log(typeof person1); // object
console.log(Person instanceof Function); // true
console.log(person1 instanceof Person); // true


//using type operators with arrays and objects
let arr1 = [1, 2, 3];
let obj1 = { name: "Bob", age: 25 };
console.log(typeof arr1); // object
console.log(typeof obj1); // object
console.log(arr1 instanceof Array); // true
console.log(obj1 instanceof Object); // true  


//using type operators with functions and arrays
function sum(a, b) {
    return a + b;
}
let arr2 = [1, 2, 3];
console.log(typeof sum); // function
console.log(typeof arr2); // object
console.log(sum instanceof Function); // true
console.log(arr2 instanceof Array); // true
