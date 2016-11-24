/* tslint:disable:no-unused-variable member-ordering */
import * as models from '../model/models';
import * as auth from './auth';
import {IApiConfig} from '../client/IApiConfig';

'use strict';
                                 	
    export class MobileReservationsApi {
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
         * @param value 
         */
        public addNewReservation (value: models.CreateCustomerReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Reservation> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'value' is not null or undefined
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling addNewReservation.');
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
         * 
         * 
         * @param reservationId 
         * @param cancelReservationContract 
         */
        public closeAsCanceled (reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/cancel'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling closeAsCanceled.');
            }
            // verify required parameter 'cancelReservationContract' is not null or undefined
            if (cancelReservationContract === null || cancelReservationContract === undefined) {
                throw new Error('Required parameter cancelReservationContract was null or undefined when calling closeAsCanceled.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: cancelReservationContract,
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
         * @param reservationId 
         */
        public getReservationById (reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Reservation> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling getReservationById.');
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
         * @param queryOptions 
         */
        public getUserReservations (queryOptions?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Reservation>> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (queryOptions !== undefined) {
                queryParameters['queryOptions'] = queryOptions;
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
         * @param value 
         */
        public guestAddNewReservation (value: models.CreateCustomerReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ReservationGuest> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'value' is not null or undefined
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling guestAddNewReservation.');
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
            
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param reservationId 
         * @param cancelReservationContract 
         */
        public guestCloseAsCanceled (reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}/cancel'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling guestCloseAsCanceled.');
            }
            // verify required parameter 'cancelReservationContract' is not null or undefined
            if (cancelReservationContract === null || cancelReservationContract === undefined) {
                throw new Error('Required parameter cancelReservationContract was null or undefined when calling guestCloseAsCanceled.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: cancelReservationContract,
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
         * @param code 
         */
        public guestGetInvitationAsync (code: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ReservationInvitation> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/invitations/{code}'
                .replace('{' + 'code' + '}', String(code));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new Error('Required parameter code was null or undefined when calling guestGetInvitationAsync.');
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
            
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param reservationId 
         */
        public guestGetReservationById (reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.Reservation> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling guestGetReservationById.');
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
         * @param reservationId 
         * @param invitationContract 
         */
        public guestInvitePartyMembersAsync (reservationId: string, invitationContract: models.PartyMembersInvitation, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}/invitations'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling guestInvitePartyMembersAsync.');
            }
            // verify required parameter 'invitationContract' is not null or undefined
            if (invitationContract === null || invitationContract === undefined) {
                throw new Error('Required parameter invitationContract was null or undefined when calling guestInvitePartyMembersAsync.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: invitationContract,
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
         * @param redeemInvitationContract 
         * @param code 
         */
        public guestRedeemInvitationAsync (redeemInvitationContract: models.RedeemReservationInvitation, code: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/invitations/{code}'
                .replace('{' + 'code' + '}', String(code));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'redeemInvitationContract' is not null or undefined
            if (redeemInvitationContract === null || redeemInvitationContract === undefined) {
                throw new Error('Required parameter redeemInvitationContract was null or undefined when calling guestRedeemInvitationAsync.');
            }
            // verify required parameter 'code' is not null or undefined
            if (code === null || code === undefined) {
                throw new Error('Required parameter code was null or undefined when calling guestRedeemInvitationAsync.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: redeemInvitationContract,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            
            this.authentications.default.applyToRequest(httpRequestParams);

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param reservationId 
         * @param value 
         */
        public guestUpdateReservation (reservationId: string, value: models.UpdateReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling guestUpdateReservation.');
            }
            // verify required parameter 'value' is not null or undefined
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling guestUpdateReservation.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
         * Mark all messages as read.
         * Mark all reservation messages as read.
         * @param reservationId Reservation identifier
         */
        public readAllMessage (reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/messages/readall'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling readAllMessage.');
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
         * Sends a message related to specified reservation
         * 
         * @param reservationId Reservation identifier
         * @param createMessageContract The message with body
         */
        public sendMessageToReservation (reservationId: string, createMessageContract: models.CreateMessage, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/messages'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling sendMessageToReservation.');
            }
            // verify required parameter 'createMessageContract' is not null or undefined
            if (createMessageContract === null || createMessageContract === undefined) {
                throw new Error('Required parameter createMessageContract was null or undefined when calling sendMessageToReservation.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: createMessageContract,
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
         * @param reservationId 
         * @param value 
         */
        public updateReservation (reservationId: string, value: models.UpdateReservation, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is not null or undefined
            if (reservationId === null || reservationId === undefined) {
                throw new Error('Required parameter reservationId was null or undefined when calling updateReservation.');
            }
            // verify required parameter 'value' is not null or undefined
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling updateReservation.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
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
    }
