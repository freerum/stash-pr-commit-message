/**
 * Gets a logger with a defined prefix
 * @param {string} prefix     The prefix to attach to each log that this logger generates.
 *                            Example: The calling function's name.
 */
function getLogger(prefix) {
    return {
        /**
         * Logs a message to the console prefixed with the name of the extension and the function
         * @param {any[]} rest              The rest of the arguments for console.log
         */
        info: (...rest) => {
            console.log(`[stash-pr-ettier-merge-message] ${functionName}:`, ...rest);
        },

        /**
         * Logs an Error message to the console prefixed with the name of the extension and the function
         * @param {any[]} rest              The rest of the arguments for console.log
         */
        error: (...rest) => {
            console.log(`[stash-pr-ettier-merge-message] ${functionName}: [--ERROR--]:`, ...rest);
        },
    };
}
