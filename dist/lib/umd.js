(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.listComponent = f()
    }
})(function() {
        var define, module, exports;
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var MobileCoreApi = (function () {
    function MobileCoreApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(MobileCoreApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    MobileCoreApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    MobileCoreApi.prototype.addExternalLogin = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/addExternalLogin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling addExternalLogin');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.changePassword = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/changePassword';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling changePassword');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.checkIn = function (checkinContract, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/restaurant/checkin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!checkinContract) {
            throw new Error('Missing required parameter checkinContract when calling checkIn');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.findRestaurants = function (lat, lon, name, city, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/restaurants/find';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileCoreApi.prototype.getAllRestaurants = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/restaurants';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileCoreApi.prototype.getListOfLocations = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/locations';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileCoreApi.prototype.getManageInfo = function (returnUrl, generateState, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/manageInfo';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!returnUrl) {
            throw new Error('Missing required parameter returnUrl when calling getManageInfo');
        }
        if (returnUrl !== undefined) {
            queryParameters['returnUrl'] = returnUrl;
        }
        if (generateState !== undefined) {
            queryParameters['generateState'] = generateState;
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
    MobileCoreApi.prototype.getRegistrationToken = function (token, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/campaign/{token}'
            .replace('{' + 'token' + '}', String(token));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!token) {
            throw new Error('Missing required parameter token when calling getRegistrationToken');
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
    MobileCoreApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/restaurants/{restaurantId}/availability'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getReservationAvailability');
        }
        if (!date) {
            throw new Error('Missing required parameter date when calling getReservationAvailability');
        }
        if (!partySize) {
            throw new Error('Missing required parameter partySize when calling getReservationAvailability');
        }
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
    MobileCoreApi.prototype.getRestaurantById = function (id, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/restaurants/{id}'
            .replace('{' + 'id' + '}', String(id));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!id) {
            throw new Error('Missing required parameter id when calling getRestaurantById');
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
    MobileCoreApi.prototype.getUserProfile = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/profile';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileCoreApi.prototype.postProfileImage = function (image, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/profile/image';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!image) {
            throw new Error('Missing required parameter image when calling postProfileImage');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.profileImage = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/profile/image';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileCoreApi.prototype.register = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/register';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling register');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.registerExternal = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/registerExternal';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling registerExternal');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.removeLogin = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/removeLogin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling removeLogin');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.resetPassword = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/resetPassword';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling resetPassword');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.setPassword = function (model, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/setPassword';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!model) {
            throw new Error('Missing required parameter model when calling setPassword');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.setPushChannelAsync = function (channel, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/setPushChannel';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!channel) {
            throw new Error('Missing required parameter channel when calling setPushChannelAsync');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.prototype.updateUserProfile = function (profile, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/profile';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!profile) {
            throw new Error('Missing required parameter profile when calling updateUserProfile');
        }
        var httpRequestParams = {
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
    };
    MobileCoreApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return MobileCoreApi;
}());
exports.MobileCoreApi = MobileCoreApi;

},{"./auth":6}],2:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var MobileLoyaltyApi = (function () {
    function MobileLoyaltyApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(MobileLoyaltyApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    MobileLoyaltyApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    MobileLoyaltyApi.prototype.cancelMembershipAtRestaurant = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling cancelMembershipAtRestaurant');
        }
        var httpRequestParams = {
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
    };
    MobileLoyaltyApi.prototype.enrollIntoLoyaltyProgram = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling enrollIntoLoyaltyProgram');
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
    MobileLoyaltyApi.prototype.getAllUserMemberships = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileLoyaltyApi.prototype.getCustomerRedeemRequests = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getCustomerRedeemRequests');
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
    MobileLoyaltyApi.prototype.getMemberRewardOptions = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMemberRewardOptions');
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
    MobileLoyaltyApi.prototype.getMemberTransactions = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/transactions'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMemberTransactions');
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
    MobileLoyaltyApi.prototype.getMembershipByRestaurantId = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getMembershipByRestaurantId');
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
    MobileLoyaltyApi.prototype.getRedeemRequestInfo = function (restaurantId, redeemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems/{redeemId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'redeemId' + '}', String(redeemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getRedeemRequestInfo');
        }
        if (!redeemId) {
            throw new Error('Missing required parameter redeemId when calling getRedeemRequestInfo');
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
    MobileLoyaltyApi.prototype.submitRequestForRedeem = function (restaurantId, rewardId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards/{rewardId}/redeem'
            .replace('{' + 'restaurantId' + '}', String(restaurantId))
            .replace('{' + 'rewardId' + '}', String(rewardId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling submitRequestForRedeem');
        }
        if (!rewardId) {
            throw new Error('Missing required parameter rewardId when calling submitRequestForRedeem');
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
    MobileLoyaltyApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return MobileLoyaltyApi;
}());
exports.MobileLoyaltyApi = MobileLoyaltyApi;

},{"./auth":6}],3:[function(require,module,exports){
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/cancel'
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}'
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
    MobileReservationsApi.prototype.readAllMessage = function (reservationId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/messages/readall'
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}/messages'
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
        var localVarPath = this.config.basePath + '/api/rsv/mb/reservations/{reservationId}'
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
    MobileReservationsApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return MobileReservationsApi;
}());
exports.MobileReservationsApi = MobileReservationsApi;

},{"./auth":6}],4:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var MobileWaitingManagementApi = (function () {
    function MobileWaitingManagementApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(MobileWaitingManagementApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    MobileWaitingManagementApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    MobileWaitingManagementApi.prototype.checkInWithWaiting = function (waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/checkin'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling checkInWithWaiting');
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.prototype.close = function (waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/close'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling close');
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.prototype.confirmWithApp = function (confirmationCode, conf, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/confirm/{confirmationCode}'
            .replace('{' + 'confirmationCode' + '}', String(confirmationCode));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!confirmationCode) {
            throw new Error('Missing required parameter confirmationCode when calling confirmWithApp');
        }
        if (!conf) {
            throw new Error('Missing required parameter conf when calling confirmWithApp');
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.prototype.getInLine = function (value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!value) {
            throw new Error('Missing required parameter value when calling getInLine');
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
    MobileWaitingManagementApi.prototype.getUserCurrentWaiting = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
    MobileWaitingManagementApi.prototype.leaveTheLine = function (waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/cancel'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling leaveTheLine');
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.prototype.markAllMessagesAsRead = function (waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/messages/readall'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling markAllMessagesAsRead');
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
    MobileWaitingManagementApi.prototype.putOnHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/putonhold'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling putOnHold');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling putOnHold');
        }
        if (restaurantId !== undefined) {
            queryParameters['restaurantId'] = restaurantId;
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.prototype.sendMessageToWaiting = function (waitingItemId, createMessage, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/sendmessage'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling sendMessageToWaiting');
        }
        if (!createMessage) {
            throw new Error('Missing required parameter createMessage when calling sendMessageToWaiting');
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.prototype.takeOffHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/wm/mb/waitings/{waitingItemId}/takeoffhold'
            .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling takeOffHold');
        }
        if (!waitingItemId) {
            throw new Error('Missing required parameter waitingItemId when calling takeOffHold');
        }
        if (restaurantId !== undefined) {
            queryParameters['restaurantId'] = restaurantId;
        }
        var httpRequestParams = {
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
    };
    MobileWaitingManagementApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return MobileWaitingManagementApi;
}());
exports.MobileWaitingManagementApi = MobileWaitingManagementApi;

},{"./auth":6}],5:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./MobileCoreApi'));
__export(require('./MobileLoyaltyApi'));
__export(require('./MobileReservationsApi'));
__export(require('./MobileWaitingManagementApi'));

},{"./MobileCoreApi":1,"./MobileLoyaltyApi":2,"./MobileReservationsApi":3,"./MobileWaitingManagementApi":4}],6:[function(require,module,exports){
"use strict";
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (httpRequestParams) {
        httpRequestParams.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (httpRequestParams) {
        if (this.location === 'query') {
            httpRequestParams.qs[this.paramName] = this.apiKey;
        }
        else if (this.location === 'header') {
            httpRequestParams.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (httpRequestParams) {
        httpRequestParams.headers['Authorization'] = 'Bearer ' + this.accessToken;
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (httpRequestParams) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;

},{}],7:[function(require,module,exports){
"use strict";
var AuthorizationService = (function () {
    function AuthorizationService($http, $q, config, $httpParamSerializer) {
        this.$http = $http;
        this.$q = $q;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
    }
    AuthorizationService.prototype.Authorize = function (api, userName, password) {
        var deffer = this.$q.defer();
        this.getToken(userName, password).then(function (response) {
            api.authentications.oauth2.accessToken = response.access_token;
            deffer.resolve();
        }, function (params) {
            deffer.reject(params);
        });
        return deffer.promise;
    };
    AuthorizationService.prototype.getToken = function (userName, password) {
        var deffer = this.$q.defer();
        var localVarPath = this.config.basePath + '/Token';
        var headerParams = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
        var value = {
            username: userName,
            password: password,
            grant_type: 'password'
        };
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: this.$httpParamSerializer(value),
            headers: headerParams
        };
        this.$http(httpRequestParams).then(function (response) {
            deffer.resolve(response.data);
        });
        return deffer.promise;
    };
    ;
    AuthorizationService.$inject = ['$http', '$q', 'IApiConfig', '$httpParamSerializer'];
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;

},{}],8:[function(require,module,exports){
'use strict';
var IEdmSchemaElement;
(function (IEdmSchemaElement) {
    (function (SchemaElementKindEnum) {
        SchemaElementKindEnum[SchemaElementKindEnum["None"] = 'None'] = "None";
        SchemaElementKindEnum[SchemaElementKindEnum["TypeDefinition"] = 'TypeDefinition'] = "TypeDefinition";
        SchemaElementKindEnum[SchemaElementKindEnum["Function"] = 'Function'] = "Function";
        SchemaElementKindEnum[SchemaElementKindEnum["ValueTerm"] = 'ValueTerm'] = "ValueTerm";
        SchemaElementKindEnum[SchemaElementKindEnum["EntityContainer"] = 'EntityContainer'] = "EntityContainer";
    })(IEdmSchemaElement.SchemaElementKindEnum || (IEdmSchemaElement.SchemaElementKindEnum = {}));
    var SchemaElementKindEnum = IEdmSchemaElement.SchemaElementKindEnum;
})(IEdmSchemaElement = exports.IEdmSchemaElement || (exports.IEdmSchemaElement = {}));

},{}],9:[function(require,module,exports){
'use strict';
var IEdmTerm;
(function (IEdmTerm) {
    (function (TermKindEnum) {
        TermKindEnum[TermKindEnum["None"] = 'None'] = "None";
        TermKindEnum[TermKindEnum["Type"] = 'Type'] = "Type";
        TermKindEnum[TermKindEnum["Value"] = 'Value'] = "Value";
    })(IEdmTerm.TermKindEnum || (IEdmTerm.TermKindEnum = {}));
    var TermKindEnum = IEdmTerm.TermKindEnum;
    (function (SchemaElementKindEnum) {
        SchemaElementKindEnum[SchemaElementKindEnum["None"] = 'None'] = "None";
        SchemaElementKindEnum[SchemaElementKindEnum["TypeDefinition"] = 'TypeDefinition'] = "TypeDefinition";
        SchemaElementKindEnum[SchemaElementKindEnum["Function"] = 'Function'] = "Function";
        SchemaElementKindEnum[SchemaElementKindEnum["ValueTerm"] = 'ValueTerm'] = "ValueTerm";
        SchemaElementKindEnum[SchemaElementKindEnum["EntityContainer"] = 'EntityContainer'] = "EntityContainer";
    })(IEdmTerm.SchemaElementKindEnum || (IEdmTerm.SchemaElementKindEnum = {}));
    var SchemaElementKindEnum = IEdmTerm.SchemaElementKindEnum;
})(IEdmTerm = exports.IEdmTerm || (exports.IEdmTerm = {}));

},{}],10:[function(require,module,exports){
'use strict';
var IEdmType;
(function (IEdmType) {
    (function (TypeKindEnum) {
        TypeKindEnum[TypeKindEnum["None"] = 'None'] = "None";
        TypeKindEnum[TypeKindEnum["Primitive"] = 'Primitive'] = "Primitive";
        TypeKindEnum[TypeKindEnum["Entity"] = 'Entity'] = "Entity";
        TypeKindEnum[TypeKindEnum["Complex"] = 'Complex'] = "Complex";
        TypeKindEnum[TypeKindEnum["Row"] = 'Row'] = "Row";
        TypeKindEnum[TypeKindEnum["Collection"] = 'Collection'] = "Collection";
        TypeKindEnum[TypeKindEnum["EntityReference"] = 'EntityReference'] = "EntityReference";
        TypeKindEnum[TypeKindEnum["Enum"] = 'Enum'] = "Enum";
    })(IEdmType.TypeKindEnum || (IEdmType.TypeKindEnum = {}));
    var TypeKindEnum = IEdmType.TypeKindEnum;
})(IEdmType = exports.IEdmType || (exports.IEdmType = {}));

},{}],11:[function(require,module,exports){
'use strict';
var OnlineAvailability;
(function (OnlineAvailability) {
    (function (AvailabilityLevelEnum) {
        AvailabilityLevelEnum[AvailabilityLevelEnum["Available"] = 'Available'] = "Available";
        AvailabilityLevelEnum[AvailabilityLevelEnum["AvailableForWait"] = 'AvailableForWait'] = "AvailableForWait";
        AvailabilityLevelEnum[AvailabilityLevelEnum["NotEnoughCovers"] = 'NotEnoughCovers'] = "NotEnoughCovers";
        AvailabilityLevelEnum[AvailabilityLevelEnum["Overbooked"] = 'Overbooked'] = "Overbooked";
    })(OnlineAvailability.AvailabilityLevelEnum || (OnlineAvailability.AvailabilityLevelEnum = {}));
    var AvailabilityLevelEnum = OnlineAvailability.AvailabilityLevelEnum;
})(OnlineAvailability = exports.OnlineAvailability || (exports.OnlineAvailability = {}));

},{}],12:[function(require,module,exports){
'use strict';
var OrderByClause;
(function (OrderByClause) {
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["Ascending"] = 'Ascending'] = "Ascending";
        DirectionEnum[DirectionEnum["Descending"] = 'Descending'] = "Descending";
    })(OrderByClause.DirectionEnum || (OrderByClause.DirectionEnum = {}));
    var DirectionEnum = OrderByClause.DirectionEnum;
})(OrderByClause = exports.OrderByClause || (exports.OrderByClause = {}));

},{}],13:[function(require,module,exports){
'use strict';
var RedeemRequestInfo;
(function (RedeemRequestInfo) {
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Submited"] = 'Submited'] = "Submited";
        StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
        StatusEnum[StatusEnum["Rejected"] = 'Rejected'] = "Rejected";
    })(RedeemRequestInfo.StatusEnum || (RedeemRequestInfo.StatusEnum = {}));
    var StatusEnum = RedeemRequestInfo.StatusEnum;
})(RedeemRequestInfo = exports.RedeemRequestInfo || (exports.RedeemRequestInfo = {}));

},{}],14:[function(require,module,exports){
'use strict';
var Reservation;
(function (Reservation) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
        TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
    })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
    var TypeEnum = Reservation.TypeEnum;
})(Reservation = exports.Reservation || (exports.Reservation = {}));

},{}],15:[function(require,module,exports){
'use strict';
var RewardValue;
(function (RewardValue) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Discount"] = 'Discount'] = "Discount";
        TypeEnum[TypeEnum["FreeMeal"] = 'FreeMeal'] = "FreeMeal";
        TypeEnum[TypeEnum["MoneyOff"] = 'MoneyOff'] = "MoneyOff";
    })(RewardValue.TypeEnum || (RewardValue.TypeEnum = {}));
    var TypeEnum = RewardValue.TypeEnum;
})(RewardValue = exports.RewardValue || (exports.RewardValue = {}));

},{}],16:[function(require,module,exports){
'use strict';
var SingleValueNode;
(function (SingleValueNode) {
    (function (KindEnum) {
        KindEnum[KindEnum["None"] = 'None'] = "None";
        KindEnum[KindEnum["Constant"] = 'Constant'] = "Constant";
        KindEnum[KindEnum["Convert"] = 'Convert'] = "Convert";
        KindEnum[KindEnum["NonentityRangeVariableReference"] = 'NonentityRangeVariableReference'] = "NonentityRangeVariableReference";
        KindEnum[KindEnum["BinaryOperator"] = 'BinaryOperator'] = "BinaryOperator";
        KindEnum[KindEnum["UnaryOperator"] = 'UnaryOperator'] = "UnaryOperator";
        KindEnum[KindEnum["SingleValuePropertyAccess"] = 'SingleValuePropertyAccess'] = "SingleValuePropertyAccess";
        KindEnum[KindEnum["CollectionPropertyAccess"] = 'CollectionPropertyAccess'] = "CollectionPropertyAccess";
        KindEnum[KindEnum["SingleValueFunctionCall"] = 'SingleValueFunctionCall'] = "SingleValueFunctionCall";
        KindEnum[KindEnum["Any"] = 'Any'] = "Any";
        KindEnum[KindEnum["CollectionNavigationNode"] = 'CollectionNavigationNode'] = "CollectionNavigationNode";
        KindEnum[KindEnum["SingleNavigationNode"] = 'SingleNavigationNode'] = "SingleNavigationNode";
        KindEnum[KindEnum["SingleValueOpenPropertyAccess"] = 'SingleValueOpenPropertyAccess'] = "SingleValueOpenPropertyAccess";
        KindEnum[KindEnum["SingleEntityCast"] = 'SingleEntityCast'] = "SingleEntityCast";
        KindEnum[KindEnum["All"] = 'All'] = "All";
        KindEnum[KindEnum["EntityCollectionCast"] = 'EntityCollectionCast'] = "EntityCollectionCast";
        KindEnum[KindEnum["EntityRangeVariableReference"] = 'EntityRangeVariableReference'] = "EntityRangeVariableReference";
        KindEnum[KindEnum["SingleEntityFunctionCall"] = 'SingleEntityFunctionCall'] = "SingleEntityFunctionCall";
        KindEnum[KindEnum["CollectionFunctionCall"] = 'CollectionFunctionCall'] = "CollectionFunctionCall";
        KindEnum[KindEnum["EntityCollectionFunctionCall"] = 'EntityCollectionFunctionCall'] = "EntityCollectionFunctionCall";
        KindEnum[KindEnum["NamedFunctionParameter"] = 'NamedFunctionParameter'] = "NamedFunctionParameter";
    })(SingleValueNode.KindEnum || (SingleValueNode.KindEnum = {}));
    var KindEnum = SingleValueNode.KindEnum;
})(SingleValueNode = exports.SingleValueNode || (exports.SingleValueNode = {}));

},{}],17:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./IEdmSchemaElement'));
__export(require('./IEdmTerm'));
__export(require('./IEdmType'));
__export(require('./OnlineAvailability'));
__export(require('./OrderByClause'));
__export(require('./RedeemRequestInfo'));
__export(require('./Reservation'));
__export(require('./RewardValue'));
__export(require('./SingleValueNode'));

},{"./IEdmSchemaElement":8,"./IEdmTerm":9,"./IEdmType":10,"./OnlineAvailability":11,"./OrderByClause":12,"./RedeemRequestInfo":13,"./Reservation":14,"./RewardValue":15,"./SingleValueNode":16}],"hostme-sdk-angular-mobile":[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./api/api'));
__export(require('./model/models'));
var AuthorizationService_1 = require('./client/AuthorizationService');
exports.AuthorizationService = AuthorizationService_1.AuthorizationService;

},{"./api/api":5,"./client/AuthorizationService":7,"./model/models":17}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2xpYi9hcGkvTW9iaWxlQ29yZUFwaS5qcyIsImRpc3QvbGliL2FwaS9Nb2JpbGVMb3lhbHR5QXBpLmpzIiwiZGlzdC9saWIvYXBpL01vYmlsZVJlc2VydmF0aW9uc0FwaS5qcyIsImRpc3QvbGliL2FwaS9Nb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5qcyIsImRpc3QvbGliL2FwaS9hcGkuanMiLCJkaXN0L2xpYi9hcGkvYXV0aC5qcyIsImRpc3QvbGliL2NsaWVudC9BdXRob3JpemF0aW9uU2VydmljZS5qcyIsImRpc3QvbGliL21vZGVsL0lFZG1TY2hlbWFFbGVtZW50LmpzIiwiZGlzdC9saWIvbW9kZWwvSUVkbVRlcm0uanMiLCJkaXN0L2xpYi9tb2RlbC9JRWRtVHlwZS5qcyIsImRpc3QvbGliL21vZGVsL09ubGluZUF2YWlsYWJpbGl0eS5qcyIsImRpc3QvbGliL21vZGVsL09yZGVyQnlDbGF1c2UuanMiLCJkaXN0L2xpYi9tb2RlbC9SZWRlZW1SZXF1ZXN0SW5mby5qcyIsImRpc3QvbGliL21vZGVsL1Jlc2VydmF0aW9uLmpzIiwiZGlzdC9saWIvbW9kZWwvUmV3YXJkVmFsdWUuanMiLCJkaXN0L2xpYi9tb2RlbC9TaW5nbGVWYWx1ZU5vZGUuanMiLCJkaXN0L2xpYi9tb2RlbC9tb2RlbHMuanMiLCJkaXN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJyk7XHJcbid1c2Ugc3RyaWN0JztcclxudmFyIE1vYmlsZUNvcmVBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9iaWxlQ29yZUFwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUsIFwiYWNjZXNzVG9rZW5cIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hY2Nlc3NUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuYWRkRXh0ZXJuYWxMb2dpbiA9IGZ1bmN0aW9uIChtb2RlbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9hZGRFeHRlcm5hbExvZ2luJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIW1vZGVsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgbW9kZWwgd2hlbiBjYWxsaW5nIGFkZEV4dGVybmFsTG9naW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAobW9kZWwsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvY2hhbmdlUGFzc3dvcmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3aGVuIGNhbGxpbmcgY2hhbmdlUGFzc3dvcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuY2hlY2tJbiA9IGZ1bmN0aW9uIChjaGVja2luQ29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL3Jlc3RhdXJhbnQvY2hlY2tpbic7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFjaGVja2luQ29udHJhY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjaGVja2luQ29udHJhY3Qgd2hlbiBjYWxsaW5nIGNoZWNrSW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY2hlY2tpbkNvbnRyYWN0LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZmluZFJlc3RhdXJhbnRzID0gZnVuY3Rpb24gKGxhdCwgbG9uLCBuYW1lLCBjaXR5LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9yZXN0YXVyYW50cy9maW5kJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAobGF0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydsYXQnXSA9IGxhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snbG9uJ10gPSBsb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyduYW1lJ10gPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snY2l0eSddID0gY2l0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmdldEFsbFJlc3RhdXJhbnRzID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL3Jlc3RhdXJhbnRzJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZ2V0TGlzdE9mTG9jYXRpb25zID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2xvY2F0aW9ucyc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmdldE1hbmFnZUluZm8gPSBmdW5jdGlvbiAocmV0dXJuVXJsLCBnZW5lcmF0ZVN0YXRlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L21hbmFnZUluZm8nO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmV0dXJuVXJsIHdoZW4gY2FsbGluZyBnZXRNYW5hZ2VJbmZvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXR1cm5VcmwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3JldHVyblVybCddID0gcmV0dXJuVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2VuZXJhdGVTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZ2VuZXJhdGVTdGF0ZSddID0gZ2VuZXJhdGVTdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmdldFJlZ2lzdHJhdGlvblRva2VuID0gZnVuY3Rpb24gKHRva2VuLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9jYW1wYWlnbi97dG9rZW59J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAndG9rZW4nICsgJ30nLCBTdHJpbmcodG9rZW4pKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdG9rZW4gd2hlbiBjYWxsaW5nIGdldFJlZ2lzdHJhdGlvblRva2VuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5nZXRSZXNlcnZhdGlvbkF2YWlsYWJpbGl0eSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGRhdGUsIHBhcnR5U2l6ZSwgcmFuZ2VJbk1pbnV0ZXMsIGFyZWFzLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9hdmFpbGFiaWxpdHknXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGRhdGUgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcGFydHlTaXplKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcGFydHlTaXplIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbkF2YWlsYWJpbGl0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJhbmdlSW5NaW51dGVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmFuZ2VJbk1pbnV0ZXMgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydkYXRlJ10gPSBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFydHlTaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydwYXJ0eVNpemUnXSA9IHBhcnR5U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmdlSW5NaW51dGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydyYW5nZUluTWludXRlcyddID0gcmFuZ2VJbk1pbnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmVhcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snYXJlYXMnXSA9IGFyZWFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZ2V0UmVzdGF1cmFudEJ5SWQgPSBmdW5jdGlvbiAoaWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL3Jlc3RhdXJhbnRzL3tpZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdpZCcgKyAnfScsIFN0cmluZyhpZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBpZCB3aGVuIGNhbGxpbmcgZ2V0UmVzdGF1cmFudEJ5SWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmdldFVzZXJQcm9maWxlID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvcHJvZmlsZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLnBvc3RQcm9maWxlSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvcHJvZmlsZS9pbWFnZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFpbWFnZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGltYWdlIHdoZW4gY2FsbGluZyBwb3N0UHJvZmlsZUltYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBpbWFnZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLnByb2ZpbGVJbWFnZSA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3Byb2ZpbGUvaW1hZ2UnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChtb2RlbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9yZWdpc3Rlcic7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdoZW4gY2FsbGluZyByZWdpc3RlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5yZWdpc3RlckV4dGVybmFsID0gZnVuY3Rpb24gKG1vZGVsLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3JlZ2lzdGVyRXh0ZXJuYWwnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3aGVuIGNhbGxpbmcgcmVnaXN0ZXJFeHRlcm5hbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5yZW1vdmVMb2dpbiA9IGZ1bmN0aW9uIChtb2RlbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9yZW1vdmVMb2dpbic7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdoZW4gY2FsbGluZyByZW1vdmVMb2dpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKG1vZGVsLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3Jlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3aGVuIGNhbGxpbmcgcmVzZXRQYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5zZXRQYXNzd29yZCA9IGZ1bmN0aW9uIChtb2RlbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9zZXRQYXNzd29yZCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdoZW4gY2FsbGluZyBzZXRQYXNzd29yZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5zZXRQdXNoQ2hhbm5lbEFzeW5jID0gZnVuY3Rpb24gKGNoYW5uZWwsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvc2V0UHVzaENoYW5uZWwnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghY2hhbm5lbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIGNoYW5uZWwgd2hlbiBjYWxsaW5nIHNldFB1c2hDaGFubmVsQXN5bmMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYW5uZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS51cGRhdGVVc2VyUHJvZmlsZSA9IGZ1bmN0aW9uIChwcm9maWxlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3Byb2ZpbGUnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcHJvZmlsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHByb2ZpbGUgd2hlbiBjYWxsaW5nIHVwZGF0ZVVzZXJQcm9maWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb2ZpbGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLiRpbmplY3QgPSBbJyRodHRwJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBNb2JpbGVDb3JlQXBpO1xyXG59KCkpO1xyXG5leHBvcnRzLk1vYmlsZUNvcmVBcGkgPSBNb2JpbGVDb3JlQXBpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2JpbGVDb3JlQXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpO1xyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBNb2JpbGVMb3lhbHR5QXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vYmlsZUxveWFsdHlBcGkoJGh0dHAsIGNvbmZpZywgJGh0dHBQYXJhbVNlcmlhbGl6ZXIpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplciA9ICRodHRwUGFyYW1TZXJpYWxpemVyO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucyA9IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBuZXcgYXV0aC5Wb2lkQXV0aCgpLFxyXG4gICAgICAgICAgICAnb2F1dGgyJzogbmV3IGF1dGguT0F1dGgoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLCBcImFjY2Vzc1Rva2VuXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYWNjZXNzVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmNhbmNlbE1lbWJlcnNoaXBBdFJlc3RhdXJhbnQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBjYW5jZWxNZW1iZXJzaGlwQXRSZXN0YXVyYW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVMb3lhbHR5QXBpLnByb3RvdHlwZS5lbnJvbGxJbnRvTG95YWx0eVByb2dyYW0gPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBlbnJvbGxJbnRvTG95YWx0eVByb2dyYW0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVMb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRBbGxVc2VyTWVtYmVyc2hpcHMgPSBmdW5jdGlvbiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvbWIvbWVtYmVyc2hpcCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmdldEN1c3RvbWVyUmVkZWVtUmVxdWVzdHMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9L3JlZGVlbXMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldEN1c3RvbWVyUmVkZWVtUmVxdWVzdHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmdldE1lbWJlclJld2FyZE9wdGlvbnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9L3Jld2FyZHMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlclJld2FyZE9wdGlvbnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmdldE1lbWJlclRyYW5zYWN0aW9ucyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L21iL21lbWJlcnNoaXAve3Jlc3RhdXJhbnRJZH0vdHJhbnNhY3Rpb25zJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRNZW1iZXJUcmFuc2FjdGlvbnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmdldE1lbWJlcnNoaXBCeVJlc3RhdXJhbnRJZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L21iL21lbWJlcnNoaXAve3Jlc3RhdXJhbnRJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlcnNoaXBCeVJlc3RhdXJhbnRJZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUuZ2V0UmVkZWVtUmVxdWVzdEluZm8gPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCByZWRlZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvbWIvbWVtYmVyc2hpcC97cmVzdGF1cmFudElkfS9yZWRlZW1zL3tyZWRlZW1JZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3JlZGVlbUlkJyArICd9JywgU3RyaW5nKHJlZGVlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFJlZGVlbVJlcXVlc3RJbmZvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVkZWVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZWRlZW1JZCB3aGVuIGNhbGxpbmcgZ2V0UmVkZWVtUmVxdWVzdEluZm8nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLnN1Ym1pdFJlcXVlc3RGb3JSZWRlZW0gPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCByZXdhcmRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvbWIvbWVtYmVyc2hpcC97cmVzdGF1cmFudElkfS9yZXdhcmRzL3tyZXdhcmRJZH0vcmVkZWVtJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXdhcmRJZCcgKyAnfScsIFN0cmluZyhyZXdhcmRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBzdWJtaXRSZXF1ZXN0Rm9yUmVkZWVtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV3YXJkSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXdhcmRJZCB3aGVuIGNhbGxpbmcgc3VibWl0UmVxdWVzdEZvclJlZGVlbScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS4kaW5qZWN0ID0gWyckaHR0cCcsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gTW9iaWxlTG95YWx0eUFwaTtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2JpbGVMb3lhbHR5QXBpID0gTW9iaWxlTG95YWx0eUFwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9iaWxlTG95YWx0eUFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgTW9iaWxlUmVzZXJ2YXRpb25zQXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vYmlsZVJlc2VydmF0aW9uc0FwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9iaWxlUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuYWRkTmV3UmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAodmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgd2hlbiBjYWxsaW5nIGFkZE5ld1Jlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuY2xvc2VBc0NhbmNlbGVkID0gZnVuY3Rpb24gKHJlc2VydmF0aW9uSWQsIGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9jYW5jZWwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyBjbG9zZUFzQ2FuY2VsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjYW5jZWxSZXNlcnZhdGlvbkNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY2FuY2VsUmVzZXJ2YXRpb25Db250cmFjdCB3aGVuIGNhbGxpbmcgY2xvc2VBc0NhbmNlbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmdldFJlc2VydmF0aW9uQnlJZCA9IGZ1bmN0aW9uIChyZXNlcnZhdGlvbklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L21iL3Jlc2VydmF0aW9ucy97cmVzZXJ2YXRpb25JZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbkJ5SWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ2V0VXNlclJlc2VydmF0aW9ucyA9IGZ1bmN0aW9uIChxdWVyeU9wdGlvbnMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocXVlcnlPcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydxdWVyeU9wdGlvbnMnXSA9IHF1ZXJ5T3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUucmVhZEFsbE1lc3NhZ2UgPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9yZXNlcnZhdGlvbnMve3Jlc2VydmF0aW9uSWR9L21lc3NhZ2VzL3JlYWRhbGwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc2VydmF0aW9uSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdoZW4gY2FsbGluZyByZWFkQWxsTWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuc2VuZE1lc3NhZ2VUb1Jlc2VydmF0aW9uID0gZnVuY3Rpb24gKHJlc2VydmF0aW9uSWQsIGNyZWF0ZU1lc3NhZ2VDb250cmFjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9yZXNlcnZhdGlvbnMve3Jlc2VydmF0aW9uSWR9L21lc3NhZ2VzJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXNlcnZhdGlvbklkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzZXJ2YXRpb25JZCB3aGVuIGNhbGxpbmcgc2VuZE1lc3NhZ2VUb1Jlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY3JlYXRlTWVzc2FnZUNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlTWVzc2FnZUNvbnRyYWN0IHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZVRvUmVzZXJ2YXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNyZWF0ZU1lc3NhZ2VDb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUudXBkYXRlUmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgdmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzZXJ2YXRpb25JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc2VydmF0aW9uSWQgd2hlbiBjYWxsaW5nIHVwZGF0ZVJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB2YWx1ZSB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzZXJ2YXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkuJGluamVjdCA9IFsnJGh0dHAnLCAnSUFwaUNvbmZpZycsICckaHR0cFBhcmFtU2VyaWFsaXplciddO1xyXG4gICAgcmV0dXJuIE1vYmlsZVJlc2VydmF0aW9uc0FwaTtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2JpbGVSZXNlcnZhdGlvbnNBcGkgPSBNb2JpbGVSZXNlcnZhdGlvbnNBcGk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vYmlsZVJlc2VydmF0aW9uc0FwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkoJGh0dHAsIGNvbmZpZywgJGh0dHBQYXJhbVNlcmlhbGl6ZXIpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplciA9ICRodHRwUGFyYW1TZXJpYWxpemVyO1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEhlYWRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucyA9IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBuZXcgYXV0aC5Wb2lkQXV0aCgpLFxyXG4gICAgICAgICAgICAnb2F1dGgyJzogbmV3IGF1dGguT0F1dGgoKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmNoZWNrSW5XaXRoV2FpdGluZyA9IGZ1bmN0aW9uICh3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L2NoZWNraW4nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXdhaXRpbmdJdGVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdoZW4gY2FsbGluZyBjaGVja0luV2l0aFdhaXRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICh3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L2Nsb3NlJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgY2xvc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5jb25maXJtV2l0aEFwcCA9IGZ1bmN0aW9uIChjb25maXJtYXRpb25Db2RlLCBjb25mLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3MvY29uZmlybS97Y29uZmlybWF0aW9uQ29kZX0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdjb25maXJtYXRpb25Db2RlJyArICd9JywgU3RyaW5nKGNvbmZpcm1hdGlvbkNvZGUpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIWNvbmZpcm1hdGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjb25maXJtYXRpb25Db2RlIHdoZW4gY2FsbGluZyBjb25maXJtV2l0aEFwcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmYpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjb25mIHdoZW4gY2FsbGluZyBjb25maXJtV2l0aEFwcCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY29uZixcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5nZXRJbkxpbmUgPSBmdW5jdGlvbiAodmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncyc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHZhbHVlIHdoZW4gY2FsbGluZyBnZXRJbkxpbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmdldFVzZXJDdXJyZW50V2FpdGluZyA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3MnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUubGVhdmVUaGVMaW5lID0gZnVuY3Rpb24gKHdhaXRpbmdJdGVtSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vY2FuY2VsJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgbGVhdmVUaGVMaW5lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUubWFya0FsbE1lc3NhZ2VzQXNSZWFkID0gZnVuY3Rpb24gKHdhaXRpbmdJdGVtSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vbWVzc2FnZXMvcmVhZGFsbCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRpbmdJdGVtSWQnICsgJ30nLCBTdHJpbmcod2FpdGluZ0l0ZW1JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghd2FpdGluZ0l0ZW1JZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHdhaXRpbmdJdGVtSWQgd2hlbiBjYWxsaW5nIG1hcmtBbGxNZXNzYWdlc0FzUmVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5wdXRPbkhvbGQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L3B1dG9uaG9sZCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRpbmdJdGVtSWQnICsgJ30nLCBTdHJpbmcod2FpdGluZ0l0ZW1JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBwdXRPbkhvbGQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgcHV0T25Ib2xkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN0YXVyYW50SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3Jlc3RhdXJhbnRJZCddID0gcmVzdGF1cmFudElkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLnNlbmRNZXNzYWdlVG9XYWl0aW5nID0gZnVuY3Rpb24gKHdhaXRpbmdJdGVtSWQsIGNyZWF0ZU1lc3NhZ2UsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vc2VuZG1lc3NhZ2UnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXdhaXRpbmdJdGVtSWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZVRvV2FpdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNyZWF0ZU1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBjcmVhdGVNZXNzYWdlIHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZVRvV2FpdGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY3JlYXRlTWVzc2FnZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS50YWtlT2ZmSG9sZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRpbmdJdGVtSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vdGFrZW9mZmhvbGQnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgdGFrZU9mZkhvbGQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF3YWl0aW5nSXRlbUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3aGVuIGNhbGxpbmcgdGFrZU9mZkhvbGQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncmVzdGF1cmFudElkJ10gPSByZXN0YXVyYW50SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS4kaW5qZWN0ID0gWyckaHR0cCcsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkgPSBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL01vYmlsZUNvcmVBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vTW9iaWxlTG95YWx0eUFwaScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9Nb2JpbGVSZXNlcnZhdGlvbnNBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGknKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEh0dHBCYXNpY0F1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cEJhc2ljQXV0aCgpIHtcclxuICAgIH1cclxuICAgIEh0dHBCYXNpY0F1dGgucHJvdG90eXBlLmFwcGx5VG9SZXF1ZXN0ID0gZnVuY3Rpb24gKGh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuYXV0aCA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSHR0cEJhc2ljQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5IdHRwQmFzaWNBdXRoID0gSHR0cEJhc2ljQXV0aDtcclxudmFyIEFwaUtleUF1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBpS2V5QXV0aChsb2NhdGlvbiwgcGFyYW1OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucGFyYW1OYW1lID0gcGFyYW1OYW1lO1xyXG4gICAgfVxyXG4gICAgQXBpS2V5QXV0aC5wcm90b3R5cGUuYXBwbHlUb1JlcXVlc3QgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbiA9PT0gJ3F1ZXJ5Jykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcy5xc1t0aGlzLnBhcmFtTmFtZV0gPSB0aGlzLmFwaUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sb2NhdGlvbiA9PT0gJ2hlYWRlcicpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuaGVhZGVyc1t0aGlzLnBhcmFtTmFtZV0gPSB0aGlzLmFwaUtleTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaUtleUF1dGg7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpS2V5QXV0aCA9IEFwaUtleUF1dGg7XHJcbnZhciBPQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPQXV0aCgpIHtcclxuICAgIH1cclxuICAgIE9BdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW47XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9BdXRoO1xyXG59KCkpO1xyXG5leHBvcnRzLk9BdXRoID0gT0F1dGg7XHJcbnZhciBWb2lkQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWb2lkQXV0aCgpIHtcclxuICAgIH1cclxuICAgIFZvaWRBdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWb2lkQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5Wb2lkQXV0aCA9IFZvaWRBdXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgQXV0aG9yaXphdGlvblNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0aG9yaXphdGlvblNlcnZpY2UoJGh0dHAsICRxLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgQXV0aG9yaXphdGlvblNlcnZpY2UucHJvdG90eXBlLkF1dGhvcml6ZSA9IGZ1bmN0aW9uIChhcGksIHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHZhciBkZWZmZXIgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUb2tlbih1c2VyTmFtZSwgcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGFwaS5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBkZWZmZXIucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlamVjdChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWZmZXIucHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBBdXRob3JpemF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0VG9rZW4gPSBmdW5jdGlvbiAodXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIGRlZmZlciA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL1Rva2VuJztcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcgfTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplcih2YWx1ZSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmZlci5wcm9taXNlO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBBdXRob3JpemF0aW9uU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5BdXRob3JpemF0aW9uU2VydmljZSA9IEF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BdXRob3JpemF0aW9uU2VydmljZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBJRWRtU2NoZW1hRWxlbWVudDtcclxuKGZ1bmN0aW9uIChJRWRtU2NoZW1hRWxlbWVudCkge1xyXG4gICAgKGZ1bmN0aW9uIChTY2hlbWFFbGVtZW50S2luZEVudW0pIHtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiTm9uZVwiXSA9ICdOb25lJ10gPSBcIk5vbmVcIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiVHlwZURlZmluaXRpb25cIl0gPSAnVHlwZURlZmluaXRpb24nXSA9IFwiVHlwZURlZmluaXRpb25cIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiRnVuY3Rpb25cIl0gPSAnRnVuY3Rpb24nXSA9IFwiRnVuY3Rpb25cIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiVmFsdWVUZXJtXCJdID0gJ1ZhbHVlVGVybSddID0gXCJWYWx1ZVRlcm1cIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiRW50aXR5Q29udGFpbmVyXCJdID0gJ0VudGl0eUNvbnRhaW5lciddID0gXCJFbnRpdHlDb250YWluZXJcIjtcclxuICAgIH0pKElFZG1TY2hlbWFFbGVtZW50LlNjaGVtYUVsZW1lbnRLaW5kRW51bSB8fCAoSUVkbVNjaGVtYUVsZW1lbnQuU2NoZW1hRWxlbWVudEtpbmRFbnVtID0ge30pKTtcclxuICAgIHZhciBTY2hlbWFFbGVtZW50S2luZEVudW0gPSBJRWRtU2NoZW1hRWxlbWVudC5TY2hlbWFFbGVtZW50S2luZEVudW07XHJcbn0pKElFZG1TY2hlbWFFbGVtZW50ID0gZXhwb3J0cy5JRWRtU2NoZW1hRWxlbWVudCB8fCAoZXhwb3J0cy5JRWRtU2NoZW1hRWxlbWVudCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlFZG1TY2hlbWFFbGVtZW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIElFZG1UZXJtO1xyXG4oZnVuY3Rpb24gKElFZG1UZXJtKSB7XHJcbiAgICAoZnVuY3Rpb24gKFRlcm1LaW5kRW51bSkge1xyXG4gICAgICAgIFRlcm1LaW5kRW51bVtUZXJtS2luZEVudW1bXCJOb25lXCJdID0gJ05vbmUnXSA9IFwiTm9uZVwiO1xyXG4gICAgICAgIFRlcm1LaW5kRW51bVtUZXJtS2luZEVudW1bXCJUeXBlXCJdID0gJ1R5cGUnXSA9IFwiVHlwZVwiO1xyXG4gICAgICAgIFRlcm1LaW5kRW51bVtUZXJtS2luZEVudW1bXCJWYWx1ZVwiXSA9ICdWYWx1ZSddID0gXCJWYWx1ZVwiO1xyXG4gICAgfSkoSUVkbVRlcm0uVGVybUtpbmRFbnVtIHx8IChJRWRtVGVybS5UZXJtS2luZEVudW0gPSB7fSkpO1xyXG4gICAgdmFyIFRlcm1LaW5kRW51bSA9IElFZG1UZXJtLlRlcm1LaW5kRW51bTtcclxuICAgIChmdW5jdGlvbiAoU2NoZW1hRWxlbWVudEtpbmRFbnVtKSB7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIk5vbmVcIl0gPSAnTm9uZSddID0gXCJOb25lXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIlR5cGVEZWZpbml0aW9uXCJdID0gJ1R5cGVEZWZpbml0aW9uJ10gPSBcIlR5cGVEZWZpbml0aW9uXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIkZ1bmN0aW9uXCJdID0gJ0Z1bmN0aW9uJ10gPSBcIkZ1bmN0aW9uXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIlZhbHVlVGVybVwiXSA9ICdWYWx1ZVRlcm0nXSA9IFwiVmFsdWVUZXJtXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIkVudGl0eUNvbnRhaW5lclwiXSA9ICdFbnRpdHlDb250YWluZXInXSA9IFwiRW50aXR5Q29udGFpbmVyXCI7XHJcbiAgICB9KShJRWRtVGVybS5TY2hlbWFFbGVtZW50S2luZEVudW0gfHwgKElFZG1UZXJtLlNjaGVtYUVsZW1lbnRLaW5kRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgU2NoZW1hRWxlbWVudEtpbmRFbnVtID0gSUVkbVRlcm0uU2NoZW1hRWxlbWVudEtpbmRFbnVtO1xyXG59KShJRWRtVGVybSA9IGV4cG9ydHMuSUVkbVRlcm0gfHwgKGV4cG9ydHMuSUVkbVRlcm0gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JRWRtVGVybS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBJRWRtVHlwZTtcclxuKGZ1bmN0aW9uIChJRWRtVHlwZSkge1xyXG4gICAgKGZ1bmN0aW9uIChUeXBlS2luZEVudW0pIHtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiTm9uZVwiXSA9ICdOb25lJ10gPSBcIk5vbmVcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiUHJpbWl0aXZlXCJdID0gJ1ByaW1pdGl2ZSddID0gXCJQcmltaXRpdmVcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiRW50aXR5XCJdID0gJ0VudGl0eSddID0gXCJFbnRpdHlcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiQ29tcGxleFwiXSA9ICdDb21wbGV4J10gPSBcIkNvbXBsZXhcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiUm93XCJdID0gJ1JvdyddID0gXCJSb3dcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiQ29sbGVjdGlvblwiXSA9ICdDb2xsZWN0aW9uJ10gPSBcIkNvbGxlY3Rpb25cIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiRW50aXR5UmVmZXJlbmNlXCJdID0gJ0VudGl0eVJlZmVyZW5jZSddID0gXCJFbnRpdHlSZWZlcmVuY2VcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiRW51bVwiXSA9ICdFbnVtJ10gPSBcIkVudW1cIjtcclxuICAgIH0pKElFZG1UeXBlLlR5cGVLaW5kRW51bSB8fCAoSUVkbVR5cGUuVHlwZUtpbmRFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlS2luZEVudW0gPSBJRWRtVHlwZS5UeXBlS2luZEVudW07XHJcbn0pKElFZG1UeXBlID0gZXhwb3J0cy5JRWRtVHlwZSB8fCAoZXhwb3J0cy5JRWRtVHlwZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlFZG1UeXBlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIE9ubGluZUF2YWlsYWJpbGl0eTtcclxuKGZ1bmN0aW9uIChPbmxpbmVBdmFpbGFiaWxpdHkpIHtcclxuICAgIChmdW5jdGlvbiAoQXZhaWxhYmlsaXR5TGV2ZWxFbnVtKSB7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIkF2YWlsYWJsZVwiXSA9ICdBdmFpbGFibGUnXSA9IFwiQXZhaWxhYmxlXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIkF2YWlsYWJsZUZvcldhaXRcIl0gPSAnQXZhaWxhYmxlRm9yV2FpdCddID0gXCJBdmFpbGFibGVGb3JXYWl0XCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIk5vdEVub3VnaENvdmVyc1wiXSA9ICdOb3RFbm91Z2hDb3ZlcnMnXSA9IFwiTm90RW5vdWdoQ292ZXJzXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIk92ZXJib29rZWRcIl0gPSAnT3ZlcmJvb2tlZCddID0gXCJPdmVyYm9va2VkXCI7XHJcbiAgICB9KShPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtIHx8IChPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtID0ge30pKTtcclxuICAgIHZhciBBdmFpbGFiaWxpdHlMZXZlbEVudW0gPSBPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtO1xyXG59KShPbmxpbmVBdmFpbGFiaWxpdHkgPSBleHBvcnRzLk9ubGluZUF2YWlsYWJpbGl0eSB8fCAoZXhwb3J0cy5PbmxpbmVBdmFpbGFiaWxpdHkgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1PbmxpbmVBdmFpbGFiaWxpdHkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgT3JkZXJCeUNsYXVzZTtcclxuKGZ1bmN0aW9uIChPcmRlckJ5Q2xhdXNlKSB7XHJcbiAgICAoZnVuY3Rpb24gKERpcmVjdGlvbkVudW0pIHtcclxuICAgICAgICBEaXJlY3Rpb25FbnVtW0RpcmVjdGlvbkVudW1bXCJBc2NlbmRpbmdcIl0gPSAnQXNjZW5kaW5nJ10gPSBcIkFzY2VuZGluZ1wiO1xyXG4gICAgICAgIERpcmVjdGlvbkVudW1bRGlyZWN0aW9uRW51bVtcIkRlc2NlbmRpbmdcIl0gPSAnRGVzY2VuZGluZyddID0gXCJEZXNjZW5kaW5nXCI7XHJcbiAgICB9KShPcmRlckJ5Q2xhdXNlLkRpcmVjdGlvbkVudW0gfHwgKE9yZGVyQnlDbGF1c2UuRGlyZWN0aW9uRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgRGlyZWN0aW9uRW51bSA9IE9yZGVyQnlDbGF1c2UuRGlyZWN0aW9uRW51bTtcclxufSkoT3JkZXJCeUNsYXVzZSA9IGV4cG9ydHMuT3JkZXJCeUNsYXVzZSB8fCAoZXhwb3J0cy5PcmRlckJ5Q2xhdXNlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3JkZXJCeUNsYXVzZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZWRlZW1SZXF1ZXN0SW5mbztcclxuKGZ1bmN0aW9uIChSZWRlZW1SZXF1ZXN0SW5mbykge1xyXG4gICAgKGZ1bmN0aW9uIChTdGF0dXNFbnVtKSB7XHJcbiAgICAgICAgU3RhdHVzRW51bVtTdGF0dXNFbnVtW1wiU3VibWl0ZWRcIl0gPSAnU3VibWl0ZWQnXSA9IFwiU3VibWl0ZWRcIjtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJBcHByb3ZlZFwiXSA9ICdBcHByb3ZlZCddID0gXCJBcHByb3ZlZFwiO1xyXG4gICAgICAgIFN0YXR1c0VudW1bU3RhdHVzRW51bVtcIlJlamVjdGVkXCJdID0gJ1JlamVjdGVkJ10gPSBcIlJlamVjdGVkXCI7XHJcbiAgICB9KShSZWRlZW1SZXF1ZXN0SW5mby5TdGF0dXNFbnVtIHx8IChSZWRlZW1SZXF1ZXN0SW5mby5TdGF0dXNFbnVtID0ge30pKTtcclxuICAgIHZhciBTdGF0dXNFbnVtID0gUmVkZWVtUmVxdWVzdEluZm8uU3RhdHVzRW51bTtcclxufSkoUmVkZWVtUmVxdWVzdEluZm8gPSBleHBvcnRzLlJlZGVlbVJlcXVlc3RJbmZvIHx8IChleHBvcnRzLlJlZGVlbVJlcXVlc3RJbmZvID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVkZWVtUmVxdWVzdEluZm8uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgUmVzZXJ2YXRpb247XHJcbihmdW5jdGlvbiAoUmVzZXJ2YXRpb24pIHtcclxuICAgIChmdW5jdGlvbiAoVHlwZUVudW0pIHtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIlN0YW5kYXJkXCJdID0gJ1N0YW5kYXJkJ10gPSBcIlN0YW5kYXJkXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJIeWJyaWRcIl0gPSAnSHlicmlkJ10gPSBcIkh5YnJpZFwiO1xyXG4gICAgfSkoUmVzZXJ2YXRpb24uVHlwZUVudW0gfHwgKFJlc2VydmF0aW9uLlR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlRW51bSA9IFJlc2VydmF0aW9uLlR5cGVFbnVtO1xyXG59KShSZXNlcnZhdGlvbiA9IGV4cG9ydHMuUmVzZXJ2YXRpb24gfHwgKGV4cG9ydHMuUmVzZXJ2YXRpb24gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXNlcnZhdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZXdhcmRWYWx1ZTtcclxuKGZ1bmN0aW9uIChSZXdhcmRWYWx1ZSkge1xyXG4gICAgKGZ1bmN0aW9uIChUeXBlRW51bSkge1xyXG4gICAgICAgIFR5cGVFbnVtW1R5cGVFbnVtW1wiRGlzY291bnRcIl0gPSAnRGlzY291bnQnXSA9IFwiRGlzY291bnRcIjtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIkZyZWVNZWFsXCJdID0gJ0ZyZWVNZWFsJ10gPSBcIkZyZWVNZWFsXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJNb25leU9mZlwiXSA9ICdNb25leU9mZiddID0gXCJNb25leU9mZlwiO1xyXG4gICAgfSkoUmV3YXJkVmFsdWUuVHlwZUVudW0gfHwgKFJld2FyZFZhbHVlLlR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlRW51bSA9IFJld2FyZFZhbHVlLlR5cGVFbnVtO1xyXG59KShSZXdhcmRWYWx1ZSA9IGV4cG9ydHMuUmV3YXJkVmFsdWUgfHwgKGV4cG9ydHMuUmV3YXJkVmFsdWUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXdhcmRWYWx1ZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBTaW5nbGVWYWx1ZU5vZGU7XHJcbihmdW5jdGlvbiAoU2luZ2xlVmFsdWVOb2RlKSB7XHJcbiAgICAoZnVuY3Rpb24gKEtpbmRFbnVtKSB7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJOb25lXCJdID0gJ05vbmUnXSA9IFwiTm9uZVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29uc3RhbnRcIl0gPSAnQ29uc3RhbnQnXSA9IFwiQ29uc3RhbnRcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkNvbnZlcnRcIl0gPSAnQ29udmVydCddID0gXCJDb252ZXJ0XCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJOb25lbnRpdHlSYW5nZVZhcmlhYmxlUmVmZXJlbmNlXCJdID0gJ05vbmVudGl0eVJhbmdlVmFyaWFibGVSZWZlcmVuY2UnXSA9IFwiTm9uZW50aXR5UmFuZ2VWYXJpYWJsZVJlZmVyZW5jZVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQmluYXJ5T3BlcmF0b3JcIl0gPSAnQmluYXJ5T3BlcmF0b3InXSA9IFwiQmluYXJ5T3BlcmF0b3JcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlVuYXJ5T3BlcmF0b3JcIl0gPSAnVW5hcnlPcGVyYXRvciddID0gXCJVbmFyeU9wZXJhdG9yXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJTaW5nbGVWYWx1ZVByb3BlcnR5QWNjZXNzXCJdID0gJ1NpbmdsZVZhbHVlUHJvcGVydHlBY2Nlc3MnXSA9IFwiU2luZ2xlVmFsdWVQcm9wZXJ0eUFjY2Vzc1wiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29sbGVjdGlvblByb3BlcnR5QWNjZXNzXCJdID0gJ0NvbGxlY3Rpb25Qcm9wZXJ0eUFjY2VzcyddID0gXCJDb2xsZWN0aW9uUHJvcGVydHlBY2Nlc3NcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZVZhbHVlRnVuY3Rpb25DYWxsXCJdID0gJ1NpbmdsZVZhbHVlRnVuY3Rpb25DYWxsJ10gPSBcIlNpbmdsZVZhbHVlRnVuY3Rpb25DYWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJBbnlcIl0gPSAnQW55J10gPSBcIkFueVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29sbGVjdGlvbk5hdmlnYXRpb25Ob2RlXCJdID0gJ0NvbGxlY3Rpb25OYXZpZ2F0aW9uTm9kZSddID0gXCJDb2xsZWN0aW9uTmF2aWdhdGlvbk5vZGVcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZU5hdmlnYXRpb25Ob2RlXCJdID0gJ1NpbmdsZU5hdmlnYXRpb25Ob2RlJ10gPSBcIlNpbmdsZU5hdmlnYXRpb25Ob2RlXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJTaW5nbGVWYWx1ZU9wZW5Qcm9wZXJ0eUFjY2Vzc1wiXSA9ICdTaW5nbGVWYWx1ZU9wZW5Qcm9wZXJ0eUFjY2VzcyddID0gXCJTaW5nbGVWYWx1ZU9wZW5Qcm9wZXJ0eUFjY2Vzc1wiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiU2luZ2xlRW50aXR5Q2FzdFwiXSA9ICdTaW5nbGVFbnRpdHlDYXN0J10gPSBcIlNpbmdsZUVudGl0eUNhc3RcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkFsbFwiXSA9ICdBbGwnXSA9IFwiQWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJFbnRpdHlDb2xsZWN0aW9uQ2FzdFwiXSA9ICdFbnRpdHlDb2xsZWN0aW9uQ2FzdCddID0gXCJFbnRpdHlDb2xsZWN0aW9uQ2FzdFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiRW50aXR5UmFuZ2VWYXJpYWJsZVJlZmVyZW5jZVwiXSA9ICdFbnRpdHlSYW5nZVZhcmlhYmxlUmVmZXJlbmNlJ10gPSBcIkVudGl0eVJhbmdlVmFyaWFibGVSZWZlcmVuY2VcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZUVudGl0eUZ1bmN0aW9uQ2FsbFwiXSA9ICdTaW5nbGVFbnRpdHlGdW5jdGlvbkNhbGwnXSA9IFwiU2luZ2xlRW50aXR5RnVuY3Rpb25DYWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJDb2xsZWN0aW9uRnVuY3Rpb25DYWxsXCJdID0gJ0NvbGxlY3Rpb25GdW5jdGlvbkNhbGwnXSA9IFwiQ29sbGVjdGlvbkZ1bmN0aW9uQ2FsbFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiRW50aXR5Q29sbGVjdGlvbkZ1bmN0aW9uQ2FsbFwiXSA9ICdFbnRpdHlDb2xsZWN0aW9uRnVuY3Rpb25DYWxsJ10gPSBcIkVudGl0eUNvbGxlY3Rpb25GdW5jdGlvbkNhbGxcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIk5hbWVkRnVuY3Rpb25QYXJhbWV0ZXJcIl0gPSAnTmFtZWRGdW5jdGlvblBhcmFtZXRlciddID0gXCJOYW1lZEZ1bmN0aW9uUGFyYW1ldGVyXCI7XHJcbiAgICB9KShTaW5nbGVWYWx1ZU5vZGUuS2luZEVudW0gfHwgKFNpbmdsZVZhbHVlTm9kZS5LaW5kRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgS2luZEVudW0gPSBTaW5nbGVWYWx1ZU5vZGUuS2luZEVudW07XHJcbn0pKFNpbmdsZVZhbHVlTm9kZSA9IGV4cG9ydHMuU2luZ2xlVmFsdWVOb2RlIHx8IChleHBvcnRzLlNpbmdsZVZhbHVlTm9kZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNpbmdsZVZhbHVlTm9kZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vSUVkbVNjaGVtYUVsZW1lbnQnKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vSUVkbVRlcm0nKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vSUVkbVR5cGUnKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vT25saW5lQXZhaWxhYmlsaXR5JykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL09yZGVyQnlDbGF1c2UnKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vUmVkZWVtUmVxdWVzdEluZm8nKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vUmVzZXJ2YXRpb24nKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vUmV3YXJkVmFsdWUnKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vU2luZ2xlVmFsdWVOb2RlJykpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RlbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL2FwaS9hcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vbW9kZWwvbW9kZWxzJykpO1xyXG52YXIgQXV0aG9yaXphdGlvblNlcnZpY2VfMSA9IHJlcXVpcmUoJy4vY2xpZW50L0F1dGhvcml6YXRpb25TZXJ2aWNlJyk7XHJcbmV4cG9ydHMuQXV0aG9yaXphdGlvblNlcnZpY2UgPSBBdXRob3JpemF0aW9uU2VydmljZV8xLkF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=
return require('hostme-sdk-angular-mobile');
});