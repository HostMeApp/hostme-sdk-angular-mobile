/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';

'use strict';
                                 	
    export class MobileCoreApi {
        protected basePath = 'http://hostme-services-dev.azurewebsites.net';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
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
         * @param model 
         */
        public addExternalLogin (model: models.AddExternalLogin, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/addExternalLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling addExternalLogin');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param model 
         */
        public changePassword (model: models.ChangePassword, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/changePassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling changePassword');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param checkinContract 
         */
        public checkIn (checkinContract: models.TransactionCheckin, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Transaction> {
            const localVarPath = this.basePath + '/api/core/mb/restaurant/checkin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'checkinContract' is set
            if (!checkinContract) {
                throw new Error('Missing required parameter checkinContract when calling checkIn');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: checkinContract,
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
         * @param lat 
         * @param lon 
         * @param name 
         * @param city 
         */
        public findRestaurants (lat?: number, lon?: number, name?: string, city?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.RestaurantInfo>> {
            const localVarPath = this.basePath + '/api/core/mb/restaurants/find';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (lat !== undefined) {
                queryParameters['lat'] = lat;
            }

            if (lon !== undefined) {
                queryParameters['lon'] = lon;
            }

            if (name !== undefined) {
                queryParameters['name'] = name;
            }

            if (city !== undefined) {
                queryParameters['city'] = city;
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
         */
        public getAllRestaurants (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.RestaurantInfo>> {
            const localVarPath = this.basePath + '/api/core/mb/restaurants';

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
         */
        public getListOfLocations (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Location>> {
            const localVarPath = this.basePath + '/api/core/mb/locations';

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
         * @param returnUrl 
         * @param generateState 
         */
        public getManageInfo (returnUrl: string, generateState?: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ManageInfo> {
            const localVarPath = this.basePath + '/api/core/mb/account/manageInfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'returnUrl' is set
            if (!returnUrl) {
                throw new Error('Missing required parameter returnUrl when calling getManageInfo');
            }
            if (returnUrl !== undefined) {
                queryParameters['returnUrl'] = returnUrl;
            }

            if (generateState !== undefined) {
                queryParameters['generateState'] = generateState;
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
         * @param token 
         */
        public getRegistrationToken (token: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.CampaignInfo> {
            const localVarPath = this.basePath + '/api/core/mb/campaign/{token}'
                .replace('{' + 'token' + '}', String(token));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'token' is set
            if (!token) {
                throw new Error('Missing required parameter token when calling getRegistrationToken');
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
         * @param date 
         * @param partySize 
         * @param rangeInMinutes 
         * @param areas 
         */
        public getReservationAvailability (restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, areas?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.OnlineAvailability>> {
            const localVarPath = this.basePath + '/api/core/mb/restaurants/{restaurantId}/availability'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getReservationAvailability');
            }
            // verify required parameter 'date' is set
            if (!date) {
                throw new Error('Missing required parameter date when calling getReservationAvailability');
            }
            // verify required parameter 'partySize' is set
            if (!partySize) {
                throw new Error('Missing required parameter partySize when calling getReservationAvailability');
            }
            // verify required parameter 'rangeInMinutes' is set
            if (!rangeInMinutes) {
                throw new Error('Missing required parameter rangeInMinutes when calling getReservationAvailability');
            }
            if (date !== undefined) {
                queryParameters['date'] = date;
            }

            if (partySize !== undefined) {
                queryParameters['partySize'] = partySize;
            }

            if (rangeInMinutes !== undefined) {
                queryParameters['rangeInMinutes'] = rangeInMinutes;
            }

            if (areas !== undefined) {
                queryParameters['areas'] = areas;
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
         * @param id 
         */
        public getRestaurantById (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.RestaurantInfo> {
            const localVarPath = this.basePath + '/api/core/mb/restaurants/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling getRestaurantById');
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
         */
        public getUserProfile (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserProfile> {
            const localVarPath = this.basePath + '/api/core/mb/account/profile';

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
         */
        public logout (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/logout';

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
         * @param image 
         */
        public postProfileImage (image: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/profile/image';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'image' is set
            if (!image) {
                throw new Error('Missing required parameter image when calling postProfileImage');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: image,
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
        public profileImage (extraHttpRequestParams?: any ) : ng.IHttpPromise<string> {
            const localVarPath = this.basePath + '/api/core/mb/account/profile/image';

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
         * @param model 
         */
        public register (model: models.RegisterUser, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/register';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling register');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param model 
         */
        public registerExternal (model: models.RegisterExternalUser, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/registerExternal';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling registerExternal');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param model 
         */
        public removeLogin (model: models.RemoveLogin, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/removeLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling removeLogin');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param model 
         */
        public resetPassword (model: models.ResetPassword, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/resetPassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling resetPassword');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param model 
         */
        public setPassword (model: models.SetPassword, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/setPassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is set
            if (!model) {
                throw new Error('Missing required parameter model when calling setPassword');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: model,
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
         * @param channel 
         */
        public setPushChannelAsync (channel: models.SetPushChannel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/setPushChannel';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'channel' is set
            if (!channel) {
                throw new Error('Missing required parameter channel when calling setPushChannelAsync');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: channel,
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
         * @param profile 
         */
        public updateUserProfile (profile: models.UserProfile, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/core/mb/account/profile';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'profile' is set
            if (!profile) {
                throw new Error('Missing required parameter profile when calling updateUserProfile');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: profile,
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