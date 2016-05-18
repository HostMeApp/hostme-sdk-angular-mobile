/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';
import {IApiConfig} from '../client/IApiConfig';

'use strict';
                                 	
    export class MobileWaitingManagementApi {
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
         * @param waitingItemId 
         */
        public checkInWithWaiting (waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Transaction> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/checkin'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling checkInWithWaiting');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
         * Closes waiting position.
         * Closes current waiting position. When person gets a table, hostess should close current position.
         * @param waitingItemId Identifier of the waiting item
         */
        public close (waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/close'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling close');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
         * Confirm waiting record from HostMe mobile application
         * 
         * @param confirmationCode Confirmation code that has been generated during initial registration by hostess
         * @param conf Conformation model
         */
        public confirmWithApp (confirmationCode: number, conf: models.PhoneConfirmation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/confirm/{confirmationCode}'
                .replace('{' + 'confirmationCode' + '}', String(confirmationCode));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'confirmationCode' is set
            if (!confirmationCode) {
                throw new Error('Missing required parameter confirmationCode when calling confirmWithApp');
            }
            // verify required parameter 'conf' is set
            if (!conf) {
                throw new Error('Missing required parameter conf when calling confirmWithApp');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: conf,
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
         * Put customer in line.
         * This method puts customer in a line on a fly. This is remote registration in a line. Waiting item will be automatically put on hold.
         * @param value 
         */
        public getInLine (value: models.PutInLine, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.WaitingItem> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling getInLine');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: value,
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
         * Returns current user waiting item
         * 
         */
        public getUserCurrentWaiting (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.WaitingItem> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings';

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
         * Cancels waiting position.
         * Cancels specified waiting position. Client may decide to go to another restaurant and cancel current waiting item.
         * @param waitingItemId Waiting item identifier
         */
        public leaveTheLine (waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/cancel'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling leaveTheLine');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
         * Mark all message as read.
         * 
         * @param waitingItemId Waiting item identifier
         */
        public markAllMessagesAsRead (waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/messages/readall'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling markAllMessagesAsRead');
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
         * Put waiting item on hold manually
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         */
        public putOnHold (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/putonhold'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling putOnHold');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling putOnHold');
            }
            if (restaurantId !== undefined) {
                queryParameters['restaurantId'] = restaurantId;
            }

            let httpRequestParams: any = {
                method: 'PUT',
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
         * Sends a message related to specified waiting item.
         * 
         * @param waitingItemId Waiting item identifier
         * @param createMessage The body of the message
         */
        public sendMessageToWaiting (waitingItemId: number, createMessage: models.CreateMessage, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/sendmessage'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling sendMessageToWaiting');
            }
            // verify required parameter 'createMessage' is set
            if (!createMessage) {
                throw new Error('Missing required parameter createMessage when calling sendMessageToWaiting');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: createMessage,
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
         * Set waiting item off hold
         * 
         * @param restaurantId Restaurant identifier
         * @param waitingItemId Waiting item identifier
         */
        public takeOffHold (restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/takeoffhold'
                .replace('{' + 'waitingItemId' + '}', String(waitingItemId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling takeOffHold');
            }
            // verify required parameter 'waitingItemId' is set
            if (!waitingItemId) {
                throw new Error('Missing required parameter waitingItemId when calling takeOffHold');
            }
            if (restaurantId !== undefined) {
                queryParameters['restaurantId'] = restaurantId;
            }

            let httpRequestParams: any = {
                method: 'PUT',
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
