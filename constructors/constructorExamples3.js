/**
 * Represents an animal with a name.
 * @constructor
 * @param {string} name - The name of the animal.
 */
function Animal(name) {
    this.name = name;
}

Animal.prototype.dance = function () {
    return "Animal is dancing!";
};

 
/**
 * Represents a dog, which is a type of animal.
 * @constructor
 * @param {string} name - The name of the dog.
 */
function Dog(name) {
    // Call the Animal constructor with 'this' context to inherit properties
    // This ensures each Dog instance gets its own 'name' property from Animal
    Animal.call(this, name);
    /**
     * Make the dog bark.
     * @returns {string} The sound a dog makes.
     */
    this.bark = function () {
        return "Woof!";
    };
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var dog = new Dog("Rex");
console.log(dog.name);
console.log(dog.dance());
console.log(dog.bark());

console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

console.log(dog.constructor === Dog);
console.log(dog.constructor === Animal);