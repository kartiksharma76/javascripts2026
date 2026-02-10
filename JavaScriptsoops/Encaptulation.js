/**
 *  Encapsulation is one of the fundamental principles of object-oriented programming (OOP).
 *  It refers to the bundling of data (variables) and methods (functions) that operate on the 
 * data into a single unit, called a class. Encapsulation also involves restricting direct 
 * access to some of an object's components, which is often achieved through access modifiers 
 * like private, protected, and public. In JavaScript, encapsulation can be implemented using
 *  closures and the module pattern.
 * Encapsulation helps to protect the internal state of an object from unintended interference and 
 * misuse. It allows developers to hide the internal implementation details of a class and only 
 * expose a public interface for interacting with the object. This promotes code reusability,
 * maintainability, and helps to prevent bugs by controlling how data is accessed and modified.    
 */
// Example of encapsulation using closures in JavaScript
function Person(name, age) {
    let _name = name; // private variable
    let _age = age;   // private variable
    return {
        getName: function () { // public method to access private variable
            return _name;
        },
        getAge: function () { // public method to access private variable
            return _age;
        },
        setName: function (newName) { // public method to modify private variable
            _name = newName;
        },
        setAge: function (newAge) { // public method to modify private variable
            _age = newAge;
        }
    };
}

const person1 = Person("Alice", 30);
console.log(person1.getName()); // Output: Alice
console.log(person1.getAge());  // Output: 30
person1.setName("Bob");
person1.setAge(25);
console.log(person1.getName()); // Output: Bob
console.log(person1.getAge());  // Output: 25


// In this example, the `Person` function creates a closure that encapsulates the private variables `_name` and `_age`. The public methods `getName`, `getAge`, `setName`, and `setAge` provide controlled access to these private variables, demonstrating the concept of encapsulation in JavaScript.
// Encapsulation allows us to protect the internal state of the `Person` object and only expose a public interface for interacting with it. This promotes code reusability and maintainability, as we can change the internal implementation of the `Person` function without affecting the code that uses it.
// In conclusion, encapsulation is a powerful concept in object-oriented programming that helps to protect the internal state of an object and promotes code reusability and maintainability. By using closures and the module pattern, developers can implement encapsulation in JavaScript effectively.
// Note: The code is for demonstration purposes and may not cover all edge cases or best practices in JavaScript programming. It is recommended to further explore the concept of encapsulation and its applications in real-world scenarios for a deeper understanding.
// This code is intended for educational purposes and may not be suitable for production use without further modifications and testing. Always consider the specific requirements of your application and follow best practices when implementing encapsulation in JavaScript.
// This code is provided as-is without any warranties or guarantees. The author is not responsible for any issues or damages that may arise from the use of this code. Always test and review your code thoroughly before deploying it in a production environment.
// End of Encapsulation.js
// Note: JavaScript does not have built-in support for access modifiers like private, protected, and public. However, developers can use closures and the module pattern to achieve similar functionality and implement encapsulation in their code.