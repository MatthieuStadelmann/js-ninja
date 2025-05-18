/**
 * Creates a Promise that rejects with an error message
 * @type {Promise<string>}
 */
var promise = new Promise((resolve, reject) => {
  reject("Error");
});

/**
 * Handles the Promise using separate then and catch blocks
 * @param {string} ninja - The resolved value (not used in this example)
 * @param {string} error - The rejected error message
 */
promise.then((ninja) => {
  console.log(ninja);
}).catch((error) => {
  console.log(error);
});

/**
 * Creates another Promise that rejects with an error message
 * @type {Promise<string>}
 */
var promise2 = new Promise((resolve, reject) => {
  reject("Error");
});

/**
 * Handles the Promise using a single then block with both success and error callbacks
 * @param {string} ninja - The resolved value (not used in this example)
 * @param {string} error - The rejected error message
 */
promise2.then(
  (ninja) => {
    console.log(ninja);
  },
  (error) => {
    console.log(error);
  }
);

/**
 * Creates a Promise that will reject due to a runtime error (undefined variable)
 * @type {Promise<never>}
 */
var promise3 = new Promise((resolve, reject) => {
    undefinedVariable++;
});

/**
 * Handles the Promise with error catching for runtime errors
 * @param {string} ninja - The resolved value (not used in this example)
 * @param {Error} error - The runtime error that occurred
 */
promise3.then((ninja) => {
    console.log(ninja);
}).catch((error) => {
    console.log("Error", error);
});
