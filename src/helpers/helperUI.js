const { jsonReader } = loadLibrary("ExternalJsonReader");
const timeouts = jsonReader(`${__dirname}\\..\\data\\timeouts.json`);
const { Common } = loadLibrary("./common");

/**
 * class HelperUI provides complex APIs to work with UI of application
 * @memberof module:Helpers API
 */
class HelperUI {
    constructor(controller) {
        this._controller = controller;
        this._common = new Common();
        this._timeout = timeouts;
    }

    /**
     * Verifies presence of elements on screen
     * @param {...string} elements - the list of elements to verify presence for.
     * @returns {boolean} true if all elements are present on screen, otherwise false
     */
    isElementPresentOnScreen(...elements) {
        let elem, result = true,
            counter = 1;
        elements.forEach((locator) => {
            if (this._common.isLocatorIndex(locator)) {
                elem = this._controller.waitElement({ elementNdx: locator, timeout: this._timeout.UI.minLoadTime });
            } else {
                elem = this._controller.waitElement({ locator: locator, timeout: this._timeout.UI.minLoadTime });
            }

            if (elem === false) {
                Core.Print(`Locator #${counter} in parameters list is not present on screen`);
                result = false;
            }
            counter++;
        });
        return result;
    }

    /**
     * Verifies absence of elements on screen
     * @param {...string} elements - the list of elements to verify absence for.
     * @returns {boolean} true if all elements are not present on screen, otherwise false
     */
    isElementNotPresentOnScreen(...elements) {
        let elem, result = true,
            counter = 1;
        elements.forEach((locator) => {
            if (this._common.isLocatorIndex(locator)) {
                elem = this._controller.waitElement({ elementNdx: locator, timeout: this._timeout.UI.minLoadTime });
            } else {
                elem = this._controller.waitElement({ locator: locator, timeout: this._timeout.UI.minLoadTime });
            }
            if (elem === true) {
                Core.Print(`Locator #${counter} in parameters list is present on screen`);
                result = false;
            }
            counter++;
        });
        return result;
    }
}

exports.HelperUI = HelperUI;
