-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 26, 2019 at 04:06 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `COMP333`
--

-- --------------------------------------------------------

--
-- Table structure for table `phonelist`
--

CREATE TABLE `phonelist` (
  `name` varchar(30) NOT NULL,
  `phone` int(11) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `phonelist`
--

INSERT INTO `phonelist` (`name`, `phone`, `ID`) VALUES
('Wendy', 3214, 2),
('Steve', 7354, 3),
('Harry', 5463, 7),
('Bob', 5837, 1),
('Liz', 5637, 8),
('Clare', 7433, 5),
('Dan', 2355, 4),
('Jerry', 8232, 6);
