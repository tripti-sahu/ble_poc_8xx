const Find = loadLibrary("../drivers/findBy").Find;
const { jsonReader } = loadLibrary("ExternalJsonReader");
const timeouts = jsonReader(`${__dirname}\\..\\data\\timeouts.json`);
const { HelperUI } = loadLibrary("../helpers/helperUI");
const { AppiumClient } = loadLibrary("../appiumSide/appiumClient");
const { Common } = loadLibrary("../helpers/common");

/**
 * This a class that implements base methods for the all app screens
 * @summary This a class that implements base methods for the all app screens
 * <pre> Implements the following methods:
 * @abstract
 */

class BaseScreen {
    constructor(mobile, controller) {
        /**
         * Instance of MobileControllerBase
         * @protected
         * @type {MobileBaseController}
         */
        this._driver = controller;

        /**
         * Wrapped mobile instance available from TC
         * @protected
         * @type {WdWrap}
         */
        this._appium = mobile;

        /**
         * Instance of Find class
         * @protected
         * @type {Find}
         */
        this._find = new Find(controller);

        /**
         * Timeouts
         * @type {object}
         */
        this.timeout = timeouts;

        /**
         * HelperUi methods
         */
        this.helperUI = new HelperUI(this._driver);

        /**
         * appiumClient extends appium methods
         */
        this.appiumClient = new AppiumClient(this._appium);

        /**
         * Instance of common class
         */
        this._common = new Common();
    }

    /**
     * Instance of MobileBaseController
     * @readonly
     * @type {MobileBaseController}
     */
    get driver() {
        return this._driver;
    }

    /**
     * Wrapped mobile instance available from TC
     * @readonly
     * @type {WdWrap}
     */
    get appium() {
        return this._appium;
    }

    /**
     * Instance of Find class
     * @readonly
     * @type {Find}
     */
    get find() {
        return this._find;
    }

    /**
     * Method to take current time in seconds
     * @returns {number} time in seconds
     */
    get timeInSeconds() {
        return this._common.getTimeInSeconds();
    }

    /**
     * @summary Tap on element
     * @param {string|number} [locator] could be as string as a number
     * @param {number} [timeout=5] timeout in seconds
     * @param {boolean} [isAsync=false] is tapElement run asynchronously or synchronously
     */
    tapElement(locator, timeout = this.timeout.UI.minLoadTime, isAsync = false) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.tapElement({ elementNdx: locator, timeout: timeout, isUnsync: isAsync });
        } else {
            this._driver.tapElement({ locator: locator, timeout: timeout, isUnsync: isAsync });
        }
    }

    /**
     * @summary Is element displayed or not
     * @param {string|number} [locator]
     * @param {number} [timeout=5]
     * @param {boolean} [isAsync=false] is isDisplayed run asynchronously or synchronously
     * @returns {boolean}
     */
    isDisplayed(locator, timeout = this.timeout.UI.minLoadTime, isAsync = false) {
        if (this._common.isLocatorIndex(locator)) {
            return this._driver.waitElement({ elementNdx: locator, timeout: timeout, isUnsync: isAsync });
        } else {
            return this._driver.waitElement({ locator: locator, timeout: timeout, isUnsync: isAsync });
        }
    }

    /**
     * @summary Wait for element absent
     * @param {string|number} [locator]
     * @param {number} [timeout=10] value in seconds
     * @param {boolean} [isAsync=false] is waitForAbsent run asynchronously or synchronously
     * @return {boolean}
     */
    isAbsent(locator, timeout = this.timeout.UI.minLoadTime, isAsync = false) {
        if (this._common.isLocatorIndex(locator)) {
            return this._driver.waitForAbsent({ elementNdx: locator, timeout: timeout, isUnsync: isAsync });
        } else {
            return this._driver.waitForAbsent({ locator: locator, timeout: timeout, isUnsync: isAsync });
        }
    }

    /**
     * @summary Get text from element
     * @param {string|number} [locator]
     * @param {number} [timeout=10] value in seconds
     * @param {boolean} [isAsync=false] is getText run asynchronously or synchronously
     * @return {string} with text of element
     */
    getText(locator, timeout = this.timeout.UI.minLoadTime, isAsync = false) {
        if (this._common.isLocatorIndex(locator)) {
            return this._driver.getTextFromScreen({ elementNdx: locator, timeout: timeout, isUnsync: isAsync });
        } else {
            return this._driver.getTextFromScreen({ locator: locator, timeout: timeout, isUnsync: isAsync });
        }
    }

    /**
     * @summary Set text for element
     * @param {string|number} [locator]
     * @param {string} text
     * @param {number} timeout value in seconds
     * @param {boolean} [isAsync=false] is getText run asynchronously or synchronously
     * @return {boolean}
     */
    enterText(locator, text = "", timeout = this.timeout.UI.minLoadTime, isAsync = false) {
        if (this._common.isLocatorIndex(locator)) {
            return this._driver.enterText({
                elementNdx: locator, text: text, timeout: timeout, isUnsync: isAsync
            });
        } else {
            return this._driver.enterText({
                locator: locator, text: text, timeout: timeout, isUnsync: isAsync
            });
        }
    }

    /**
     * @summary Swipe fromX toX and fromY toT
     * @param {number} fromX value in pixels
     * @param {number} fromY value in pixels
     * @param {number} toX value in pixels
     * @param {number} toY value in pixels
     * @param {number} [swipeTimeout=500] value in pixels
     */
    swipe(fromX, fromY, toX, toY, swipeTimeout = 500) {
        this._driver.swipe({
            fromX: fromX,
            fromY: fromY,
            toX: toX,
            toY: toY,
            swipeTimeout: swipeTimeout
        });
    }

    /**
     * @summary Swipe element left
     * @param {string} locator
     * @param {number} [dx=0] value in pixels
     * @param {number} [dy=0] value in pixels
     * @param {number} [timeout=10] timeout in seconds,
     */
    swipeLeft(locator, dx = -300, dy = 0, timeout = 10) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
        }
    }

    /**
     * @summary Swipe element right
     * @param {string|number} locator
     */
    swipeRight(locator) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: 300,
                dy: 0,
                timeout: 1
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: 300,
                dy: 0,
                timeout: 1
            });
        }
    }

    /**
     * @summary Swipe element down
     * @param {string|number} locator
     */
    swipeDown(locator) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: 0,
                dy: 500,
                timeout: 1
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: 0,
                dy: 500,
                timeout: 1
            });
        }
    }

    /**
     * @summary Swipe element up
     * @param {string|number} locator
     */
    swipeUp(locator) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: 0,
                dy: -500,
                timeout: 1
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: 0,
                dy: -500,
                timeout: 1
            });
        }
    }

    /**
     * @summary Swipe element down with specific timeout
     * @param {string} locator
     * @param {number} [length=500] value in pixels
     * @param {number} [duration=5] value in seconds
     */
    swipeDownSlowly(locator, length = 500, duration = 5) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: 0,
                dy: length,
                timeout: duration
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: 0,
                dy: length,
                timeout: duration
            });
        }
    }

    /**
     * @summary Swipe element up with specific timeout
     * @param locator
     * @param [length=500] value in pixels
     * @param [duration=5] value in seconds
     */
    swipeUpSlowly(locator, length = 500, duration = 5) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: 0,
                dy: -length,
                timeout: duration
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: 0,
                dy: -length,
                timeout: duration
            });
        }
    }

    /**
     * @summary Scroll element
     * @param {string} locator
     * @param {number} dx value in pixels
     * @param {number} dy value in pixels
     * @param {number} [timeout=1] value in seconds
     */
    scroll(locator, dx = 0, dy = 0, timeout = 1) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scroll({
                elementNdx: locator,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
        } else {
            this._driver.scroll({
                locator: locator,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
        }
    }

    /**
     * @summary Scrolls the Scrollable ancestor of the widget located by locator until the widget is completely visible.
     * @description Scrolls on alignment.
     * @param {string} locator
     * @param {number} [alignment=0] describes how the widget should be alignment. Default value 0
     */
    scrollIntoView(locator, alignment = 0) {
        if (this._common.isLocatorIndex(locator)) {
            this._driver.scrollIntoView({
                elementNdx: locator,
                alignment: alignment
            });
        } else {
            this._driver.scrollIntoView({
                locator: locator,
                alignment: alignment
            });
        }
    }

    /**
     * @summary Scroll until element will be visible
     * At least one of [dx] and [dy] must be non-zero.
     * @param {string|number} [locatorScrollable]
     * @param {string|number} [locatorItem]
     * @param {number} [alignment=0] describes how the widget should be alignment. Default value 0
     * @param {number} [dx=0] value in pixels
     * @param {number} [dy=0] value in pixels
     * @param {number} [timeout=60] scroll timeout(scroll duration) in seconds,
     */
    scrollUntilVisible(locatorScrollable, locatorItem, alignment = 0, dx = 0, dy = -100, timeout = 60.0) {
        switch (true) {
        case this._common.isLocatorIndex(locatorScrollable) && this._common.isLocatorIndex(locatorItem):
            this._driver.scrollUntillVisible({
                elementNdxScrollable: locatorScrollable,
                elementNdxItem: locatorItem,
                alignment: alignment,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
            break;
        case !this._common.isLocatorIndex(locatorScrollable) && !this._common.isLocatorIndex(locatorItem):
            this._driver.scrollUntillVisible({
                locatorScrollable: locatorScrollable,
                locatorItem: locatorItem,
                alignment: alignment,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
            break;
        case this._common.isLocatorIndex(locatorScrollable) && !this._common.isLocatorIndex(locatorItem):
            this._driver.scrollUntillVisible({
                elementNdxScrollable: locatorScrollable,
                locatorItem: locatorItem,
                alignment: alignment,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
            break;
        default:
            this._driver.scrollUntillVisible({
                locatorScrollable: locatorScrollable,
                elementNdxItem: locatorItem,
                alignment: alignment,
                dx: dx,
                dy: dy,
                timeout: timeout
            });
            break;
        }
    }

    /**
     * @summary The function check the status of a switcher
     * @param {string|number} locator
     * @param {number} [timeout=3]
     * @param {number} [subtreeDepth=10]
     * @returns {boolean} true in case of switcher is checked and false is unchecked
     */
    getSwitcherState(locator, timeout = 3, subtreeDepth = 10) {
        const element = this.isDisplayed(locator, timeout);
        let state;
        if (element) {
            if (this._common.isLocatorIndex(locator)) {
                state = this._driver.getRenderObjectDiagnostics({
                    elementNdx: locator,
                    timeout: timeout,
                    subtreeDepth: subtreeDepth,
                    includeProperties: true
                });
            } else {
                state = this._driver.getRenderObjectDiagnostics({
                    locator: locator,
                    timeout: timeout,
                    subtreeDepth: subtreeDepth,
                    includeProperties: true
                });
            }

            if (state.toString().includes("description: checked")) {
                return true;
            } else if (state.toString().includes("description: unchecked")) {
                return false;
            }
        }
        throw new Error("Didn't get the switcher state");
    }

    /**
     * @summary The function checks any Widget property such as size, background or text color
     * @param {string|number} [locator]
     * @param {string} valueOfProperty
     * @param {number} [timeout=5]
     * @param {number} [subtreeDepth=2]
     * @returns {boolean}
     */
    checkWidgetProperty(locator, valueOfProperty, timeout = 5, subtreeDepth = 2, getHtmlText = false) {
        const element = this.isDisplayed(locator, 2);
        let obj;
        if (element) {
            for (let i = 0; i < 10; i++) {
                if (this._common.isLocatorIndex(locator)) {
                    obj = this._driver.getWidgetDiagnostics({
                        elementNdx: locator,
                        subtreeDepth: subtreeDepth,
                        includeProperties: true,
                        timeout: timeout
                    });
                } else {
                    obj = this._driver.getWidgetDiagnostics({
                        locator: locator,
                        subtreeDepth: subtreeDepth,
                        includeProperties: true,
                        timeout: timeout
                    });
                }

                if (typeof obj === "object") {
                    obj = JSON.stringify(obj);
                }

                if (getHtmlText) {
                    return obj;
                }
                if (obj.toString().includes(valueOfProperty)) {
                    return true;
                } else {
                    Core.Print(`${valueOfProperty} is not found`);
                }
            }
        }
        return false;
    }

    /**
     * @summary The function read any Widget property such as size, background or text color
     * @param {string|number} locator
     * @param {number} timeout
     * @param {number} subtreeDepth
     * @returns {object} Widget property
     */
    getHtmlText(locator, timeout = 5, subtreeDepth = 2) {
        let obj = this.checkWidgetProperty(locator, undefined, timeout, subtreeDepth, true);
        if (obj.toString().includes("\"name\":\"htmlText\"") || obj.toString().includes("\"name\":\"text\"")) {
            return obj;
        }
        return false;
    }

    /**
     * Verifies current platform
     * @returns {boolean} true if platform is Android, otherwise false
     */
    isAndroid() {
        return this._appium.config.platformName.toLowerCase() === "android";
    }

    /**
     * Verifies current platform
     * @returns {boolean} true if platform is ios, otherwise false
     */
    isIOS() {
        return this._appium.config.platformName.toLowerCase() === "ios";
    }
}

exports.BaseScreen = BaseScreen;
