/// Class contains text which is used on different screen in App.
/// As the result, these ants can be used as parameter value for finding
/// elements by text (SerializableFinder) and/or checking text on screens

class StatusMessagesConstants {
    get messageData() {
        return {
            searching_sensor_signal_message: "Searching for sensor signal",
            warmUpMessageCal: "Sensor warm up...",
            above400MgMessageCal: "Above 400 mg/dL",
            below50MgMessageCal: "Below 50 mg/dL",
            CAL_NOW_MESSAGE: "Scheduled calibration needed",
            CAL_PEND_MESSAGE: "Calibrating sensor...",
            changeSensorMessage: "Change sensor",
            lostSensorMessage: "Lost communication",
            sensorErrorShortMessageCal: "Sensor updating",
            changeSensorSensorEndOfLife: "Sensor end of life",
            sensorConnected: "Sensor connected",
            updating_message: "Updating...",
            searching_sensor_signal_details: "Lost communication with transmitter.\nKeep transmitter in range.",
            transmitter_not_paired_message: "Transmitter not paired",
            transmitter_not_paired_details: "Go to Sensor Setup to pair the transmitter again.",
            sensor_warm_up_message: "Sensor warm up...",
            sensor_warm_up_details: "You will be asked to calibrate your sensor twice:" +
            " after your sensor has warmed up and again 8 hours after your" +
            " first calibration.\nCalibrating earlier than requested may require additional calibrations.",
            sensor_warm_up_no_cal_details: "Warming up the sensor. This will take 2 hours.",
            sensor_disconnected_message: "Sensor disconnected",
            sensor_disconnected_details: "Connect sensor to transmitter to continue.\nIf" +
            " sensor is connected to transmitter, ensure connection is secure.",
            sensor_connected_message: "Sensor connected",
            transmitter_error_message: "Transmitter error",
            transmitter_error_details: "The transmitter is trying to fix a problem. Wait at least 30" +
            " minutes. If problem continues, see User Guide.",
            above_400_message: "Above 400 mg/dL",
            above_400_details: "Sensor glucose value is outside the sensor range.",
            below_50_message: "Below 50 mg/dL",
            below_50_details: "Sensor glucose value is outside the sensor range.",
            calibrate_now_message: "Calibrate now",
            calibrate_now_details: "Check your Blood Glucose with your meter and enter the value into the app to" +
            " calibrate the sensor.",
            calibrating_sensor_message: "Calibrating sensor...",
            calibrating_sensor_details: "Calibrating sensor. This may take up to 5 minutes.",
            wait_to_calibrate_message: "Wait to calibrate...",
            wait_to_calibrate_details: "Last calibration not accepted. Wait until notified to calibrate.",
            lost_communication_message: "Lost communication",
            lost_communication_details: "Lost communication with transmitter.\nKeep transmitter in range.",
            change_sensor_message: "Change sensor",
            change_sensor_details: "Sensor can no longer be used.\nInsert a new sensor.",
            change_sensor_2_details: "Calibrations not accepted. Sensor can no longer be used.\n\nInsert a new sensor.",
            transmitter_battery_empty_message: "Transmitter battery empty",
            transmitter_battery_empty_details: "No longer receiving sensor information." +
            "\nRecharge transmitter battery now.",
            sensor_updating_message: "Sensor updating",
            sensor_updating_short_details: "Updating can take up to 1 hour." +
            " Sensor glucose information will not be available. Monitor Blood Glucose with your meter.",
            sensor_updating_medium_details: "Updating can take up to 2 hours. Sensor glucose information will not be" +
            " available. Monitor Blood Glucose with your meter.",
            sensor_updating_long_details: "Updating will take 2 hours. Sensor glucose information will not be" +
            " available. Monitor Blood Glucose with your meter.",
            sensor_end_of_life_message: "Sensor end of life",
            sensor_end_of_life_details: "Sensor reached end of life. No longer receiving sensor information." +
            "\nInsert a new sensor.",
            bluetooth_off_message: "Bluetooth off",
            bluetooth_off_details: "Turn on Bluetooth to see your current sensor information.",
            cal_available_message: "You may attempt to calibrate now.",
            scheduled_calibration_needed_message: "Scheduled calibration needed"
        };
    }
}

exports.StatusMessagesConstants = StatusMessagesConstants;
