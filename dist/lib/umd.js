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
var MobileAuthenticationApi = (function () {
    function MobileAuthenticationApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(MobileAuthenticationApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    MobileAuthenticationApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    MobileAuthenticationApi.prototype.getExternalFacebookLogin = function (accessToken, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/authorization/externalFacebookLogin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling getExternalFacebookLogin.');
        }
        if (accessToken !== undefined) {
            queryParameters['access_token'] = accessToken;
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
    MobileAuthenticationApi.prototype.getExternalLogin = function (provider, error, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/authorization/externalLogin';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (provider === null || provider === undefined) {
            throw new Error('Required parameter provider was null or undefined when calling getExternalLogin.');
        }
        if (provider !== undefined) {
            queryParameters['provider'] = provider;
        }
        if (error !== undefined) {
            queryParameters['error'] = error;
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
    MobileAuthenticationApi.prototype.getExternalLogins = function (returnUrl, generateState, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/authorization/externalLogins';
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (returnUrl === null || returnUrl === undefined) {
            throw new Error('Required parameter returnUrl was null or undefined when calling getExternalLogins.');
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    MobileAuthenticationApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return MobileAuthenticationApi;
}());
exports.MobileAuthenticationApi = MobileAuthenticationApi;

},{"./auth":7}],2:[function(require,module,exports){
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling addExternalLogin.');
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling changePassword.');
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
        if (returnUrl === null || returnUrl === undefined) {
            throw new Error('Required parameter returnUrl was null or undefined when calling getManageInfo.');
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
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling getRegistrationToken.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getReservationAvailability.');
        }
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling getReservationAvailability.');
        }
        if (partySize === null || partySize === undefined) {
            throw new Error('Required parameter partySize was null or undefined when calling getReservationAvailability.');
        }
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
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getRestaurantById.');
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
    MobileCoreApi.prototype.getUserInfo = function (extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/core/mb/account/userInfo';
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
        if (image === null || image === undefined) {
            throw new Error('Required parameter image was null or undefined when calling postProfileImage.');
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling register.');
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling registerExternal.');
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling removeLogin.');
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling resetPassword.');
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
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling setPassword.');
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
        if (channel === null || channel === undefined) {
            throw new Error('Required parameter channel was null or undefined when calling setPushChannelAsync.');
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
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserProfile.');
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

},{"./auth":7}],3:[function(require,module,exports){
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling cancelMembershipAtRestaurant.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling enrollIntoLoyaltyProgram.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getCustomerRedeemRequests.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getMemberRewardOptions.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getMemberTransactions.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getMembershipByRestaurantId.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getRedeemRequestInfo.');
        }
        if (redeemId === null || redeemId === undefined) {
            throw new Error('Required parameter redeemId was null or undefined when calling getRedeemRequestInfo.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling submitRequestForRedeem.');
        }
        if (rewardId === null || rewardId === undefined) {
            throw new Error('Required parameter rewardId was null or undefined when calling submitRequestForRedeem.');
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

},{"./auth":7}],4:[function(require,module,exports){
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

},{"./auth":7}],5:[function(require,module,exports){
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
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling checkInWithWaiting.');
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
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling close.');
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
        if (confirmationCode === null || confirmationCode === undefined) {
            throw new Error('Required parameter confirmationCode was null or undefined when calling confirmWithApp.');
        }
        if (conf === null || conf === undefined) {
            throw new Error('Required parameter conf was null or undefined when calling confirmWithApp.');
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
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling getInLine.');
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
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling leaveTheLine.');
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
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling markAllMessagesAsRead.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling putOnHold.');
        }
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling putOnHold.');
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
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling sendMessageToWaiting.');
        }
        if (createMessage === null || createMessage === undefined) {
            throw new Error('Required parameter createMessage was null or undefined when calling sendMessageToWaiting.');
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
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling takeOffHold.');
        }
        if (waitingItemId === null || waitingItemId === undefined) {
            throw new Error('Required parameter waitingItemId was null or undefined when calling takeOffHold.');
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

},{"./auth":7}],6:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./MobileAuthenticationApi'));
__export(require('./MobileCoreApi'));
__export(require('./MobileLoyaltyApi'));
__export(require('./MobileReservationsApi'));
__export(require('./MobileWaitingManagementApi'));

},{"./MobileAuthenticationApi":1,"./MobileCoreApi":2,"./MobileLoyaltyApi":3,"./MobileReservationsApi":4,"./MobileWaitingManagementApi":5}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
        }, function (err) {
            deffer.reject(err);
        });
        return deffer.promise;
    };
    ;
    AuthorizationService.$inject = ['$http', '$q', 'IApiConfig', '$httpParamSerializer'];
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';
var OrderByClause;
(function (OrderByClause) {
    (function (DirectionEnum) {
        DirectionEnum[DirectionEnum["Ascending"] = 'Ascending'] = "Ascending";
        DirectionEnum[DirectionEnum["Descending"] = 'Descending'] = "Descending";
    })(OrderByClause.DirectionEnum || (OrderByClause.DirectionEnum = {}));
    var DirectionEnum = OrderByClause.DirectionEnum;
})(OrderByClause = exports.OrderByClause || (exports.OrderByClause = {}));

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';
var Reservation;
(function (Reservation) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
        TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
    })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
    var TypeEnum = Reservation.TypeEnum;
})(Reservation = exports.Reservation || (exports.Reservation = {}));

},{}],16:[function(require,module,exports){
'use strict';
var ReservationGuest;
(function (ReservationGuest) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
        TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
    })(ReservationGuest.TypeEnum || (ReservationGuest.TypeEnum = {}));
    var TypeEnum = ReservationGuest.TypeEnum;
})(ReservationGuest = exports.ReservationGuest || (exports.ReservationGuest = {}));

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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
__export(require('./ReservationGuest'));
__export(require('./RewardValue'));
__export(require('./SingleValueNode'));

},{"./IEdmSchemaElement":9,"./IEdmTerm":10,"./IEdmType":11,"./OnlineAvailability":12,"./OrderByClause":13,"./RedeemRequestInfo":14,"./Reservation":15,"./ReservationGuest":16,"./RewardValue":17,"./SingleValueNode":18}],"hostme-sdk-angular-mobile":[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./api/api'));
__export(require('./model/models'));
var AuthorizationService_1 = require('./client/AuthorizationService');
exports.AuthorizationService = AuthorizationService_1.AuthorizationService;

},{"./api/api":6,"./client/AuthorizationService":8,"./model/models":19}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2xpYi9hcGkvTW9iaWxlQXV0aGVudGljYXRpb25BcGkuanMiLCJkaXN0L2xpYi9hcGkvTW9iaWxlQ29yZUFwaS5qcyIsImRpc3QvbGliL2FwaS9Nb2JpbGVMb3lhbHR5QXBpLmpzIiwiZGlzdC9saWIvYXBpL01vYmlsZVJlc2VydmF0aW9uc0FwaS5qcyIsImRpc3QvbGliL2FwaS9Nb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5qcyIsImRpc3QvbGliL2FwaS9hcGkuanMiLCJkaXN0L2xpYi9hcGkvYXV0aC5qcyIsImRpc3QvbGliL2NsaWVudC9BdXRob3JpemF0aW9uU2VydmljZS5qcyIsImRpc3QvbGliL21vZGVsL0lFZG1TY2hlbWFFbGVtZW50LmpzIiwiZGlzdC9saWIvbW9kZWwvSUVkbVRlcm0uanMiLCJkaXN0L2xpYi9tb2RlbC9JRWRtVHlwZS5qcyIsImRpc3QvbGliL21vZGVsL09ubGluZUF2YWlsYWJpbGl0eS5qcyIsImRpc3QvbGliL21vZGVsL09yZGVyQnlDbGF1c2UuanMiLCJkaXN0L2xpYi9tb2RlbC9SZWRlZW1SZXF1ZXN0SW5mby5qcyIsImRpc3QvbGliL21vZGVsL1Jlc2VydmF0aW9uLmpzIiwiZGlzdC9saWIvbW9kZWwvUmVzZXJ2YXRpb25HdWVzdC5qcyIsImRpc3QvbGliL21vZGVsL1Jld2FyZFZhbHVlLmpzIiwiZGlzdC9saWIvbW9kZWwvU2luZ2xlVmFsdWVOb2RlLmpzIiwiZGlzdC9saWIvbW9kZWwvbW9kZWxzLmpzIiwiZGlzdC9saWIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2ZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpO1xyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBNb2JpbGVBdXRoZW50aWNhdGlvbkFwaSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2JpbGVBdXRoZW50aWNhdGlvbkFwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9iaWxlQXV0aGVudGljYXRpb25BcGkucHJvdG90eXBlLCBcImFjY2Vzc1Rva2VuXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYWNjZXNzVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vYmlsZUF1dGhlbnRpY2F0aW9uQXBpLnByb3RvdHlwZS5leHRlbmRPYmogPSBmdW5jdGlvbiAob2JqQSwgb2JqQikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmpCKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmpCLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG9iakFba2V5XSA9IG9iakJba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqQTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVBdXRoZW50aWNhdGlvbkFwaS5wcm90b3R5cGUuZ2V0RXh0ZXJuYWxGYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKGFjY2Vzc1Rva2VuLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hdXRob3JpemF0aW9uL2V4dGVybmFsRmFjZWJvb2tMb2dpbic7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuID09PSBudWxsIHx8IGFjY2Vzc1Rva2VuID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgYWNjZXNzVG9rZW4gd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRFeHRlcm5hbEZhY2Vib29rTG9naW4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snYWNjZXNzX3Rva2VuJ10gPSBhY2Nlc3NUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVBdXRoZW50aWNhdGlvbkFwaS5wcm90b3R5cGUuZ2V0RXh0ZXJuYWxMb2dpbiA9IGZ1bmN0aW9uIChwcm92aWRlciwgZXJyb3IsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2F1dGhvcml6YXRpb24vZXh0ZXJuYWxMb2dpbic7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHByb3ZpZGVyID09PSBudWxsIHx8IHByb3ZpZGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcHJvdmlkZXIgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRFeHRlcm5hbExvZ2luLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvdmlkZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3Byb3ZpZGVyJ10gPSBwcm92aWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydlcnJvciddID0gZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQXV0aGVudGljYXRpb25BcGkucHJvdG90eXBlLmdldEV4dGVybmFsTG9naW5zID0gZnVuY3Rpb24gKHJldHVyblVybCwgZ2VuZXJhdGVTdGF0ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXV0aG9yaXphdGlvbi9leHRlcm5hbExvZ2lucyc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJldHVyblVybCA9PT0gbnVsbCB8fCByZXR1cm5VcmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXR1cm5Vcmwgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRFeHRlcm5hbExvZ2lucy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJldHVyblVybCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncmV0dXJuVXJsJ10gPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZW5lcmF0ZVN0YXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydnZW5lcmF0ZVN0YXRlJ10gPSBnZW5lcmF0ZVN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUF1dGhlbnRpY2F0aW9uQXBpLiRpbmplY3QgPSBbJyRodHRwJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBNb2JpbGVBdXRoZW50aWNhdGlvbkFwaTtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2JpbGVBdXRoZW50aWNhdGlvbkFwaSA9IE1vYmlsZUF1dGhlbnRpY2F0aW9uQXBpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2JpbGVBdXRoZW50aWNhdGlvbkFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgTW9iaWxlQ29yZUFwaSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2JpbGVDb3JlQXBpKCRodHRwLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIgPSAkaHR0cFBhcmFtU2VyaWFsaXplcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbmV3IGF1dGguVm9pZEF1dGgoKSxcclxuICAgICAgICAgICAgJ29hdXRoMic6IG5ldyBhdXRoLk9BdXRoKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2JpbGVDb3JlQXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5leHRlbmRPYmogPSBmdW5jdGlvbiAob2JqQSwgb2JqQikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmpCKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmpCLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIG9iakFba2V5XSA9IG9iakJba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqQTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5hZGRFeHRlcm5hbExvZ2luID0gZnVuY3Rpb24gKG1vZGVsLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L2FkZEV4dGVybmFsTG9naW4nO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWRkRXh0ZXJuYWxMb2dpbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAobW9kZWwsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvY2hhbmdlUGFzc3dvcmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgY2hhbmdlUGFzc3dvcmQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBtb2RlbCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmZpbmRSZXN0YXVyYW50cyA9IGZ1bmN0aW9uIChsYXQsIGxvbiwgbmFtZSwgY2l0eSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvcmVzdGF1cmFudHMvZmluZCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGxhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snbGF0J10gPSBsYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2xvbiddID0gbG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snbmFtZSddID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2NpdHknXSA9IGNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5nZXRBbGxSZXN0YXVyYW50cyA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9yZXN0YXVyYW50cyc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmdldExpc3RPZkxvY2F0aW9ucyA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9sb2NhdGlvbnMnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5nZXRNYW5hZ2VJbmZvID0gZnVuY3Rpb24gKHJldHVyblVybCwgZ2VuZXJhdGVTdGF0ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9tYW5hZ2VJbmZvJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmV0dXJuVXJsID09PSBudWxsIHx8IHJldHVyblVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJldHVyblVybCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1hbmFnZUluZm8uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXR1cm5VcmwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3JldHVyblVybCddID0gcmV0dXJuVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2VuZXJhdGVTdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZ2VuZXJhdGVTdGF0ZSddID0gZ2VuZXJhdGVTdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLmdldFJlZ2lzdHJhdGlvblRva2VuID0gZnVuY3Rpb24gKHRva2VuLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9jYW1wYWlnbi97dG9rZW59J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAndG9rZW4nICsgJ30nLCBTdHJpbmcodG9rZW4pKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAodG9rZW4gPT09IG51bGwgfHwgdG9rZW4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB0b2tlbiB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldFJlZ2lzdHJhdGlvblRva2VuLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBkYXRlLCBwYXJ0eVNpemUsIHJhbmdlSW5NaW51dGVzLCBhcmVhcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vYXZhaWxhYmlsaXR5J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChyZXN0YXVyYW50SWQgPT09IG51bGwgfHwgcmVzdGF1cmFudElkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlID09PSBudWxsIHx8IGRhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBkYXRlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJ0eVNpemUgPT09IG51bGwgfHwgcGFydHlTaXplID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcGFydHlTaXplIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZUluTWludXRlcyA9PT0gbnVsbCB8fCByYW5nZUluTWludXRlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJhbmdlSW5NaW51dGVzIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydkYXRlJ10gPSBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFydHlTaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydwYXJ0eVNpemUnXSA9IHBhcnR5U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJhbmdlSW5NaW51dGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydyYW5nZUluTWludXRlcyddID0gcmFuZ2VJbk1pbnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcmVhcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snYXJlYXMnXSA9IGFyZWFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZ2V0UmVzdGF1cmFudEJ5SWQgPSBmdW5jdGlvbiAoaWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL3Jlc3RhdXJhbnRzL3tpZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdpZCcgKyAnfScsIFN0cmluZyhpZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0UmVzdGF1cmFudEJ5SWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3VzZXJJbmZvJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuZ2V0VXNlclByb2ZpbGUgPSBmdW5jdGlvbiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9wcm9maWxlJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUucG9zdFByb2ZpbGVJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9wcm9maWxlL2ltYWdlJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoaW1hZ2UgPT09IG51bGwgfHwgaW1hZ2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBpbWFnZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHBvc3RQcm9maWxlSW1hZ2UuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBpbWFnZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLnByb2ZpbGVJbWFnZSA9IGZ1bmN0aW9uIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3Byb2ZpbGUvaW1hZ2UnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChtb2RlbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9yZWdpc3Rlcic7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgbW9kZWwgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyByZWdpc3Rlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUucmVnaXN0ZXJFeHRlcm5hbCA9IGZ1bmN0aW9uIChtb2RlbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9yZWdpc3RlckV4dGVybmFsJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHJlZ2lzdGVyRXh0ZXJuYWwuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBtb2RlbCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLnJlbW92ZUxvZ2luID0gZnVuY3Rpb24gKG1vZGVsLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3JlbW92ZUxvZ2luJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBtb2RlbCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHJlbW92ZUxvZ2luLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogbW9kZWwsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVDb3JlQXBpLnByb3RvdHlwZS5yZXNldFBhc3N3b3JkID0gZnVuY3Rpb24gKG1vZGVsLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvY29yZS9tYi9hY2NvdW50L3Jlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcmVzZXRQYXNzd29yZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlQ29yZUFwaS5wcm90b3R5cGUuc2V0UGFzc3dvcmQgPSBmdW5jdGlvbiAobW9kZWwsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIG1vZGVsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgc2V0UGFzc3dvcmQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBtb2RlbCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLnNldFB1c2hDaGFubmVsQXN5bmMgPSBmdW5jdGlvbiAoY2hhbm5lbCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2NvcmUvbWIvYWNjb3VudC9zZXRQdXNoQ2hhbm5lbCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGNoYW5uZWwgPT09IG51bGwgfHwgY2hhbm5lbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNoYW5uZWwgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBzZXRQdXNoQ2hhbm5lbEFzeW5jLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogY2hhbm5lbCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkucHJvdG90eXBlLnVwZGF0ZVVzZXJQcm9maWxlID0gZnVuY3Rpb24gKHByb2ZpbGUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9jb3JlL21iL2FjY291bnQvcHJvZmlsZSc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHByb2ZpbGUgPT09IG51bGwgfHwgcHJvZmlsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHByb2ZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB1cGRhdGVVc2VyUHJvZmlsZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogcHJvZmlsZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUNvcmVBcGkuJGluamVjdCA9IFsnJGh0dHAnLCAnSUFwaUNvbmZpZycsICckaHR0cFBhcmFtU2VyaWFsaXplciddO1xyXG4gICAgcmV0dXJuIE1vYmlsZUNvcmVBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTW9iaWxlQ29yZUFwaSA9IE1vYmlsZUNvcmVBcGk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vYmlsZUNvcmVBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJyk7XHJcbid1c2Ugc3RyaWN0JztcclxudmFyIE1vYmlsZUxveWFsdHlBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9iaWxlTG95YWx0eUFwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUsIFwiYWNjZXNzVG9rZW5cIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hY2Nlc3NUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUuY2FuY2VsTWVtYmVyc2hpcEF0UmVzdGF1cmFudCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L21iL21lbWJlcnNoaXAve3Jlc3RhdXJhbnRJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCA9PT0gbnVsbCB8fCByZXN0YXVyYW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBjYW5jZWxNZW1iZXJzaGlwQXRSZXN0YXVyYW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUuZW5yb2xsSW50b0xveWFsdHlQcm9ncmFtID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvbWIvbWVtYmVyc2hpcC97cmVzdGF1cmFudElkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzdGF1cmFudElkID09PSBudWxsIHx8IHJlc3RhdXJhbnRJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGVucm9sbEludG9Mb3lhbHR5UHJvZ3JhbS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVMb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRBbGxVc2VyTWVtYmVyc2hpcHMgPSBmdW5jdGlvbiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL2xveWFsdHkvbWIvbWVtYmVyc2hpcCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmdldEN1c3RvbWVyUmVkZWVtUmVxdWVzdHMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9L3JlZGVlbXMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCA9PT0gbnVsbCB8fCByZXN0YXVyYW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRDdXN0b21lclJlZGVlbVJlcXVlc3RzLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUuZ2V0TWVtYmVyUmV3YXJkT3B0aW9ucyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L21iL21lbWJlcnNoaXAve3Jlc3RhdXJhbnRJZH0vcmV3YXJkcydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzdGF1cmFudElkID09PSBudWxsIHx8IHJlc3RhdXJhbnRJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlclJld2FyZE9wdGlvbnMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVMb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRNZW1iZXJUcmFuc2FjdGlvbnMgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9L3RyYW5zYWN0aW9ucydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzdGF1cmFudElkID09PSBudWxsIHx8IHJlc3RhdXJhbnRJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1lbWJlclRyYW5zYWN0aW9ucy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZUxveWFsdHlBcGkucHJvdG90eXBlLmdldE1lbWJlcnNoaXBCeVJlc3RhdXJhbnRJZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9sb3lhbHR5L21iL21lbWJlcnNoaXAve3Jlc3RhdXJhbnRJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCA9PT0gbnVsbCB8fCByZXN0YXVyYW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRNZW1iZXJzaGlwQnlSZXN0YXVyYW50SWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVMb3lhbHR5QXBpLnByb3RvdHlwZS5nZXRSZWRlZW1SZXF1ZXN0SW5mbyA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJlZGVlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9L3JlZGVlbXMve3JlZGVlbUlkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVkZWVtSWQnICsgJ30nLCBTdHJpbmcocmVkZWVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzdGF1cmFudElkID09PSBudWxsIHx8IHJlc3RhdXJhbnRJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldFJlZGVlbVJlcXVlc3RJbmZvLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVkZWVtSWQgPT09IG51bGwgfHwgcmVkZWVtSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZWRlZW1JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldFJlZGVlbVJlcXVlc3RJbmZvLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlTG95YWx0eUFwaS5wcm90b3R5cGUuc3VibWl0UmVxdWVzdEZvclJlZGVlbSA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHJld2FyZElkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvbG95YWx0eS9tYi9tZW1iZXJzaGlwL3tyZXN0YXVyYW50SWR9L3Jld2FyZHMve3Jld2FyZElkfS9yZWRlZW0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jld2FyZElkJyArICd9JywgU3RyaW5nKHJld2FyZElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCA9PT0gbnVsbCB8fCByZXN0YXVyYW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBzdWJtaXRSZXF1ZXN0Rm9yUmVkZWVtLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV3YXJkSWQgPT09IG51bGwgfHwgcmV3YXJkSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXdhcmRJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHN1Ym1pdFJlcXVlc3RGb3JSZWRlZW0uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVMb3lhbHR5QXBpLiRpbmplY3QgPSBbJyRodHRwJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBNb2JpbGVMb3lhbHR5QXBpO1xyXG59KCkpO1xyXG5leHBvcnRzLk1vYmlsZUxveWFsdHlBcGkgPSBNb2JpbGVMb3lhbHR5QXBpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2JpbGVMb3lhbHR5QXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpO1xyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBNb2JpbGVSZXNlcnZhdGlvbnNBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW9iaWxlUmVzZXJ2YXRpb25zQXBpKCRodHRwLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIgPSAkaHR0cFBhcmFtU2VyaWFsaXplcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbmV3IGF1dGguVm9pZEF1dGgoKSxcclxuICAgICAgICAgICAgJ29hdXRoMic6IG5ldyBhdXRoLk9BdXRoKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLCBcImFjY2Vzc1Rva2VuXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYWNjZXNzVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5hZGROZXdSZXNlcnZhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9yZXNlcnZhdGlvbnMnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHZhbHVlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWRkTmV3UmVzZXJ2YXRpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuY2xvc2VBc0NhbmNlbGVkID0gZnVuY3Rpb24gKHJlc2VydmF0aW9uSWQsIGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9jYW5jZWwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzZXJ2YXRpb25JZCA9PT0gbnVsbCB8fCByZXNlcnZhdGlvbklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVzZXJ2YXRpb25JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGNsb3NlQXNDYW5jZWxlZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QgPT09IG51bGwgfHwgY2FuY2VsUmVzZXJ2YXRpb25Db250cmFjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBjbG9zZUFzQ2FuY2VsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmdldFJlc2VydmF0aW9uQnlJZCA9IGZ1bmN0aW9uIChyZXNlcnZhdGlvbklkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L21iL3Jlc2VydmF0aW9ucy97cmVzZXJ2YXRpb25JZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzZXJ2YXRpb25JZCA9PT0gbnVsbCB8fCByZXNlcnZhdGlvbklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVzZXJ2YXRpb25JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQnlJZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ2V0VXNlclJlc2VydmF0aW9ucyA9IGZ1bmN0aW9uIChxdWVyeU9wdGlvbnMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocXVlcnlPcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydxdWVyeU9wdGlvbnMnXSA9IHF1ZXJ5T3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ3Vlc3RBZGROZXdSZXNlcnZhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9ndWVzdC9yZXNlcnZhdGlvbnMnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHZhbHVlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ3Vlc3RBZGROZXdSZXNlcnZhdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ3Vlc3RDbG9zZUFzQ2FuY2VsZWQgPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgY2FuY2VsUmVzZXJ2YXRpb25Db250cmFjdCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9ndWVzdC9yZXNlcnZhdGlvbnMve3Jlc2VydmF0aW9uSWR9L2NhbmNlbCdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChyZXNlcnZhdGlvbklkID09PSBudWxsIHx8IHJlc2VydmF0aW9uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ3Vlc3RDbG9zZUFzQ2FuY2VsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYW5jZWxSZXNlcnZhdGlvbkNvbnRyYWN0ID09PSBudWxsIHx8IGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBjYW5jZWxSZXNlcnZhdGlvbkNvbnRyYWN0IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ3Vlc3RDbG9zZUFzQ2FuY2VsZWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhbmNlbFJlc2VydmF0aW9uQ29udHJhY3QsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5ndWVzdEdldEludml0YXRpb25Bc3luYyA9IGZ1bmN0aW9uIChjb2RlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L21iL2d1ZXN0L3Jlc2VydmF0aW9ucy9pbnZpdGF0aW9ucy97Y29kZX0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdjb2RlJyArICd9JywgU3RyaW5nKGNvZGUpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgY29kZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGd1ZXN0R2V0SW52aXRhdGlvbkFzeW5jLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ3Vlc3RHZXRSZXNlcnZhdGlvbkJ5SWQgPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9ndWVzdC9yZXNlcnZhdGlvbnMve3Jlc2VydmF0aW9uSWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc2VydmF0aW9uSWQgPT09IG51bGwgfHwgcmVzZXJ2YXRpb25JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJlc2VydmF0aW9uSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBndWVzdEdldFJlc2VydmF0aW9uQnlJZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmd1ZXN0SW52aXRlUGFydHlNZW1iZXJzQXN5bmMgPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgaW52aXRhdGlvbkNvbnRyYWN0LCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L21iL2d1ZXN0L3Jlc2VydmF0aW9ucy97cmVzZXJ2YXRpb25JZH0vaW52aXRhdGlvbnMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXNlcnZhdGlvbklkJyArICd9JywgU3RyaW5nKHJlc2VydmF0aW9uSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAocmVzZXJ2YXRpb25JZCA9PT0gbnVsbCB8fCByZXNlcnZhdGlvbklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVzZXJ2YXRpb25JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGd1ZXN0SW52aXRlUGFydHlNZW1iZXJzQXN5bmMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnZpdGF0aW9uQ29udHJhY3QgPT09IG51bGwgfHwgaW52aXRhdGlvbkNvbnRyYWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgaW52aXRhdGlvbkNvbnRyYWN0IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ3Vlc3RJbnZpdGVQYXJ0eU1lbWJlcnNBc3luYy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGludml0YXRpb25Db250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmd1ZXN0UmVkZWVtSW52aXRhdGlvbkFzeW5jID0gZnVuY3Rpb24gKHJlZGVlbUludml0YXRpb25Db250cmFjdCwgY29kZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi9tYi9ndWVzdC9yZXNlcnZhdGlvbnMvaW52aXRhdGlvbnMve2NvZGV9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnY29kZScgKyAnfScsIFN0cmluZyhjb2RlKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlZGVlbUludml0YXRpb25Db250cmFjdCA9PT0gbnVsbCB8fCByZWRlZW1JbnZpdGF0aW9uQ29udHJhY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZWRlZW1JbnZpdGF0aW9uQ29udHJhY3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBndWVzdFJlZGVlbUludml0YXRpb25Bc3luYy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNvZGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBndWVzdFJlZGVlbUludml0YXRpb25Bc3luYy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlZGVlbUludml0YXRpb25Db250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmd1ZXN0VXBkYXRlUmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgdmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvZ3Vlc3QvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChyZXNlcnZhdGlvbklkID09PSBudWxsIHx8IHJlc2VydmF0aW9uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ3Vlc3RVcGRhdGVSZXNlcnZhdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBndWVzdFVwZGF0ZVJlc2VydmF0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnJlYWRBbGxNZXNzYWdlID0gZnVuY3Rpb24gKHJlc2VydmF0aW9uSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9tZXNzYWdlcy9yZWFkYWxsJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzZXJ2YXRpb25JZCcgKyAnfScsIFN0cmluZyhyZXNlcnZhdGlvbklkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc2VydmF0aW9uSWQgPT09IG51bGwgfHwgcmVzZXJ2YXRpb25JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHJlc2VydmF0aW9uSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyByZWFkQWxsTWVzc2FnZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLnNlbmRNZXNzYWdlVG9SZXNlcnZhdGlvbiA9IGZ1bmN0aW9uIChyZXNlcnZhdGlvbklkLCBjcmVhdGVNZXNzYWdlQ29udHJhY3QsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfS9tZXNzYWdlcydcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChyZXNlcnZhdGlvbklkID09PSBudWxsIHx8IHJlc2VydmF0aW9uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgc2VuZE1lc3NhZ2VUb1Jlc2VydmF0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3JlYXRlTWVzc2FnZUNvbnRyYWN0ID09PSBudWxsIHx8IGNyZWF0ZU1lc3NhZ2VDb250cmFjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZU1lc3NhZ2VDb250cmFjdCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHNlbmRNZXNzYWdlVG9SZXNlcnZhdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNyZWF0ZU1lc3NhZ2VDb250cmFjdCxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUudXBkYXRlUmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAocmVzZXJ2YXRpb25JZCwgdmFsdWUsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3YvbWIvcmVzZXJ2YXRpb25zL3tyZXNlcnZhdGlvbklkfSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc2VydmF0aW9uSWQnICsgJ30nLCBTdHJpbmcocmVzZXJ2YXRpb25JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmIChyZXNlcnZhdGlvbklkID09PSBudWxsIHx8IHJlc2VydmF0aW9uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXNlcnZhdGlvbklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzZXJ2YXRpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHZhbHVlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgdXBkYXRlUmVzZXJ2YXRpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlUmVzZXJ2YXRpb25zQXBpLiRpbmplY3QgPSBbJyRodHRwJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBNb2JpbGVSZXNlcnZhdGlvbnNBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTW9iaWxlUmVzZXJ2YXRpb25zQXBpID0gTW9iaWxlUmVzZXJ2YXRpb25zQXBpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2JpbGVSZXNlcnZhdGlvbnNBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBhdXRoID0gcmVxdWlyZSgnLi9hdXRoJyk7XHJcbid1c2Ugc3RyaWN0JztcclxudmFyIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpKCRodHRwLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIgPSAkaHR0cFBhcmFtU2VyaWFsaXplcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbmV3IGF1dGguVm9pZEF1dGgoKSxcclxuICAgICAgICAgICAgJ29hdXRoMic6IG5ldyBhdXRoLk9BdXRoKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUsIFwiYWNjZXNzVG9rZW5cIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hY2Nlc3NUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5jaGVja0luV2l0aFdhaXRpbmcgPSBmdW5jdGlvbiAod2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL21iL3dhaXRpbmdzL3t3YWl0aW5nSXRlbUlkfS9jaGVja2luJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHdhaXRpbmdJdGVtSWQgPT09IG51bGwgfHwgd2FpdGluZ0l0ZW1JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHdhaXRpbmdJdGVtSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBjaGVja0luV2l0aFdhaXRpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAod2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL21iL3dhaXRpbmdzL3t3YWl0aW5nSXRlbUlkfS9jbG9zZSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3dhaXRpbmdJdGVtSWQnICsgJ30nLCBTdHJpbmcod2FpdGluZ0l0ZW1JZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICh3YWl0aW5nSXRlbUlkID09PSBudWxsIHx8IHdhaXRpbmdJdGVtSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgY2xvc2UuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuY29uZmlybVdpdGhBcHAgPSBmdW5jdGlvbiAoY29uZmlybWF0aW9uQ29kZSwgY29uZiwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL21iL3dhaXRpbmdzL2NvbmZpcm0ve2NvbmZpcm1hdGlvbkNvZGV9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnY29uZmlybWF0aW9uQ29kZScgKyAnfScsIFN0cmluZyhjb25maXJtYXRpb25Db2RlKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbkNvZGUgPT09IG51bGwgfHwgY29uZmlybWF0aW9uQ29kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNvbmZpcm1hdGlvbkNvZGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBjb25maXJtV2l0aEFwcC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmYgPT09IG51bGwgfHwgY29uZiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNvbmYgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBjb25maXJtV2l0aEFwcC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNvbmYsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0SW5MaW5lID0gZnVuY3Rpb24gKHZhbHVlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3MnO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHZhbHVlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgZ2V0SW5MaW5lLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdmFsdWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUuZ2V0VXNlckN1cnJlbnRXYWl0aW5nID0gZnVuY3Rpb24gKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncyc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5sZWF2ZVRoZUxpbmUgPSBmdW5jdGlvbiAod2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL21iL3dhaXRpbmdzL3t3YWl0aW5nSXRlbUlkfS9jYW5jZWwnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICd3YWl0aW5nSXRlbUlkJyArICd9JywgU3RyaW5nKHdhaXRpbmdJdGVtSWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAod2FpdGluZ0l0ZW1JZCA9PT0gbnVsbCB8fCB3YWl0aW5nSXRlbUlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgd2FpdGluZ0l0ZW1JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGxlYXZlVGhlTGluZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5tYXJrQWxsTWVzc2FnZXNBc1JlYWQgPSBmdW5jdGlvbiAod2FpdGluZ0l0ZW1JZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3dtL21iL3dhaXRpbmdzL3t3YWl0aW5nSXRlbUlkfS9tZXNzYWdlcy9yZWFkYWxsJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHdhaXRpbmdJdGVtSWQgPT09IG51bGwgfHwgd2FpdGluZ0l0ZW1JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHdhaXRpbmdJdGVtSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBtYXJrQWxsTWVzc2FnZXNBc1JlYWQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkucHJvdG90eXBlLnB1dE9uSG9sZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHdhaXRpbmdJdGVtSWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS93bS9tYi93YWl0aW5ncy97d2FpdGluZ0l0ZW1JZH0vcHV0b25ob2xkJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCA9PT0gbnVsbCB8fCByZXN0YXVyYW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBwdXRPbkhvbGQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3YWl0aW5nSXRlbUlkID09PSBudWxsIHx8IHdhaXRpbmdJdGVtSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB3YWl0aW5nSXRlbUlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcHV0T25Ib2xkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdGF1cmFudElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydyZXN0YXVyYW50SWQnXSA9IHJlc3RhdXJhbnRJZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLm9hdXRoMi5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIE1vYmlsZVdhaXRpbmdNYW5hZ2VtZW50QXBpLnByb3RvdHlwZS5zZW5kTWVzc2FnZVRvV2FpdGluZyA9IGZ1bmN0aW9uICh3YWl0aW5nSXRlbUlkLCBjcmVhdGVNZXNzYWdlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L3NlbmRtZXNzYWdlJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHdhaXRpbmdJdGVtSWQgPT09IG51bGwgfHwgd2FpdGluZ0l0ZW1JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHdhaXRpbmdJdGVtSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZVRvV2FpdGluZy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNyZWF0ZU1lc3NhZ2UgPT09IG51bGwgfHwgY3JlYXRlTWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZU1lc3NhZ2Ugd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBzZW5kTWVzc2FnZVRvV2FpdGluZy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNyZWF0ZU1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS5wcm90b3R5cGUudGFrZU9mZkhvbGQgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB3YWl0aW5nSXRlbUlkLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvd20vbWIvd2FpdGluZ3Mve3dhaXRpbmdJdGVtSWR9L3Rha2VvZmZob2xkJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAnd2FpdGluZ0l0ZW1JZCcgKyAnfScsIFN0cmluZyh3YWl0aW5nSXRlbUlkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCA9PT0gbnVsbCB8fCByZXN0YXVyYW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0YWtlT2ZmSG9sZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdhaXRpbmdJdGVtSWQgPT09IG51bGwgfHwgd2FpdGluZ0l0ZW1JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHdhaXRpbmdJdGVtSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0YWtlT2ZmSG9sZC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnRJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncmVzdGF1cmFudElkJ10gPSByZXN0YXVyYW50SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaS4kaW5qZWN0ID0gWyckaHR0cCcsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkgPSBNb2JpbGVXYWl0aW5nTWFuYWdlbWVudEFwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL01vYmlsZUF1dGhlbnRpY2F0aW9uQXBpJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL01vYmlsZUNvcmVBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vTW9iaWxlTG95YWx0eUFwaScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9Nb2JpbGVSZXNlcnZhdGlvbnNBcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vTW9iaWxlV2FpdGluZ01hbmFnZW1lbnRBcGknKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEh0dHBCYXNpY0F1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cEJhc2ljQXV0aCgpIHtcclxuICAgIH1cclxuICAgIEh0dHBCYXNpY0F1dGgucHJvdG90eXBlLmFwcGx5VG9SZXF1ZXN0ID0gZnVuY3Rpb24gKGh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuYXV0aCA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSHR0cEJhc2ljQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5IdHRwQmFzaWNBdXRoID0gSHR0cEJhc2ljQXV0aDtcclxudmFyIEFwaUtleUF1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBpS2V5QXV0aChsb2NhdGlvbiwgcGFyYW1OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucGFyYW1OYW1lID0gcGFyYW1OYW1lO1xyXG4gICAgfVxyXG4gICAgQXBpS2V5QXV0aC5wcm90b3R5cGUuYXBwbHlUb1JlcXVlc3QgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbiA9PT0gJ3F1ZXJ5Jykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcy5xc1t0aGlzLnBhcmFtTmFtZV0gPSB0aGlzLmFwaUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sb2NhdGlvbiA9PT0gJ2hlYWRlcicpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuaGVhZGVyc1t0aGlzLnBhcmFtTmFtZV0gPSB0aGlzLmFwaUtleTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaUtleUF1dGg7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpS2V5QXV0aCA9IEFwaUtleUF1dGg7XHJcbnZhciBPQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPQXV0aCgpIHtcclxuICAgIH1cclxuICAgIE9BdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW47XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9BdXRoO1xyXG59KCkpO1xyXG5leHBvcnRzLk9BdXRoID0gT0F1dGg7XHJcbnZhciBWb2lkQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWb2lkQXV0aCgpIHtcclxuICAgIH1cclxuICAgIFZvaWRBdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWb2lkQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5Wb2lkQXV0aCA9IFZvaWRBdXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgQXV0aG9yaXphdGlvblNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0aG9yaXphdGlvblNlcnZpY2UoJGh0dHAsICRxLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgQXV0aG9yaXphdGlvblNlcnZpY2UucHJvdG90eXBlLkF1dGhvcml6ZSA9IGZ1bmN0aW9uIChhcGksIHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHZhciBkZWZmZXIgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUb2tlbih1c2VyTmFtZSwgcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGFwaS5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBkZWZmZXIucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlamVjdChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWZmZXIucHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBBdXRob3JpemF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0VG9rZW4gPSBmdW5jdGlvbiAodXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIGRlZmZlciA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL1Rva2VuJztcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcgfTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplcih2YWx1ZSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBkZWZmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmZlci5wcm9taXNlO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBBdXRob3JpemF0aW9uU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5BdXRob3JpemF0aW9uU2VydmljZSA9IEF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BdXRob3JpemF0aW9uU2VydmljZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBJRWRtU2NoZW1hRWxlbWVudDtcclxuKGZ1bmN0aW9uIChJRWRtU2NoZW1hRWxlbWVudCkge1xyXG4gICAgKGZ1bmN0aW9uIChTY2hlbWFFbGVtZW50S2luZEVudW0pIHtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiTm9uZVwiXSA9ICdOb25lJ10gPSBcIk5vbmVcIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiVHlwZURlZmluaXRpb25cIl0gPSAnVHlwZURlZmluaXRpb24nXSA9IFwiVHlwZURlZmluaXRpb25cIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiRnVuY3Rpb25cIl0gPSAnRnVuY3Rpb24nXSA9IFwiRnVuY3Rpb25cIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiVmFsdWVUZXJtXCJdID0gJ1ZhbHVlVGVybSddID0gXCJWYWx1ZVRlcm1cIjtcclxuICAgICAgICBTY2hlbWFFbGVtZW50S2luZEVudW1bU2NoZW1hRWxlbWVudEtpbmRFbnVtW1wiRW50aXR5Q29udGFpbmVyXCJdID0gJ0VudGl0eUNvbnRhaW5lciddID0gXCJFbnRpdHlDb250YWluZXJcIjtcclxuICAgIH0pKElFZG1TY2hlbWFFbGVtZW50LlNjaGVtYUVsZW1lbnRLaW5kRW51bSB8fCAoSUVkbVNjaGVtYUVsZW1lbnQuU2NoZW1hRWxlbWVudEtpbmRFbnVtID0ge30pKTtcclxuICAgIHZhciBTY2hlbWFFbGVtZW50S2luZEVudW0gPSBJRWRtU2NoZW1hRWxlbWVudC5TY2hlbWFFbGVtZW50S2luZEVudW07XHJcbn0pKElFZG1TY2hlbWFFbGVtZW50ID0gZXhwb3J0cy5JRWRtU2NoZW1hRWxlbWVudCB8fCAoZXhwb3J0cy5JRWRtU2NoZW1hRWxlbWVudCA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlFZG1TY2hlbWFFbGVtZW50LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIElFZG1UZXJtO1xyXG4oZnVuY3Rpb24gKElFZG1UZXJtKSB7XHJcbiAgICAoZnVuY3Rpb24gKFRlcm1LaW5kRW51bSkge1xyXG4gICAgICAgIFRlcm1LaW5kRW51bVtUZXJtS2luZEVudW1bXCJOb25lXCJdID0gJ05vbmUnXSA9IFwiTm9uZVwiO1xyXG4gICAgICAgIFRlcm1LaW5kRW51bVtUZXJtS2luZEVudW1bXCJUeXBlXCJdID0gJ1R5cGUnXSA9IFwiVHlwZVwiO1xyXG4gICAgICAgIFRlcm1LaW5kRW51bVtUZXJtS2luZEVudW1bXCJWYWx1ZVwiXSA9ICdWYWx1ZSddID0gXCJWYWx1ZVwiO1xyXG4gICAgfSkoSUVkbVRlcm0uVGVybUtpbmRFbnVtIHx8IChJRWRtVGVybS5UZXJtS2luZEVudW0gPSB7fSkpO1xyXG4gICAgdmFyIFRlcm1LaW5kRW51bSA9IElFZG1UZXJtLlRlcm1LaW5kRW51bTtcclxuICAgIChmdW5jdGlvbiAoU2NoZW1hRWxlbWVudEtpbmRFbnVtKSB7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIk5vbmVcIl0gPSAnTm9uZSddID0gXCJOb25lXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIlR5cGVEZWZpbml0aW9uXCJdID0gJ1R5cGVEZWZpbml0aW9uJ10gPSBcIlR5cGVEZWZpbml0aW9uXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIkZ1bmN0aW9uXCJdID0gJ0Z1bmN0aW9uJ10gPSBcIkZ1bmN0aW9uXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIlZhbHVlVGVybVwiXSA9ICdWYWx1ZVRlcm0nXSA9IFwiVmFsdWVUZXJtXCI7XHJcbiAgICAgICAgU2NoZW1hRWxlbWVudEtpbmRFbnVtW1NjaGVtYUVsZW1lbnRLaW5kRW51bVtcIkVudGl0eUNvbnRhaW5lclwiXSA9ICdFbnRpdHlDb250YWluZXInXSA9IFwiRW50aXR5Q29udGFpbmVyXCI7XHJcbiAgICB9KShJRWRtVGVybS5TY2hlbWFFbGVtZW50S2luZEVudW0gfHwgKElFZG1UZXJtLlNjaGVtYUVsZW1lbnRLaW5kRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgU2NoZW1hRWxlbWVudEtpbmRFbnVtID0gSUVkbVRlcm0uU2NoZW1hRWxlbWVudEtpbmRFbnVtO1xyXG59KShJRWRtVGVybSA9IGV4cG9ydHMuSUVkbVRlcm0gfHwgKGV4cG9ydHMuSUVkbVRlcm0gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JRWRtVGVybS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBJRWRtVHlwZTtcclxuKGZ1bmN0aW9uIChJRWRtVHlwZSkge1xyXG4gICAgKGZ1bmN0aW9uIChUeXBlS2luZEVudW0pIHtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiTm9uZVwiXSA9ICdOb25lJ10gPSBcIk5vbmVcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiUHJpbWl0aXZlXCJdID0gJ1ByaW1pdGl2ZSddID0gXCJQcmltaXRpdmVcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiRW50aXR5XCJdID0gJ0VudGl0eSddID0gXCJFbnRpdHlcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiQ29tcGxleFwiXSA9ICdDb21wbGV4J10gPSBcIkNvbXBsZXhcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiUm93XCJdID0gJ1JvdyddID0gXCJSb3dcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiQ29sbGVjdGlvblwiXSA9ICdDb2xsZWN0aW9uJ10gPSBcIkNvbGxlY3Rpb25cIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiRW50aXR5UmVmZXJlbmNlXCJdID0gJ0VudGl0eVJlZmVyZW5jZSddID0gXCJFbnRpdHlSZWZlcmVuY2VcIjtcclxuICAgICAgICBUeXBlS2luZEVudW1bVHlwZUtpbmRFbnVtW1wiRW51bVwiXSA9ICdFbnVtJ10gPSBcIkVudW1cIjtcclxuICAgIH0pKElFZG1UeXBlLlR5cGVLaW5kRW51bSB8fCAoSUVkbVR5cGUuVHlwZUtpbmRFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlS2luZEVudW0gPSBJRWRtVHlwZS5UeXBlS2luZEVudW07XHJcbn0pKElFZG1UeXBlID0gZXhwb3J0cy5JRWRtVHlwZSB8fCAoZXhwb3J0cy5JRWRtVHlwZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlFZG1UeXBlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIE9ubGluZUF2YWlsYWJpbGl0eTtcclxuKGZ1bmN0aW9uIChPbmxpbmVBdmFpbGFiaWxpdHkpIHtcclxuICAgIChmdW5jdGlvbiAoQXZhaWxhYmlsaXR5TGV2ZWxFbnVtKSB7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIkF2YWlsYWJsZVwiXSA9ICdBdmFpbGFibGUnXSA9IFwiQXZhaWxhYmxlXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIkF2YWlsYWJsZUZvcldhaXRcIl0gPSAnQXZhaWxhYmxlRm9yV2FpdCddID0gXCJBdmFpbGFibGVGb3JXYWl0XCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIk5vdEVub3VnaENvdmVyc1wiXSA9ICdOb3RFbm91Z2hDb3ZlcnMnXSA9IFwiTm90RW5vdWdoQ292ZXJzXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIk92ZXJib29rZWRcIl0gPSAnT3ZlcmJvb2tlZCddID0gXCJPdmVyYm9va2VkXCI7XHJcbiAgICB9KShPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtIHx8IChPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtID0ge30pKTtcclxuICAgIHZhciBBdmFpbGFiaWxpdHlMZXZlbEVudW0gPSBPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtO1xyXG59KShPbmxpbmVBdmFpbGFiaWxpdHkgPSBleHBvcnRzLk9ubGluZUF2YWlsYWJpbGl0eSB8fCAoZXhwb3J0cy5PbmxpbmVBdmFpbGFiaWxpdHkgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1PbmxpbmVBdmFpbGFiaWxpdHkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgT3JkZXJCeUNsYXVzZTtcclxuKGZ1bmN0aW9uIChPcmRlckJ5Q2xhdXNlKSB7XHJcbiAgICAoZnVuY3Rpb24gKERpcmVjdGlvbkVudW0pIHtcclxuICAgICAgICBEaXJlY3Rpb25FbnVtW0RpcmVjdGlvbkVudW1bXCJBc2NlbmRpbmdcIl0gPSAnQXNjZW5kaW5nJ10gPSBcIkFzY2VuZGluZ1wiO1xyXG4gICAgICAgIERpcmVjdGlvbkVudW1bRGlyZWN0aW9uRW51bVtcIkRlc2NlbmRpbmdcIl0gPSAnRGVzY2VuZGluZyddID0gXCJEZXNjZW5kaW5nXCI7XHJcbiAgICB9KShPcmRlckJ5Q2xhdXNlLkRpcmVjdGlvbkVudW0gfHwgKE9yZGVyQnlDbGF1c2UuRGlyZWN0aW9uRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgRGlyZWN0aW9uRW51bSA9IE9yZGVyQnlDbGF1c2UuRGlyZWN0aW9uRW51bTtcclxufSkoT3JkZXJCeUNsYXVzZSA9IGV4cG9ydHMuT3JkZXJCeUNsYXVzZSB8fCAoZXhwb3J0cy5PcmRlckJ5Q2xhdXNlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3JkZXJCeUNsYXVzZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZWRlZW1SZXF1ZXN0SW5mbztcclxuKGZ1bmN0aW9uIChSZWRlZW1SZXF1ZXN0SW5mbykge1xyXG4gICAgKGZ1bmN0aW9uIChTdGF0dXNFbnVtKSB7XHJcbiAgICAgICAgU3RhdHVzRW51bVtTdGF0dXNFbnVtW1wiU3VibWl0ZWRcIl0gPSAnU3VibWl0ZWQnXSA9IFwiU3VibWl0ZWRcIjtcclxuICAgICAgICBTdGF0dXNFbnVtW1N0YXR1c0VudW1bXCJBcHByb3ZlZFwiXSA9ICdBcHByb3ZlZCddID0gXCJBcHByb3ZlZFwiO1xyXG4gICAgICAgIFN0YXR1c0VudW1bU3RhdHVzRW51bVtcIlJlamVjdGVkXCJdID0gJ1JlamVjdGVkJ10gPSBcIlJlamVjdGVkXCI7XHJcbiAgICB9KShSZWRlZW1SZXF1ZXN0SW5mby5TdGF0dXNFbnVtIHx8IChSZWRlZW1SZXF1ZXN0SW5mby5TdGF0dXNFbnVtID0ge30pKTtcclxuICAgIHZhciBTdGF0dXNFbnVtID0gUmVkZWVtUmVxdWVzdEluZm8uU3RhdHVzRW51bTtcclxufSkoUmVkZWVtUmVxdWVzdEluZm8gPSBleHBvcnRzLlJlZGVlbVJlcXVlc3RJbmZvIHx8IChleHBvcnRzLlJlZGVlbVJlcXVlc3RJbmZvID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVkZWVtUmVxdWVzdEluZm8uanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgUmVzZXJ2YXRpb247XHJcbihmdW5jdGlvbiAoUmVzZXJ2YXRpb24pIHtcclxuICAgIChmdW5jdGlvbiAoVHlwZUVudW0pIHtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIlN0YW5kYXJkXCJdID0gJ1N0YW5kYXJkJ10gPSBcIlN0YW5kYXJkXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJIeWJyaWRcIl0gPSAnSHlicmlkJ10gPSBcIkh5YnJpZFwiO1xyXG4gICAgfSkoUmVzZXJ2YXRpb24uVHlwZUVudW0gfHwgKFJlc2VydmF0aW9uLlR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlRW51bSA9IFJlc2VydmF0aW9uLlR5cGVFbnVtO1xyXG59KShSZXNlcnZhdGlvbiA9IGV4cG9ydHMuUmVzZXJ2YXRpb24gfHwgKGV4cG9ydHMuUmVzZXJ2YXRpb24gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXNlcnZhdGlvbi5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBSZXNlcnZhdGlvbkd1ZXN0O1xyXG4oZnVuY3Rpb24gKFJlc2VydmF0aW9uR3Vlc3QpIHtcclxuICAgIChmdW5jdGlvbiAoVHlwZUVudW0pIHtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIlN0YW5kYXJkXCJdID0gJ1N0YW5kYXJkJ10gPSBcIlN0YW5kYXJkXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJIeWJyaWRcIl0gPSAnSHlicmlkJ10gPSBcIkh5YnJpZFwiO1xyXG4gICAgfSkoUmVzZXJ2YXRpb25HdWVzdC5UeXBlRW51bSB8fCAoUmVzZXJ2YXRpb25HdWVzdC5UeXBlRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgVHlwZUVudW0gPSBSZXNlcnZhdGlvbkd1ZXN0LlR5cGVFbnVtO1xyXG59KShSZXNlcnZhdGlvbkd1ZXN0ID0gZXhwb3J0cy5SZXNlcnZhdGlvbkd1ZXN0IHx8IChleHBvcnRzLlJlc2VydmF0aW9uR3Vlc3QgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXNlcnZhdGlvbkd1ZXN0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIFJld2FyZFZhbHVlO1xyXG4oZnVuY3Rpb24gKFJld2FyZFZhbHVlKSB7XHJcbiAgICAoZnVuY3Rpb24gKFR5cGVFbnVtKSB7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJEaXNjb3VudFwiXSA9ICdEaXNjb3VudCddID0gXCJEaXNjb3VudFwiO1xyXG4gICAgICAgIFR5cGVFbnVtW1R5cGVFbnVtW1wiRnJlZU1lYWxcIl0gPSAnRnJlZU1lYWwnXSA9IFwiRnJlZU1lYWxcIjtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIk1vbmV5T2ZmXCJdID0gJ01vbmV5T2ZmJ10gPSBcIk1vbmV5T2ZmXCI7XHJcbiAgICB9KShSZXdhcmRWYWx1ZS5UeXBlRW51bSB8fCAoUmV3YXJkVmFsdWUuVHlwZUVudW0gPSB7fSkpO1xyXG4gICAgdmFyIFR5cGVFbnVtID0gUmV3YXJkVmFsdWUuVHlwZUVudW07XHJcbn0pKFJld2FyZFZhbHVlID0gZXhwb3J0cy5SZXdhcmRWYWx1ZSB8fCAoZXhwb3J0cy5SZXdhcmRWYWx1ZSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJld2FyZFZhbHVlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIFNpbmdsZVZhbHVlTm9kZTtcclxuKGZ1bmN0aW9uIChTaW5nbGVWYWx1ZU5vZGUpIHtcclxuICAgIChmdW5jdGlvbiAoS2luZEVudW0pIHtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIk5vbmVcIl0gPSAnTm9uZSddID0gXCJOb25lXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJDb25zdGFudFwiXSA9ICdDb25zdGFudCddID0gXCJDb25zdGFudFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQ29udmVydFwiXSA9ICdDb252ZXJ0J10gPSBcIkNvbnZlcnRcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIk5vbmVudGl0eVJhbmdlVmFyaWFibGVSZWZlcmVuY2VcIl0gPSAnTm9uZW50aXR5UmFuZ2VWYXJpYWJsZVJlZmVyZW5jZSddID0gXCJOb25lbnRpdHlSYW5nZVZhcmlhYmxlUmVmZXJlbmNlXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJCaW5hcnlPcGVyYXRvclwiXSA9ICdCaW5hcnlPcGVyYXRvciddID0gXCJCaW5hcnlPcGVyYXRvclwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiVW5hcnlPcGVyYXRvclwiXSA9ICdVbmFyeU9wZXJhdG9yJ10gPSBcIlVuYXJ5T3BlcmF0b3JcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZVZhbHVlUHJvcGVydHlBY2Nlc3NcIl0gPSAnU2luZ2xlVmFsdWVQcm9wZXJ0eUFjY2VzcyddID0gXCJTaW5nbGVWYWx1ZVByb3BlcnR5QWNjZXNzXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJDb2xsZWN0aW9uUHJvcGVydHlBY2Nlc3NcIl0gPSAnQ29sbGVjdGlvblByb3BlcnR5QWNjZXNzJ10gPSBcIkNvbGxlY3Rpb25Qcm9wZXJ0eUFjY2Vzc1wiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiU2luZ2xlVmFsdWVGdW5jdGlvbkNhbGxcIl0gPSAnU2luZ2xlVmFsdWVGdW5jdGlvbkNhbGwnXSA9IFwiU2luZ2xlVmFsdWVGdW5jdGlvbkNhbGxcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkFueVwiXSA9ICdBbnknXSA9IFwiQW55XCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJDb2xsZWN0aW9uTmF2aWdhdGlvbk5vZGVcIl0gPSAnQ29sbGVjdGlvbk5hdmlnYXRpb25Ob2RlJ10gPSBcIkNvbGxlY3Rpb25OYXZpZ2F0aW9uTm9kZVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiU2luZ2xlTmF2aWdhdGlvbk5vZGVcIl0gPSAnU2luZ2xlTmF2aWdhdGlvbk5vZGUnXSA9IFwiU2luZ2xlTmF2aWdhdGlvbk5vZGVcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIlNpbmdsZVZhbHVlT3BlblByb3BlcnR5QWNjZXNzXCJdID0gJ1NpbmdsZVZhbHVlT3BlblByb3BlcnR5QWNjZXNzJ10gPSBcIlNpbmdsZVZhbHVlT3BlblByb3BlcnR5QWNjZXNzXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJTaW5nbGVFbnRpdHlDYXN0XCJdID0gJ1NpbmdsZUVudGl0eUNhc3QnXSA9IFwiU2luZ2xlRW50aXR5Q2FzdFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiQWxsXCJdID0gJ0FsbCddID0gXCJBbGxcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkVudGl0eUNvbGxlY3Rpb25DYXN0XCJdID0gJ0VudGl0eUNvbGxlY3Rpb25DYXN0J10gPSBcIkVudGl0eUNvbGxlY3Rpb25DYXN0XCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJFbnRpdHlSYW5nZVZhcmlhYmxlUmVmZXJlbmNlXCJdID0gJ0VudGl0eVJhbmdlVmFyaWFibGVSZWZlcmVuY2UnXSA9IFwiRW50aXR5UmFuZ2VWYXJpYWJsZVJlZmVyZW5jZVwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiU2luZ2xlRW50aXR5RnVuY3Rpb25DYWxsXCJdID0gJ1NpbmdsZUVudGl0eUZ1bmN0aW9uQ2FsbCddID0gXCJTaW5nbGVFbnRpdHlGdW5jdGlvbkNhbGxcIjtcclxuICAgICAgICBLaW5kRW51bVtLaW5kRW51bVtcIkNvbGxlY3Rpb25GdW5jdGlvbkNhbGxcIl0gPSAnQ29sbGVjdGlvbkZ1bmN0aW9uQ2FsbCddID0gXCJDb2xsZWN0aW9uRnVuY3Rpb25DYWxsXCI7XHJcbiAgICAgICAgS2luZEVudW1bS2luZEVudW1bXCJFbnRpdHlDb2xsZWN0aW9uRnVuY3Rpb25DYWxsXCJdID0gJ0VudGl0eUNvbGxlY3Rpb25GdW5jdGlvbkNhbGwnXSA9IFwiRW50aXR5Q29sbGVjdGlvbkZ1bmN0aW9uQ2FsbFwiO1xyXG4gICAgICAgIEtpbmRFbnVtW0tpbmRFbnVtW1wiTmFtZWRGdW5jdGlvblBhcmFtZXRlclwiXSA9ICdOYW1lZEZ1bmN0aW9uUGFyYW1ldGVyJ10gPSBcIk5hbWVkRnVuY3Rpb25QYXJhbWV0ZXJcIjtcclxuICAgIH0pKFNpbmdsZVZhbHVlTm9kZS5LaW5kRW51bSB8fCAoU2luZ2xlVmFsdWVOb2RlLktpbmRFbnVtID0ge30pKTtcclxuICAgIHZhciBLaW5kRW51bSA9IFNpbmdsZVZhbHVlTm9kZS5LaW5kRW51bTtcclxufSkoU2luZ2xlVmFsdWVOb2RlID0gZXhwb3J0cy5TaW5nbGVWYWx1ZU5vZGUgfHwgKGV4cG9ydHMuU2luZ2xlVmFsdWVOb2RlID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2luZ2xlVmFsdWVOb2RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZSgnLi9JRWRtU2NoZW1hRWxlbWVudCcpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9JRWRtVGVybScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9JRWRtVHlwZScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9PbmxpbmVBdmFpbGFiaWxpdHknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vT3JkZXJCeUNsYXVzZScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZWRlZW1SZXF1ZXN0SW5mbycpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZXNlcnZhdGlvbicpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZXNlcnZhdGlvbkd1ZXN0JykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL1Jld2FyZFZhbHVlJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL1NpbmdsZVZhbHVlTm9kZScpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kZWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZSgnLi9hcGkvYXBpJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL21vZGVsL21vZGVscycpKTtcclxudmFyIEF1dGhvcml6YXRpb25TZXJ2aWNlXzEgPSByZXF1aXJlKCcuL2NsaWVudC9BdXRob3JpemF0aW9uU2VydmljZScpO1xyXG5leHBvcnRzLkF1dGhvcml6YXRpb25TZXJ2aWNlID0gQXV0aG9yaXphdGlvblNlcnZpY2VfMS5BdXRob3JpemF0aW9uU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl19
return require('hostme-sdk-angular-mobile');
});