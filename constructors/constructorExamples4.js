/**
 * Represents a person with a name.
 * @class
 */
class Person {
    /**
     * Create a person.
     * @param {string} name - The name of the person.
     */
    constructor(name) {
        this.name = name;
    }
    
    /**
     * Make the person dance.
     * @returns {string} A message indicating the person is dancing.
     */
    dance() {
        return "Person is dancing!";
    }
}

/**
 * Represents a ninja, which is a type of person.
 * @class
 * @extends Person
 */
class Ninja extends Person {
    /**
     * Create a ninja.
     * @param {string} name - The name of the ninja.
     */
    constructor(name) {
        super(name);
    }
}

var ninja = new Ninja("John");
console.log(ninja.name);
console.log(ninja.dance());
console.log(ninja instanceof Ninja);
console.log(ninja instanceof Person);
console.log(ninja.constructor === Ninja);
console.log(ninja.__proto__ === Ninja.prototype);
console.log(ninja.__proto__ === Person.prototype);
console.log(ninja.__proto__ === Object.prototype);

// Explanation of prototype chain:
// When using ES6 classes with 'extends', the prototype chain is set up as follows:
// ninja.__proto__ === Ninja.prototype
// Ninja.prototype.__proto__ === Person.prototype
// Person.prototype.__proto__ === Object.prototype
//
// This is why ninja.__proto__ is not equal to Person.prototype directly.
// The ninja instance's __proto__ points to Ninja.prototype,
// and Ninja.prototype's __proto__ points to Person.prototype.
// This creates a chain of inheritance: ninja -> Ninja.prototype -> Person.prototype -> Object.prototype


