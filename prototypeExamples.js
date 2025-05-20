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
