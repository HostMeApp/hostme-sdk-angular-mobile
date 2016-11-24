"use strict";
var auth = require('./auth');
'use strict';
var MobileReservationsApi = (function () {
    function MobileReservationsApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling addNewReservation.');
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/cancel'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling closeAsCanceled.');
        }
        if (cancelReservationContract === null || cancelReservationContract === undefined) {
            throw new Error('Required parameter cancelReservationContract was null or undefined when calling closeAsCanceled.');
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling getReservationById.');
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations';
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
    MobileReservationsApi.prototype.guestAddNewReservation = function (value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling guestAddNewReservation.');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileReservationsApi.prototype.guestCloseAsCanceled = function (reservationId, cancelReservationContract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}/cancel'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling guestCloseAsCanceled.');
        }
        if (cancelReservationContract === null || cancelReservationContract === undefined) {
            throw new Error('Required parameter cancelReservationContract was null or undefined when calling guestCloseAsCanceled.');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileReservationsApi.prototype.guestGetInvitationAsync = function (code, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/invitations/{code}'
            .replace('{' + 'code' + '}', String(code));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling guestGetInvitationAsync.');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileReservationsApi.prototype.guestGetReservationById = function (reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling guestGetReservationById.');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileReservationsApi.prototype.guestInvitePartyMembersAsync = function (reservationId, invitationContract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}/invitations'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling guestInvitePartyMembersAsync.');
        }
        if (invitationContract === null || invitationContract === undefined) {
            throw new Error('Required parameter invitationContract was null or undefined when calling guestInvitePartyMembersAsync.');
        }
        var httpRequestParams = {
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileReservationsApi.prototype.guestRedeemInvitationAsync = function (redeemInvitationContract, code, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/invitations/{code}'
            .replace('{' + 'code' + '}', String(code));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (redeemInvitationContract === null || redeemInvitationContract === undefined) {
            throw new Error('Required parameter redeemInvitationContract was null or undefined when calling guestRedeemInvitationAsync.');
        }
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling guestRedeemInvitationAsync.');
        }
        var httpRequestParams = {
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
    };
    MobileReservationsApi.prototype.guestUpdateReservation = function (reservationId, value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/guest/reservations/{reservationId}'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling guestUpdateReservation.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling guestUpdateReservation.');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileReservationsApi.prototype.readAllMessage = function (reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/messages/readall'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling readAllMessage.');
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/messages'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling sendMessageToReservation.');
        }
        if (createMessageContract === null || createMessageContract === undefined) {
            throw new Error('Required parameter createMessageContract was null or undefined when calling sendMessageToReservation.');
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}'
            .replace('{' + 'reservationId' + '}', String(reservationId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (reservationId === null || reservationId === undefined) {
            throw new Error('Required parameter reservationId was null or undefined when calling updateReservation.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling updateReservation.');
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
    MobileReservationsApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return MobileReservationsApi;
}());
exports.MobileReservationsApi = MobileReservationsApi;
//# sourceMappingURL=MobileReservationsApi.js.map