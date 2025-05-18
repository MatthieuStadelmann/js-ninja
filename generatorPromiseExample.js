/**
 * Creates a Promise that resolves with a ninja name after a delay
 * @param {number} id - The ID of the ninja to retrieve
 * @returns {Promise<string>} A Promise that resolves with the ninja name
 */
function getNinja(id) {
  console.log(`Starting to fetch ninja ${id}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Resolved ninja ${id}`);
      resolve(`Ninja ${id}`);
    }, 1000);
  });
}

/**
 * Generator function that retrieves multiple ninjas and combines their results
 * @generator
 * @yields {Promise<string>} A Promise that resolves with a ninja name
 * @throws {Error} If any ninja retrieval fails
 */
async(function* () {
  console.log('Generator started');
  try {
    // The yield keyword does two important things:
    // 1. It pauses the execution of the generator function
    // 2. It returns the value to the caller (in this case, the async helper)
    // When the Promise resolves, the value is passed back to the generator
    // and execution continues from this point
    console.log('Yielding for ninja 1...');
    const ninja1 = yield getNinja(1);
    console.log('Received ninja 1:', ninja1);

    // Each yield creates a new pause point. The generator won't continue
    // until the previous Promise is resolved and the value is passed back
    console.log('Yielding for ninja 2...');
    const ninja2 = yield getNinja(2);
    console.log('Received ninja 2:', ninja2);

    console.log('Yielding for ninja 3...');
    const ninja3 = yield getNinja(3);
    console.log('Received ninja 3:', ninja3);

    // The final yield waits for all ninjas to be processed
    console.log('Yielding Promise.all for all ninjas...');
    yield Promise.all([ninja1, ninja2, ninja3]);
    console.log('All ninjas processed successfully');
  } catch (error) {
    console.log('Error occurred:', error);
  }
});

/**
 * Helper function to handle async generator execution
 * @param {GeneratorFunction} generator - The generator function to execute
 * @returns {void}
 * @throws {Error} If the generator throws an error
 */
function async(generator) {
  console.log('Async helper started');
  const iterator = generator();
  /**
   * Handles each iteration of the generator
   * @param {IteratorResult} iteratorResult - The result of the current iteration
   */
  function handle(iteratorResult) {
    console.log('Handling iterator result:', iteratorResult);
    if (iteratorResult.done) {
      console.log('Generator completed');
      return;
    }
    if (iteratorResult.value instanceof Promise) {
      console.log('Promise detected, waiting for resolution...');
      // When the Promise resolves, we continue the generator by calling next()
      // with the resolved value. This value becomes the result of the yield
      // expression in the generator
      iteratorResult.value.then((value) => {
        console.log('Promise resolved with value:', value);
        // We call handle again because:
        // 1. The generator might yield another Promise
        // 2. We need to process that next Promise
        // 3. This creates a cycle of:
        //    - Resume generator -> Get new Promise -> Wait for resolution -> Resume again
        handle(iterator.next(value));
      });
    }
  }
  try {
    console.log('Starting generator execution');
    handle(iterator.next());
  } catch (error) {
    console.log('Error in generator execution:', error);
    iterator.throw(error);
  }
}
