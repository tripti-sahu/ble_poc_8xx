/**
 * @summary This is a class that implements basic methods that are required to work with INC long run scripts
 */
class IncUtils {
    /**
     * Create afterLog Map which contains N time after Now
     * @param {integer} timeGap
     * @param {integer} startMinute
     * @param {integer} endMinute
     * @param {map} afterLog
     * @param {Date} logInsulinTime
     * @returns difference b/w given time in minutes
     */
    createAfterLog(timeGap, startMinute, endMinute, afterLog, loggedInsulinTime) {
        for (let i = startMinute; i <= endMinute; i += timeGap) {
            let timeTemp = new Date(loggedInsulinTime.getTime());
            let afterNminutes = new Date(timeTemp.setMinutes(timeTemp.getMinutes() + i));
            afterLog.set(`after${i}Minutes`, afterNminutes);
        }
    }

    /**
     * Calculate difference b/w afterNtime and diffTime
     * @param {string} afterNTime
     * @param {Date} diffTime
     * @returns difference b/w given time in minutes
     */
    difference(afterNTime, diffTime) {
        let diffMs = (afterNTime - diffTime); // milliseconds
        let diffMins = Math.round((diffMs) / 60000); // minutes
        diffMins = Math.abs(diffMins);
        return diffMins;
    }
}

exports.IncUtils = IncUtils;
