-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE cows (
  Id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(25) NOT NULL,
  Description VARCHAR(500) NOT NULL,
  PRIMARY KEY(id)
);