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
  messageRecipient VARCHAR(255),
  messageSender VARCHAR(255),
  messageBody VARCHAR(255),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  createdAt DATETIME DEFAULT NOW(),
  deletedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE customerTexts (
  customerId INT,
  textMessageId INT,
  PRIMARY KEY (customerId, textMessageId),
  FOREIGN KEY (customerId) references customers(id),
  FOREIGN KEY (textMessageId) references textMessages(id)
)

