/* tslint:disable:no-unused-variable member-ordering */

namespace HostMe.Sdk {
    'use strict';

    export class MobileLoyaltyApi {
        protected basePath = 'http://hostme-services-dev.azurewebsites.net';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
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
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling cancelMembershipAtRestaurant');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public enrollIntoLoyaltyProgram (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Membership> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling enrollIntoLoyaltyProgram');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         */
        public getAllUserMemberships (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Membership>> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership';

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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getCustomerRedeemRequests (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<RedeemRequestInfo>> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getCustomerRedeemRequests');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getMemberRewardOptions (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<RewardInfo>> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMemberRewardOptions');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getMemberTransactions (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Transaction>> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/transactions'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMemberTransactions');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         */
        public getMembershipByRestaurantId (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Membership> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getMembershipByRestaurantId');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param redeemId 
         */
        public getRedeemRequestInfo (restaurantId: number, redeemId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<RedeemRequestInfo> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems/{redeemId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'redeemId' + '}', String(redeemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRedeemRequestInfo');
            }
            // verify required parameter 'redeemId' is set
            if (!redeemId) {
                throw new Error('Missing required parameter redeemId when calling getRedeemRequestInfo');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param restaurantId 
         * @param rewardId 
         */
        public submitRequestForRedeem (restaurantId: number, rewardId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<RedeemRequestInfo> {
            const localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards/{rewardId}/redeem'
                .replace('{' + 'restaurantId' + '}', String(restaurantId))
                .replace('{' + 'rewardId' + '}', String(rewardId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling submitRequestForRedeem');
            }
            // verify required parameter 'rewardId' is set
            if (!rewardId) {
                throw new Error('Missing required parameter rewardId when calling submitRequestForRedeem');
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

            return this.$http(httpRequestParams);
        }
    }
}
