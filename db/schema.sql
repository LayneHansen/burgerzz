-- DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    devoured BOOLEAN,
    
    PRIMARY KEY (id)
    );