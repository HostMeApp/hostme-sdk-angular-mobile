
namespace HostMe.Sdk {
    'use strict';




    export interface RestaurantInfo {



        "hoursInterval"?: number;



        "maxPartySize"?: number;



        "minPartySize"?: number;



        "openingHours"?: BusinessHours;



        "reservationHours"?: BusinessHours;



        "seatingZones"?: Array<string>;



        "id"?: number;



        "name"?: string;



        "address"?: string;



        "imageUrl"?: string;



        "facebookId"?: string;



        "twitterAccount"?: string;



        "websiteUrl"?: string;



        "foursquareId"?: string;



        "phone"?: string;



        "timeOffSet"?: number;



        "timeZone"?: string;



        "lat"?: number;



        "lon"?: number;



        "hasHostmeSystem"?: boolean;



        "distance"?: number;



        "rating"?: number;



        "hasLoyaltyProgram"?: boolean;



        "acceptRemouteLine"?: boolean;



        "acceptReservation"?: boolean;



        "allowManualHold"?: boolean;



        "currentLineStats"?: WaitingStats;



        "isFavorite"?: boolean;



        "numberOfDeals"?: number;



        "numberOfVotes"?: number;



        "reservationIncomeEmail"?: string;

    }




}
