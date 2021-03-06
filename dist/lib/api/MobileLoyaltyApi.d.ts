/// <reference types="angular" />
import * as models from '../model/models';
import * as auth from './auth';
import { IApiConfig } from '../client/IApiConfig';
export declare class MobileLoyaltyApi {
    protected $http: ng.IHttpService;
    protected config: IApiConfig;
    protected $httpParamSerializer: (d: any) => any;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, config: IApiConfig, $httpParamSerializer?: (d: any) => any);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    cancelMembershipAtRestaurant(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    enrollIntoLoyaltyProgram(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.Membership>;
    getAllUserMemberships(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Membership>>;
    getCustomerRedeemRequests(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.RedeemRequestInfo>>;
    getMemberRewardOptions(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.RewardInfo>>;
    getMemberTransactions(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Transaction>>;
    getMembershipByRestaurantId(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.Membership>;
    getRedeemRequestInfo(restaurantId: number, redeemId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.RedeemRequestInfo>;
    submitRequestForRedeem(restaurantId: number, rewardId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.RedeemRequestInfo>;
}
