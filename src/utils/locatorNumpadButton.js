/**
 * class describes UI elements and actions for the LocatorNumpadButton.
 * @memberof module:Utils Pages
 */

class LocatorNumpadButton {
    getKeyFromNumpadButton(number) {
        let key;
        switch (number) {
        case "1":
            key = "NUMPAD_BUTTON_ONE";
            break;
        case "2":
            key = "NUMPAD_BUTTON_TWO";
            break;
        case "3":
            key = "NUMPAD_BUTTON_THREE";
            break;
        case "4":
            key = "NUMPAD_BUTTON_FOUR";
            break;
        case "5":
            key = "NUMPAD_BUTTON_FIVE";
            break;
        case "6":
            key = "NUMPAD_BUTTON_SIX";
            break;
        case "7":
            key = "NUMPAD_BUTTON_SEVEN";
            break;
        case "8":
            key = "NUMPAD_BUTTON_EIGHT";
            break;
        case "9":
            key = "NUMPAD_BUTTON_NINE";
            break;
        case "0":
            key = "NUMPAD_BUTTON_ZERO";
            break;
        case ".":
            key = "NUMPAD_BUTTON_POINT";
            break;
        case "x":
            key = "NUMERIC_PAD_DELETE_CONTROL";
            break;
        default:
            return null;
        }
        return key;
    }
}

exports.LocatorNumpadButton = LocatorNumpadButton;
