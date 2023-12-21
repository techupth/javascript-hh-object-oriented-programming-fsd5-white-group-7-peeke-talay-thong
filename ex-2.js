class Notification {
    constructor(NotificationId, createdTime, content, receiver) {
    this.NotificationId = NotificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver, subject) {
        
        super(notificationId, createdTime, content, receiver);
        this.subject = subject;
      }
}
    class SMSNotification extends Notification {
        constructor(notificationId, createdTime, content, phoneNumber) {
          // Call the constructor of the parent class
          super(notificationId, createdTime, content, phoneNumber);
        }
}

        const emailNotification = new EmailNotification('001', '2023-01-01', 'New email notification', 'hahah@hotmail.com', 'Important Subject');
        emailNotification.send();

        const smsNotification = new SMSNotification('002', '2023-01-02', 'New SMS notification', '0991234354');
        smsNotification.send();
