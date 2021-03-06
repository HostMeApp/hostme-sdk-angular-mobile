export interface OnlineAvailability {
    acceptReservations?: boolean;
    availabilityLevel?: OnlineAvailability.AvailabilityLevelEnum;
    open?: boolean;
    requestedTime?: boolean;
    time?: string;
    amount?: number;
}
export declare namespace OnlineAvailability {
    enum AvailabilityLevelEnum {
        Available,
        AvailableForWait,
        NotEnoughCovers,
        Overbooked,
    }
}
