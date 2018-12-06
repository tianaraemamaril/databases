-- DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE username (
  username varchar(255),
  usernameID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (usernameID)
);

CREATE TABLE roomname (
  roomname varchar(255),
  roomnameID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (roomnameID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  createdAt DATETIME,
  objectID int NOT NULL AUTO_INCREMENT,
  roomname varchar(255),
  text varchar(255),
  updatedAt DATETIME,
  username varchar(255),
  usernameID int,
  roomnameID int,
  PRIMARY KEY (objectID),
  FOREIGN KEY (usernameID) REFERENCES username(usernameID),
  FOREIGN KEY (roomnameID) REFERENCES roomname(roomnameID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

