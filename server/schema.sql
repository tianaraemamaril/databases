DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255) NOT NULL
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname varchar(255) NOT NULL,
  text varchar(255) NOT NULL,
  userId int NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.

SELECT m.roomname, m.text, u.username FROM messages m OUTER JOIN users u on m.user_id=u.id;
*/