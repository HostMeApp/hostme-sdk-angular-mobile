'use strict';
import * as models from './models';

export interface RegisterExternalUser {
	email?: string;
	fullName: string;
	phoneNumber: string;
	externalAccessToken: string;
}

