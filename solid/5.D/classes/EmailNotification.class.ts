import { NotificationSender } from "../interfaces/NotificationSender.interface";

export class EmailNotification implements NotificationSender {
    sendNotification(message: string): void {
        console.log(`Sending email notification: ${message}`);
    }
}