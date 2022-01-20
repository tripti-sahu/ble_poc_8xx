const { jsonReader } = loadLibrary("ExternalJsonReader");
const navigation = jsonReader(`${__dirname}\\src\\data\\happyPath.json`);

const { PageFactory } = loadLibrary("./src/screens/pageFactory");
const { DateUtils } = loadLibrary("./src/utils/date_utils");
const { UtilsMethod } = loadLibrary("./src/utils/utilsMethod");
const { IncUtils } = loadLibrary("./src/utils/inc_utils");
const { Find } = loadLibrary("./src/drivers/findBy");
const { AppiumClient } = loadLibrary("./src/appiumSide/appiumClient");
const { HelperNavigation } = loadLibrary("./src/helpers/helperNavigation");
const { RXFlow } = loadLibrary("./src/utils/rxFlow");
const { Dose } = loadLibrary("./src/apiHelper/nordiskDialoqApi");

class Library {
    constructor({
        mobile,
        mobileController,
        gstConfig
    }) {
        this.mobile = mobile;
        this.pageFactory = new PageFactory(mobile, mobileController);
        this.dateUtils = new DateUtils();
        this.utilsMethod = new UtilsMethod(mobile, mobileController, gstConfig);
        this.find = new Find(mobileController);
        this.appiumClient = new AppiumClient(mobile);
        this.incUtils = new IncUtils();
        this.helperNavigation = new HelperNavigation(this.pageFactory, mobile);
        this.navigation = navigation;
        this.rxFlow = new RXFlow(mobile, mobileController, this.pageFactory, this.helperNavigation);
        this.dose = Dose;
    }
}
exports.Library = Library;
