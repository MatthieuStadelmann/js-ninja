/**
 * Logs the start of the program execution
 */
console.log("Starting");

/**
 * Creates a Promise that resolves with a ninja name after a 2-second delay
 * @type {Promise<string>}
 */
const ninjaDelayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hattori");
  }, 2000);
});

/**
 * Handles the delayed Promise resolution
 * @param {string} ninja - The name of the ninja after the delay
 */
ninjaDelayedPromise.then((ninja) => {
  console.log("ninja delayed promise", ninja);
});

/**
 * Creates a Promise that resolves immediately with a ninja name
 * @type {Promise<string>}
 */
const ninjaImmediatePromise = new Promise((resolve, reject) => {
  resolve("Hattori");
});

/**
 * Handles the immediate Promise resolution
 * @param {string} ninja - The name of the ninja
 */
ninjaImmediatePromise.then((ninja) => {
  console.log("ninja immediate promise", ninja);
});

/**
 * Logs the end of the program execution
 */
console.log("Ending");
