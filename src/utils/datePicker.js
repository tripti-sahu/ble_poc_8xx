const { BaseScreen } = loadLibrary("../screens/baseScreen");

/**
 * This a class that implements date picker/time of event's methods
 */

class DatePicker extends BaseScreen {
    constructor(mobile, controller) {
        super(mobile, controller);
        this.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.dateWheel = this.find.byValueKey("DATE_WHEEL");
        this.hoursWheel = this.find.byValueKey("HOURS_WHEEL");
        this.minutesWheel = this.find.byValueKey("MINUTES_WHEEL");
        this.modeWheel = this.find.byValueKey("MODE_WHEEL");
        this.mobile = mobile;
    }

    getFutureDateTime(dateTimeComponent, timeAfterValue = 0) {
        if (dateTimeComponent !== "") {
            switch (dateTimeComponent) {
            case "dayAfter":
            {
                const date = new Date();
                date.setDate(date.getDate() + timeAfterValue);
                let day = date.getDay();
                let month = date.getMonth();
                day = `${this.days[day]} ${this.months[month]} ${date.getDate()}`;
                this._setFutureTime(day, this.dateWheel);
                break;
            }
            case "minAfter":
            {
                const newDt = new Date();
                const subM = new Date(newDt.setMinutes(new Date().getMinutes() + timeAfterValue));
                const newMin = ((subM.getMinutes()).toString()).padStart(2, "0");
                this._setFutureTime(newMin, this.minutesWheel);
                break;
            }
            case "hrAfter":
            {
                const newDate = new Date();
                const subHH = new Date(newDate.setHours(new Date().getHours() + timeAfterValue));
                const newHr = ((subHH.getHours()).toString()).padStart(2, "0");
                this._setFutureTime(newHr, this.hoursWheel);
                break;
            }
            default:
            {
                break;
            }
            }
        }
    }

    // Warning
    _setFutureTime(dateTime, finderObject) {
        if (this.isVisible(finderObject)) {
            let dItem = dateTime;
            if (this.isAbsent(this.dItem)) {
                Note("future date is not displayed");
            } else {
                this.scrollUntilVisible(finderObject, dItem);
            }
        }
    }

    setDayAfterPickerWheel(dayAfter = 0) {
        const date = new Date();
        date.setDate(date.getDate() + dayAfter);
        let day = date.getDay();
        let month = date.getMonth();
        let dItem = `${this.days[day]} ${this.months[month]} ${date.getDate()}`;
        if (this.isAbsent(this.dItem)) {
            Note("Future date not displayed and User Should not able to choose Day from future");
        } else if (this.isDisplayed(dItem)) {
            this.scrollUntilVisible(this.dateWheel, dItem);
        }
    }

    // Gives myBoard date in hh:mm AM/PM MM/DD format
    getMyBoardDateAndTime(day, hr, min) {
        // subtract day
        const date = new Date();
        date.setDate(date.getDate() - day);
        const newDD = ((date.getDate()).toString());
        const newMM = ((date.getMonth() + 1).toString()).padStart(2, "0");
        const newD = `${newMM}/${newDD}`;

        // subtract hour
        const newDate = new Date();
        const subHH = new Date(newDate.setHours(new Date().getHours() - hr));
        const newHr = ((subHH.getHours()).toString()).padStart(2, "0");
        const ampm = (newHr >= 12) ? "PM" : "AM";
        const hours = (newHr >= 12) ? ((newHr - 12).toString()).padStart(2, "0") : newHr.toString().padStart(2, "0");

        // subtract min
        const newDt = new Date();
        const subM = new Date(newDt.setMinutes(new Date().getMinutes() - min));
        const newMin = ((subM.getMinutes()).toString()).padStart(2, "0");
        const newTime = `${hours}:${newMin}`;
        let newT = `${newTime} ${ampm} ${newD}`;
        return `${newT}`;
    }

    /**
     * @summary POM Enhancement SM-418
     * @description Few existing methods of datePicker are replaced by new date time methods
     * @replacement 1. setAgoDayTime() is the replacement of
     *              a. set12HAgo()
     *              b. setDayAgoPickerWheel()
     *              c. setTimeAgoPickerWheel()
     *             2. setDayTime() is the replacement of
     *              a. setTimePickerWheel()
    */

    /**
     * @summary This method will scroll dateWheel, hourWheel, minuteWheel with respect to given parameters
     * @param {number} dAgo [As 1|2|3|4|5|......]
     * @param {number} hAgo [As 1|2|3|4|5|......]
     * @param {number} mAgo [As 1|2|3|4|5|......]
     * @implements datePicker.setAgoDayTime({dAgo: 1, hAgo: 15}); will scroll
     * date picker for 1 day and 15 hours ago time
     * @replacement of set12HAgo(), setDayAgoPickerWheel(), setTimeAgoPickerWheel()
     * @returns Scrolled date time in the formate of [ddd MMM dd, HH:MM AM|PM]
     */
    setAgoDayTime({
        dAgo = 0,
        hAgo = 0,
        mAgo = 0
    }) {
        const totalMinAgo = (dAgo * 24 * 60) + (hAgo * 60) + mAgo;

        let timeNow = new Date();
        let dateNow = timeNow.getDate();
        // let dayNow = timeNow.getDay();
        let hrNow = timeNow.getHours();
        let minNow = timeNow.getMinutes();
        // let monthNow = timeNow.getMonth();
        let ttNow = hrNow >= 12 ? "PM" : "AM";
        // console.log(`timeNow ${timeNow}| monthNow ${monthNow} | dateNow ${dateNow} |
        //  dayNow ${dayNow} | hrNow ${hrNow} | minNow ${minNow} | ttNow ${ttNow}`);

        let timeAgo = new Date(timeNow.setMinutes(new Date().getMinutes() - totalMinAgo));
        let dateAgo = timeAgo.getDate();
        let dayAgo = timeAgo.getDay();
        let hrAgo = timeAgo.getHours();
        let minAgo = timeAgo.getMinutes();
        let monthAgo = timeAgo.getMonth();
        let ttAgo = hrAgo >= 12 ? "PM" : "AM";
        // console.log(`timeAgo ${timeAgo} | monthAgo ${monthAgo} | dateAgo ${dateAgo} |
        //  dayAgo ${dayAgo} | hrAgo ${hrAgo} | minAgo ${minAgo} | ttAgo ${ttAgo}`);

        let setDay = "00";
        let setHr = hrAgo.toString().padStart(2, "0");
        let setMin = minAgo.toString().padStart(2, "0");
        let setMode = ttAgo;

        // Scroll for dateWheel
        if (dateNow === dateAgo) {
            setDay = "Today";
        } else if (dateNow === (dateAgo + 1)) {
            setDay = "Yesterday";
            if (this.isDisplayed(this.dateWheel)) {
                this._scrollDateWheel(setDay);
            }
        } else {
            setDay = `${this.days[(dayAgo)]} ${this.months[monthAgo]} ${dateAgo.toString().padStart(2, "0")}`;
            this._scrollDateWheel(setDay);
        }

        // Scroll for hourWheel
        if (hrNow !== hrAgo) {
            if (this.isDisplayed(this.hoursWheel)) {
                this._scrollHourWheel(hrNow, hrAgo);
            }
        }

        // Scroll for minuteWheel
        if (minNow !== minAgo) {
            if (this.isDisplayed(this.minutesWheel)) {
                this._scrollMinuteWheel(minNow, minAgo);
            }
        }

        // Scroll for modeWheel
        if (ttNow !== ttAgo) {
            if (this.isDisplayed(this.modeWheel)) {
                this._scrollModeWheel(ttAgo);
            }
        }
        return `${setDay}, ${setHr}:${setMin} ${setMode}`;
    }

    /**
     * @summary This method will set exact date and time with respect to given parameters
     * @param {string} sDay [As "Yesterday"|"Mon Nov 8"|"Wed Nov 10"|......]
     * @param {string} sHour [As "01"|"02"|"03"|......|"12"]
     * @param {string} sMinute [As "00"|"01"|"02"|"03"|......|"59"]
     * @param {string} sMode [As "AM"|"PM"]
     * @implements datePcker.setDayTime({sDay: "Mon Nov 8", sHour: "10", sMinute: "01", sMode: "AM"});
     * @replacement setTimePickerWheel()
     * @returns NA
     */
    setDayTime({
        sDay = 0,
        sHour = 0,
        sMinute = 0,
        sMode = 0
    }) {
        let totalSetMin = ((parseInt(sHour, 10)) * 60) + parseInt(sMinute, 10);
        let timeNow = new Date();
        let hhNow = timeNow.getHours();
        if (hhNow > 12 && hhNow <= 23) hhNow -= 12;
        else if (hhNow === 0) hhNow = 12;
        let mmNow = timeNow.getMinutes();
        let currentInMin = (hhNow * 60) + mmNow;

        // Set Day
        if (totalSetMin > currentInMin && sDay === 0) {
            if (this.isDisplayed(this.dateWheel)) {
                this._scrollDateWheel("Yesterday");
            }
        }
        if (sDay !== 0) {
            if (this.isDisplayed(this.dateWheel)) {
                this._scrollDateWheel(sDay);
            }
        }

        if (sHour !== 0) {
            if (this.isDisplayed(this.hoursWheel)) {
                this._scrollHourWheel(hhNow, sHour);
            }
        }

        if (sMinute !== 0) {
            if (this.isDisplayed(this.minutesWheel)) {
                this._scrollMinuteWheel(mmNow, sMinute);
            }
        }

        if (sMode !== 0) {
            if (this.isDisplayed(this.modeWheel)) {
                this._scrollModeWheel(sMode);
            }
        }
    }

    /**
     * Private methods
     */
    _scrollDateWheel(setDay) {
        let scrollDItem = "Yesterday";
        let i = 2;
        let status = true;
        do {
            let dItem = this.find.byDescendant(
                this.dateWheel,
                this.find.text(scrollDItem.toString()),
                undefined,
                true
            );
            this.scrollUntilVisible(this.dateWheel, dItem, undefined, undefined, 100);
            if (setDay === scrollDItem) break;
            let today = new Date();
            today = new Date(today.setDate(new Date().getDate() - i));
            let scrollDItem0 = `${this.days[today.getDay()]} ${this.months[today.getMonth()]}`;
            scrollDItem = `${scrollDItem0} ${today.getDate()}`;
            i++;
        } while (status);
    }

    _scrollHourWheel(hrNow, hrAgo) {
        let scrollHour = hrNow - 1;
        for (let i = 0; i < 12; i++) {
            if (scrollHour < 0) {
                scrollHour = 11;
            }
            let dItem = this.find.byDescendant(
                this.hoursWheel,
                this.find.text(scrollHour.toString().padStart(2, "0")),
                undefined,
                true
            );
            this.scrollUntilVisible(this.hoursWheel, dItem, undefined, undefined, 100);
            if (scrollHour === hrAgo) break;
            scrollHour--;
        }
    }

    _scrollMinuteWheel(minNow, minAgo) {
        let scrollMin = minNow - 1;
        for (let i = 0; i < 60; i++) {
            if (scrollMin < 0) {
                scrollMin = 59;
            }
            let dItem = this.find.byDescendant(
                this.minutesWheel,
                this.find.text(scrollMin.toString().padStart(2, "0")),
                undefined,
                true
            );
            this.scrollUntilVisible(this.minutesWheel, dItem, undefined, undefined, 100);
            if (scrollMin === minAgo) break;
            scrollMin--;
        }
    }

    _scrollModeWheel(setMode) {
        let modeItem = this.find.byDescendant(
            this.modeWheel,
            this.find.text(setMode.toString()),
            undefined,
            true
        );
        let dyScroll = setMode === "PM" ? -100 : 100;
        this.scrollUntilVisible(this.modeWheel, modeItem, undefined, undefined, dyScroll);
    }
}

exports.DatePicker = DatePicker;
