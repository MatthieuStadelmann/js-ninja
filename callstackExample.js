/**
 * Demonstrates the JavaScript call stack in action.
 * Shows how function calls are added to and removed from the call stack,
 * and how the execution context changes as functions are called.
 */

/**
 * Function that represents a ninja's skulking action.
 * When called, it adds itself to the call stack and calls report().
 * 
 * @param {string} ninja - The name of the ninja who is skulking
 */
function skulk(ninja) {
    report(ninja + " is skulking"); 
}

/**
 * Utility function that logs messages to the console.
 * Demonstrates a simple function call being added to the call stack.
 * 
 * @param {string} message - The message to be logged
 */
function report(message) {
    console.log(message);
}

// Demonstrate the call stack with multiple function calls
// Each call creates a new execution context on the stack
skulk("Hattori");  // Call stack: [global, skulk, report]
skulk("Yoshi");    // Call stack: [global, skulk, report]
skulk("Kuma");     // Call stack: [global, skulk, report]

