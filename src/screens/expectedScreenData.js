/*
* Description: this class have screen expected data
* These data can be accessed on test script as
    ```ExpectedScreenData.presentAbsentData.isPresent```
* Above line of code will return true
*/

class ExpectedScreenData {
    get presentAbsentData() {
        return {
            isPresent: true,
            isAbsent: false
        };
    }

    get noteScreenData() {
        return {
            is150_150: "150/150",
            is0_150: "0/150",
            is5_150: "5/150",
            is94_150: "94/150",
            is1_150: "1/150",
            isNotes: "Notes",
            isNote1: "note1"
        };
    }

    get longActingScreenData() {
        return {
            is150_150: "150/150",
            is0_150: "0/150",
            is5_150: "5/150",
            is94_150: "94/150",
            is1_150: "1/150",
            isNotes: "Notes",
            isNote1: "note1"
        };
    }

    get bloodGlucoseScreenData() {
        return {
            is600: "600",
            text50: "50",
            text71: "71",
            textMealBloodlogged: "Meal & blood glucose\n logged",
            bgTitle: "Blood Glucose",
            text250: "250",
            text19: "19",
            text20: "20",
            text599: "599",
            text60: "60",
            text456: "456",
            unit: "--- ",
            from20to600: "From 20 to 600 mg/dL"
        };
    }

    get exerciseDurationScreenData() {
        return {
            text45: "45",
            text1: "1",
            text2: "2",
            text7: "7",
            text23: "23",
            text0: "0",
            text24: "24",
            text30: "30",
            textnow: "now"

        };
    }

    get foodLibraryScreenData() {
        return {
            textBanana: "Bananas"
        };
    }

    get logInsulinDoseScreenData() {
        return {
            isValue0: "0.",
            isValue44point5: "44.5",
            isValue0point1: "0.1",
            isValueEmpty: "-.- ",
            isValue1pount1: "1.1",
            isValue40: "40"

        };
    }

    get carbAmountScreenData() {
        return {
            from1to300: "From 1 to 300 grams",
            carbamount: "Carb amount",
            unit: "-- ",
            text1: "1",
            text16: "16",
            text30: "30",
            text50: "50",
            text76: "76",
            text148: "148",
            text299: "299",
            text300: "300",
            textDidYouDose2hr: "Did you dose in the last\n[ 02 hours 00 min ] hours?",
            textDidYouDose3hr: "Did you dose in the last\n[ 03 hours 00 min ] hours?",
            textDidYouDose3hr15min: "Did you dose in the last\n[ 03 hours 15 min ] hours?",
            textDidYouDose5hr: "Did you dose in the last\n[ 05 hours 00 min ] hours?",
            textDidYouDose5hr30min: "Did you dose in the last\n[ 05 hours 30 min ] hours?",
            textMealBloodInsulinlogged: "Meal, blood glucose\n & insulin logged"
        };
    }

    get insulinCalculatorSettingsScreenData() {
        return {
            text1: "-- ",
            text2: "--- to --- ",
            text4: "1.0"
        };
    }
}

exports.ExpectedScreenData = ExpectedScreenData;
