DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE username (
  username varchar(255),
  usernameID int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (usernameID)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  objectID int NOT NULL AUTO_INCREMENT,
  roomname varchar(255),
  text varchar(255),
  username varchar(255),
  PRIMARY KEY (objectID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

