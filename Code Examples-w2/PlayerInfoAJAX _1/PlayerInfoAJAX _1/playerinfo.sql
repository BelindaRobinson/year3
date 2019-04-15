-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 03, 2018 at 03:12 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `COMP333`
--

-- --------------------------------------------------------

--
-- Table structure for table `playerinfo`
--

CREATE TABLE `playerinfo` (
  `ID` int(11) NOT NULL,
  `imagelocation` varchar(11) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `shirtnumber` int(11) NOT NULL,
  `info` varchar(100) NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `playerinfo`
--

INSERT INTO `playerinfo` (`ID`, `imagelocation`, `firstname`, `lastname`, `shirtnumber`, `info`, `rating`) VALUES
(4, 'thfc_4', 'Hugo', 'Lloris', 1, 'Hugo is regarded as one of the best goalkeepers in the world.', 5),
(3, 'thfc_3', 'Harry', 'Kane', 10, 'Harry Kane is a striker. He has scored more than 100 goals in his club career.', 5),
(2, 'thfc_2', 'Danny', 'Rose', 3, 'Danny Rose is an attacking defender. He joined the club in 2007.', 3),
(5, 'thfc_5', 'Heung-Min', 'Son', 7, 'Heung-Min Son is a forward. He has previously played for Hamburg and Bayer Leverkusen.', 4),
(6, 'thfc_6', 'Toby', 'Alderweireld', 4, 'Toby is a defender. He plays internationally for Belgium.', 5),
(1, 'thfc_1', 'Dele', 'Alli', 6, 'Dele Alli is a midfielder. He joined the club from MKDons in 2015.', 5);
