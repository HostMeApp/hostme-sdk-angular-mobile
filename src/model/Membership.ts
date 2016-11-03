'use strict';
import * as models from './models';

export interface Membership {
        "id"?: number;

        "membershipLevel"?: string;

        "points"?: number;

        "joinDate"?: Date;

        "status"?: string;

        "restaurant"?: models.RestaurantInfo;

        "isMember"?: boolean;

}

