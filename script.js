// === Callbacks Section ===
// Code examples and concepts related to callbacks from Secrets of the JavaScript Ninja
//
// The sort() method accepts a callback function to define custom sorting logic.
// By default, JavaScript sorts elements as strings, which can lead to incorrect results with numbers.
// Passing a callback lets us control how elements are compared.
//
// The callback should return:
//   - A negative number if value1 comes before value2
//   - Zero if value1 and value2 are equal (no change in order)
//   - A positive number if value1 comes after value2
//
// Example below: numeric sort using a custom comparison function.

var values = [0, 3, 2, 5, 7, 4, 8, 1];

values.sort(function (value1, value2) {
  return value1 - value2;
});

console.log(values);