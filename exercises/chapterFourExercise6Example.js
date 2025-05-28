/**
 * Demonstrates how Function.prototype.bind() works by creating a new function
 * that wraps the original function and sets its 'this' value when called.
 * Shows that the bound function maintains the specified context regardless
 * of how it's called, but this is achieved through function wrapping rather
 * than permanent modification.
 */

/**
 * Constructor function that creates Ninja objects.
 * Uses bind() to create a new function that will always call the original
 * function with 'this' set to the Ninja instance, regardless of how it's called.
 * 
 * @constructor
 */
function Ninja() {
    /**
     * Function that returns its 'this' context.
     * The original function is wrapped by bind() to create a new function
     * that will always call the original with 'this' set to the Ninja instance.
     * 
     * @returns {Object} The Ninja instance specified in the bind() call
     */
    this.whoAmI = function() {
        return this;
    }.bind(this);
}

// Create a Ninja instance
var ninja1 = new Ninja();

// Create a plain object that borrows the whoAmI method
var ninja2 = {
    whoAmI: ninja1.whoAmI,
};

// Test that whoAmI calls the original function with ninja1 as 'this'
console.log(
    "whoAmI called on ninja1 returns ninja1:",
    ninja1.whoAmI() === ninja1
);

// Test that whoAmI still uses ninja1 as 'this' even when called on ninja2
console.log(
    "whoAmI called on ninja2 still returns ninja1:",
    ninja2.whoAmI() === ninja2
);




