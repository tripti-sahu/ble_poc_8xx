const { BaseScreen } = loadLibrary("../baseScreen");

class LoginScreen extends BaseScreen {
    constructor(mobile, controller) {
        super(mobile, controller);
        this.loginButton = this.find.byValueKey("loginButtonKey");
    }

    isReady(timeout = this.timeout.UI.longLoadTime) {
        return this.isDisplayed(this.loginButton, timeout);
    }

    tapLoginButton() { this.tapElement(this.loginButton); }
}

exports.LoginScreen = LoginScreen;
