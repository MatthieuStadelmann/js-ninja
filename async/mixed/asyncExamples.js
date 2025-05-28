/**
 * This code demonstrates UI blocking behavior because it uses sequential await calls.
 * Each fakeFetch call takes 1 second to complete, and they run one after another:
 * - First call: 1 second
 * - Second call: 1 second
 * - Third call: 1 second
 * Total blocking time: 3 seconds
 *
 * To make this non-blocking, we could use Promise.all() to run the calls concurrently.
 */

// Global variables to store our data
let response1, response2, response3;

// Basic function that just sets a timeout
function fakeFetch(url, i) {
  setTimeout(() => {
    if (i === 1) response1 = "Data " + i;
    if (i === 2) response2 = "Data " + i;
    if (i === 3) response3 = "Data " + i;
  }, 1000);
}

// Start all fetches
fakeFetch("https://api.example.com/data", 1);
fakeFetch("https://api.example.com/data2", 2);
fakeFetch("https://api.example.com/data3", 3);

// Check results every 100ms
const checkInterval = setInterval(() => {
  if (response1 && response2 && response3) {
    console.log(response1);
    console.log(response2);
    console.log(response3);
    clearInterval(checkInterval);
  }
}, 100);

/**
 * Callback Example
 * ----------------
 * This example demonstrates how to handle asynchronous operations using callbacks.
 * Each fakeFetchWithCallback call:
 * - Takes 1 second to complete
 * - Uses a callback function to handle the response
 * - Passes only its specific response to the callback
 * 
 * The callbacks are executed independently and in parallel,
 * each logging its own response when the data is ready.
 * 
 * This version is NON-BLOCKING because:
 * - All three calls start immediately
 * - Each timeout runs independently
 * - The main thread continues executing
 * - Total execution time is ~1 second (not 3 seconds)
 */
// Global variables to store our data
let responseWithCallback1, responseWithCallback2, responseWithCallback3;

function fakeFetchWithCallback(url, callNumber, callback) {
  setTimeout(() => {
    let response;
    if (callNumber === 1) {
      responseWithCallback1 = "Data " + callNumber;
      response = responseWithCallback1;
    }
    if (callNumber === 2) {
      responseWithCallback2 = "Data " + callNumber;
      response = responseWithCallback2;
    }
    if (callNumber === 3) {
      responseWithCallback3 = "Data " + callNumber;
      response = responseWithCallback3;
    }
    callback(response);
  }, 1000);
}

fakeFetchWithCallback("https://api.example.com/data", 1, function (response) {
  if (response) {
    console.log("Inside first fakeFetchWithCallback", response);
  } else {
    console.log("Inside first fakeFetchWithCallback, no response");
  }
});

fakeFetchWithCallback("https://api.example.com/data2", 2, function (response) {
  if (response) {
    console.log("Inside second fakeFetchWithCallback", response);
  } else {
    console.log("Inside second fakeFetchWithCallback, no response");
  }
});

fakeFetchWithCallback("https://api.example.com/data3", 3, function (response) {
  if (response) {
    console.log("Inside third fakeFetchWithCallback", response);
  } else {
    console.log("Inside third fakeFetchWithCallback, no response");
  }
});
