/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';
import {IApiConfig} from '../client/IApiConfig';

'use strict';
                                 	
    export class MobileLoyaltyApi {
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http','IApiConfig', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected config: IApiConfig, protected $httpParamSerializer?: (d: any) => any) {
           
        }
        
        public authentications = {
        'default': <auth.Authentication>new auth.VoidAuth(),
        'oauth2': new auth.OAuth(),
    }
    
    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }
    

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB) {
                if(objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * 
         * 
         * @param restaurantId 
         */
        public cancelMembershipAtRestaurant (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling cancelMembershipAtRestaurant.');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public enrollIntoLoyaltyProgram (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Membership> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling enrollIntoLoyaltyProgram.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         */
        public getAllUserMemberships (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Membership>> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getCustomerRedeemRequests (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.RedeemRequestInfo>> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling getCustomerRedeemRequests.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getMemberRewardOptions (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.RewardInfo>> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling getMemberRewardOptions.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getMemberTransactions (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Transaction>> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/transactions'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling getMemberTransactions.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getMembershipByRestaurantId (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Membership> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling getMembershipByRestaurantId.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param redeemId 
         */
        public getRedeemRequestInfo (restaurantId: number, redeemId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RedeemRequestInfo> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems/{redeemId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'redeemId' + '}', String(redeemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling getRedeemRequestInfo.');
            }
            // verify required parameter 'redeemId' is not null or undefined
            if (redeemId === null || redeemId === undefined) {
                throw new Error('Required parameter redeemId was null or undefined when calling getRedeemRequestInfo.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param rewardId 
         */
        public submitRequestForRedeem (restaurantId: number, rewardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RedeemRequestInfo> {
            const localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards/{rewardId}/redeem'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling submitRequestForRedeem.');
            }
            // verify required parameter 'rewardId' is not null or undefined
            if (rewardId === null || rewardId === undefined) {
                throw new Error('Required parameter rewardId was null or undefined when calling submitRequestForRedeem.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
                this.authentications.oauth2.applyToRequest(httpRequestParams);
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
    }
