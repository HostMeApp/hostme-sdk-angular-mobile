'use strict';
import * as models from './models';

export interface ReservationGuest {
        "token"?: string;

        "unreadMessageCount"?: number;

        "id"?: string;

        "restaurant"?: models.RestaurantContactInfo;

        "created"?: Date;

        "closed"?: Date;

        "reservationTime"?: Date;

        "status"?: string;

        "customerName"?: string;

        "groupSize"?: number;

        "phone"?: string;

        "notificationUrl"?: string;

        "areas"?: string;

        "note"?: string;

        "tableNumber"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;

        "email"?: string;

        "estimatedTurnOverTime"?: number;

        "messages"?: Array<models.Message>;

        "membership"?: models.MembershipInfo;

        "type"?: ReservationGuest.TypeEnum;

        "party"?: boolean;

        "partyTypes"?: Array<string>;

        "customerProfile"?: models.Profile;

}

export namespace ReservationGuest {
        export enum TypeEnum {
            Standard = <any> 'Standard',
            Hybrid = <any> 'Hybrid'
        }
}
