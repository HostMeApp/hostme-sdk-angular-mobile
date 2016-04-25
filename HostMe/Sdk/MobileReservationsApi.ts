/* tslint:disable:no-unused-variable member-ordering */

namespace HostMe.Sdk {
    'use strict';

    export class MobileReservationsApi {
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
         * @param value 
         */
        public addNewReservation (value: NewReservationBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling addNewReservation');
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

            return this.$http(httpRequestParams);
        }
        /**
         * 
         * 
         * @param reservationId 
         * @param notes 
         */
        public closeAsCanceled (reservationId: string, notes: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/cancel'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling closeAsCanceled');
            }
            // verify required parameter 'notes' is set
            if (!notes) {
                throw new Error('Missing required parameter notes when calling closeAsCanceled');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: notes,
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
         * @param reservationId 
         */
        public getReservationById (reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling getReservationById');
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
         * @param queryOptions 
         */
        public getUserReservations (queryOptions?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Reservation>> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations';

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

            return this.$http(httpRequestParams);
        }
        /**
         * Mark all message as read.
         * 
         * @param reservationId Reservation identifier
         */
        public readAllMessage (reservationId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/messages/readall'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling readAllMessage');
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
         * Sends a message related to specified reservation
         * 
         * @param reservationId Reservation identifier
         * @param body The body of the message
         */
        public sendMessageToReservation (reservationId: string, body: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/messages'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling sendMessageToReservation');
            }
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling sendMessageToReservation');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: body,
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
         * @param reservationId 
         * @param value 
         */
        public updateReservation (reservationId: string, value: UpdateReservationBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}'
                .replace('{' + 'reservationId' + '}', String(reservationId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'reservationId' is set
            if (!reservationId) {
                throw new Error('Missing required parameter reservationId when calling updateReservation');
            }
            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling updateReservation');
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

            return this.$http(httpRequestParams);
        }
    }
}
