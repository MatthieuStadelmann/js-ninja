/**
 * Creates a Promise that resolves with the name of a ninja
 * @type {Promise<string>}
 */
const ninjaPromise = new Promise((resolve, reject) => {
  resolve("Hattori");
});

/**
 * Handles the resolved Promise by logging the ninja name
 * @param {string} ninja - The name of the ninja
 * @param {Error} error - Any error that occurred during Promise execution
 */
ninjaPromise.then(
  (ninja) => {
    console.log(ninja);
  },
  (error) => {
    console.log(error);
  }
);
