/**
 * Base Person class with a dance method
 * @constructor
 */
function Person() {
    this.name = "Person";
}
Person.prototype.dance = function () {
    return "Person is dancing!";
};

/**
 * Ninja class that inherits from Person
 * @constructor
 */
function Ninja() {
    this.name = "Ninja";
}

console.log("=== 1. Understanding the 'new' Keyword ===\n");

console.log("What 'new' actually does (in pseudo-code):");
console.log("function new(Constructor) {");
console.log("    // 1. Creates a new empty object");
console.log("    var obj = {};");
console.log("    // 2. Sets the prototype of that object to Constructor.prototype");
console.log("    obj.__proto__ = Constructor.prototype;");
console.log("    // 3. Calls the constructor with 'this' set to the new object");
console.log("    Constructor.call(obj);");
console.log("    // 4. Returns the new object");
console.log("    return obj;");
console.log("}");

console.log("\n=== 2. Understanding Prototype Inheritance ===\n");

console.log("Initial state of Ninja.prototype:");
console.log("Ninja.prototype.constructor points to:", Ninja.prototype.constructor.name);
console.log("This is the default - every function's prototype has a constructor pointing to itself");

console.log("\nSetting up inheritance:");
Ninja.prototype = new Person();
console.log("After setting up inheritance - Ninja.prototype is now a Person instance");
console.log("Ninja.prototype.constructor now points to:", Ninja.prototype.constructor.name);

console.log("\n=== 3. Understanding the Constructor Property ===\n");

var ninja = new Ninja();
console.log("1. Identifying object creation:");
console.log("What created this object?", ninja.constructor.name);
console.log("This is wrong! It should be Ninja, not Person");

console.log("\n2. Creating new instances:");
console.log("Before fixing constructor:");
var newNinja = new ninja.constructor();
console.log("Created a new:", newNinja.constructor.name);
console.log("Oops! We got a Person instead of a Ninja!");

// Fix the constructor property
Object.defineProperty(Ninja.prototype, "constructor", {
    value: Ninja,
    enumerable: false,
    writable: true,
});

console.log("\n3. After fixing constructor:");
console.log("Now ninja.constructor points to:", ninja.constructor.name);
var anotherNinja = new ninja.constructor();
console.log("Created a new:", anotherNinja.constructor.name);
console.log("Now we correctly get a Ninja!");

console.log("\n=== 4. Verifying Inheritance ===\n");

console.log("1. Type checking:");
console.log("Is ninja an instance of Ninja?", ninja instanceof Ninja);
console.log("Is ninja an instance of Person?", ninja instanceof Person);

console.log("\n2. Method inheritance:");
console.log("Can ninja dance?", typeof ninja.dance === 'function');
console.log("Is dance method from Person's prototype?", ninja.dance === Person.prototype.dance);
console.log("What happens when ninja dances?", ninja.dance());

console.log("\n=== 5. Key Takeaways ===\n");
console.log("1. The 'new' keyword:");
console.log("   - Creates a new object");
console.log("   - Sets up the prototype chain");
console.log("   - Calls the constructor");
console.log("   - Returns the new object");

console.log("\n2. Prototype inheritance:");
console.log("   - Objects inherit from their prototype");
console.log("   - The prototype chain allows method sharing");
console.log("   - Replacing the prototype affects the constructor");

console.log("\n3. The constructor property:");
console.log("   - Helps identify object creation");
console.log("   - Enables creating new instances");
console.log("   - Assists with type checking");
console.log("   - Must be fixed after setting up inheritance");