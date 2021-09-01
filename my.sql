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
PRIMARY KEY (ID)
);