import { NotificationSender } from "../interfaces/NotificationSender.interface";

export class NotificationService {
    private sender: NotificationSender;
    constructor(sender: NotificationSender) {
        this.sender = sender;
    }
    notify(message: string): void {
        this.sender.sendNotification(message);
    }
}