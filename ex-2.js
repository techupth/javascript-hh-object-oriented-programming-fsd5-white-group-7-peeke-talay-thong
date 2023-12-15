class Notification {
  constructor(notification, createdTime, content, receiver) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has sent to ${this.receiver}`);
  }
}

class EmailNotification extends Notification {
  constructor(notification, createdTime, content, receiver) {
    super(notification, createdTime, content, receiver);
  }
}

class SMSNotification extends Notification {
  constructor(notification, createdTime, content, receiver) {
    super(notification, createdTime, content, receiver);
  }
}

let alertEmail = new EmailNotification(
  `Alert`,
  `1.08`,
  `Content`,
  `peek0rr@gmail.com`
);
let alertPhone = new SMSNotification(`Alert`, `1.10`, `Content`, `0912345678`);

alertEmail.send();
alertPhone.send();
