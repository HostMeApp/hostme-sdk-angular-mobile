import * as models from './models';
export interface RestaurantInfo {
    hoursInterval?: number;
    city?: string;
    maxPartySize?: number;
    minPartySize?: number;
    openingHours?: models.BusinessHours;
    reservationHours?: models.BusinessHours;
    seatingZones?: Array<string>;
    id?: number;
    name?: string;
    address?: string;
    imageUrl?: string;
    facebookId?: string;
    twitterAccount?: string;
    websiteUrl?: string;
    foursquareId?: string;
    phone?: string;
    timeZone?: string;
    lat?: number;
    lon?: number;
    hasHostmeSystem?: boolean;
    distance?: number;
    hasLoyaltyProgram?: boolean;
    acceptRemouteLine?: boolean;
    acceptReservation?: boolean;
    allowManualHold?: boolean;
    currentLineStats?: models.WaitingStats;
}
