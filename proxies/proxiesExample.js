/**
 * Creates a proxy wrapper around an object that logs all property access and modifications.
 * This function demonstrates the use of ES6 Proxy to intercept get and set operations.
 *
 * @param {Object} obj - The target object to make loggable
 * @returns {Proxy} A proxy that logs property access and modifications
 * @example
 * const ninja = {name: "Hattori"};
 * const loggableNinja = makeLoggable(ninja);
 * loggableNinja.name; // Logs: "Getting property name"
 * loggableNinja.name = "Yoshi"; // Logs: "Setting property name to Yoshi"
 */
function makeLoggable(obj) {
    return new Proxy(obj, {
        get: function(target, prop, receiver) {
            console.log(`Getting property ${prop}`);
            return Reflect.get(target, prop, receiver);
        },
        set: function(target, prop, value, receiver) {
            console.log(`Setting property ${prop} to ${value}`);
            return Reflect.set(target, prop, value, receiver);
        }
    })
}

const ninja = {name: "Hattori"};
const loggableNinja = makeLoggable(ninja);
loggableNinja.name = "Yoshi";

/**
 * Determines whether a given number is prime.
 * A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself.
 * 
 * Note: This implementation has O(n) time complexity and is not optimized for large numbers.
 * It checks every number from 2 to n-1 as potential divisors.
 *
 * @param {number} value - The number to check for primality
 * @returns {boolean} True if the number is prime, false otherwise
 * @example
 * isPrime(7); // returns true
 * isPrime(8); // returns false
 * isPrime(1); // returns false (1 is not considered prime)
 */
function isPrime(value) {
    if (value === 1) {
        return false;
    }
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Proxy wrapper around the isPrime function that adds execution timing.
 * This proxy intercepts function calls to measure and log the execution time
 * of the isPrime function using console.time() and console.timeEnd().
 *
 * @type {Proxy}
 * @see {@link isPrime} - The original function being proxied
 */
isPrime = new Proxy(isPrime, {
    apply: function(target, thisArg, argumentsList) {
        console.time("isPrime");
        const result = Reflect.apply(target, thisArg, argumentsList);
        console.timeEnd("isPrime");
        return result;
    }
})

const result = isPrime(97);
console.log(result);

/**
 * Creates a dynamic folder structure using Proxy.
 * This constructor function returns a proxy that automatically creates
 * nested folder objects when accessing non-existent properties.
 * 
 * The proxy intercepts property access and creates new Folder instances
 * for any property that doesn't exist, allowing for infinite nested
 * folder creation through property chaining.
 *
 * @constructor
 * @returns {Proxy} A proxy object representing a folder that can have nested folders
 * @example
 * const rootFolder = new Folder();
 * rootFolder.documents.projects.myProject = "file.txt";
 * // This creates the nested structure: documents -> projects -> myProject
 */
function Folder() {
    return new Proxy({}, {
        get: function(target, prop, receiver) {
            console.log(`Getting property ${prop}`);
            if (!(prop in target)) {
                target[prop] = new Folder();
            }
            return target[prop];
        }
    })
}

const rootFolder = new Folder();

try {
    rootFolder.ninjaDir.firstNinjadir.ninjaFile = "yoshi.txt";
}
catch (e) {
    console.log(e);
}

console.log(rootFolder);