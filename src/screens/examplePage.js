const { BaseScreen } = loadLibrary("./baseScreen");

class ScreenName extends BaseScreen {
    constructor(mobile, controller) {
        super(mobile, controller);
        // locators section
        this._text = this.find.byValueKey("TITLE_TEXT");
        this._button = this.find.byValueKey("NEXT_BUTTON");
    }

    isReady() {
        return this.isDisplayed(this._text);
    }

    tapNextButton() {
        this.tapElement(this._button);
    }

    get expectedScreenData() {
        return {
            text: "Some text",
            textButton: "Next",
            isPresentText: true,
            isPresentButton: true
        };
    }

    get actualScreenData() {
        return {
            isPresentText: () => this.isDisplayed(this._text),
            isPresentNextButton: () => this.isDisplayed(this._button),
            getText: () => this.getText(this._text),
            getTextButton: () => this.getText(this._button)
        };
    }
}

exports.ScreenName = ScreenName;
