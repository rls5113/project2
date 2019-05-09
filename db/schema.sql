drop database if exists  daybreak_db ;
create database daybreak_db;

use daybreak_db;

-- CREATE TABLE `Users` (
--  `username` int(11) NOT NULL AUTO_INCREMENT,
--  `firstname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
--  `lastname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
--  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
--  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
--  `created` datetime NOT NULL,
--  `modified` datetime NOT NULL,
--  PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- CREATE TABLE `Customers`
-- (
--  `username`        int auto_increment NOT NULL ,
--  `firstname` varchar(25) NOT NULL ,
--  `lastname`  varchar(25) NOT NULL ,
--  `email`     varchar(50) NOT NULL ,
-- PRIMARY KEY (`id`)
-- );




CREATE TABLE `Lots`
(
 `colorhexcode`        varchar(10) NOT NULL ,
 `totalitemspurchased` int NOT NULL ,
 `purchasedate`        date NOT NULL ,
 `colordesc`           varchar(50) NOT NULL ,
PRIMARY KEY (`colorhexcode`)
);

CREATE TABLE `Items`
(
 `id`          int auto_increment primary key ,
 `description` varchar(100) NOT NULL 
);

CREATE TABLE `InventoryItems`
(
 `id`           int auto_increment primary key ,
 `totalinstock` int NOT NULL ,
 `totalsales`   float NOT NULL ,
 `color`        varchar(10) NOT NULL ,
 `itemid`       int NOT NULL ,
KEY `fkIdx_69` (`color`),
CONSTRAINT `FK_69` FOREIGN KEY `fkIdx_69` (`color`) REFERENCES `Lots` (`colorhexcode`),
KEY `fkIdx_72` (`itemid`),
CONSTRAINT `FK_72` FOREIGN KEY `fkIdx_72` (`itemid`) REFERENCES `Items` (`id`)
);

CREATE TABLE `Invoices`
(
 `id`              int auto_increment NOT NULL ,
 `inventoryitemid` int NOT NULL ,
 `customerid`      int NOT NULL ,
PRIMARY KEY (`id`),
KEY `fkIdx_82` (`inventoryitemid`),
CONSTRAINT `FK_82` FOREIGN KEY `fkIdx_82` (`inventoryitemid`) REFERENCES `InventoryItems` (`id`),
KEY `fkIdx_91` (`customerid`),
CONSTRAINT `FK_91` FOREIGN KEY `fkIdx_91` (`customerid`) REFERENCES `Customers` (`id`)
);






















