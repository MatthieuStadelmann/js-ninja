/**
 * Demonstrates how arrow functions maintain their lexical 'this' binding,
 * regardless of how they are called or where they are assigned.
 * Shows that arrow functions inherit 'this' from their enclosing scope
 * at the time they are created, not when they are called.
 */

/**
 * Constructor function that creates Ninja objects.
 * Uses an arrow function for whoAmI to demonstrate lexical 'this' binding.
 * The arrow function will always have 'this' bound to the Ninja instance
 * that created it, regardless of how it's called later.
 * 
 * @constructor
 */
function Ninja() {
  /**
   * Arrow function that returns its 'this' context.
   * The 'this' value is lexically bound to the Ninja instance
   * that created it, not determined by how it's called.
   * 
   * @returns {Object} The Ninja instance that created this function
   */
  this.whoAmI = () => {
    return this;
  };
}

// Create a Ninja instance
var ninja1 = new Ninja();

// Create a plain object that borrows the whoAmI method
var ninja2 = {
  whoAmI: ninja1.whoAmI,
};

// Test that whoAmI maintains its original 'this' binding
console.log(
  "whoAmI called on ninja1 returns ninja1:",
  ninja1.whoAmI() === ninja1
);

// Test that whoAmI maintains its original 'this' binding even when called on ninja2
console.log(
  "whoAmI called on ninja2 still returns ninja1:",
  ninja2.whoAmI() === ninja2
);

/**
 * Constructor function that creates Samurai objects.
 * Uses a regular function for whoAmI to demonstrate dynamic 'this' binding.
 * The 'this' value will be determined by how the function is called,
 * not by where it was defined.
 * 
 * @constructor
 */
function Samurai() {
  /**
   * Regular function that returns its 'this' context.
   * The 'this' value is determined by how the function is called,
   * not by where it was defined.
   * 
   * @returns {Object} The object the function was called on
   */
  this.whoAmI = function() {
    return this;
  };
}

// Create a Samurai instance
var samurai1 = new Samurai();

// Create a plain object that borrows the whoAmI method
var samurai2 = {
  whoAmI: samurai1.whoAmI,
};

// Test that whoAmI returns the object it's called on
console.log(
  "whoAmI called on samurai1 returns samurai1:",
  samurai1.whoAmI() === samurai1
);

// Test that whoAmI returns the new object when called on samurai2
console.log(
  "whoAmI called on samurai2 returns samurai2:",
  samurai2.whoAmI() === samurai2
);

