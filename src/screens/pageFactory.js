// Logging
const { DatePicker } = loadLibrary("../utils/datePicker");
const { LoginScreen } = loadLibrary("../screens/loginScreen/loginScreen");
const { BleDeviceScreen } = loadLibrary("../screens/loginScreen/bleDeviceScreen");
const { BolusInfoScreen } = loadLibrary ("../screens/loginScreen/bolusInfoScreen");
const { ExpectedScreenData } = loadLibrary ("../screens/expectedScreenData");
// const { Dose } = loadLibrary("../apiHelper/nordiskDialoqApi");
// In PageFactory constructor add new page instance, for use pageFactory.somePage.someMethod() in Test Script
class PageFactory {
    constructor(mobile, controller) {        
        // Logging
        this.datePicker = new DatePicker(mobile, controller);
        this.loginScreen = new LoginScreen(mobile, controller);
        this.bleDeviceScreen = new BleDeviceScreen(mobile, controller);
        this.bolusInfoScreen = new BolusInfoScreen(mobile, controller);
        this.expectedScreenData = new ExpectedScreenData(mobile, controller);
        // this.dose = Dose;
        
    }
}

exports.PageFactory = PageFactory;
