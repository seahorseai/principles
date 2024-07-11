import { NotificationSender } from "../interfaces/NotificationSender.interface";

export class TextMessageNotification implements NotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending text message notification: ${message}`);
    }
}