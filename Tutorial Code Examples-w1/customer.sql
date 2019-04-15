-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Jan 09, 2019 at 11:42 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `COMP333`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(4) NOT NULL,
  `Surname` varchar(20) NOT NULL,
  `Givenname` varchar(20) NOT NULL,
  `City` varchar(20) NOT NULL,
  `Phone` varchar(10) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerID`, `Surname`, `Givenname`, `City`, `Phone`, `Email`) VALUES
(1001, 'Harris', 'Anthony', 'Auckland', '074567760', 'ha@xyz.com'),
(1002, 'Tran', 'Christine', 'Auckland', '093426574', 'tc@xyz.com'),
(1003, 'Pollock', 'Steve', 'Hamilton', '073450909', 'ps@xyz.com'),
(1004, 'Gunter', 'Jessie', 'Hamilton', '072343563', 'jg@xyz.com'),
(1005, 'Robinson', 'Doug', 'Nelson', '09347822', 'rd@xyz.com'),
(1006, 'Spiller', 'Justina', 'Wellington', '078901225', 'sj@xyz.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`);
