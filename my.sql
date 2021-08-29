DROP DATABASE IF EXISTS customers;
CREATE DATABASE customers;

DROP USER IF EXISTS 'users'@'localhost';
CREATE USER 'users'@'localhost' IDENTIFIED BY '$cary!';

-- Grant our user access to all tables to the database
GRANT ALL PRIVILEGES ON customers.* to 'users'@'localhost';
FLUSH PRIVILEGES;