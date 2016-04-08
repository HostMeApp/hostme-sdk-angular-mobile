
namespace HostMe.Sdk {
    'use strict';




    export interface PhoneConfirmationBindingModel {



        /**
         * Phone identifier that will be used to send push notifications
         */

        "phoneId"?: string;



        "deviceType": string;



        /**
         * Longitude of the phone. Coordinates are used to check that phone location and restaurant are close enought.
         */

        "longitude"?: number;



        /**
         * Latitude of the phone. Coordinates are used to check that phone location and restaurant are close enought.
         */

        "lattitude"?: number;



        /**
         * Optional. Only is used.
         */

        "customerName": string;



        "notificationUrl": string;

    }




}
