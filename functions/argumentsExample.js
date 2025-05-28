/**
 * Logs whether the 4th and 5th arguments passed to the function
 * are strictly equal to 4 and 5 respectively.
 *
 * @param {number} a - The first argument.
 * @param {number} b - The second argument.
 * @param {number} c - The third argument.
 */
function whatever(a, b, c) {
  console.log(
    `Number of arguments passed: ${arguments.length} (expected: 5) ->`,
    arguments.length === 5
  );
  // Check if the 4th argument (index 3) is equal to 4
  console.log(`Is the 4th argument equal to 4? ->`, arguments[3] === 4);

  // Check if the 5th argument (index 4) is equal to 5
  console.log(`Is the 5th argument equal to 5? ->`, arguments[4] === 5);
}

whatever(1, 2, 3, 4, 5);

/**
 * Calculates the sum of all arguments passed to the function.
 * This function uses the arguments object to handle any number of parameters.
 * 
 * @returns {number} The sum of all arguments
 */
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(`Sum of 1 and 2 is ${sum(1, 2)} (expected: 3) ->`, sum(1, 2) === 3);

/**
 * Calculates the sum of all arguments passed to the function.
 * This function uses the rest parameter syntax (...args) instead of the arguments object,
 * which is the modern ES6+ way to handle variable arguments.
 * 
 * @param {...number} args - Any number of arguments to sum
 * @returns {number} The sum of all arguments
 */
function sumWithRest(...args) {
  return args.reduce((sum, current) => sum + current, 0);
}

console.log(`Sum of 1 and 2 using rest parameters is ${sumWithRest(1, 2)} (expected: 3) ->`, sumWithRest(1, 2) === 3);
  
  