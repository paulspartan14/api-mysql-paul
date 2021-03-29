-- Adminer 4.8.0 MySQL 8.0.17 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `api-test`;
CREATE DATABASE `api-test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `api-test`;

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `students` (`id`, `name`, `lastname`) VALUES
(1,	'Paul',	'Mena'),
(2,	'Jose',	'Santos');

-- 2021-03-29 19:48:52