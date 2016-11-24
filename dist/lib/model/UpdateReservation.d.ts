import * as models from './models';
export interface UpdateReservation {
    reservationTime: string;
    groupSize: number;
    areas?: string;
    note?: string;
    fullName?: string;
    phoneNumber: string;
    highChair?: boolean;
    stroller?: boolean;
    party?: boolean;
    partyTypes?: Array<string>;
    customerProfile?: models.Profile;
}
