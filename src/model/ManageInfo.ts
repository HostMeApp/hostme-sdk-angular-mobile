'use strict';
import * as models from './models';

export interface ManageInfo {

    localLoginProvider?: string;

    userName?: string;

    logins?: Array<models.UserLoginInfo>;

    externalLoginProviders?: Array<models.ExternalLogin>;
}

