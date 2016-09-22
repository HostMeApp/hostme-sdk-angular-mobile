'use strict';
import * as models from './models';

export interface UpdateReservation {

    reservationTime?: string;

    groupSize?: number;

    areas?: string;

    note?: string;

    highChair?: boolean;

    stroller?: boolean;

    party?: boolean;

    customerProfile?: models.Profile;
}

