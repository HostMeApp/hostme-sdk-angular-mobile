'use strict';
import * as models from './models';

export interface PhoneConfirmation {
	deviceType: string;
	customerName: string;
	notificationUrl: string;
}

