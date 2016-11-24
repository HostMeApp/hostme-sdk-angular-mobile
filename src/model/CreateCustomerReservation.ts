'use strict';
import * as models from './models';

export interface CreateCustomerReservation {
        "restaurantId": number;

        "reservationTime": Date;

        "groupSize": number;

        "notificationUrl"?: string;

        "deviceType": string;

        "areas"?: string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;

        "customerProfile"?: models.Profile;

        "party"?: boolean;

        "partyTypes"?: Array<string>;

        "email"?: string;

        "fullName"?: string;

        "phoneNumber"?: string;

}

