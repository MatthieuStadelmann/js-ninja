/**
 * Demonstrates how the var keyword affects variable scope and hoisting in JavaScript.
 * Shows that variables declared with var are function-scoped (not block-scoped)
 * and can be accessed outside their declaration blocks.
 */

/** @type {string} */
var globalNinja = "Hyabusa";

/**
 * Function that demonstrates variable hoisting and function scope.
 * Variables declared with var inside the function are accessible
 * throughout the entire function, regardless of where they are declared.
 */
function reportActivity() {
  // Variables are hoisted to the top of the function scope
  var functionActivity = "Sneaking";

  // The for loop's variables are accessible outside the loop
  for (var i = 0; i < 3; i++) {
    var forMessage = "I am looping" + " " + functionActivity;
    console.log(forMessage);
  }

  // Demonstrate that loop variables are accessible outside the loop
  console.log("Loop variable i is accessible outside the loop:", i === 3);

  console.log(
    "Loop variable forMessage is accessible outside the loop:",
    forMessage === "I am looping Sneaking"
  );
}

// Call the function to demonstrate variable scope
reportActivity();

// Demonstrate global variable access
console.log("Global variable is accessible:", globalNinja === "Hyabusa");i

// Try to access function-scoped variables (will be undefined)
console.log(
  "Function-scoped variables are not accessible outside the function:",
  typeof functionActivity === "undefined"
);
