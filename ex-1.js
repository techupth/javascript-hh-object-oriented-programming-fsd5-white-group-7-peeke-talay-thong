class EmailNotification {
  constructor(notification, createdTime, content, receiver) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notification, createdTime, content, phoneNumber) {
    this.notification = notification;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

let alertEmail = new EmailNotification(
  `Alert`,
  `12.42`,
  `Content`,
  `Peeke0rr@gmail.com`
);
let alertPhone = new SMSNotification(`Alert`, `12.44`, `Content`, `0912345678`);

alertEmail.send();
alertPhone.send();
