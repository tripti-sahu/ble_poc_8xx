/**
* TC Title: BLE POC
* Description: Navigation to Bolus Information Screen.
* Purpose: The purpose of this test is to verify the navigation to Bolus Information Screen.
*/

const mobileController = loadLibrary("Mobile_ControllerLib", {
    mobileObj: mobile,
    reportDirPath: OutDir._outDir,
    getSpecificController: true,
    specificControllerName: "MobileSystemController"
}).mobileController;

const {Library} = loadLibrary("BLE_8XX_CommonLib");
const bleLib = new Library({
    mobile,
    mobileController
});

const {
    loginScreen,
    bleDeviceScreen,
    bolusInfoScreen,
    expectedScreenData
} = bleLib.pageFactory;
const { dose } = bleLib; 
console.log(`Doses message: ${dose}`);
// Waiting time in seconds
const shortTime = 3;
// const normalTime = 5;
const longTime = 10;

//-------------------------------------------------------------------------------------------
Note("Pre-condition");
//-------------------------------------------------------------------------------------------

Step("Waiting to be application launched on target device...", () => {
    WaitInSeconds(shortTime);
});

Step("Tap on Login Button", () => {
    loginScreen.tapLoginButton();
    WaitInSeconds(shortTime);
});

Step("Allow Location permission", () => {
    bleDeviceScreen.allowLocationAccess();
    WaitInSeconds(longTime);
});

Verify("Verify user is navigated to BLE devices screen", {
    actual: bleDeviceScreen.isReady(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Verify("Verify device is listed on BLE devices Screen", {
    actual: bleDeviceScreen.isDeviceIDVisible(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Step("Tap on Connect", () => {
    bleDeviceScreen.tapConnectButton();
    WaitInSeconds(longTime);
});

Verify("Verify user is navigated to Bolus Info screen", {
    actual: bolusInfoScreen.isReady(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Verify("Verify Bolus info is displayed", {
    actual: bolusInfoScreen.isBolusInfoTextVisible(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Step("Fetch Data from api",()=>
{
   var doze = dose.ActivateBle();
   console.log("BLE Activated",doze);
});

Step("Fetch Data from api",()=>
{
   var data = {
    "Bolus": [
        {
            "id": 1,
            "value": "150",
            "time": "07:30:24 AM"
        }
    ]
} ;
   var doze = dose.ReplaceDoses(data);
   console.log("BLE POST DATA",doze);
});

Verify("Verify Sync Data Button is visible", {
    actual: bolusInfoScreen.isSyncButtonVisible(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Verify("Verify Upload Data Button is visible", {
    actual: bolusInfoScreen.isUploadButtonVisible(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Step("Tap on Upload Data", () => {
    bolusInfoScreen.tapUploadButton();
    WaitInSeconds(shortTime);
});

Verify("Verify Upload Data Banner is visible", {
    actual: bolusInfoScreen.isUploadBannerVisible(),
    expected: expectedScreenData.presentAbsentData.isPresent
});

Step("Tap on OK button of Upload Banner", () => {
    bolusInfoScreen.tapUploadBannerOkButton();
    WaitInSeconds(shortTime);
});

Verify("Verify Upload Data Banner is not visible", {
    actual: bolusInfoScreen.isUploadBannerVisible(),
    expected: expectedScreenData.presentAbsentData.isAbsent
});

