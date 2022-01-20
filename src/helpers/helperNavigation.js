const { jsonReader } = loadLibrary("ExternalJsonReader");
const happyPath = jsonReader(`${__dirname}\\..\\data\\happyPath.json`);

/**
 * Array of happyPath screens, first element classPage name, second method that navigate on next screen
 */

const happyPathGuardianTemplateArr = [
    [happyPath.careLinkLoginScreen, "tapLoginButton"],
    [happyPath.careLinkConsentsWebviewPage, "login"],
    [happyPath.careLinkSignedInSuccessfulScreen, "tapNextButton"],
    [happyPath.automaticLogout, "tapNextButton"],
    [happyPath.eulaScreen, "tapAgreeButton"],
    [happyPath.popup.eulaPopupScreen, "tapAgreeButton"],
    [happyPath.getStartedScreen, "tapNextButton"],
    [happyPath.phoneSettingsScreen, "tapNextButton"],
    [happyPath.doNotDisturbScreen, "tapNextButton"],
    [happyPath.doNotDisturbScreen, "setDndPermission"],
    [happyPath.digitalHealthScreen, "tapNextButton"],
    [happyPath.helpUsImproveScreen, "tapShareAnalyticsButton"],
    [happyPath.analyticsAgreementScreen, "tapAgreeButton"],
    [happyPath.chargeYourTransmitterScreen, "tapNextButton"],
    [happyPath.bluetoothAndInternetScreen, "tapNextButton"],
    [happyPath.popup.locationPermissionPopupScreen, "tapNextButton"],
    [happyPath.popup.locationPermissionPopupScreen, "allowLocationAccess"],
    [happyPath.welcomeScreen, "tapNextButton"],
    [happyPath.insertionDeviceScreen, "tapNextButton"],
    [happyPath.sensorScreen, "tapNextButton"],
    [happyPath.transmitterScreen, "tapNextButton"],
    [happyPath.chargerScreen, "tapNextButton"],
    [happyPath.tapeAndSkinScreen, "tapNextButton"],
    [happyPath.appSettingsScreen, "tapNextButton"],
    [happyPath.alertVolumeScreen, "tapNextButton"],
    [happyPath.insulinCalculatorScreen, "tapNextButton"],
    [happyPath.insulinCalcSettingsScreen, "tapNextButton"],
    [happyPath.calculateMealDoseScreen, "tapNextButton"],
    [happyPath.calculateCorrectionDoseScreen, "tapNextButton"],
    [happyPath.transmitterAndSensorScreen, "tapNextButton"],
    [happyPath.pairTransmitterScreen, "tapNextButton"],
    [happyPath.pairTransmitterSearchScreen, "tapSearchButton"],
    [happyPath.transmitterFoundScreen, "tapTransmitterNumber"],
    [happyPath.transmitterPairedScreen, "tapNextButton"],
    [happyPath.sensorSetupScreen, "tapPopupOK"],
    [happyPath.sensorInsertedScreen, "tapAllDoneButton"],
    [happyPath.homeScreen, "homeScreen"]
];

const happyPathSimpleraTemplateArr = [
    [happyPath.simpleraStartupMethods, "isReadyWelcomeScreen"],
    [happyPath.simpleraStartupMethods, "tapGetStartedButton"],

    [happyPath.bluetoothAndInternetScreen, "isReady"],
    [happyPath.bluetoothAndInternetScreen, "tapNextButton"],
    [happyPath.popup.locationPermissionPopupScreen, "tapNextButton"],
    [happyPath.popup.locationPermissionPopupScreen, "allowLocationAccess"],

    [happyPath.careLinkLoginScreen, "isReady"],
    [happyPath.careLinkLoginScreen, "tapLoginButton"],

    [happyPath.careLinkConsentsWebviewPage, "isReady"],
    [happyPath.careLinkConsentsWebviewPage, "login"],

    [happyPath.careLinkSignedInSuccessfulScreen, "isReady"],
    [happyPath.careLinkSignedInSuccessfulScreen, "tapNextButton"],

    [happyPath.automaticLogout, "isReady"],
    [happyPath.automaticLogout, "tapNextButton"],

    [happyPath.eulaScreen, "isReady"],
    [happyPath.eulaScreen, "tapAgreeButton"],

    [happyPath.popup.eulaPopupScreen, "isReady"],
    [happyPath.popup.eulaPopupScreen, "tapAgreeButton"],

    [happyPath.phoneSettingsScreen, "isReady"],
    [happyPath.phoneSettingsScreen, "tapNextButton"],

    // TODO Screen available on UIDD but not on build provided.
    // [happyPath.simpleraStartupMethods, "isReadyNotificationAndCriticalAlertsScreen"],
    // [happyPath.simpleraStartupMethods, "tapNextButton"],

    [happyPath.doNotDisturbScreen, "isReady"],
    [happyPath.doNotDisturbScreen, "tapNextButton"],
    [happyPath.doNotDisturbScreen, "setDndPermission"],

    [happyPath.simpleraStartupMethods, "tapWarningNextPopup"],
    [happyPath.simpleraStartupMethods, "tapAllowButton"],

    [happyPath.digitalHealthScreen, "isReady"],
    [happyPath.digitalHealthScreen, "tapNextButton"],

    // TODO Screen available on UIDD but not on build provided.
    // [happyPath.simpleraStartupMethods, "isReadyHealthAppScreen"],
    // [happyPath.simpleraStartupMethods, "tapSkipButton"],

    [happyPath.simpleraStartupMethods, "isReadyHelpUsImproveScreen"],
    [happyPath.simpleraStartupMethods, "tapShareDataButton"],

    [happyPath.simpleraStartupMethods, "isReadyAnalyticsAgreementScreen"],
    [happyPath.simpleraStartupMethods, "tapAgreeButton"],

    [happyPath.appSettingsScreen, "isReady"],
    [happyPath.appSettingsScreen, "tapNextButton"],

    [happyPath.alertVolumeScreen, "isReady"],
    [happyPath.alertVolumeScreen, "tapNextButton"],

    // TODO Screen available on UIDD but not on build provided.
    /*
        [happyPath.simpleraStartupMethods, "isReadyInsulinCalculatorDisabledScreen"],
        [happyPath.simpleraStartupMethods, "tapNextButton"],

        [happyPath.insulinCalculatorScreen, "isReady"],
        [happyPath.insulinCalculatorScreen, "tapNextButton"],

        [happyPath.insulinCalcSettingsScreen, "isReady"],
        [happyPath.insulinCalcSettingsScreen, "tapNextButton"],

        [happyPath.calculateMealDoseScreen, "isReady"],
        [happyPath.calculateMealDoseScreen, "tapNextButton"],

        [happyPath.calculateCorrectionDoseScreen, "isReady"],
        [happyPath.calculateCorrectionDoseScreen, "tapNextButton"],
    */

    [happyPath.simpleraStartupMethods, "isReadyInsertAndPairScreen"],
    [happyPath.simpleraStartupMethods, "tapNextButton"],

    [happyPath.simpleraStartupMethods, "isReadySelectDeviceScreen"],

    [happyPath.simpleraStartupMethods, "tapSimpleraElement"],

    [happyPath.simpleraStartupMethods, "passSensorInfo"],

    [happyPath.simpleraStartupMethods, "isReadyBeforeInsertingSensorScreen"],
    [happyPath.simpleraStartupMethods, "tapNextButton"],

    [happyPath.simpleraStartupMethods, "isReadyPleaseKeepInserterScreen"],
    [happyPath.simpleraStartupMethods, "tapNextButton"],

    [happyPath.simpleraStartupMethods, "isReadyTrainingVideoScreen"],
    [happyPath.simpleraStartupMethods, "tapIInsertedItButton"],

    [happyPath.simpleraStartupMethods, "isReadySelectSensorScreen"],
    [happyPath.simpleraStartupMethods, "tapSensorNumberButton"],

    [happyPath.simpleraStartupMethods, "isReadyEnterCodeScreen"],
    [happyPath.simpleraStartupMethods, "enterCode"],
    [happyPath.simpleraStartupMethods, "tapConfirmButton"],

    [happyPath.simpleraStartupMethods, "isReadyLastReminderScreen"],
    [happyPath.simpleraStartupMethods, "tapDoneButton"],

    [happyPath.homeScreen, "homeScreen"]
];

/**
 * class HelperNavigation allows to navigate to specific page according to flow described in UIDD document
 * @memberof module:Helpers API
 */
class HelperNavigation {
    constructor(pageFactory, mobile) {
        this.pageFactory = pageFactory;
        this.mobile = mobile;
    }

    /**
    * Method goes through the happyPathTemplateArr array from the given start and call class methods defined in the array
    * until find stop element. Not called the stop class method.
    * @param {string} from for start screen
    * @param {string} to for finish screen
    * @param {projectName} to for project name(janus|simplera) default to simplera
    * @param {string} gstController  for gst instance
    */
    goTo({
        from, to, projectName, gstController
    }) {
        let iterPage, iterMethod, gstAvailable, waitResult;
        if (from === to) {
            throw new Error("You try to navigate on the same page");
        }

        if (projectName === "janus") {
            /**
             * Check if start page is present in happyPathGuardianTemplateArr(correct name)
             */
            const resFindTo = happyPathGuardianTemplateArr.find((element) => element[0] === to);
            if (resFindTo === undefined) {
                throw new Error(`Given ${to} is not present on path. Check name or array with classes.`);
            }

            /**
            * Check if end page is present in happyPathGuardianTemplateArr(correct name)
            */
            const startIndex = happyPathGuardianTemplateArr.findIndex((element) => element[0] === from);
            if (startIndex === -1) {
                throw new Error(`Given ${from} is not present on path. Check name or array with classes.`);
            }
            for (let i = startIndex; i < happyPathGuardianTemplateArr.length; i++) {
                iterPage = happyPathGuardianTemplateArr[i][0]; // page class from happyPathGuardianTemplateArr
                iterMethod = happyPathGuardianTemplateArr[i][1]; // page class method happyPathGuardianTemplateArr

                if (iterPage === happyPath.bluetoothAndInternetScreen) {
                    this.mobile.qm_setBluetooth("on");
                    this.mobile.qm_setLocation("on");
                }

                /**
                 * Checking if gst need to be started manually or by script
                 */
                if (iterPage === happyPath.pairTransmitterSearchScreen) {
                    if (!gstController) {
                        this.mobile.flutter.checkByManually("Transmitter from debug menu started?");
                        gstAvailable = false;
                    } else {
                        gstController.StartUpGST();
                    }
                }

                /**
                 * Waiting for screen/popup is ready
                 */
                if (iterPage.includes("popup")) { // split if popup screen
                    waitResult = this.pageFactory[iterPage.split(".")[0]][iterPage.split(".")[1]].isReady();
                } else {
                    waitResult = this.pageFactory[iterPage].isReady();
                }

                if (gstAvailable === false) {
                    if (iterPage === happyPath.transmitterFoundScreen) {
                        this.pageFactory[iterPage].tapTransmitterNumber(gstAvailable);
                        // eslint-disable-next-line no-continue
                        continue;
                    }
                    if (iterPage === happyPath.sensorSetupScreen) {
                        iterMethod = "tapSkipSensorButton";
                    }
                    if (iterPage === happyPath.sensorInsertedScreen) {
                        iterMethod = "tapAllDoneButton";
                    }
                }

                if (iterMethod === "setDndPermission") {
                    this.pageFactory[iterPage].setDndPermission("Guardian 4+");
                    // eslint-disable-next-line no-continue
                    continue;
                }
                /**
                 * Observe that iterPage is displayed.
                 */
                Observe(`Observe that ${iterPage} is displayed.`, {
                    actual: waitResult,
                    expected: true
                });

                /**
                 * Break loop if navigated to target page
                 */
                if (to === iterPage) break;

                Step(
                    `Navigate from ${iterPage} with method ${iterMethod} to ${happyPathGuardianTemplateArr[i + 1][0]}`,
                    () => {
                        if (iterPage.includes("popup")) {
                            this.pageFactory.popup[iterPage.split(".")[1]][iterMethod]();
                        } else {
                            this.pageFactory[iterPage][iterMethod]();
                        }
                    }
                );
            }
        } else {
            /**
             * Check if start page is present in happyPathSimpleraTemplateArr(correct name)
             */
            const resFindTo = happyPathSimpleraTemplateArr.find((element) => element[0] === to);
            if (resFindTo === undefined) {
                throw new Error(`Given ${to} is not present on path. Check name or array with classes.`);
            }

            /**
             * Check if end page is present in happyPathSimpleraTemplateArr(correct name)
             */
            const startIndex = happyPathSimpleraTemplateArr.findIndex((element) => element[0] === from);
            if (startIndex === -1) {
                throw new Error(`Given ${from} is not present on path. Check name or array with classes.`);
            }

            for (let i = startIndex; i < happyPathSimpleraTemplateArr.length; i++) {
                iterPage = happyPathSimpleraTemplateArr[i][0]; // page class from happyPathSimpleraTemplateArr
                iterMethod = happyPathSimpleraTemplateArr[i][1]; // page class method happyPathSimpleraTemplateArr

                if (iterMethod.includes("isReady")) {
                    this.pageFactory[iterPage][iterMethod]();
                    // eslint-disable-next-line no-continue
                    continue;
                }

                if (iterPage === happyPath.bluetoothAndInternetScreen) {
                    this.mobile.qm_setBluetooth("on");
                    this.mobile.qm_setLocation("on");
                }

                /**
                 * Break loop if navigated to target page
                 */
                if (to === iterPage) break;

                if (iterMethod === "setDndPermission") {
                    this.pageFactory[iterPage].setDndPermission("Simplera");
                    // eslint-disable-next-line no-continue
                    continue;
                }

                if (iterMethod === "tapSensorNumberButton") {
                    this.pageFactory[iterPage].tapSensorNumberButton("true");
                    // eslint-disable-next-line no-continue
                    continue;
                }

                Step(
                    `Navigate from ${iterPage} with method ${iterMethod} to ${happyPathSimpleraTemplateArr[i + 1][0]}`,
                    () => {
                        if (iterMethod === "isReadyWelcomeScreen") {
                            if (this.pageFactory[happyPath.simpleraStartupMethods].isNotUsingSimpleraPopupVisible) {
                                this.pageFactory[happyPath.simpleraStartupMethods].tapCloseButton();
                            }
                        }
                        if (iterPage.includes("popup")) {
                            this.pageFactory.popup[iterPage.split(".")[1]][iterMethod]();
                        } else {
                            this.pageFactory[iterPage][iterMethod]();
                        }
                    }
                );
            }
        }
    }
}

exports.HelperNavigation = HelperNavigation;
