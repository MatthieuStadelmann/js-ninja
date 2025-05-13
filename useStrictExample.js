"use strict";

/**
 * Demonstrates the relationship between function parameters and the arguments object
 * in strict mode. Shows how modifying arguments[0] doesn't affect the parameter value.
 * 
 * @param {string} person - The person to infiltrate
 */
function infiltrate(person) {
  console.log(`Is person equal to "gardener"? ->`, person === "gardener");
  console.log(`Is arguments[0] equal to "gardener"? ->`, arguments[0] === "gardener");

  arguments[0] === "ninja";
  console.log(`After attempting to change arguments[0], is person still "gardener"? ->`, person === "gardener");
}

infiltrate("gardener");
