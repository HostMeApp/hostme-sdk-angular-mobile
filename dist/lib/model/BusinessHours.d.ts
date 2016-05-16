import * as models from './models';
export interface BusinessHours {
    openingHours?: Array<models.WeekDayOpenHours>;
    isOpenNow?: boolean;
}
