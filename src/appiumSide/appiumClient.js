/* eslint-disable no-console */
const jsonReader = loadLibrary("ExternalJsonReader").jsonReader;
const timeouts = jsonReader(`${__dirname}\\..\\data\\timeouts.json`);

/**
 * class for work with Notification using Appium.
 * @class
 */
class AppiumClient {
    constructor(mobile) {
        this.mobile = mobile;
        this.timeout = timeouts;
    }

    /**
         * Wait For Fault.
         */
    waitForFault(loc, timeout) {
        this.mobile.waitUntilAppears(loc, timeout);
    }

    /**
     * Wait For Fault Cleanup.
     */
    waitForFaultCleanup(loc, timeout) {
        this.mobile.wait(3);
        this.mobile.waitUntilDisappears(loc, timeout);
    }

    /**
     * Wait For Notification.
     */
    waitForNotification(loc, timeout) {
        this.mobile.waitUntilAppears(loc, timeout);
    }

    /**
     * Open Notification.
     */
    openNotification(loc, timeout) {
        if (this.isAndroid()) {
            this.expandDismissibleNotification();
        } else {
            for (let i = 0; i < 5; i++) {
                this.mobile.swipe("50%", "10%", "50%", "80.20%");
                this.mobile.waitUntilAppears(loc, timeout);
                let elem = this.IsElementPresentOnScreen(loc);
                if (elem) {
                    console.log("Swiping success");
                    break;
                } else {
                    this.mobile.wait(10);
                    console.log("Swiping again");
                }
            }
        }
        this.mobile.wait(5);
    }

    /**
     * Expand Dismissible Notification.
     */
    ExpandDismissibleNotification(locHeader, locDetait, timeout) {
        const currentPlatform = this.mobile.config.platformName.toLowerCase();
        if (currentPlatform === "android") {
            this.mobile.qm_openNotificationCenter();
            let element = this.mobile.waitUntilAppears(locHeader, timeout);
            let notifCoordinate = this.mobile.getElementCoordinatesInPercent(element);
            let yTop = notifCoordinate.y - 1.5; // to work on Galaxy S10+ and Galaxy S20+ devices
            let yBottom = 75;
            let speed = 200;
            for (let i = 0; i < 3; i++) {
                this.mobile.swipe(`${notifCoordinate.x}%`, `${yTop}%`, `${notifCoordinate.x}%`, `${yBottom}%`, speed);
                element = this.mobile.waitUntilAppears(locDetait, timeout);
                if (element.valueOf()) {
                    break;
                } else {
                    yBottom += 10;
                    speed += 40;
                    console.log("Swiping again");
                }
            }
        } else {
            this.mobile.waitUntilAppears("name|NotificationShortLookView", 70);
            this.mobile.swipe("50%", "10%", "50%", "80.20%");
            this.mobile.wait(1);
        }
    }

    /**
     * Dismiss OS Notification.
     */
    DismissOSNotification(loc) {
        if (this.isAndroid()) {
            this.mobile.waitUntilAppears(loc, 2).click();
            WaitInSeconds(3);
        } else {
            let element = this.mobile.waitUntilAppears(loc, 4);
            let notifCoordinate = this.mobile.getElementCoordinatesInPercent(element);
            this.mobile.swipe(`${notifCoordinate.x}%`, `${notifCoordinate.y}%`, `${notifCoordinate.x}%`, "3.94%");
        }
        // this._pump.ClearFault(); // change _pump to instance with pump mock and uncomment
    }

    /**
     * Wait For Banner.
     */
    waitForBanner(locHeader, locView, timeout) {
        if (this.isAndroid()) {
            let element = this.mobile.waitUntilAppears(locHeader, timeout);
            return element.cropImg(1);
        } else {
            this.mobile.waitUntilAppears(locView, timeout);
            return this.mobile.takeScreenshot();
        }
    }

    /**
     * Expand From Notification Center.
     */
    expandFromNotificationCenter(locHeader, locDetail, timeout) {
        if (this.isAndroid()) {
            let element = this.mobile.waitUntilAppears(locHeader, timeout);
            let notifCoordinate = this.mobile.getElementCoordinatesInPercent(element);
            let swipePercent = 75;
            let speed = 200;
            for (let i = 0; i < 3; i++) {
                this.mobile.swipe(`${notifCoordinate.x}%`, `${notifCoordinate.y}%`, `${notifCoordinate.x}%`,
                    `${swipePercent}%`, speed);
                element = this.mobile.waitUntilAppears(locDetail, timeout);
                if (element.valueOf()) {
                    break;
                } else {
                    swipePercent += 10;
                    speed += 40;
                    console.log("Swiping again");
                }
            }
        } else {
            this.mobile.swipe("90%", "45%", "20%", "45%", 200);
            this.mobile.findElementBy("xpath|//XCUIElementTypeButton[@label='View']").click();
            this.mobile.waitUntilAppears(locDetail, timeout);
        }
    }

    /**
     * Expand Dismissible Notification From Lock Screen.
     */
    expandDismissibleNotificationFromLockScreen(locHeader, locDetail, timeout) {
        if (this.isAndroid()) {
            this.mobile.qm_openNotificationCenter();
            let element = this.mobile.waitUntilAppears(locHeader, timeout);
            let notifCoordinate = this.mobile.getElementCoordinatesInPercent(element);
            let swipePercent = 75;
            let speed = 200;
            let yCoord = notifCoordinate.y - 2.6;
            for (let i = 0; i < 3; i++) {
                this.mobile.swipe(`${notifCoordinate.x}%`, `${yCoord}%`, `${notifCoordinate.x}%`, `${swipePercent}%`,
                    speed);
                element = this.mobile.waitUntilAppears(locDetail, timeout);
                if (element.valueOf()) {
                    break;
                } else {
                    swipePercent += 10;
                    speed += 40;
                    console.log("Swiping again");
                }
            }
        } else {
            this.mobile.waitUntilAppears("name|NotificationShortLookView", 70);
            this.mobile.swipe("50%", "10%", "50%", "80.20%");
            this.mobile.wait(1);
        }
    }

    /**
     * Tap Notification From Notification Center.
     */
    tapNotificationFromNotificationCenter(faultTime, locGraph, locDetail, timeout) {
        let tDiff;
        if (this.isAndroid()) {
            this.mobile.waitUntilAppears(locDetail, timeout).click();
            this.mobile.waitUntilAppears(locGraph, timeout);
        } else {
            this.mobile.touch("50%, 40%");
            this.mobile.waitUntilAppears(locGraph, timeout);
        }
        // Check and Wait for OS Banner to clear
        tDiff = (Date.now() - faultTime) / 1000;
        if (tDiff % 60 < 5 || tDiff % 60 > 53) {
            this.mobile.wait(timeout);
        }
    }

    /**
     * Tap Notification From Lock Screen.
     */
    tapNotificationFromLockScreen(faultTime, locGraph, locDetail, timeout) {
        let tDiff;
        if (this.isAndroid()) {
            this.mobile.waitUntilAppears(locDetail, timeout).click();
            this.mobile.wait(1);
            this.mobile.pressKeycode(145); // pass
            this.mobile.pressKeycode(145);
            this.mobile.pressKeycode(145);
            this.mobile.pressKeycode(145);
            this.mobile.waitUntilAppears(locGraph, timeout);
        } else {
            this.mobile.touch("50%, 40%");
            this.mobile.waitUntilAppears(locGraph, timeout);
        }
        // Check and Wait for OS Banner to clear
        tDiff = (Date.now() - faultTime) / 1000;
        if (tDiff % 60 < 5 || tDiff % 60 > 53) {
            this.mobile.wait(timeout);
        }
    }

    /**
    * Set device LANDSCAPE orientation.
    */
    setLandscapeOrientation() {
        this.mobile.setOrientation("LANDSCAPE");
    }

    /**
    * Set device PORTRAIT orientation.
    */
    setPortraitOrientation() {
        this.mobile.setOrientation("PORTRAIT");
    }

    /**
    * Get device orientation.
    */
    getDeviceOrientation() {
        this.mobile.getOrientation();
    }

    isElementDisplayed(locator, timeout = 1) {
        let element = this.mobile.waitForElement(locator, timeout, undefined, 100);
        return !element.isNull();
    }
}

exports.AppiumClient = AppiumClient;
