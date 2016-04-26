var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var MobileCoreApi = (function () {
            function MobileCoreApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            MobileCoreApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param model
             */
            MobileCoreApi.prototype.addExternalLogin = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/AddExternalLogin';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            MobileCoreApi.prototype.changePassword = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/ChangePassword';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param token
             */
            MobileCoreApi.prototype.checkIn = function (token, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/restaurant/checkin';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'token' is set
                if (!token) {
                    throw new Error('Missing required parameter token when calling checkIn');
                }
                var httpRequestParams = {
                    method: 'PUT',
                    url: localVarPath,
                    json: true,
                    data: token,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param lat
             * @param lon
             * @param name
             * @param city
             */
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param returnUrl
             * @param generateState
             */
            MobileCoreApi.prototype.getManageInfo = function (returnUrl, generateState, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/ManageInfo';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param token
             */
            MobileCoreApi.prototype.getRegistrationToken = function (token, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/campaign/{token}'
                    .replace('{' + 'token' + '}', String(token));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'token' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param date
             * @param partySize
             * @param rangeInMinutes
             * @param areas
             */
            MobileCoreApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/restaurants/{restaurantId}/availability'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param id
             */
            MobileCoreApi.prototype.getRestaurantById = function (id, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/restaurants/{id}'
                    .replace('{' + 'id' + '}', String(id));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'id' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            MobileCoreApi.prototype.getUserInfo = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/UserInfo';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            MobileCoreApi.prototype.logout = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/Logout';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param image
             */
            MobileCoreApi.prototype.postProfileImage = function (image, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/profile/image';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'image' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            MobileCoreApi.prototype.register = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/Register';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            MobileCoreApi.prototype.registerExternal = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/RegisterExternal';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            MobileCoreApi.prototype.removeLogin = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/RemoveLogin';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param modelEmail
             */
            MobileCoreApi.prototype.resetPassword = function (modelEmail, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/ResetPassword';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'modelEmail' is set
                if (!modelEmail) {
                    throw new Error('Missing required parameter modelEmail when calling resetPassword');
                }
                if (modelEmail !== undefined) {
                    queryParameters['model.email'] = modelEmail;
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param model
             */
            MobileCoreApi.prototype.setPassword = function (model, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/SetPassword';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'model' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param channel
             */
            MobileCoreApi.prototype.setPushChannelAsync = function (channel, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/setPushChannel';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'channel' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param profile
             */
            MobileCoreApi.prototype.updateUserProfile = function (profile, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/core/mb/account/profile';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'profile' is set
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
                return this.$http(httpRequestParams);
            };
            MobileCoreApi.$inject = ['$http', '$httpParamSerializer'];
            return MobileCoreApi;
        }());
        Sdk.MobileCoreApi = MobileCoreApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var MobileLoyaltyApi = (function () {
            function MobileLoyaltyApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            MobileLoyaltyApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param restaurantId
             */
            MobileLoyaltyApi.prototype.cancelMembershipAtRestaurant = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param value
             */
            MobileLoyaltyApi.prototype.enrollIntoLoyaltyProgram = function (restaurantId, value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling enrollIntoLoyaltyProgram');
                }
                // verify required parameter 'value' is set
                if (!value) {
                    throw new Error('Missing required parameter value when calling enrollIntoLoyaltyProgram');
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             */
            MobileLoyaltyApi.prototype.getAllUserMemberships = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership';
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            MobileLoyaltyApi.prototype.getCustomerRedeemRequests = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            MobileLoyaltyApi.prototype.getMemberRewardOptions = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            MobileLoyaltyApi.prototype.getMemberTransactions = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/transactions'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             */
            MobileLoyaltyApi.prototype.getMembershipByRestaurantId = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param redeemId
             */
            MobileLoyaltyApi.prototype.getRedeemRequestInfo = function (restaurantId, redeemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/redeems/{redeemId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'redeemId' + '}', String(redeemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getRedeemRequestInfo');
                }
                // verify required parameter 'redeemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param restaurantId
             * @param rewardId
             */
            MobileLoyaltyApi.prototype.submitRequestForRedeem = function (restaurantId, rewardId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/loyalty/mb/membership/{restaurantId}/rewards/{rewardId}/redeem'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId))
                    .replace('{' + 'rewardId' + '}', String(rewardId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling submitRequestForRedeem');
                }
                // verify required parameter 'rewardId' is set
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
                return this.$http(httpRequestParams);
            };
            MobileLoyaltyApi.$inject = ['$http', '$httpParamSerializer'];
            return MobileLoyaltyApi;
        }());
        Sdk.MobileLoyaltyApi = MobileLoyaltyApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var MobileReservationsApi = (function () {
            function MobileReservationsApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            MobileReservationsApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param value
             */
            MobileReservationsApi.prototype.addNewReservation = function (value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/mb/reservations';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param reservationId
             * @param notes
             */
            MobileReservationsApi.prototype.closeAsCanceled = function (reservationId, notes, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/cancel'
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'reservationId' is set
                if (!reservationId) {
                    throw new Error('Missing required parameter reservationId when calling closeAsCanceled');
                }
                // verify required parameter 'notes' is set
                if (!notes) {
                    throw new Error('Missing required parameter notes when calling closeAsCanceled');
                }
                var httpRequestParams = {
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
            };
            /**
             *
             *
             * @param reservationId
             */
            MobileReservationsApi.prototype.getReservationById = function (reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}'
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             *
             *
             * @param queryOptions
             */
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
                return this.$http(httpRequestParams);
            };
            /**
             * Mark all reservation message as read.
             *
             * @param reservationId Reservation identifier
             */
            MobileReservationsApi.prototype.readAllMessage = function (reservationId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/messages/readall'
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'reservationId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Sends a message related to specified reservation
             *
             * @param reservationId Reservation identifier
             * @param body The body of the message
             */
            MobileReservationsApi.prototype.sendMessageToReservation = function (reservationId, body, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}/messages'
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'reservationId' is set
                if (!reservationId) {
                    throw new Error('Missing required parameter reservationId when calling sendMessageToReservation');
                }
                // verify required parameter 'body' is set
                if (!body) {
                    throw new Error('Missing required parameter body when calling sendMessageToReservation');
                }
                var httpRequestParams = {
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
            };
            /**
             *
             *
             * @param reservationId
             * @param value
             */
            MobileReservationsApi.prototype.updateReservation = function (reservationId, value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/mb/reservations/{reservationId}'
                    .replace('{' + 'reservationId' + '}', String(reservationId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'reservationId' is set
                if (!reservationId) {
                    throw new Error('Missing required parameter reservationId when calling updateReservation');
                }
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            MobileReservationsApi.$inject = ['$http', '$httpParamSerializer'];
            return MobileReservationsApi;
        }());
        Sdk.MobileReservationsApi = MobileReservationsApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var MobileWaitlistApi = (function () {
            function MobileWaitlistApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            MobileWaitlistApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param waitingItemId
             */
            MobileWaitlistApi.prototype.checkInWithWaiting = function (waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/checkin'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Closes current waiting position. When person gets a table, hostess should close current position.
             *
             * @param waitingItemId Identifier of the waiting item
             */
            MobileWaitlistApi.prototype.close = function (waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/close'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Confirm waiting record from HostMe mobile application
             *
             * @param confirmationCode Confirmation code that has been generated during initial registration by hostess
             * @param conf Conformation model
             */
            MobileWaitlistApi.prototype.confirmWithApp = function (confirmationCode, conf, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/confirm/{confirmationCode}'
                    .replace('{' + 'confirmationCode' + '}', String(confirmationCode));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'confirmationCode' is set
                if (!confirmationCode) {
                    throw new Error('Missing required parameter confirmationCode when calling confirmWithApp');
                }
                // verify required parameter 'conf' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * This method puts customer in a line on a fly. Thsi is remote registration in a line. Waiting item will be automaticaly put on hold
             *
             * @param value
             */
            MobileWaitlistApi.prototype.getInLine = function (value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'value' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Returns current user waiting item
             *
             */
            MobileWaitlistApi.prototype.getUserCurrentWaiting = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings';
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
                return this.$http(httpRequestParams);
            };
            /**
             * Cancels specified waiting position. Client may decide to go to another restaurant and cancel current waiting item
             *
             * @param waitingItemId Waiting item identifier
             * @param comment Free text comment, such as \&quot;Sorry but it was to long wait, we decided to go to another restaurant.\&quot;
             */
            MobileWaitlistApi.prototype.leaveTheLine = function (waitingItemId, comment, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/cancel'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'waitingItemId' is set
                if (!waitingItemId) {
                    throw new Error('Missing required parameter waitingItemId when calling leaveTheLine');
                }
                // verify required parameter 'comment' is set
                if (!comment) {
                    throw new Error('Missing required parameter comment when calling leaveTheLine');
                }
                var httpRequestParams = {
                    method: 'PUT',
                    url: localVarPath,
                    json: true,
                    data: comment,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Mark all message as read.
             *
             * @param waitingItemId Waiting item identifier
             */
            MobileWaitlistApi.prototype.markAllMessagesAsRead = function (waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/messages/readall'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'waitingItemId' is set
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
                return this.$http(httpRequestParams);
            };
            /**
             * Put waiting item, on hold manually
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             */
            MobileWaitlistApi.prototype.putOnHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/putonhold'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
                return this.$http(httpRequestParams);
            };
            /**
             * Sends a message related to specified waiting item.
             *
             * @param waitingItemId Waiting item identifier
             * @param body The body of the message
             */
            MobileWaitlistApi.prototype.sendMessageToWaiting = function (waitingItemId, body, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/sendmessage'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'waitingItemId' is set
                if (!waitingItemId) {
                    throw new Error('Missing required parameter waitingItemId when calling sendMessageToWaiting');
                }
                // verify required parameter 'body' is set
                if (!body) {
                    throw new Error('Missing required parameter body when calling sendMessageToWaiting');
                }
                var httpRequestParams = {
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
            };
            /**
             * Set waiting item off hold
             *
             * @param restaurantId Restaurant identifier
             * @param waitingItemId Waiting item identifier
             */
            MobileWaitlistApi.prototype.takeOffHold = function (restaurantId, waitingItemId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/wm/mb/waitings/{waitingItemId}/takeoffhold'
                    .replace('{' + 'waitingItemId' + '}', String(waitingItemId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
                return this.$http(httpRequestParams);
            };
            MobileWaitlistApi.$inject = ['$http', '$httpParamSerializer'];
            return MobileWaitlistApi;
        }());
        Sdk.MobileWaitlistApi = MobileWaitlistApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
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
        })(OnlineAvailability = Sdk.OnlineAvailability || (Sdk.OnlineAvailability = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var RedeemRequestInfo;
        (function (RedeemRequestInfo) {
            (function (StatusEnum) {
                StatusEnum[StatusEnum["Submited"] = 'Submited'] = "Submited";
                StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
                StatusEnum[StatusEnum["Rejected"] = 'Rejected'] = "Rejected";
            })(RedeemRequestInfo.StatusEnum || (RedeemRequestInfo.StatusEnum = {}));
            var StatusEnum = RedeemRequestInfo.StatusEnum;
        })(RedeemRequestInfo = Sdk.RedeemRequestInfo || (Sdk.RedeemRequestInfo = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var Reservation;
        (function (Reservation) {
            (function (TypeEnum) {
                TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
                TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
            })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
            var TypeEnum = Reservation.TypeEnum;
        })(Reservation = Sdk.Reservation || (Sdk.Reservation = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var RewardValue;
        (function (RewardValue) {
            (function (TypeEnum) {
                TypeEnum[TypeEnum["Discount"] = 'Discount'] = "Discount";
                TypeEnum[TypeEnum["FreeMeal"] = 'FreeMeal'] = "FreeMeal";
                TypeEnum[TypeEnum["MoneyOff"] = 'MoneyOff'] = "MoneyOff";
            })(RewardValue.TypeEnum || (RewardValue.TypeEnum = {}));
            var TypeEnum = RewardValue.TypeEnum;
        })(RewardValue = Sdk.RewardValue || (Sdk.RewardValue = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
