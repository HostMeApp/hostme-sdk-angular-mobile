
namespace HostMe.Sdk {
    'use strict';

    export interface UpdateReservationBindingModel {

        "reservationTime": Date;

        "groupSize": number;

        "areas"?: string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
