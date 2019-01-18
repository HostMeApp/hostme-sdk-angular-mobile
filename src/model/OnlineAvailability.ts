'use strict';
import * as models from './models';

export interface OnlineAvailability {
	acceptReservations?: boolean;
	availabilityLevel?: OnlineAvailability.AvailabilityLevelEnum;
	open?: boolean;
	requestedTime?: boolean;
	time?: string;
	amount?: number;
}

export namespace OnlineAvailability {
        export enum AvailabilityLevelEnum {
            Available = 'Available' as any,
            AvailableForWait = 'AvailableForWait' as any,
            NotEnoughCovers = 'NotEnoughCovers' as any,
            Overbooked = 'Overbooked' as any
        }
}
