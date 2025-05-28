/**
 * Creates a Promise that resolves with a ninja name after a delay
 * @returns {Promise<string>} A Promise that resolves with the ninja name
 */
function getNinja() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ninja");
        }, 1000);
    });
}

/**
 * Main function that demonstrates async/await pattern
 * @async
 * @returns {Promise<void>}
 */
async function main() {
    try {
        const ninja = await getNinja();
        console.log("Ninja", ninja);
    } catch (error) {
        console.log("Error", error);
    }
}

main();