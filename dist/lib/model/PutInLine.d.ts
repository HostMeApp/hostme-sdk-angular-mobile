export interface PutInLine {
    restaurantId: number;
    reservationTime: string;
    customerName: string;
    groupSize: number;
    notificationUrl: string;
    deviceType: string;
    areas: string;
    note?: string;
    highChair?: boolean;
    stroller?: boolean;
}
