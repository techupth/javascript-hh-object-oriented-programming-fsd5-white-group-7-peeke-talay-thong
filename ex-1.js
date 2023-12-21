class EmailNotification {
    constructor(NotificationID, creatTime, content, receiver) {
        this.NotificationID = NotificationID;
        this.creatTime = creatTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
 }

class SMSNotification {
    constructor(NotificationID, creatTime, content, phoneNumber) {
        this.NotificationID =NotificationID;
        this.creatTime = creatTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
}
const emailNotification = new EmailNotification('001', '2023-01-01', 'New email notification', 'hahah@hotmail.com');
emailNotification.send();

const smsNotification = new SMSNotification('002', '2023-01-02', 'New SMS notification', '0991234354');
smsNotification.send();
