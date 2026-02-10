/**
 * Array Data Structure Implementation in JavaScript
 * 
 * This implementation provides basic functionalities of an array, including:
 * - Adding elements
 * - Removing elements
 * - Accessing elements by index
 * - Getting array length
 * - Iterating through elements
 * Note: This implementation is for educational purposes and does not include all the methods available in JavaScript's built-in Array object.
 * Author: [Your Name]
 * Date: [Date]
 */
class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;

    }
    // Method to add an element at the end of the array
    push(item) {
        this.data[this.length] = item;
        this.length++;
    }
    // Method to remove the last element of the array
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    // Method to get an element by index
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        return this.data[index];
    }
    // Method to delete an element by index
    delete(index) {
        if (index < 0 || index >= this.length) return undefined;
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    // Helper method to shift items after deletion
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    // Method to get the current length of the array
    size() {
        return this.length;
    }
    // Method to iterate through the array elements
    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this.data[i], i, this);
        }
    }
    // Method to convert the array to a string representation
    toString() {
        let result = '';
        for (let i = 0; i < this.length; i++) {
            result += this.data[i] + (i < this.length - 1 ? ',' : '');
        }
        return result;
    }
    // Method to clear the array
    clear() {
        this.data = {};
        this.length = 0;
    }
    // Method to find the index of an element
    indexof(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                return i;

            }
        }
        return -1;
    }
    // Method to check if the array contains an element
    contain(item) {
        return this.indexof(item) !== -1;
    }
    // Method to reverse the array
    reverse() {
        const reversedData = {};
        for (let i = 0; i < this.length; i++) {
            reversedData[i] = this.data[this.length - 1 - i];
        }
        this.data = reversedData;
    }
}
const arr = new MyArray();

arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);

console.log("Array:", arr.toString());
console.log("Length:", arr.size());

console.log("Get index 1:", arr.get(1));

arr.pop();
console.log("After pop:", arr.toString());

arr.delete(1);
console.log("After delete index 1:", arr.toString());

console.log("Index of 10:", arr.indexof(10));
console.log("Contains 30:", arr.contain(30));

arr.reverse();
console.log("Reversed:", arr.toString());

// JavaScript 2D Array 
function printArray(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            process.stdout.write(arr1[i][j] + " ");
        }
        console.log();
    }

    console.log("Total rows:", arr1.length);
    console.log("Column in row 0:", arr1[0].length);
    console.log("Column in row 1:", arr1[1].length);
    console.log("Column in row 2:", arr1[2].length);

    console.log("First element:", arr1[0][0]);
    console.log("Last element:", arr1[2][2]);
}

let arr1 = [
    [34, 23, 24],
    [67, 56, 56],
    [46, 45, 13]
];

// function call
printArray(arr1);


//Three Dimensional Array (JavaScript)

function print3D(arr2) {
    for (let i = 0; i < arr2.length; i++) {
        console.log("Layer:", i);

        for (let j = 0; j < arr2[i].length; j++) {   //yaha j++
            let row = "";

            for (let k = 0; k < arr2[i][j].length; k++) {
                row += arr2[i][j][k] + " ";
            }
            console.log(row);
        }
        console.log();
    }

    console.log("Total layers:", arr2.length);
    console.log("Rows in layer 0:", arr2[0].length);
    console.log("Columns:", arr2[0][0].length);

    console.log("First element:", arr2[0][0][0]);
    console.log("Last element:", arr2[1][1][2]);
}

let arr2 = [
    [[11, 12, 13], [14, 15, 16]],
    [[21, 22, 23], [24, 25, 26]]
];

print3D(arr2);
