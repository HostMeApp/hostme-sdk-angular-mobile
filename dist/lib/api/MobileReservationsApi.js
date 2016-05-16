"use strict";
var auth = require('./auth');
'use strict';
var MobileReservationsApi = (function () {
    function MobileReservationsApi($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://hostme-services-dev.azurewebsites.net';
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
        if (basePath) {
            this.basePath = basePath;
        }
    }
    Object.defineProperty(MobileReservationsApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    MobileReservationsApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    MobileReservationsApi.prototype.addNewReservation = function (value, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!value) {
            throw new Error('Missing required parameter value when calling addNewReservation');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.closeAsCanceled = function (reservationId, cancelReservationContract, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/cancel'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling closeAsCanceled');
        }
        if (!cancelReservationContract) {
            throw new Error('Missing required parameter cancelReservationContract when calling closeAsCanceled');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.getReservationById = function (reservationId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling getReservationById');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.getUserReservations = function (queryOptions, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (queryOptions !== undefined) {
            queryParameters['queryOptions'] = queryOptions;
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.readAllMessage = function (reservationId, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/messages/readall'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling readAllMessage');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.sendMessageToReservation = function (reservationId, createMessageContract, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/messages'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling sendMessageToReservation');
        }
        if (!createMessageContract) {
            throw new Error('Missing required parameter createMessageContract when calling sendMessageToReservation');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.updateReservation = function (reservationId, value, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!reservationId) {
            throw new Error('Missing required parameter reservationId when calling updateReservation');
        }
        if (!value) {
            throw new Error('Missing required parameter value when calling updateReservation');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.$inject = ['$http', '$httpParamSerializer'];
    return MobileReservationsApi;
}());
exports.MobileReservationsApi = MobileReservationsApi;
//# sourceMappingURL=MobileReservationsApi.js.map