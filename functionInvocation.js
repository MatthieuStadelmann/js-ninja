/**
 * Logs whether the 4th and 5th arguments passed to the function
 * are strictly equal to 4 and 5 respectively.
 *
 * @param {number} a - The first argument.
 * @param {number} b - The second argument.
 * @param {number} c - The third argument.
 */
function whatever(a, b, c) {
    // Check if the 4th argument (index 3) is equal to 4
    console.log(`Is the 4th argument equal to 4? ->`, arguments[3] === 4);

    // Check if the 5th argument (index 4) is equal to 5
    console.log(`Is the 5th argument equal to 5? ->`, arguments[4] === 5);
}

whatever(1, 2, 3, 4, 5);
