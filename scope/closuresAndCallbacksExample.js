/**
 * Demonstrates how closures maintain access to private variables
 * even when used with setInterval and callbacks.
 * Each ninja instance maintains its own private state
 * while performing actions asynchronously.
 */

/**
 * Constructor function that creates Ninja objects with private state
 * and asynchronous behavior using setInterval.
 *
 * @constructor
 */
function TrainingNinja() {
  /** @private */
  var pushups = 0;
  /** @private */
  var intervalId = null;

  /**
   * Starts the training session, incrementing pushups every second.
   * Demonstrates closure access to private variables in setInterval callback.
   */
  this.startTraining = function () {
    if (intervalId === null) {
      intervalId = setInterval(
        function () {
          pushups++;
          console.log(`${this.name || "Ninja"} has done ${pushups} pushups`);
        }.bind(this),
        1000
      );
    }
  };

  /**
   * Stops the training session.
   * Demonstrates closure access to private intervalId.
   */
  this.stopTraining = function () {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
      console.log(`${this.name || "Ninja"} stopped at ${pushups} pushups`);
    }
  };

  /**
   * Returns the current number of pushups.
   * Demonstrates closure access to private pushups counter.
   *
   * @returns {number} The number of pushups completed
   */
  this.getPushups = function () {
    return pushups;
  };
}

// Create two training ninjas
var ninja1 = new TrainingNinja();
ninja1.name = "Hattori";
var ninja2 = new TrainingNinja();
ninja2.name = "Yoshi";

// Start training for both ninjas
ninja1.startTraining();
ninja2.startTraining();

// Stop training after 5 seconds
setTimeout(function () {
  ninja1.stopTraining();
  ninja2.stopTraining();

  // Demonstrate that each ninja maintained their own pushup count
  console.log(
    "Final pushup counts:",
    `${ninja1.name}: ${ninja1.getPushups()}`,
    `${ninja2.name}: ${ninja2.getPushups()}`
  );
}, 5000);
