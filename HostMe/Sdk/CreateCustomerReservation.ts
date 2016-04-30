
namespace HostMe.Sdk {
    'use strict';

    export interface CreateCustomerReservation {

        "restaurantId": number;

        "reservationTime": Date;

        "groupSize": number;

        "notificationUrl"?: string;

        "deviceType": string;

        "areas": string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
