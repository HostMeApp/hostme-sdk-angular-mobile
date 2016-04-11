
namespace HostMe.Sdk {
    'use strict';

    export interface UpdateReservationBindingModel {

        "reservationId": number;

        "reservationTime": Date;

        "groupSize": number;

        "areas"?: string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
