/**
 * @typedef {Object} NinjaCollection
 * @property {string[]} ninja - Array of ninja names
 * @property {number} ninjaCount - Getter/Setter for the number of ninjas
 */

/**
 * Collection of ninjas with properties to manage the ninja array
 * @type {NinjaCollection}
 */
const ninjaCollection = {
    ninja: ["Hattori", "Yoshi", "Kuma"],
    /**
     * Gets the current count of ninjas in the collection
     * @returns {number} The number of ninjas in the array
     */
    get ninjaCount() {
        return this.ninja.length;
    },
    /**
     * Sets the length of the ninja array
     * @param {number} value - The new length to set for the ninja array
     */
    set ninjaCount(value) {
        this.ninja.length = value;
    }
}

console.log(`Current number of ninjas in collection: ${ninjaCollection.ninjaCount}`);
console.table(ninjaCollection.ninja);
