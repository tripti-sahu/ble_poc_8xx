class Common {
    /**
     * Check type of locator
     * @param {string|number} locator
     * @return {boolean} Returns true if locator is number, and false if locator is string
     */
    isLocatorIndex(locator) {
        if (typeof locator === "number") {
            return true;
        } else if (typeof locator === "string") {
            return false;
        } else {
            throw new SyntaxError(`BaseScreen\n#tapElement\nUnsupported type of element\n ${typeof locator}`);
        }
    }

    /**
     * Method to take current time in seconds
     * @returns {number} time in seconds
     */
    getTimeInSeconds() {
        return Math.round(new Date().getTime() / 1000);
    }
}

exports.Common = Common;
