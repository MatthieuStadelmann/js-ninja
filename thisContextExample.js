/**
 * Demonstrates how the 'this' context changes based on function invocation patterns:
 * 1. Direct function call (global context)
 * 2. Function reference assignment
 * 3. Method invocation (object context)
 */

// Example 1: Direct function call in global context
/**
 * Returns the current execution context (this value).
 * When called directly, 'this' refers to the global object.
 * 
 * @returns {Object} The current execution context
 */
function whatsMyContext() {
  return this;
}

// Demonstrates that a direct function call sets 'this' to globalThis
console.log(
  "Direct function call context:",
  whatsMyContext() === globalThis
);

// Example 2: Function reference assignment
// Shows that assigning a function to a variable doesn't change its context
var getMyThis = whatsMyContext;
console.log(
  "Assigned function call context:",
  getMyThis() === globalThis
);

// Example 3: Method invocation
/**
 * Object demonstrating method context - when called as a method,
 * 'this' refers to the object the method belongs to
 * @type {Object}
 */
var ninja1 = {
  getMyThis: whatsMyContext,
};

console.log(
  "Method call context (ninja1):",
  ninja1.getMyThis() === ninja1
);

/**
 * Another object showing the same method context behavior
 * @type {Object}
 */
var ninja2 = {
  getMyThis: whatsMyContext,
};

console.log(
  "Method call context (ninja2):",
  ninja2.getMyThis() === ninja2
);
