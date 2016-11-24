import * as models from './models';
export interface ReservationGuest {
    token?: string;
    unreadMessageCount?: number;
    id?: string;
    restaurant?: models.RestaurantContactInfo;
    created?: string;
    closed?: string;
    reservationTime?: string;
    status?: string;
    customerName?: string;
    groupSize?: number;
    phone?: string;
    notificationUrl?: string;
    areas?: string;
    note?: string;
    tableNumber?: string;
    highChair?: boolean;
    stroller?: boolean;
    email?: string;
    estimatedTurnOverTime?: number;
    messages?: Array<models.Message>;
    membership?: models.MembershipInfo;
    type?: ReservationGuest.TypeEnum;
    party?: boolean;
    partyTypes?: Array<string>;
    customerProfile?: models.Profile;
}
export declare namespace ReservationGuest {
    enum TypeEnum {
        Standard,
        Hybrid,
    }
}
