DROP DATABASE IF EXISTS users;
CREATE DATABASE users;

DROP USER IF exists 'admin'@'localhost';
CREATE USER 'admin'@'localhost' identified BY 'jHkSbJcP_3';
GRANT ALL PRIVILEGES ON users.* to 'admin'@'localhost';
FLUSH PRIVILEGES;

USE users;

CREATE TABLE customers (
id INT AUTO_INCREMENT,
firstName VARCHAR(255),
lastName VARCHAR(255),
email VARCHAR(255),
phoneNumber VARCHAR(20),
state VARCHAR(2),
city VARCHAR(50),
lastOrderPrice VARCHAR(50),
lastOrderDate DATE,
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
createdAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE textMessages (
  id INT AUTO_INCREMENT,
  customerid INT, 
  subject VARCHAR(255),
  messageBody VARCHAR(255),
  createDate DATETIME,
  expiryDate DATETIME,
  nextRemindDate DATETIME,
  reminderFrequencyID INT,
  isRead ENUM('Y', 'N'),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  createdAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  FOREIGN KEY(customerId) REFERENCES customers(Id),
  PRIMARY KEY (id)
);

