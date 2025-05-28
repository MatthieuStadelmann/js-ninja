/**
 * Represents a Ninja warrior with sword swinging capabilities
 * @class
 * @example
 * const ninja = new Ninja();
 * console.log(ninja.swingSword()); // true
 */
function Ninja() {
  /** @type {boolean} */
  this.swung = true;
}

const ninja1 = new Ninja();

/**
 * Makes the ninja swing their sword
 * @returns {boolean} The current state of the sword swing
 */
Ninja.prototype.swingSword = function () {
  return this.swung;
};

const ninja2 = new Ninja();

// Even though ninja1 was created before swingSword was defined on the prototype,
// it can still access the method. This is because:
// 1. When we call ninja1.swingSword(), JavaScript:
//    - First looks for swingSword directly on the ninja1 object
//    - When not found, it follows the prototype chain to Ninja.prototype
//    - Finds swingSword there and executes it
// 2. The prototype chain is established when the object is created with 'new'
//    - Each instance's internal [[Prototype]] is set to Ninja.prototype
//    - This link persists even if we add methods to the prototype later
// 3. This is why both ninja1 and ninja2 can access the same method
//    - They share the same prototype object
//    - Changes to the prototype affect all instances, even existing ones

console.log("ninja1.swingSword():", ninja1.swingSword());
console.log("ninja2.swingSword():", ninja2.swingSword());

/**
 * Completely replaces the prototype object with a new one
 * This is different from adding methods to the existing prototype
 * @type {Object}
 */
Ninja.prototype = {
  /**
   * Performs a piercing attack
   * @returns {string} A message describing the piercing attack
   */
  pierce: function () {
    return "Piercing attack!";
  },
};

const ninja3 = new Ninja();

// Important: When we completely replace the prototype object:
// 1. ninja3 (created after replacement) gets the new prototype with pierce()
// 2. ninja1 and ninja2 (created before replacement) keep their old prototype with swingSword()
// 3. This is why:
//    - ninja3 can use pierce() but not swingSword()
//    - ninja1 and ninja2 can use swingSword() but not pierce()
// 4. The old instances (ninja1, ninja2) maintain their reference to the original prototype
//    through their internal [[Prototype]] property, which was set when they were created
//    and doesn't change even when we assign a new object to Ninja.prototype

// About [[Prototype]]:
// - [[Prototype]] is an internal property that JavaScript uses to implement inheritance
// - It's not directly accessible in code (that's why it's in double brackets)
// - In browsers, we can access it through the __proto__ property
// - Example:
//   console.log(ninja1.__proto__ === Ninja.prototype); // true
//   console.log(ninja3.__proto__ === Ninja.prototype); // true (but different prototype object)
// - The [[Prototype]] chain is what allows JavaScript to look up properties and methods
//   when they're not found directly on an object

console.log("\nAfter prototype replacement:");
console.log("ninja1.swingSword():", ninja1.swingSword());  // true - still has old prototype
console.log("ninja3.pierce():", ninja3.pierce());          // "Piercing attack!" - has new prototype

// Let's demonstrate the [[Prototype]] relationship
console.log("\nPrototype chain demonstration:");
console.log("ninja1.__proto__ === original Ninja.prototype:", 
  ninja1.__proto__ === Object.getPrototypeOf(ninja1));  // true
console.log("ninja3.__proto__ === new Ninja.prototype:", 
  ninja3.__proto__ === Object.getPrototypeOf(ninja3));  // true
console.log("ninja1.__proto__ === ninja3.__proto__:", 
  ninja1.__proto__ === ninja3.__proto__);  // false - different prototype objects
