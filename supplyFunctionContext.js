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
console.log("Result after apply (1+2+3+4):", ninja1.result === 10);

// Using call() - arguments are passed individually
juggle.call(ninja2, 5, 6, 7, 8);
console.log("Result after call (5+6+7+8):", ninja2.result === 26);

/**
 * Custom implementation of forEach that demonstrates the use of call() for context binding.
 * Iterates over an array and calls the callback function with each element's value and index.
 * The callback's 'this' context is set to the current array element.
 * The loop can be terminated early by returning false from the callback.
 * Additional arguments passed to forEach will be forwarded to the callback.
 * 
 * @param {Array} array - The array to iterate over
 * @param {Function} callback - Function to execute for each element
 * @param {...*} [args] - Additional arguments to pass to the callback
 * @param {number} callback.index - The current index in the array
 * @param {Object} callback.this - The current array element (bound as 'this')
 * @returns {void}
 */
function forEach(array, callback) {
  // Get additional arguments after array and callback
  var args = Array.prototype.slice.call(arguments, 2);
  
  for (var i = 0; i < array.length; i++) {
    // Create arguments array: [currentElement, index, ...additionalArgs]
    var callbackArgs = [i].concat(args);
    
    if (callback.apply(array[i], callbackArgs) === false) {
      console.log('Loop terminated early at index', i);
      break;
    }
  }
}

// Array of ninja objects
var ninjas = [
  { name: 'Yoshi', weapon: 'shuriken' },
  { name: 'Hattori', weapon: 'katana' },
  { name: 'Hanzo', weapon: 'nunchaku' }
];

// Example usage demonstrating additional arguments
forEach(ninjas, function (index, greeting, mission) {
  console.log(
    `${greeting}! Ninja at index ${index}:`,
    `${this.name} wields a ${this.weapon}`,
    `Mission: ${mission}`
  );
  
  // Terminate the loop if we find Hattori
  if (this.name === 'Hattori') {
    return false;
  }
}, 'Konichiwa', 'Stealth operation');
