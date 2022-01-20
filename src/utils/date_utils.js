/**
 * This a class that implements basic metods that works with dates
 * @summary This a class that implements basic metods that works with dates
 * <pre> Implements the following methods:
 *  - [#generateMdDate]{@link DateUtils#generateMdDate}
 *  - [#generateDate]{@link DateUtils#generateDate}
 */
class DateUtils {
    /**
     * @summary Generate date based on default pattern "M/dd" or custom
     * @param {Number} daysAgo how many days ago
     * @param {String} pattern DateTime format pattern
     * @returns {String} generated date
     */
    generateMdDate({ daysAgo = 0, pattern = "M/dd" }) {
        const now = new Date(Date.now());
        const generatedDate = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDay() - daysAgo
        );
        return Intl.DateTimeFormat(pattern).format(generatedDate);
    }

    /**
     * @summary Generate date
     * @description Generate date with subtraction of how many days ago
     * @param {number} daysAgo how many days ago
     */
    generateDate({ daysAgo = 0 }) {
        const now = new Date(Date.now());
        return new Date(now.getFullYear(), now.getMonth(), now.getDay() - daysAgo);
    }

    /// check date only for Today, Yesterday and TWO_DAYS_AGO
    dateToString(date) {
        if (date === undefined) {
            return "";
        }
        const now = new Date(Date.now());
        let diff = new Date(now.getFullYear(), now.getMonth(), now.getDay()) - date;
        if (diff < 0 && diff > 2) {
            Core.Print(
                `FAIL: Date is not a Today, Yesterday and TWO_DAYS_AGO: difference with now <${diff}>`
            );
        }
        switch (diff) {
        case 0:
            return "TODAY";
        case 1:
            return "YESTERDAY";
        case 2:
            return "TWO_DAYS_AGO";
        default:
            return "";
        }
    }

    // ============================================
    // Gives UTC date in yyyy-MM-dd format
    getUTCDate(day) {
        let date = new Date();
        date.setDate(date.getDate() - day);
        const newDD = ((date.getUTCDate()).toString());
        const newMM = ((date.getUTCMonth() + 1).toString()).padStart(2, "0");
        const newYY = (date.getUTCFullYear()).toString();
        const newD = `${newYY}-${newMM}-${newDD}`;
        return newD;
    }

    // Gives UTC time in HH:mm format
    getUTCTime(hr, min) {
        let date = new Date();
        const newHr = ((date.getUTCHours() - hr).toString()).padStart(2, "0");
        const newMin = ((date.getUTCMinutes() - min).toString()).padStart(2, "0");
        const newTime = `${newHr}:${newMin}`;
        return newTime;
    }

    // Gives system date in MM/dd/yy and time in hh:mm aa format
    getSystemDateTimeAfterChange(day, hr, min) {
        // subtract day
        const date = new Date();
        date.setDate(date.getDate() - day);
        const newDD = ((date.getDate()).toString()).padStart(2, "0");
        const newMM = ((date.getMonth() + 1).toString()).padStart(2, "0");
        const newYY = ((date.getFullYear()).toString()).substring(2, 4);
        const newD = `${newMM}/${newDD}/${newYY}`;

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

        let newT = `${newD}\n${newTime} ${ampm}`;
        return `${newT}`;
    }

    // Gives India date in dd/MM/yy and time in hh:mm aa format
    getDateAndTimeForIndia(day, hr, min) {
        // subtract day
        const date = new Date();
        date.setDate(date.getDate() - day);
        const newDD = ((date.getDate()).toString());
        const newMM = ((date.getMonth() + 1).toString()).padStart(2, "0");
        const newYY = ((date.getFullYear()).toString()).substring(2, 4);
        const newD = `${newDD}/${newMM}/${newYY}`;

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
        let newT = `${newD}\n ${newTime} ${ampm}`;
        return `${newT}`;
    }
}

exports.DateUtils = DateUtils;
