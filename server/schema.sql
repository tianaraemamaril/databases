CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  createdAt DATETIME,
  objectID int,
  roomname varchar(255),
  text varchar(255),
  updatedAt DATETIME,
  username varchar(255),
  PRIMARY KEY (objectID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE username (
  username varchar(255),
  id int,
  PRIMARY KEY (id)
)

CREATE TABLE roomname (
  roomname varchar(255),
  id int,
  PRIMARY KEY (id)
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

