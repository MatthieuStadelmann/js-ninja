/**
 * Generator Example
 * ----------------
 * This example demonstrates how to use JavaScript generators to create an iterator.
 * The GenerateWeapon function:
 * - Is marked with * to indicate it's a generator
 * - Uses yield to return values one at a time
 * - Can be iterated over using for...of loop
 *
 * Each time the generator is called, it:
 * 1. Yields "Sword"
 * 2. Yields "Shield"
 * 3. Yields "Bow"
 *
 * The for...of loop automatically handles the iteration,
 * calling .next() internally until the generator is done.
 */
function* GenerateWeapon() {
  yield "Sword";
  yield "Shield";
  yield "Bow";
}

for (const weapon of GenerateWeapon()) {
  console.log(weapon);
}

/**
 * Manual Iteration Example
 * -----------------------
 * This example shows how to manually control the generator iteration:
 * - Creates an iterator using GenerateWeapon()
 * - Calls .next() manually to get each value
 * - Each .next() call returns an object with:
 *   - value: the yielded value
 *   - done: boolean indicating if generator is complete
 *
 * The fourth call (weapon4) will return { value: undefined, done: true }
 * because the generator has no more values to yield.
 */
const weaponIterator = GenerateWeapon();

const weapon1 = weaponIterator.next();
const weapon2 = weaponIterator.next();
const weapon3 = weaponIterator.next();
const weapon4 = weaponIterator.next();

console.log(weapon1);
console.log(weapon2);
console.log(weapon3);
console.log(weapon4);

/**
 * While Loop Iteration Example
 * ---------------------------
 * This example demonstrates another way to iterate over a generator using a while loop:
 * - Creates a new iterator instance
 * - Uses a while loop to check the done property
 * - Combines assignment and condition check in one line
 * - Continues until the generator is done
 *
 * This pattern is useful when you need more control over the iteration
 * or when you want to process items one at a time with custom logic.
 */
const weaponIterator2 = GenerateWeapon();

let item;
while (!(item = weaponIterator2.next()).done) {
  console.log(item.value);
}

/**
 * Generator Delegation Example
 * ---------------------------
 * This example demonstrates how to delegate to another generator using yield*:
 * - WarriorGenerator yields "Warrior", then delegates to NinjaGenerator, then yields "Rogue"
 * - NinjaGenerator yields "Hattori" and "Yoshi"
 * - The yield* operator delegates iteration to another generator
 *
 * When iterated, this will output:
 * 1. "Warrior"
 * 2. "Hattori"
 * 3. "Yoshi"
 * 4. "Rogue"
 *
 * This pattern is useful for composing generators and reusing generator logic.
 */
function* WarriorGenerator() {
  yield "Warrior";
  yield* NinjaGenerator();
  yield "Rogue";
}

function* NinjaGenerator() {
  yield "Hattori";
  yield "Yoshi";
}

for (let warrior of WarriorGenerator()) {
  console.log(warrior);
}

/**
 * Infinite Generator Example
 * -------------------------
 * This example demonstrates an infinite generator that creates unique IDs:
 * - Uses a while(true) loop to create an endless sequence
 * - Maintains state between calls using a closure
 * - Each call to next() returns the next number in sequence
 * - Never returns done: true
 *
 * This pattern is useful for:
 * - Generating unique identifiers
 * - Creating infinite sequences
 * - Maintaining state between iterations
 */
function* IdGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const idIterator = IdGenerator();

const ninja1 = { id: idIterator.next().value };
const ninja2 = { id: idIterator.next().value };
const ninja3 = { id: idIterator.next().value };

console.log("First ninja created:", ninja1);
console.log("Second ninja created:", ninja2);
console.log("Third ninja created:", ninja3);
