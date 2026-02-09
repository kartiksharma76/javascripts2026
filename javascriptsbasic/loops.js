/**
 * Loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met.
 *  There are several types of loops in JavaScript, including:
 * 1. for loop: executes a block of code a specified number of times.
 * 2. while loop: executes a block of code as long as a specified condition is true.
 * 3. do...while loop: executes a block of code at least once, and then continues to execute the
 *  block of code as long as a specified condition is true.
 * loop: executes a block of code at least once, and then continues to execute the block of code 
 * as long as a specified condition is true.
 * 4. for...in loop: iterates over the properties of an object.
 * 5. for...of loop: iterates over the values of an iterable object (like an array or a string).
 * Loops are essential for performing repetitive tasks and iterating over data structures in JavaScript. 
 * They allow you to automate tasks and process data efficiently.
 * The syntax for the for loop is as follows:
 * for (initialization; condition; increment) {
 *     // code to be executed
 * }
 * The syntax for the while loop is as follows:
 * while (condition) {
 *     // code to be executed
 * }
 * The syntax for the do...while loop is as follows:
 * do {
 *     // code to be executed
 * } while (condition);
 * The syntax for the for...in loop is as follows:
 * for (variable in object) {
 *     // code to be executed
 * }
 * The syntax for the for...of loop is as follows:
 * for (variable of iterable)
 * {
 *     // code to be executed
 * }
 * Understanding loops is crucial for writing efficient and effective code in JavaScript. 
 * They allow you to perform repetitive tasks, 
 * iterate over data structures, and automate processes in your applications.
 * 
 */
// for loop example using let and var
for (let i = 0; i < 5; i++){
    console.log("For loop iteration: " + i);

}
// for using var
for (var j = 0; j < 5; j++){
    console.log("For loop iteration: " + j);
}

// while loop example using let and var
let k = 0;
while (k < 5) {
    console.log("While loop iteration: " + k);
    k++;
}
// while using var
var l = 0;
while (l < 5) {
    console.log("While loop iteration: " + l);
    l++;
}

// do...while loop example using let and var
let m =0;
do {
    console.log("Do...while loop iteration: " + m);
    m++;
} while (m < 5);
// do...while using var
var n = 0;
do {
    console.log("Do...while loop iteration: " + n);
    n++;
} while (n < 5);

// for...in loop example using let and var
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// for...in using var
var person2 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
};
for (var key in person2) {
    console.log(key + ": " + person2[key]);
}
// for...of loop example using let and var
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log("For...of loop value: " + value);
}
// for...of using var
var arr2 = [6, 7, 8, 9, 10];
for (var value of arr2) {
    console.log("For...of loop value: " + value);
}

// nested loops example using let and var
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("Nested loop iteration: " + i + ", " + j);
    }
}   

// nested loops using var
for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
        console.log("Nested loop iteration: " + x + ", " + y);
    }
}


// infinite loop example using let and var
// Uncomment the following code to see the infinite loop in action
/*
while (true) {
    console.log("This is an infinite loop");
}
*/
// infinite loop using var
/*
while (true) {
    console.log("This is an infinite loop");
}
*/

// break statement example using let and var
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exits the loop when i is 5
    } 
    console.log("Break statement iteration: " + i);
}

// break statement using var
for (var j = 0; j < 10; j++) {
    if (j === 5) {
        break; // exits the loop when j is 5
    }
    console.log("Break statement iteration: " + j);
}
// continue statement example using let and var
for (let k = 0; k < 10; k++) {
    if (k === 5) {
        continue; // skips the rest of the loop when k is 5
    }
    console.log("Continue statement iteration: " + k);
}
// continue statement using var
for (var l = 0; l < 10; l++) {
    if (l === 5) {
        continue; // skips the rest of the loop when l is 5
    }
    console.log("Continue statement iteration: " + l);
}

// for...in loop with object example using let and var
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}
// for...in loop with object using var
var car2 = {
    make: "Honda",
    model: "Civic",
    year: 2019
};
for (var key in car2) {
    console.log(key + ": " + car2[key]);
}

// for...of loop with string example using let and var
let str = "Hello";
for (let char of str) {
    console.log("For...of loop character: " + char);
}
// for...of loop with string using var
var str2 = "World";
for (var char of str2) {
    console.log("For...of loop character: " + char);
}

// for...of loop with array example using let and var
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log("For...of loop number: " + num);
}
// for...of loop with array using var
var numbers2 = [6, 7, 8, 9, 10];
for (var num of numbers2) {
    console.log("For...of loop number: " + num);
}

// for...of loop with Map example using let and var
let map = new Map();
map.set("name", "Alice");
map.set("age", 30);
map.set("city", "New York");

for (let [key, value] of map) {
    console.log(key + ": " + value);
}

// for...of loop with Map using var
var map2 = new Map();
map2.set("name", "Bob");
map2.set("age", 25);
map2.set("city", "Los Angeles");

for (var [key, value] of map2) {
    console.log(key + ": " + value);
}
