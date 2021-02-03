CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

USE burgers_db;

ALTER TABLE `burgers_db`.`burgers` 
RENAME TO  `burgers_db`.`burger` ;
