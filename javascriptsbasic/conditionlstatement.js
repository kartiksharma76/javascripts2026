// conditional statements in JavaScript
/**
 * Conditional statements are used to perform different actions based on different conditions.
 * Types of conditional statements in JavaScript:
 * if statement: executes a block of code if a specified condition is true.
 * if...else statement: executes a block of code if a specified condition is true, and another block of code if the condition is false.
 * if...else if...else statement: executes a block of code if a specified condition is true, and another block of code if the condition
 *  is false, and another block of code if the condition is false.
 * switch statement: executes a block of code based on different cases.
 * ternary operator: a shorthand for the if...else statement.
 * Type operators: typeof and instanceof are used to check the type of a variable or an object.
 * 
 * The if statement is used to execute a block of code if a specified condition is true. 
 * The syntax for the if statement is as follows:
 * if (condition) {
 *     // code to be executed if the condition is true
 * }
 * 
 * The if...else statement is used to execute a block of code if a specified condition is true,
 *  and another block of code if the condition is false.
 * The syntax for the if...else statement is as follows:
 * if (condition) {
 *     // code to be executed if the condition is true
 * } else {
 *     // code to be executed if the condition is false
 * }
 * The if...else if...else statement is used to execute a block of code if a specified condition is true, 
 * and another block of code if the condition is false, and another block of code if the condition is false.
 * The syntax for the if...else if...else statement is as follows:
 * if (condition1) {
 *     // code to be executed if condition1 is true
 * }
 * else if (condition2) {
 *     // code to be executed if condition2 is true
 * }
 * else {
 *     // code to be executed if both condition1 and condition2 are false
 * }
 * The switch statement is used to execute a block of code based on different cases.
 * The syntax for the switch statement is as follows:
 * switch (expression)
 * {
 *     case value1:
 *         // code to be executed if expression == value1
 *        break;
 *    case value2:
 *        // code to be executed if expression == value2
 *       break;
 *   default:
 *      // code to be executed if expression doesn't match any case
 * }
 * The ternary operator is a shorthand for the if...else statement. It takes three
 * operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. 
 * The syntax for the ternary operator is as follows:
 * condition ? value_if_true : value_if_false
 * Type operators: typeof and instanceof are used to check the type of a variable or an object. The typeof operator
 *  returns a string indicating the type of the operand, while the instanceof operator checks if an object is an 
 * instance of a specific constructor or class.
 * 
 */

//if statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
// else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");

}
// ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount: " + discount); // Discount: 0.1

// typeof operator
let num = 42;
console.log(typeof num); // number

let str = "Hello";
console.log(typeof str); // string

// instanceof operator
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true  

// checking if an object is an instance of a specific constructor
function Person(name) {
    this.name = name;
}
let person1 = new Person("Alice");
console.log(person1 instanceof Person); // true

// checking if an object is an instance of a specific class
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
let car1 = new Car("Toyota", "Camry");
console.log(car1 instanceof Car); // true

// checking if an object is an instance of a specific class or constructor
console.log(car1 instanceof Object);

// Output: true

// checking if an object is an instance of a specific class or constructor
console.log(car1 instanceof Person);
// Output: false

// checking if an object is an instance of a specific class or constructor
console.log(person1 instanceof Object);
// Output: true

// checking if an object is an instance of a specific class or constructor
console.log(person1 instanceof Car);
// Output: false

// checking if an object is an instance of a specific class or constructor
console.log(car1 instanceof Object);
// Output: true


// checking if an object is an instance of a specific class or constructor
console.log(arr instanceof Object);
// Output: true
console.log(arr instanceof Person);
// Output: false
console.log(arr instanceof Car);
// Output: false

// checking if an object is an instance of a specific class or constructor
console.log(num instanceof Object);
// Output: false
console.log(str instanceof Object);
// Output: false

// checking if an object is an instance of a specific class or constructor
console.log(num instanceof Number);
// Output: false
console.log(str instanceof String);
// Output: false 

console.log(num instanceof Object); // false
console.log(str instanceof Object); // false

console.log(num instanceof Number); // false
console.log(str instanceof String); // false


//  if...else statement with multiple conditions
let temperature = 30;
if (temperature > 30) {
    console.log("It's a hot day.");
}
else if (temperature > 20) {
    console.log("It's a warm day.");
}
else if (temperature > 10) {
    console.log("It's a cool day.");
}
else {
    console.log("It's a cold day.");
}

// checking for falsy values
let phoneNumber = "";
if (phoneNumber) {
    console.log("Phone number is provided.");
} else {
    console.log("Phone number is not provided.");
}
//Output: Phone number is not provided.

let name = "John";
if (name) {
    console.log("Name is provided.");
} else {
    console.log("Name is not provided.");
}
//Output: Name is provided.
