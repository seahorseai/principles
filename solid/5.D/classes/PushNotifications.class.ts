import { NotificationSender } from "../interfaces/NotificationSender.interface";

export class PushNotification implements NotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending push notification: ${message}`);
    }
}