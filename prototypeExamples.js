/**
 * Represents a Ninja warrior
 * @class
 */
function Ninja() {}

/**
 * Makes the ninja swing their sword
 * @returns {string} A message indicating the sword swing action
 */
Ninja.prototype.swingSword = function() {
    return "Swinging my sword!";
}

// When we create a new instance using the 'new' keyword:
// 1. A new object is created
// 2. The object's internal [[Prototype]] property is set to Ninja.prototype
// 3. The 'this' context is set to the new object
// 4. The constructor function is executed
// 5. The new object is returned
var ninja1 = new Ninja();
console.log(ninja1.swingSword());

/**
 * Represents a Ninja warrior with instance-specific sword swinging behavior
 * @class
 * @example
 * // The instance method shadows the prototype method
 * // When ninja2.swingSword() is called, it uses the instance method
 * // because it's found first in the prototype chain
 * 
 * // Note: This implementation uses public properties
 * // The 'swung' property can be accessed directly: ninja2.swung
 */
function Ninja2() {
    /** @type {boolean} */
    this.swung = true;  // This is a public property, not private!
    
    /**
     * Instance method that uses closure to access the instance's 'swung' property
     * This method shadows the prototype method because it's found first in the prototype chain
     * @returns {boolean} The current state of the sword swing
     */
    this.swingSword = function() {
        return this.swung;
    }
}

/**
 * Prototype method that is shadowed by the instance method
 * This method would be used if the instance method wasn't defined
 * @returns {boolean} The opposite of the current sword swing state
 */
Ninja2.prototype.swingSword = function() {
    return !this.swung;
}

// Note: The instance method (defined in constructor) takes precedence over the prototype method
// This is because JavaScript first looks for properties on the instance before checking the prototype chain
var ninja2 = new Ninja2();
console.log(ninja2.swingSword()); // Returns true because it uses the instance method
console.log(ninja2.swung); // Returns true because it's an instance property

/**
 * Represents a Ninja warrior with truly private sword state
 * @class
 * @example
 * // This implementation uses closure to create a private variable
 * // The 'swung' state cannot be accessed directly from outside
 */
function Ninja3() {
    // This is a truly private variable, only accessible within the closure
    let swung = true;
    
    /**
     * Public method to check sword state
     * @returns {boolean} The current state of the sword swing
     */
    this.swingSword = function() {
        return swung;  // Accessing the private variable through closure
    }
    
    /**
     * Public method to toggle sword state
     * @returns {boolean} The new state of the sword swing
     */
    this.toggleSword = function() {
        swung = !swung;
        return swung;
    }
}

var ninja3 = new Ninja3();
console.log(ninja3.swingSword());  // Returns true
console.log(ninja3.swung);         // Returns undefined - can't access private variable
ninja3.toggleSword();              // Changes the private state
console.log(ninja3.swingSword());  // Returns false

// Demonstrating that each instance has its own private variable
var ninja3a = new Ninja3();
var ninja3b = new Ninja3();

console.log("Initial states:");
console.log("ninja3a sword state:", ninja3a.swingSword());  // true
console.log("ninja3b sword state:", ninja3b.swingSword());  // true

// Changing state of first ninja
ninja3a.toggleSword();
console.log("\nAfter toggling ninja3a:");
console.log("ninja3a sword state:", ninja3a.swingSword());  // false
console.log("ninja3b sword state:", ninja3b.swingSword());  // still true

// Each instance has its own closure with its own private variable
// The 'swung' variable is created new for each instance in the constructor
// This is why changing one ninja's state doesn't affect the other

/**
 * Represents a Ninja warrior with both private instance state and shared state
 * @class
 * @example
 * // This implementation shows how to have both private instance variables
 * // and shared variables across all instances
 */
function Ninja4() {
    // Private instance variable - each instance gets its own
    let health = 100;
    
    // Increment the shared count for each new ninja
    Ninja4.totalNinjas++;
    
    /**
     * Get the ninja's health
     * @returns {number} The current health value
     */
    this.getHealth = function() {
        return health;
    }
    
    /**
     * Get the total number of ninjas created
     * @returns {number} The total count of ninjas
     */
    this.getTotalNinjas = function() {
        return Ninja4.totalNinjas;
    }
}

// Shared variable across all instances
// This is a static property on the constructor function
Ninja4.totalNinjas = 0;

// Create some ninjas to demonstrate shared state
var ninja4a = new Ninja4();
var ninja4b = new Ninja4();
var ninja4c = new Ninja4();

console.log("\nDemonstrating shared and private variables:");
console.log("Total ninjas created:", ninja4a.getTotalNinjas());  // 3
console.log("Total ninjas created:", ninja4b.getTotalNinjas());  // 3
console.log("Total ninjas created:", ninja4c.getTotalNinjas());  // 3

// Each instance has its own private health
console.log("ninja4a health:", ninja4a.getHealth());  // 100
console.log("ninja4b health:", ninja4b.getHealth());  // 100
console.log("ninja4c health:", ninja4c.getHealth());  // 100

// We can also access the shared variable directly through the constructor
console.log("Total ninjas (direct access):", Ninja4.totalNinjas);  // 3