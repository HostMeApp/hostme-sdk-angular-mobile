
namespace HostMe.Sdk {
    'use strict';

    export interface OnlineAvailability {

        "acceptReservations"?: boolean;

        "availabilityLevel"?: OnlineAvailability.AvailabilityLevelEnum;

        "open"?: boolean;

        "requestedTime"?: boolean;

        "time"?: string;
    }

    export namespace OnlineAvailability {

        export enum AvailabilityLevelEnum { 
            Available = <any> 'Available',
            AvailableForWait = <any> 'AvailableForWait',
            NotEnoughCovers = <any> 'NotEnoughCovers',
            Overbooked = <any> 'Overbooked'
        }
    }
}
