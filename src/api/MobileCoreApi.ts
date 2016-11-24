/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';
import {IApiConfig} from '../client/IApiConfig';

'use strict';
                                 	
    export class MobileCoreApi {
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
         * @param model 
         */
        public addExternalLogin (model: models.AddExternalLogin, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/core/mb/account/addExternalLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling addExternalLogin.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/changePassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling changePassword.');
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
         * @param lat 
         * @param lon 
         * @param name 
         * @param city 
         */
        public findRestaurants (lat?: number, lon?: number, name?: string, city?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.RestaurantInfo>> {
            const localVarPath = this.config.basePath + '/api/core/mb/restaurants/find';

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
            const localVarPath = this.config.basePath + '/api/core/mb/restaurants';

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
            const localVarPath = this.config.basePath + '/api/core/mb/locations';

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
            const localVarPath = this.config.basePath + '/api/core/mb/account/manageInfo';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'returnUrl' is not null or undefined
            if (returnUrl === null || returnUrl === undefined) {
                throw new Error('Required parameter returnUrl was null or undefined when calling getManageInfo.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/campaign/{token}'
                .replace('{' + 'token' + '}', String(token));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'token' is not null or undefined
            if (token === null || token === undefined) {
                throw new Error('Required parameter token was null or undefined when calling getRegistrationToken.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/restaurants/{restaurantId}/availability'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is not null or undefined
            if (restaurantId === null || restaurantId === undefined) {
                throw new Error('Required parameter restaurantId was null or undefined when calling getReservationAvailability.');
            }
            // verify required parameter 'date' is not null or undefined
            if (date === null || date === undefined) {
                throw new Error('Required parameter date was null or undefined when calling getReservationAvailability.');
            }
            // verify required parameter 'partySize' is not null or undefined
            if (partySize === null || partySize === undefined) {
                throw new Error('Required parameter partySize was null or undefined when calling getReservationAvailability.');
            }
            // verify required parameter 'rangeInMinutes' is not null or undefined
            if (rangeInMinutes === null || rangeInMinutes === undefined) {
                throw new Error('Required parameter rangeInMinutes was null or undefined when calling getReservationAvailability.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/restaurants/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getRestaurantById.');
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
        public getUserInfo (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserExternal> {
            const localVarPath = this.config.basePath + '/api/core/mb/account/userInfo';

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
        public getUserProfile (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserProfile> {
            const localVarPath = this.config.basePath + '/api/core/mb/account/profile';

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
            const localVarPath = this.config.basePath + '/api/core/mb/account/profile/image';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'image' is not null or undefined
            if (image === null || image === undefined) {
                throw new Error('Required parameter image was null or undefined when calling postProfileImage.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/profile/image';

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
            const localVarPath = this.config.basePath + '/api/core/mb/account/register';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling register.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/registerExternal';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling registerExternal.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/removeLogin';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling removeLogin.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/resetPassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling resetPassword.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/setPassword';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'model' is not null or undefined
            if (model === null || model === undefined) {
                throw new Error('Required parameter model was null or undefined when calling setPassword.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/setPushChannel';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'channel' is not null or undefined
            if (channel === null || channel === undefined) {
                throw new Error('Required parameter channel was null or undefined when calling setPushChannelAsync.');
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
            const localVarPath = this.config.basePath + '/api/core/mb/account/profile';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'profile' is not null or undefined
            if (profile === null || profile === undefined) {
                throw new Error('Required parameter profile was null or undefined when calling updateUserProfile.');
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
