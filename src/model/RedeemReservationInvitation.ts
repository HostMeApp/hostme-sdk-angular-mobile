'use strict';
import * as models from './models';

export interface RedeemReservationInvitation {
	code: string;
	email: string;
	phoneNumber: string;
	fullName: string;
	customerProfile?: models.Profile;
}

