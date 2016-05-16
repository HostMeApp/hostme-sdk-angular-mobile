import * as models from '../model/models';
import * as auth from './auth';
export declare class MobileCoreApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    addExternalLogin(model: models.AddExternalLogin, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    changePassword(model: models.ChangePassword, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    checkIn(checkinContract: models.TransactionCheckin, extraHttpRequestParams?: any): ng.IHttpPromise<models.Transaction>;
    findRestaurants(lat?: number, lon?: number, name?: string, city?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.RestaurantInfo>>;
    getAllRestaurants(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.RestaurantInfo>>;
    getListOfLocations(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Location>>;
    getManageInfo(returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any): ng.IHttpPromise<models.ManageInfo>;
    getRegistrationToken(token: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.CampaignInfo>;
    getReservationAvailability(restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, areas?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.OnlineAvailability>>;
    getRestaurantById(id: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.RestaurantInfo>;
    getUserProfile(extraHttpRequestParams?: any): ng.IHttpPromise<models.UserProfile>;
    logout(extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    postProfileImage(image: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    profileImage(extraHttpRequestParams?: any): ng.IHttpPromise<string>;
    register(model: models.RegisterUser, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    registerExternal(model: models.RegisterExternalUser, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    removeLogin(model: models.RemoveLogin, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    resetPassword(model: models.ResetPassword, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    setPassword(model: models.SetPassword, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    setPushChannelAsync(channel: models.SetPushChannel, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    updateUserProfile(profile: models.UserProfile, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
