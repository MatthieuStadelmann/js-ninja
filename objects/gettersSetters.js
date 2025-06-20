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

/**
 * Creates a Ninja with a private skill level property
 * @constructor
 * @class
 * @description A Ninja class that demonstrates property definition with controlled access
 */
function Ninja() {
    /** @private */
    let _skillLevel = 0;

    Object.defineProperty(this, "skillLevel", {
        /**
         * Gets the current skill level of the ninja
         * @returns {number} The current skill level
         */
        get: () => {
            console.log("Getting skill level");
            return _skillLevel;
        },
        /**
         * Sets the skill level of the ninja
         * @param {number} value - The new skill level to set
         */
        set: (value) => {
            if (!Number.isInteger(value)) {
                throw new Error("Skill level must be an integer");
            }
            _skillLevel = value;
        },
    });
}

const ninja = new Ninja();
ninja.skillLevel = 10;
console.log(ninja.skillLevel);
