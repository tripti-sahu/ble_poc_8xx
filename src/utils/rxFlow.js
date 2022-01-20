const { BaseScreen } = loadLibrary("./../screens/baseScreen");

/**
 * This a class that implements RXFlow methods
 */

class RXFlow extends BaseScreen {
    constructor(mobile, controller, pageFactory, helperNavigation) {
        super(mobile, controller);
        this.pageFactory = pageFactory;
        this.helperNavigation = helperNavigation;

        // RX 404
        this._offlineInternetAccessKey = this.find.byValueKey("internetAccessKey");
        this._offlineWifiConnectionKey = this.find.byValueKey("wifiConnectionKey");
        this._customDialogPopUpMessageHeading = this.find.text("Insulin Calculator \n\t\t\t is not ready!");
        this._savedPopupConfirmKey = this.find.byValueKey("popConfirmKey");
        this._savedPopupCancelKey = this.find.byValueKey("popCancelKey");
        this._doseIncrementsValue = this.find.byValueKey("DosingincrementValue");
        this._activeInsulinTimeValue = this.find.byValueKey("ActiveinsulintimeValue");
        this._glucoseTargetValue = this.find.byValueKey("GlucoseTargetValue");
        this._sensitivityFactorValue = this.find.byValueKey("Ins.SensitivityFactorValue");
        this._savedCarbValue = this.find.byValueKey("CarbRatioValue");
        this._maxDoseValue = this.find.byValueKey("MaxdoseValue");
        this._mockBleGstButton = this.find.byValueKey("KEY_DEBUG_PAGE_MOCK_BLE_GST");
        this._debugBackButton = this.find.text("Back");
        this._debugDefaultGstPairButton = this.find.byValueKey("KEY_MOCK_DEFAULT_GST_PAIR");
        this._notFoundText1404 = this.find.byValueKey("notFoundText1");
        this._notFoundText2404 = this.find.byValueKey("notFoundText2");
        this._supportNumber404 = this.find.byValueKey("supportNumber");

        // RX d
        this._insulinCalculatorTitleText = this.find.byValueKey("insulinCalculator");
        this._unknownNotAvailableText = this.find.byValueKey("isNotAvailable");
        this._unknownNotMoreInformationText = this.find.byValueKey("tapHereForMoreInformation");
        this._deniedText1 = this.find.byValueKey("deniedText1");
        this._deniedText2 = this.find.byValueKey("deniedText2");
        this._warningText = this.find.byValueKey("warningText");
        this._descriptionText = this.find.byValueKey("descriptionText");
        this._statusText = this.find.byValueKey("statusText");

        // Rx flow accepted popup locator
        this._dialogPopUpTitle = this.find.byValueKey("approvedDialogTitleKey");
        this._dialogPopUpText1 = this.find.byValueKey("approvedDialogTextKey1");
        this._dialogPopUpText2 = this.find.byValueKey("approvedDialogTextKey2");
        this._dialogPopUpText3 = this.find.byValueKey("approvedDialogTextKey3");
        this._dialogPopUpButton1 = this.find.byValueKey("diabetesTextKey");
        this._dialogPopUpButton2 = this.find.byValueKey("iHaveThemTextKey");
        this._acceptedPopupSettingButton = this.find.byValueKey("availableDialogSettingText");
        this._acceptedPopupLaterButton = this.find.byValueKey("availableDialogLaterText");
        this._acceptedPopupText1 = this.find.byValueKey("availableDialogText1");
        this._acceptedPopupText2 = this.find.byValueKey("availableDialogText2");
        this._acceptedPopupText3 = this.find.byValueKey("availableDialogText3");
        this._acceptedAvailableTitle = this.find.byValueKey("availableDialogTitle");
        this._popUpConfirmationText = this.find.byValueKey("popUpConfirmationText");
        this._popUpFinishNowButton = this.find.byValueKey("popFinishNowKey");
        this._popUpLaterButton = this.find.byValueKey("popLaterKey");
        this._readyPopUpTitle = this.find.byValueKey("popUpConfirmationDialogKey");
        this._readyPopUpText = this.find.byValueKey("readyDialogText");
        this._readyPopUpOkButton = this.find.byValueKey("readyOkText");

        this._mealDose = this.find.byValueKey("calculateMealDoseMenuButton"); // 'Calculate a\nMeal dose'
        this._calculateCorrection = this.find.byValueKey("calculateCorrectionMenuButton"); // this.find.text('Calculate a\nCorrection');
        this._logCarbs = this.find.byValueKey("logCarbsMenuButton");
        this._editButton = this.find.text("Edit");

        // Regular expression for Date format
        this.rxPopupDateFormat = /(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/\d{4} [0-1]\d:[0-5]\d (AM|PM)/;
    }

    isReady() {
        return this.isDisplayed(this._insulinCalculatorTitleText);
    }

    /** getText() */
    getCarbRatioValue() {
        return this.getText(this.savedCarbValue);
    }

    getSensitivityFactorValue() {
        return this.getText(this.sensitivityFactorValue);
    }

    getGlucoseTargetValue() {
        return this.getText(this.glucoseTargetValue);
    }

    getActiveInsulinTimeValue() {
        return this.getText(this.activeInsulinTimeValue);
    }

    getDosingIncrementValue() {
        return this.getText(this.doseIncrementsValue);
    }

    getMaxDoseValue() {
        return this.getText(this.maxDoseValue);
    }

    getNotFoundText1() {
        return this.getText(this._notFoundText1404);
    }

    getNotFoundText2() {
        return this.getText(this._notFoundText2404);
    }

    getSupportNo() {
        return this.getText(this._supportNumber404);
    }

    getConfirmationText() {
        return this.getText(this._popUpConfirmationText);
    }

    getRxDialogText1() {
        return this.getText(this._dialogPopUpText1);
    }

    getRxDialogText2() {
        return this.getText(this._dialogPopUpText2);
    }

    getRxDialogText3() {
        return this.getText(this._dialogPopUpText3);
    }

    getRxAcceptedPopupText1() {
        return this.getText(this._acceptedPopupText1);
    }

    getRxAcceptedPopupText2() {
        return this.getText(this._acceptedPopupText2);
    }

    getRxAcceptedPopupText3() {
        return this.getText(this._acceptedPopupText3);
    }

    getDateStatus() {
        return this.getText(this._statusText);
    }

    getRxDeniedText1() {
        return this.getText(this._deniedText1);
    }

    getRxDeniedText2() {
        return this.getText(this._deniedText2);
    }

    getRxReadyPopUpText() {
        return this.getText(this._readyPopUpText);
    }

    getRxUnknownTitleText() {
        return this.getText(this._insulinCalculatorTitleText);
    }

    getRxUnknownNotAvailableText() {
        return this.getText(this._unknownNotAvailableText);
    }

    getRxUnknownMoreInformationText() {
        return this.getText(this._unknownNotMoreInformationText);
    }

    getRxDescriptionText() {
        return this.getText(this._descriptionText);
    }

    getRxWarningText() {
        return this.getText(this._warningText);
    }

    getOfflineInternetAccessKeyText() {
        return this.getText(this._offlineInternetAccessKey);
    }

    getOfflineWifiConnectionKeyText() {
        return this.getText(this._offlineWifiConnectionKey);
    }

    /** isDisplayed() */
    isApiDateStatusDisplayed() {
        return this.isDisplayed(this._statusText);
    }

    isRxNotReadyPopupIsDisplayed() {
        return this.isDisplayed(this._customDialogPopUpMessageHeading);
    }

    isRxPopupIsDisplayed() {
        return this.isDisplayed(this._dialogPopUpTitle);
    }

    isRxAvailableTitleDisplayed() {
        return this.isDisplayed(this._acceptedAvailableTitle);
    }

    isPopUpSettingButtonDisplayed() {
        return this.isDisplayed(this._acceptedPopupSettingButton);
    }

    isPopUpLaterButtonDisplayed() {
        return this.isDisplayed(this._acceptedPopupLaterButton);
    }

    isRxInsulinTitleDisplayed() {
        return this.isDisplayed(this._insulinCalculatorTitleText);
    }

    isIHaveThemButtonDisplayed() {
        return this.isDisplayed(this._dialogPopUpButton2);
    }

    isDiabetesButtonDisplayed() {
        return this.isDisplayed(this._dialogPopUpButton1);
    }

    isReadyPopUpDisplayed() {
        return this.isDisplayed(this._readyPopUpTitle);
    }

    isFinishNowButtonDisplayed() {
        return this.isDisplayed(this._popUpFinishNowButton);
    }

    isLaterButtonDisplayed() {
        return this.isDisplayed(this._popUpLaterButton);
    }

    isPopupConfirmButtonDisplayed() {
        return this.isDisplayed(this._savedPopupConfirmKey);
    }

    isPopupCancelButtonDisplayed() {
        return this.isDisplayed(this._savedPopupCancelKey);
    }

    isEditButtonDisplayed() {
        return this.isDisplayed(this._editButton);
    }

    /** tapElement */
    tapSavedConfirmButton() {
        this.tapElement(this._savedPopupConfirmKey);
    }

    tapDebugGstButton() {
        this.tapElement(this._mockBleGstButton);
    }

    tapEnableBackButton() {
        this.tapElement(this._debugBackButton);
    }

    tapEnableButton() {
        this.tapElement(this._debugDefaultGstPairButton);
    }

    tapOnIHaveThemButton() {
        this.tapElement(this._dialogPopUpButton2);
    }

    tapOnDiabetesButton() {
        this.tapElement(this._dialogPopUpButton1);
    }

    tapOnPopupSettingButton() {
        this.tapElement(this._acceptedPopupSettingButton);
    }

    tapOnPopupLaterButton() {
        this.tapElement(this._acceptedPopupLaterButton);
    }

    tapOnReadyPopUpOkButton() {
        this.tapElement(this._readyPopUpOkButton);
    }

    tapFinishNowButton() {
        this.tapElement(this._popUpFinishNowButton);
    }

    tapLaterButton() {
        this.tapElement(this._popUpLaterButton);
    }

    tapUnknownInsulinCalculatorButton() {
        this.tapElement(this._insulinCalculatorTitleText);
    }

    tapInsulinNotAvalableText() {
        this.tapElement(this._unknownNotAvailableText);
    }

    /** checkWidgetProperty() */
    isTextColorIsBlue() {
        return this.checkWidgetProperty(this._unknownNotMoreInformationText, "Color(0xff00c4ff)", undefined, 1000);
    }

    isCalculateCorrectionTileIsBrighter() {
        return this.checkWidgetProperty(this._calculateCorrection, "Color(0xff646464)", undefined, 1000);
    }

    isCalculateMealTileIsBrighter() {
        return this.checkWidgetProperty(this._mealDose, "Color(0xff646464)", undefined, 1000);
    }

    newGSTConnect(gstClient, navLib) {
        const {
            homeScreen, transmitterPairedScreen, sensorTransmitterScreen, expectedScreenData
        } = this.pageFactory;

        // TODO Steps for unpair the GST
        Step("Unpair GST", () => {
            // gstClient.stopCommunication();
            // gstClient.closeSensor();
            // gstServerClose();
            // mobile.qm_deleteBluetoothDevice();
            // WaitInSeconds(10);
            // mobile.activateApp();
            // WaitInSeconds(10);
        });

        if (homeScreen.isReady()) {
            // TODO Navigation Library
            Step("Navigated to the Settings screen", () => {
                navLib.getNavigationInfo().navigate("homeScreen", "sensorTransmitterScreen");
            });
        }

        Step("Navigated to the Pair Transmitter Screen", () => {
            sensorTransmitterScreen.openPairTransmitter();
        });

        // Pair the transmitter
        this.helperNavigation.goTo({
            from: "pairTransmitterScreen",
            to: "transmitterPairedScreen",
            gstController: gstClient
        });

        let result = transmitterPairedScreen.isReady();

        Verify("Verify GST is successfully paired", {
            actual: result,
            expected: expectedScreenData.presentAbsentData.isPresent
        });

        WaitInSeconds(this.timeout.UI.shortLoadTime);
        transmitterPairedScreen.tapNextButton();
        WaitInSeconds(this.timeout.UI.shortLoadTime);
        return result;
    }
}

exports.RXFlow = RXFlow;
