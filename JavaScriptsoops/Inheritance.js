/**
 * Inheritance in JavaScript is a fundamental concept that allows one object to inherit properties and methods 
 * from another object. This is typically achieved through prototypes. In JavaScript, every object has a prototype, 
 * which is another object that it inherits properties and methods from. When you try to access a property or 
 * method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there,
 * it looks up the prototype chain until it finds the property or reaches the end of the chain (null).
 * There are several ways to implement inheritance in JavaScript, including:
 *
 *  1. Constructor Functions: You can create a constructor function and use the `prototype` property to add 
 * methods that will be shared among all instances.
 *  2. ES6 Classes: Introduced in ECMAScript 2015, classes provide a more familiar syntax for creating objects
 * and handling inheritance. You can use the `extends` keyword to create a subclass that inherits from a parent class.
 *  3. Object.create(): This method allows you to create a new object with a specified prototype, enabling 
 * inheritance without the need for constructor functions or classes.
 * In summary, inheritance in JavaScript allows for code reuse and the creation of more complex objects by 
 * building upon existing ones, making it a powerful feature for object-oriented programming in JavaScript.
 * 
 * Example using ES6 Classes:
 * 
 * class Animal {
 *   constructor(name) {
 *    this.name = name;
 *  }
 * *  speak() {
 *   console.log(`${this.name} makes a noise.`);
 * * }
 * * class Dog extends Animal {
 *   speak() {
 *  console.log(`${this.name} barks.`);
 * * }
 * * const dog = new Dog('Rex');
 * * dog.speak(); // Output: Rex barks.
 *
 * 
 */

// Example using Constructor Functions:

function Animal(name) {
    this.name = name;

}
function Dog(name) {
    Animal.call(this, name); // Call the parent constructor with the current context  

}
Dog.prototype = Object.create(Animal.prototype);//Set the prototype of Dog to be an instance of Animal
Dog.prototype.constructor = Dog; // Set the constructor property to refer to Dog
Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};


Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};
const dog = new Dog('Rex');// Create an instance of Dog
dog.speak(); // Output: Rex barks.
const animal = new Animal('Generic Animal'); // Create an instance of Animal
animal.speak(); // Output: Generic Animal makes a noise.

// Example using Object.create():

const animalProto = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dogProto = Object.create(animalProto);
dogProto.speak = function () {
    console.log(`${this.name} barks.`);
};

const dog2 = Object.create(dogProto);
dog2.name = 'Buddy';
dog2.speak(); // Output: Buddy barks.

// Example using ES6 Classes:

class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class DogClass extends AnimalClass {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog3 = new DogClass('Charlie');
dog3.speak(); // Output: Charlie barks.
const animal2 = new AnimalClass('Generic Animal');
animal2.speak(); // Output: Generic Animal makes a noise.


// Inheritance allows us to create a new class (or constructor function) that is based on an existing class,
// enabling code reuse and the creation of more complex objects. The new class can override methods of the parent class
// to provide specific behavior while still retaining the ability to use the shared functionality defined in the parent class.

// Inheritance is a powerful feature in JavaScript that promotes code reuse and allows for the creation of more 
// complex objects by building upon existing ones. It is a fundamental concept in object-oriented programming and
//  is widely used in JavaScript development.

// Inheritance can also be used to create a hierarchy of classes, where a base class defines common properties and methods,
// and derived classes can extend and specialize that functionality. This promotes a clear and organized structure in code,
// making it easier to maintain and understand.

// Inheritance is a powerful tool for creating reusable and maintainable code, allowing developers to build upon existing
// functionality and create more complex objects without having to rewrite code. It is a fundamental concept in object-oriented
// programming and is widely used in JavaScript development.

//  sing inheritance, you can create a new class (or constructor function) that is based on an existing class,
//  allowing you to reuse code and create more complex objects. The new class can override methods of the parent
//  class to provide specific behavior while still retaining the ability to use the shared functionality defined
//  in the parent class. This promotes code reuse and helps to create a clear and organized structure in your code.

// example of a class hierarchy using inheritance:

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
}

class Car extends Vehicle {
    start() {
        console.log(`${this.make} ${this.model} is starting with a roar!`);
    }
}
class ElectricCar extends Car {
    start() {
        console.log(`${this.make} ${this.model} is starting silently!`);
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.start(); // Output: Toyota Corolla is starting with a roar!

const myElectricCar = new ElectricCar('Tesla', 'Model 3');
myElectricCar.start(); // Output: Tesla Model 3 is starting silently!


// single class inheritance allows you to create a new class that inherits from a single parent class, 
// while multiple inheritance allows a class to inherit from multiple parent classes. In JavaScript, 
// multiple inheritance is not directly supported, but you can achieve similar functionality using 
// mixins or by combining prototypes.

// Example of mixins for multiple inheritance:
const canFly = {
    fly() {
        console.log(`${this.name} is flying!`);
    }
};
const canSwim = {
    swim() {
        console.log(`${this.name} is swimming!`);
    }
};

class Duck {
    constructor(name) {
        this.name = name;
    }
}
// Mixin the canFly and canSwim properties into the Duck class
Object.assign(Duck.prototype, canFly, canSwim);

const daffy = new Duck('Daffy');
daffy.fly();
daffy.swim();

// Inheritance is a powerful feature in JavaScript that promotes code reuse and allows for the creation
//  of more complex objects by building upon existing ones. It is a fundamental concept in object-oriented
//  programming and is widely used in JavaScript development.

// Inheritance can also be used to create a hierarchy of classes, where a base class defines common properties and methods,
// and derived classes can extend and specialize that functionality. This promotes a clear and organized structure in code,
// making it easier to maintain and understand.

// herirical Inheritance is a type of inheritance where a class can inherit from multiple parent classes, 
// allowing it to combine the properties and methods of those classes. In JavaScript, multiple inheritance
//  is not directly supported, but you can achieve similar functionality using mixins or by combining prototypes.
//  This allows for greater flexibility in designing classes and promotes code reuse across different classes.

// In summary, inheritance in JavaScript is a powerful concept that allows for code reuse and the creation of 
// more complex objects by building upon existing ones. It can be implemented using constructor functions, 
// ES6 classes, or Object.create(), and it promotes a clear and organized structure in code. 

// example of hierarchical inheritance:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

const student = new Student("Alice", 20, "A");
student.introduce(); // Output: Hi, I'm Alice, and I'm 20 years old.
student.study();     // Output: Alice is studying.

const teacher = new Teacher("Mr. Smith", 45, "Mathematics");
teacher.introduce(); // Output: Hi, I'm Mr. Smith, and I'm 45 years old.
teacher.teach();     // Output: Mr. Smith is teaching Mathematics.


// multilevel inheritance example:

class Grandparent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, I'm ${this.name}, the grandparent.`);
    }
}

class Parent extends Grandparent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    introduce() {
        console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
}

class Child extends Parent {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
    displayHobby() {
        console.log(`${this.name} loves ${this.hobby}.`);
    }
}

const grandparent = new Grandparent("Grandpa");
grandparent.greet(); // Output: Hello, I'm Grandpa, the grandparent.

const parent = new Parent("Dad", 40);
parent.introduce(); // Output: Hello, I'm Dad, and I'm 40 years old.

const child = new Child("Kid", 10, "playing video games");
child.introduce(); // Output: Hello, I'm Kid, and I'm 10 years old.
child.displayHobby(); // Output: Kid loves playing video games.

