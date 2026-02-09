//Data types in JavaScript
/**
 * Data types in JavaScript can be categorized into two main types: primitive data types and non-primitive data types.
 * Primitive data types include string, number, boolean, null, undefined, and symbol. These data types are immutable,
 *  which means that their values cannot be changed after they are created.
 * Non-primitive data types include objects, arrays, and functions. These data types are mutable, 
 * which means that their values can be changed after they are created.
 * JavaScript is a dynamically typed language, which means that variables can hold values 
 * of any data type and the type of a variable can change at runtime.
 * JavaScript also has type coercion, which means that it can automatically convert 
 * values from one data type to another when necessary. For example, if you try to add a number and a string, 
 * JavaScript will convert the number to a string and concatenate them.
 * JavaScript also has type conversion, which allows you to explicitly convert values from one 
 * data type to another using built-in functions like Number(), String(), Boolean(), etc.
 * In JavaScript, there are also truthy and falsy values. Truthy values are values that are considered 
 * true in a boolean context, while falsy values are considered false. Falsy values include false, 0, "", null, undefined, and NaN.
 * Null and undefined are two special data types in JavaScript. Null represents the intentional absence of any
 *  object value, while undefined represents the absence of a value or the lack of initialization.
 * JavaScript also has let and const keywords for declaring variables. Let is used for block scope
 *  variables that can be re-assigned, while const is used for block scope constants that cannot be 
 * re-assigned after they have been declared.
 * 
 * In addition to the basic data types, JavaScript also has built-in objects like String, Number, 
 * Boolean, Object, Array, Function, etc. These objects have properties and methods that allow you 
 * to perform various operations on them.
 * For example, the String object has methods like length, toUpperCase(), toLowerCase(),
 * indexOf(), slice(), replace(), etc. The Number object has methods like toFixed(), toExponential(), 
 * toPrecision(), etc. The Array object has methods like push(), pop(), shift(), unshift(), slice(), splice(), etc. 
 * The Function object has methods like call(), apply(), bind(), etc.
 * Understanding data types is crucial for writing efficient and bug-free code in JavaScript. 
 * It helps you to choose the right data type for your variables and to avoid common pitfalls related to type 
 * coercion and type conversion.  
 *  
 */
/*
1. Primitive data types: string, number, boolean, null, undefined, symbol
2. Non-primitive data types: object, array, function
*/

//Primitive data types
var name = "john"; // string
var age = 30; // number
var isStudent = true; // boolean
var address = null; // null
var phoneNumber; // undefined
var sym = Symbol("id"); // symbol  (correct)

//Non-primitive data types
var person = {
    name: "john",
    age: 30,
    isStudent: true
};

var numbers = [1, 2, 3, 4, 5];

function greet() {
    console.log("Hello, World!");
}

//typeof checking
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof address);     // object (JS bug)
console.log(typeof phoneNumber); // undefined
console.log(typeof sym);         // symbol
console.log(typeof person);      // object
console.log(typeof numbers);     // object
console.log(typeof greet);       // function

//Type coercion
var result = "The age is " + age; // string concatenation
console.log(result); // The age is 30

var sum = age + "5"; // number + string result in string concatenation
console.log(sum) // 305 (correct)

//Type conversion
var numString = "100";
var Num = Number(numString, String); // converts string to number
console.log(Num); //100

//Truthy and Falsy values
/*
Truthy values: non-empty strings, non-zero numbers, objects, arrays, functions
Falsy values: false, 0, "", null, undefined, NaN
*/
if (name) {
    console.log("Name is truthy");
} else {
    console.log("Name is falsy");
}

//Output: Name is truthy
if (phoneNumber) {
    console.log("Phone number is truthy");
} else {
    console.log("Phone number is falsy");
}
//Output: Phone number is falsy

//Null and undefined
var x = null;
var y; // undefined

console.log(x); // null
console.log(y); // undefined

//Difference between null and undefined
/*
null is an assignment value that represents the intentional absence of any object value. It is a primitive value that can be
 assigned to a variable as a representation of no value.
undefined is a primitive value that is automatically assigned to variables that have been declared but not initialized, 
or to function parameters that have not been provided with an argument. It represents the absence of a value or the lack of initialization.
In summary, null is an explicit assignment of no value, while undefined is the default state of a variable that has not been assigned a value.
*/

//let and const
// let age = 30; // block scope variable
// const name = "john"; // block scope constant
// let name ="john"; // block scope variable
// let address = "123 Main St"; // block scope variable
// const PI = 3.14; // block scope constant
// const MAX_VALUE = 100; // block scope constant
// const MIN_VALUE = 0; // block scope constant

// console.log(age + name + address + PI + MAX_VALUE + MIN_VALUE  ); // 30john123 Main St3.141000


// String
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // HELLO, WORLD!
console.log(str.toLowerCase());
// hello, world!
console.log(str.indexOf("World")); // 7
console.log(str.slice(0, 5)); // Hello
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!


// Number
let num1 = 10;
let num2 = 3;
console.log(num1 + num2); // 13
console.log(num1 - num2); // 7
console.log(num1 * num2); // 30
console.log(num1 / num2); // 3.3333333333333335
console.log(num1 % num2); // 1
console.log(num1 ** num2); // 1000  

// Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false
console.log(!isFalse); // true  

// Object
var person = {
    name: "john",
    age: 30,
    isStudent: true
};
console.log(person.name); // john
console.log(person.age); // 30
console.log(person.isStudent); // true  
person.name = "doe"; // updating name property
console.log(person.name); // doe  

// Brackets notation
console.log(person["name"]); // doe
console.log(person["age"]); // 30
console.log(person["isStudent"]); // true

