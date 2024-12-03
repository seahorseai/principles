import { EmailNotification } from './classes/EmailNotification.class';
import { TextMessageNotification } from './classes/TextMessageNotification.class';
import { PushNotification } from './classes/PushNotification.class';
import { NotificationService } from './classes/NotificationService.class';

const emailNotifier = new EmailNotification();
const textMessageNotifier = new TextMessageNotification();
const pushNotifier = new PushNotification();
const emailService = new NotificationService(emailNotifier);
const textMessageService = new NotificationService(textMessageNotifier);
const pushService = new NotificationService(pushNotifier);
emailService.notify("Hello, this is an email notification!");
textMessageService.notify("Hello, this is a text message notification!");
pushService.notify("Hello, this is a push notification!");