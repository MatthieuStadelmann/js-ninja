/**
 * Base constructor function that represents a Human.
 * @constructor
 * @property {string} name - The name of the human, defaults to "Human"
 */
function Human() {
  this.name = "Human";
}

/**
 * Makes the human speak
 * @returns {string} A message from the human
 */
Human.prototype.speak = function() {
  return `${this.name} says: Hello!`;
};

/**
 * Constructor function that represents a Ninja, inheriting from Human.
 * @constructor
 * @property {boolean} swung - Indicates if the ninja has swung, defaults to true
 * @extends Human
 */
function Ninja() {
  this.swung = true;
}

// Set up inheritance: Ninja inherits from Human
Ninja.prototype = new Human();

/**
 * Makes the ninja swing their sword
 * @returns {string} A message indicating the ninja's action
 */
Ninja.prototype.swingSword = function() {
  return this.swung ? "The ninja swings their sword!" : "The ninja is not ready to swing.";
};

// Create a new Ninja instance
const ninja = new Ninja();
// Demonstrates inheritance: ninja can access the name property from Human
console.log(ninja.name); // "Human"

// Demonstrates prototype method access
console.log(ninja.swingSword()); // "The ninja swings their sword!"

// Demonstrates inheritance of Human's prototype method
console.log(ninja.speak()); // "Human says: Hello!"

// Create another ninja instance
const ninja2 = new Ninja();
// Both instances share the same prototype methods
console.log(ninja2.swingSword()); // "The ninja swings their sword!"
console.log(ninja2.speak()); // "Human says: Hello!"


