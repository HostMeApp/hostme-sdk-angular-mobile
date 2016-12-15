/// <reference types="angular" />
import * as models from '../model/models';
import * as auth from './auth';
import { IApiConfig } from '../client/IApiConfig';
export declare class MobileReservationsApi {
    protected $http: ng.IHttpService;
    protected config: IApiConfig;
    protected $httpParamSerializer: (d: any) => any;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, config: IApiConfig, $httpParamSerializer?: (d: any) => any);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    addNewReservation(value: models.CreateCustomerReservation, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    closeAsCanceled(reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    getReservationById(reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    getUserReservations(queryOptions?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Reservation>>;
    guestAddNewReservation(value: models.CreateCustomerReservation, extraHttpRequestParams?: any): ng.IHttpPromise<models.ReservationGuest>;
    guestCloseAsCanceled(reservationId: string, cancelReservationContract: models.CancelReservation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    guestGetInvitationAsync(code: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.ReservationInvitation>;
    guestGetReservationById(reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    guestInvitePartyMembersAsync(reservationId: string, invitationContract: models.PartyMembersInvitation, extraHttpRequestParams?: any): ng.IHttpPromise<any>;
    guestRedeemInvitationAsync(redeemInvitationContract: models.RedeemReservationInvitation, code: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    guestUpdateReservation(reservationId: string, value: models.UpdateReservation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    readAllMessage(reservationId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    sendMessageToReservation(reservationId: string, createMessageContract: models.CreateMessage, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
    updateReservation(reservationId: string, value: models.UpdateReservation, extraHttpRequestParams?: any): ng.IHttpPromise<{}>;
}
