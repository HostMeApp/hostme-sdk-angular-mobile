
namespace HostMe.Sdk {
    'use strict';

    export interface PutInLine {

        "restaurantId": number;

        "reservationTime": Date;

        "customerName": string;

        "groupSize": number;

        "notificationUrl": string;

        "deviceType": string;

        "areas": string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
