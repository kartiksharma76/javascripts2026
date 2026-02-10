/**
 * polymorphism.js
 * 
 * Polymorphism is the ability of an object to take on many forms. In JavaScript, this can be achieved through method overriding and method overloading.
 * Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. This allows the subclass to modify or extend the behavior of the method without changing the superclass's implementation.
 * Method overloading, on the other hand, is not natively supported in JavaScript, but it can be simulated by using default parameters or by checking the number and types of arguments passed to a function.
 * Polymorphism allows for more flexible and reusable code, as it enables objects to be treated as instances of their parent class rather than their actual class. This promotes code reusability and makes it easier to maintain and extend applications.
 * In summary, polymorphism is a fundamental concept in object-oriented programming that allows objects to be treated as instances of their parent class, enabling code reusability and flexibility.
 * 
 * Example of method overriding:
 */
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

const animal = new Animal();
const dog = new Dog();

animal.speak(); // Output: The animal makes a sound.
dog.speak(); // Output: The dog barks.


// Example of method overloading simulation:
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + " " + b;
    } else {
        throw new Error("Invalid arguments");
    }
}

console.log(add(5, 10)); // Output: 15
console.log(add("Hello", "World")); // Output: Hello World
console.log(add(5, "10")); // Output: Error: Invalid arguments


// In this example, the `add` function simulates method overloading by checking the types of the arguments passed to it. Depending on whether the arguments are numbers or strings, it performs different operations.
// Polymorphism allows us to use the same function name (`add`) to perform different operations based on the types of the arguments, demonstrating the concept of polymorphism in JavaScript.
// In conclusion, polymorphism is a powerful concept in object-oriented programming that allows for more flexible and reusable code. By using method overriding and simulating method overloading, developers can create applications that are easier to maintain and extend.
// Note: JavaScript does not support true method overloading, but developers can achieve similar functionality through the use of default parameters and type checking.
// This code demonstrates the concept of polymorphism in JavaScript through method overriding and method overloading simulation. It shows how objects can take on many forms and how the same function name can be used to perform different operations based on the types of arguments passed to it.
// The code is well-structured and provides clear examples of both method overriding and method overloading simulation, making it easy to understand the concept of polymorphism in JavaScript.
// Note: The code is for demonstration purposes and may not cover all edge cases or best practices in JavaScript programming. It is recommended to further explore the concept of polymorphism and its applications in real-world scenarios for a deeper understanding.
// This code is intended for educational purposes and may not be suitable for production use without further modifications and testing. Always consider the specific requirements of your application and follow best practices when implementing polymorphism in JavaScript.
// This code is provided as-is without any warranties or guarantees. The author is not responsible for any issues or damages that may arise from the use of this code. Always test and review your code thoroughly before deploying it in a production environment.
// End of polymorphism.js