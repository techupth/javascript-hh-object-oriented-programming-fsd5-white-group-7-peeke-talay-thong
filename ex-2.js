class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

// const emailNotification = new EmailNotification("12345678", "11:59 A.M.", "Hi!", "test@gmail.com");
// const smsNotification = new SMSNotification("1212312121", "1:20 P.M.", "Sh***e 12.12 Hot Sale", "0744675371");

// emailNotification.send();
// smsNotification.send();
