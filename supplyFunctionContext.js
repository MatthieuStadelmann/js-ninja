/**
 * Demonstrates how to supply a function context using apply() and call().
 * Shows how to explicitly set the 'this' context when calling a function.
 */

/**
 * Function that sums its arguments and stores the result in its context.
 * The context (this) must be supplied when calling the function.
 * 
 * @param {...number} args - Numbers to be summed
 * @returns {void}
 */
function juggle() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}

// Create two empty objects to serve as contexts
var ninja1 = {};
var ninja2 = {};

// Using apply() - arguments are passed as an array
juggle.apply(ninja1, [1, 2, 3, 4]);
console.log(
  "Result after apply (1+2+3+4):",
  ninja1.result === 10
);

// Using call() - arguments are passed individually
juggle.call(ninja2, 5, 6, 7, 8);
console.log(
  "Result after call (5+6+7+8):",
  ninja2.result === 26
);
