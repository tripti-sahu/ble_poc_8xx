const { BaseScreen } = loadLibrary("../baseScreen");
const { AppiumClient } = loadLibrary("../../appiumSide/appiumClient");

class BleDeviceScreen extends BaseScreen {
    constructor(mobile, controller) {
        super(mobile, controller);
        this.appiumClient = new AppiumClient(mobile);
        this.titleTextKey = this.find.byValueKey("bleDevicesTitle");
        this.connectButtonKey = this._appium.findElementBy("xpath|//android.widget.Button[@content-desc='Connect']");
    }

    isReady(timeout = this.timeout.UI.longLoadTime) {
        return this.isDisplayed(this.titleTextKey, timeout);
    }

    tapConnectButton() { 
        this._appium.findElementBy("xpath|//android.widget.Button[@content-desc='Connect']").click();
        // this._appium.findElementBy("xpath|//android.widget.Button[@content-desc='Connect']").click(); 
    }

    isDeviceIDVisible() {
        // //android.view.View[@content-desc="B010123123 88:6B:0F:66:E9:D5"]
        const locator = this._appium.findElementBy("xpath|//android.view.View[@content-desc='B010123123 88:6B:0F:66:E9:D5']");
        return this.api.waitForElementIsDisplayed(locator);
    }

    allowLocationAccess() {
        let device;
        let currentVersion = this._appium.config.platformVersion.toLowerCase();

        if (this.isIOS()) {
            device = "ios";
        } else if (this.isAndroid()) {
            device = "android";
        }

        Step("", () => {
            if (device === "android") {
                switch (currentVersion.split(/[.]/g)[0]) {
                case "12":
                        this._appium.findElementBy(
                            "id|com.android.permissioncontroller:id/permission_allow_foreground_only_button"
                        ).click();
                        break;
                case "11":
                    this._appium.findElementBy(
                        "id|com.android.permissioncontroller:id/permission_allow_foreground_only_button"
                    ).click();
                    break;
                case "10":
                    WaitInSeconds(3);
                    this._appium.findElementBy(
                        "id|com.android.permissioncontroller:id/permission_allow_always_button"
                    ).click();
                    break;
                default:
                    this._appium.findElementBy(
                        "xpath|//*[@text = 'Allow all the time' or @text = 'Allow' and @class='android.widget.Button']"
                    ).click();
                }
            } else if (device === "ios") {
                Note("Function not implemented for iOS");
            }
        });
    }
}

exports.BleDeviceScreen = BleDeviceScreen;
