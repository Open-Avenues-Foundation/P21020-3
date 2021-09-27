CREATE DATABASE customers;

DROP USER IF exists 'admin'@'localhost';
CREATE USER 'admin'@'localhost' identified BY 'jHkSbJcP_3';
// we should add env config setup
GRANT ALL PRIVILEGES ON customers.* to 'admin'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE customers (
Id INT auto_increment,
firstName varchar(255),
lastName varchar(255),
email varchar(255),
phoneNumber varchar(10),
state varchar(2),
city varchar(50),
PRIMARY KEY (Id)
);

CREATE TABLE groups (
  Id INT AUTO_INCREMENT,
  groupName VARCHAR(255),
  createDate DATETIME,
  isActive ENUM('Y', 'N'),
  lastOrderDate DATETIME,
  lastOrderPrice INT,
  PRIMARY KEY(Id)
);

CREATE TABLE textMessages (
  Id INT AUTO_INCREMENT,
  customerid INT 
  subject varchar(255),
  messageBody VARCHAR(255),
  createDate DATETIME,
  expiryDate DATETIME,
  nextRemindDate DATETIME,
  isRead ENUM('Y', 'N'),
  FOREIGN KEY(customerId) REFERENCES customers(Id),
  PRIMARY KEY (Id)
);

CREATE TABLE customerGroups (
  FOREIGN KEY(customerId) REFERENCES customers(Id),
  FOREIGN KEY(groupId) REFERENCES groups(Id),
  PRIMARY KEY(customerId, groupId)
);

