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
phoneNumber varchar(10),
PRIMARY KEY (ID)
);

CREATE TABLE textMessages (
  ID INT AUTO_INCREMENT,
  subject varchar(255),
  messageBody VARCHAR(255),
  createDate DATETIME,
  expiryDate DATETIME,
  nextRemindDate DATETIME,
  FOREIGN KEY(customerID) REFERENCES customers(ID),
  PRIMARY KEY (ID)
);

CREATE TABLE groups (
  ID INT AUTO_INCREMENT,
  groupName VARCHAR(255),
  createDate DATETIME,
  isActive CHAR(1)
);

CREATE TABLE customerGroups (
  FOREIGN KEY(customerID) REFERENCES customers(ID),
  FOREIGN KEY(groupID) REFERENCES groups(ID),
  PRIMARY KEY(customerID),
  PRIMARY KEY(groupID)
);

