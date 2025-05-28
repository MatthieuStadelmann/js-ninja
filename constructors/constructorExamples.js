/**
 * Represents a Ninja object constructor function.
 * This is a basic constructor that creates new Ninja instances.
 * @constructor
 * @example
 * const ninja = new Ninja();
 */
function Ninja() {}

// Create a new instance of Ninja
const ninja1 = new Ninja();

// Demonstrates that ninja1 is an object
console.log(typeof ninja1); // "object"

// Demonstrates that ninja1 is an instance of Ninja
console.log(ninja1 instanceof Ninja); // true

// Demonstrates that ninja1's constructor is the Ninja function
console.log(ninja1.constructor === Ninja); // true

// Creates a new Ninja instance using the constructor property
const ninja2 = ninja1.constructor();
console.log(ninja2 instanceof Ninja); // true

