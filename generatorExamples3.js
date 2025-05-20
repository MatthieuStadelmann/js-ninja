/**
 * Generator function that yields even numbers
 * @generator
 * @yields {number} The next even number in sequence
 */
function* EventGenerator() {
  let num = 2;
  while (true) {
    yield num;
    num += 2;
  }
}

const eventGenerator = EventGenerator();
let a1 = eventGenerator.next().value;
console.log(a1);
let a2 = eventGenerator.next().value;
console.log(a2);
let a3 = EventGenerator().next().value;
console.log(a3);
let a4 = eventGenerator.next().value;
console.log(a4);

/**
 * Generator function that demonstrates return statement behavior
 * @generator
 * @yields {string} The first ninja name
 * @returns {string} The second ninja name (not included in for...of iteration)
 */
function* NinjaGenerator() {
  // First next() call:
  // - Returns { value: "Ninja1", done: false }
  yield "Ninja1";

  // Second next() call:
  // - Returns { value: "Ninja2", done: true }
  // - Generator ends here
  return "Ninja2";

  // This yield is never reached because of the return
  yield "Ninja3";
}

var ninjas = [];

// for...of only iterates over yielded values
// It stops when it sees done: true
// The return value ("Ninja2") is not included
for (let ninja of NinjaGenerator()) {
  ninjas.push(ninja);
}

console.log(ninjas);  // ["Ninja1"]

/**
 * Generator function that demonstrates value passing with next()
 * @generator
 * @param {number} val - Initial value to be doubled
 * @yields {number} The doubled value
 * @yields {number} The value passed to next()
 */
function* Gen(val) {
    // First yield:
    // 1. val is 2 (from initial parameter)
    // 2. yields 4 (2 * 2)
    // 3. The 3 passed to next() is ignored (first next() call)
    // 4. Generator pauses here
    val = yield val * 2;
    
    // Second yield:
    // 1. val is now 4 (from the second next() call)
    // 2. yields 4
    yield val;
}

let generator = Gen(2);
// First next() call:
// - Argument 3 is ignored
// - Returns { value: 4, done: false }
let a5 = generator.next(3).value;  // 4
console.log(a5);

// Second next() call:
// - Argument 4 becomes the result of the first yield
// - Returns { value: 4, done: false }
let a6 = generator.next(4).value;  // 4
console.log(a6); 

