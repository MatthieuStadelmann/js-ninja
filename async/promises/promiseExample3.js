/**
 * Creates a Promise that resolves after 2 seconds
 * @type {Promise<string>}
 */
const promiseExample1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 1");
  }, 2000);
});

/**
 * Creates a Promise that resolves after 1 second
 * @type {Promise<string>}
 */
const promiseExample2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 2");
  }, 1000);
});

/**
 * Waits for all promises to resolve and handles their results
 * @param {string[]} ninjas - Array of resolved values from all promises
 * @param {Error} error - Any error that occurred during Promise execution
 */
Promise.all([promiseExample1, promiseExample2])
  .then((ninjas) => {
    console.log(ninjas);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * Creates a Promise that resolves after 3 seconds
 * @type {Promise<string>}
 */
const promiseExample3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 3");
  }, 3000);
});

/**
 * Creates a Promise that resolves after 4 seconds
 * @type {Promise<string>}
 */
const promiseExample4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success 4");
  }, 4000);
});

/**
 * Returns the result of the first Promise that resolves
 * @param {string} ninjas - The value from the first Promise that resolves
 * @param {Error} error - Any error that occurred during Promise execution
 */
Promise.race([promiseExample3, promiseExample4])
  .then((ninjas) => {
    console.log("Winner", ninjas);
  })
  .catch((error) => {
    console.log(error);
  });
