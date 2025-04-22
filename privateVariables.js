/**
 * Demonstrates how closures can be used to create private variables
 * in JavaScript objects. Shows that variables declared within a constructor
 * are only accessible to methods defined within the same scope.
 * Each instance gets its own private copy of the variable.
 */

/**
 * Constructor function that creates Ninja objects with a private feints counter.
 * The feints variable is only accessible through the provided methods,
 * demonstrating encapsulation through closures.
 * Each Ninja instance has its own private feints counter.
 * 
 * @constructor
 */
function Ninja() {
  /** @private */
  var feints = 0;

  /**
   * Returns the current number of feints.
   * This method has access to the private feints variable through closure.
   * 
   * @returns {number} The number of feints performed
   */
  this.getFeints = function () {
    return feints;
  };

  /**
   * Increments the feints counter.
   * This method has access to the private feints variable through closure.
   */
  this.feint = function () {
    feints++;
  };
}

// Create first ninja instance
var ninja1 = new Ninja();
ninja1.feint();
console.log(
  "Number of feints by ninja1:",
  ninja1.getFeints()
);

// Create second ninja instance
var ninja2 = new Ninja();
console.log(
  "Number of feints by ninja2:",
  ninja2.getFeints()
);

// Demonstrate that feints is truly private
console.log(
  "Attempting to access feints directly:",
  ninja1.feints === undefined
);

// The only way to access feints is through the provided methods
console.log(
  "Accessing feints through getter:",
  ninja1.getFeints() === 1
);

// Demonstrate that each instance has its own feints counter
ninja2.feint();
ninja2.feint();
console.log(
  "ninja1 feints (should be 1):",
  ninja1.getFeints()
);
console.log(
  "ninja2 feints (should be 2):",
  ninja2.getFeints()
);

