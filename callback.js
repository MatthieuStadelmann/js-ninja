// === Callbacks Section ===
// Examples from "Secrets of the JavaScript Ninja"
// This section explores how callbacks are used in JavaScript

// ---------------------------------------------------
// Example 1: Sorting with a Callback
// ---------------------------------------------------

console.log("\n=== 🧮 Example 1: Sorting with a Callback ===");

/**
 * Sorts an array of numbers in ascending order using a callback.
 */
var values = [0, 3, 2, 5, 7, 4, 8, 1];

values.sort(function (value1, value2) {
  return value1 - value2; // Compare numbers numerically
});

console.log("📊 Sorted Numeric Array:", values); // [0, 1, 2, 3, 4, 5, 7, 8]

// ---------------------------------------------------
// Example 2: Function Registry with Callback Handling
// ---------------------------------------------------

console.log("\n=== 📚 Example 2: Function Registry with Callback Handling ===");

/**
 * An object for storing functions with unique IDs.
 * @property {number} nextId - The next unique ID to assign.
 * @property {Object} cache - A cache to store registered functions.
 * @method add - Registers a function if it doesn't have an ID.
 */
var store = {
  nextId: 1,
  cache: {},

  /**
   * Adds a function to the registry if it doesn't already have an ID.
   *
   * @param {Function} fn - The function to add.
   * @returns {boolean} True if added, false otherwise.
   */
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++; // Assign a unique ID
      this.cache[fn.id] = fn; // Store function in the cache
      return true;
    }
    return false;
  },
};

/**
 * A simple example function to be registered.
 */
function ninja() {}

const wasAdded = store.add(ninja);
console.log("🧠 Was the 'ninja' function added to the store?", wasAdded); // true
console.log("📦 Current Store Cache:", store.cache);

// ---------------------------------------------------
// Example 3: Memoized Prime Checker
// ---------------------------------------------------

console.log("\n=== 🧪 Example 3: Memoized Prime Checker ===");

/**
 * Checks whether a number is prime using memoization to cache results.
 *
 * @param {number} value - The number to check for primality.
 * @returns {boolean} True if prime, false otherwise.
 */
function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {}; // Initialize cache if it doesn't exist
  }

  if (isPrime.answers[value] !== undefined) {
    console.log(`⚡ Retrieved cached result for ${value}`);
    return isPrime.answers[value];
  }

  var prime = value !== 1;
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }

  isPrime.answers[value] = prime; // Cache the result
  console.log(`🔍 Computed isPrime(${value}):`, prime);
  return prime;
}

// Test with a prime number
isPrime(5); // Should compute and cache
isPrime(5); // Should retrieve from cache

console.log("🗂 Cached Prime Results:", isPrime.answers);
