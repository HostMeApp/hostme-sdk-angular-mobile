import * as models from '../model/models';
import * as auth from './auth';
export declare class MobileWaitingManagementApi {
    protected $http: ng.IHttpService;
    protected $httpParamSerializer: (d: any) => any;
    protected basePath: string;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, $httpParamSerializer?: (d: any) => any, basePath?: string);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    checkInWithWaiting(waitingItemId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.Transaction>;
    close(waitingItemId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    confirmWithApp(confirmationCode: number, conf: models.PhoneConfirmation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    getInLine(value: models.PutInLine, extraHttpRequestParams?: any): ng.IHttpPromise<models.WaitingItem>;
    getUserCurrentWaiting(extraHttpRequestParams?: any): ng.IHttpPromise<models.WaitingItem>;
    leaveTheLine(waitingItemId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    markAllMessagesAsRead(waitingItemId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    putOnHold(restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    sendMessageToWaiting(waitingItemId: number, createMessage: models.CreateMessage, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    takeOffHold(restaurantId: number, waitingItemId: number, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
