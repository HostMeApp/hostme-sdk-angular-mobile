"use strict";
var auth = require('./auth');
'use strict';
var MobileCoreApi = (function () {
    function MobileCoreApi($http, $httpParamSerializer, basePath) {
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
        var localVarPath = this.basePath + '/api/core/mb/account/addExternalLogin';
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
        var localVarPath = this.basePath + '/api/core/mb/account/changePassword';
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
        var localVarPath = this.basePath + '/api/core/mb/restaurant/checkin';
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
        var localVarPath = this.basePath + '/api/core/mb/restaurants/find';
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
        var localVarPath = this.basePath + '/api/core/mb/restaurants';
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
        var localVarPath = this.basePath + '/api/core/mb/locations';
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
        var localVarPath = this.basePath + '/api/core/mb/account/manageInfo';
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
        var localVarPath = this.basePath + '/api/core/mb/campaign/{token}'
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
        var localVarPath = this.basePath + '/api/core/mb/restaurants/{restaurantId}/availability'
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
        var localVarPath = this.basePath + '/api/core/mb/restaurants/{id}'
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
        var localVarPath = this.basePath + '/api/core/mb/account/profile';
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
        var localVarPath = this.basePath + '/api/core/mb/account/profile/image';
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
        var localVarPath = this.basePath + '/api/core/mb/account/profile/image';
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
        var localVarPath = this.basePath + '/api/core/mb/account/register';
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
        var localVarPath = this.basePath + '/api/core/mb/account/registerExternal';
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
        var localVarPath = this.basePath + '/api/core/mb/account/removeLogin';
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
        var localVarPath = this.basePath + '/api/core/mb/account/resetPassword';
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
        var localVarPath = this.basePath + '/api/core/mb/account/setPassword';
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
        var localVarPath = this.basePath + '/api/core/mb/account/setPushChannel';
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
        var localVarPath = this.basePath + '/api/core/mb/account/profile';
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
    MobileCoreApi.$inject = ['$http', '$httpParamSerializer'];
    return MobileCoreApi;
}());
exports.MobileCoreApi = MobileCoreApi;
//# sourceMappingURL=MobileCoreApi.js.map