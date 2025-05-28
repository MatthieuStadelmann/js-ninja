/**
 * Two-way Communication Generator Example
 * --------------------------------------
 * This example demonstrates how generators can receive values from outside:
 * 1. First yield sends "Hattori skulk" to the caller
 * 2. Second call to next("Hanzo") sends "Hanzo" back into the generator
 * 3. The generator uses this value to create the next yield
 * 
 * The sequence of events:
 * 1. Generator is created with "skulk" action
 * 2. First next() call:
 *    - Yields "Hattori skulk"
 *    - Pauses at the yield
 * 3. Second next("Hanzo") call:
 *    - Sends "Hanzo" into the generator
 *    - Continues execution
 *    - Yields "Yoshi (Hanzo)"
 * 
 * This demonstrates how generators can:
 * - Send values out (using yield)
 * - Receive values in (using next(value))
 * - Maintain state between calls
 * 
 * @param {string} action - The action to perform
 * @yields {string} First yields "Hattori" + action
 * @yields {string} Second yields "Yoshi" + the received value
 */
function* NinjaGenerator(action) {
   // The value passed to next() becomes the value of the yield expression
   // First time: yield returns undefined (no value passed to first next())
   // Second time: yield returns "Hanzo" (passed to second next("Hanzo"))
   const imposter = yield ("Hattori " + action);
   console.log("Value received from next() call:", imposter);
   console.log("Is the imposter Hanzo?", imposter === "Hanzo");
   yield ("Yoshi (" + imposter + ")");
}

const ninjaIterator = NinjaGenerator("skulk");

// First next() call:
// - Sends nothing to the generator
// - Gets back "Hattori skulk"
// - Generator pauses at the yield
const result1 = ninjaIterator.next();
console.log("First yield value:", result1.value);
console.log("Is first value 'Hattori skulk'?", result1.value === "Hattori skulk");

// Second next("Hanzo") call:
// - Sends "Hanzo" to the generator
// - This becomes the value of the first yield expression
// - Gets back "Yoshi (Hanzo)"
const result2 = ninjaIterator.next("Hanzo");
console.log("Second yield value:", result2.value);

/**
 * Generator Error Handling Example
 * -------------------------------
 * This example demonstrates how to handle errors in generators:
 * 1. Generator yields "Hattori"
 * 2. External code throws an error using iterator.throw()
 * 3. Generator catches the error in its try-catch block
 * 
 * The sequence of events:
 * 1. First next() call:
 *    - Yields "Hattori"
 *    - Generator pauses at the yield
 * 2. throw() call:
 *    - Throws error into the generator
 *    - Error is caught in the try-catch block
 *    - Generator continues execution
 * 
 * This demonstrates how generators can:
 * - Handle errors thrown from outside
 * - Resume execution after error handling
 * - Maintain control flow in error scenarios
 * 
 * @yields {string} First yields "Hattori"
 * @throws {Error} When fail() is called
 */
function* NinjaGenerator2() {
    try {
        yield "Hattori";
        fail("The expected failure");
    } catch (e) {
        console.log("Error:", e);
    }
}

const ninjaIterator2 = NinjaGenerator2();
const result3 = ninjaIterator2.next();
console.log("First yield value:", result3.value);

const result4 = ninjaIterator2.throw(new Error("The expected failure"));
console.log("Second yield value:", result4.value);


