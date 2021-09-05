CREATE DATABASE users;

DROP USER IF exists 'admin'@'localhost';
CREATE USER 'admin'@'localhost' identified BY 'jHkSbJcP_3';

GRANT ALL PRIVILEGES ON users.* to 'admin'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE customers (
ID INT auto_increment,
firstName varchar(255),
lastName varchar(255),
email varchar(255),
phoneNumber varchar(12),
FOREIGN KEY(userGroups) REFERENCES customerGroups(ID) 
PRIMARY KEY (ID)
);

CREATE TABLE textMessages (
  ID INT AUTO_INCREMENT,
  subject varchar(255),
  creatorID INT, /*should this be FK? */
  messageBody VARCHAR(255),
  createDate DATETIME,
  parentMessageID INT,
  expiryDate DATETIME,
  isReminder INT,
  nextRemindDate DATETIME,
  FOREIGN KEY(reminderFrequencyID) REFERENCES reminderFrequency(ID),
  PRIMARY KEY (ID)
);

CREATE TABLE customerGroups (
  ID INT AUTO_INCREMENT,
  createDate DATETIME,
  isActive CHAR(1),
  FOREIGN KEY(customerID) REFERENCES customers(ID),
  FOREIGN KEY(groupID) REFERENCES groups(ID)
);

CREATE TABLE groups (
  ID INT AUTO_INCREMENT,
  name VARCHAR(255),
  createDate DATETIME,
  isActive CHAR(1)
);

CREATE TABLE messageRecipients (
  ID INT AUTO_INCREMENT,
  isRead INT,
  FOREIGN KEY(recipientID) REFERENCES customers(ID)
  FOREIGN KEY(recipientGroupID) REFERENCES customerGroups(ID),
  FOREIGN KEY(messageID) REFERENCES textMessages(ID)
);

CREATE TABLE reminderFrequency (
 ID INT AUTO_INCREMENT,
 title VARCHAR(255)
 frequency INT,
 isActive CHAR(1)
);