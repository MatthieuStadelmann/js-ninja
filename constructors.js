/**
 * Demonstrates constructor invocation and how it affects the 'this' context.
 * Shows that methods created in the constructor have their 'this' context
 * bound to the newly created object instance.
 */

/**
 * Constructor function that creates Ninja objects.
 * Each instance gets its own skulk method that returns its context.
 * @constructor
 */
function Ninja() {
    /**
     * Method that returns the current execution context.
     * When called on an instance, returns the instance itself.
     * @returns {Object} The current execution context (the Ninja instance)
     */
    this.skulk = function() {
        return this;
    };
}

// Create two separate Ninja instances
var ninja1 = new Ninja();
var ninja2 = new Ninja();

// Test that each instance's skulk method returns its own context
console.log(
    "ninja1's skulk method returns ninja1:",
    ninja1.skulk() === ninja1
);

console.log(
    "ninja2's skulk method returns ninja2:",
    ninja2.skulk() === ninja2
);