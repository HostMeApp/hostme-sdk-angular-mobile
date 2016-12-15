'use strict';
var OnlineAvailability;
(function (OnlineAvailability) {
    var AvailabilityLevelEnum;
    (function (AvailabilityLevelEnum) {
        AvailabilityLevelEnum[AvailabilityLevelEnum["Available"] = 'Available'] = "Available";
        AvailabilityLevelEnum[AvailabilityLevelEnum["AvailableForWait"] = 'AvailableForWait'] = "AvailableForWait";
        AvailabilityLevelEnum[AvailabilityLevelEnum["NotEnoughCovers"] = 'NotEnoughCovers'] = "NotEnoughCovers";
        AvailabilityLevelEnum[AvailabilityLevelEnum["Overbooked"] = 'Overbooked'] = "Overbooked";
    })(AvailabilityLevelEnum = OnlineAvailability.AvailabilityLevelEnum || (OnlineAvailability.AvailabilityLevelEnum = {}));
})(OnlineAvailability = exports.OnlineAvailability || (exports.OnlineAvailability = {}));
//# sourceMappingURL=OnlineAvailability.js.map