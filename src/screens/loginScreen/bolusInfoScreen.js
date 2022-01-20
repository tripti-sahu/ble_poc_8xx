const { BaseScreen } = loadLibrary("../baseScreen");

class BolusInfoScreen extends BaseScreen {
    constructor(mobile, controller) {
        super(mobile, controller);
        this.titleTextKey = this.find.text("Vaibhav");
        this.bolusInfoKey = this.find.text("Bolus");
        this.syncButtonKey = this.find.byValueKey("sync_button_title");
        this.uploadButtonKey = this.find.byValueKey("upload_button_title");
        this.uploadBannerKey = this.find.text("Data was uploaded successfully");
        this.uploadbannerOkButtonKey = this.find.text("OK");
    }

    isReady(timeout = this.timeout.UI.longLoadTime) {
        return this.isDisplayed(this.titleTextKey, timeout);
    }

    isBolusInfoTextVisible() { return this.isDisplayed(this.bolusInfoKey); }

    isSyncButtonVisible() { return this.isDisplayed(this.syncButtonKey); }

    isUploadButtonVisible() { return this.isDisplayed(this.uploadButtonKey); }

    isUploadBannerVisible() { return this.isDisplayed(this.uploadBannerKey); }

    tapSyncButton() {
        this.tapElement(this.syncButtonKey);
    }

    tapUploadButton() {
        this.tapElement(this.uploadButtonKey);
    }

    tapUploadBannerOkButton() {
        this.tapElement(this.uploadbannerOkButtonKey);
    }
}

exports.BolusInfoScreen = BolusInfoScreen;
