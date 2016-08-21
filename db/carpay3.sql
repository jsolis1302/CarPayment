-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 21-08-2016 a las 18:47:25
-- Versión del servidor: 5.1.44
-- Versión de PHP: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `carpay`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_payment`
--

CREATE TABLE IF NOT EXISTS `tbl_payment` (
  `pay_id` int(10) NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `pay_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`pay_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Volcar la base de datos para la tabla `tbl_payment`
--

INSERT INTO `tbl_payment` (`pay_id`, `amount`, `pay_date`, `user_id`) VALUES
(1, 3900, '2015-11-20 00:00:00', 1),
(2, 3900, '2015-12-20 00:00:00', 1),
(3, 3900, '2016-01-20 00:00:00', 1),
(4, 3900, '2016-02-20 00:00:00', 1),
(5, 3900, '2016-03-20 00:00:00', 1),
(6, 3900, '2016-04-20 00:00:00', 1),
(7, 15600, '2016-05-20 00:00:00', 1),
(8, 3900, '2016-06-20 00:00:00', 1),
(9, 3900, '2016-07-20 00:00:00', 1),
(10, 3900, '2016-08-20 00:00:00', 1),
(11, 1, '2016-08-21 05:00:00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(25) NOT NULL,
  `password` varchar(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Volcar la base de datos para la tabla `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `login`, `password`, `name`, `lastname`) VALUES
(1, 'jsolis', '1234', 'Jorge', 'Solis'),
(2, 'jsolis2', '1234', 'Jorge2', 'Solis'),
(3, 'jsolis3', '1234', 'Jorg3e', 'Solis'),
(4, 'jsolis3', '1234', 'Jorfge', 'Soglis'),
(5, 'jsolis3', '1234', 'Jgorge', 'Solgis'),
(6, 'jsolis4', '1234', 'Jorsge', 'Solwis'),
(7, 'jsol5is', '1234', 'Jorge', 'Soblis'),
(8, 'js6olis', '1234', 'Jogbrge', 'Soqlis'),
(9, 'j7solis', '1234', 'Jofrge', 'Solis'),
(10, 'j7sol6is', '1234', 'Jorge', 'Solis'),
(11, 'jsoli0s', '1234', 'Jogrge', 'Sfolis');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `view_payment_users`
--

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `carpay`.`view_payment_users` AS select `t1`.`pay_id` AS `pay_id`,`t1`.`amount` AS `amount`,`t1`.`pay_date` AS `pay_date`,`t2`.`login` AS `user_name` from (`carpay`.`tbl_payment` `t1` join `carpay`.`tbl_users` `t2`) where (`t1`.`user_id` = `t2`.`user_id`);

--
-- Volcar la base de datos para la tabla `view_payment_users`
--

INSERT INTO `view_payment_users` (`pay_id`, `amount`, `pay_date`, `user_name`) VALUES
(1, 3900, '2015-11-20 00:00:00', 'jsolis'),
(2, 3900, '2015-12-20 00:00:00', 'jsolis'),
(3, 3900, '2016-01-20 00:00:00', 'jsolis'),
(4, 3900, '2016-02-20 00:00:00', 'jsolis'),
(5, 3900, '2016-03-20 00:00:00', 'jsolis'),
(6, 3900, '2016-04-20 00:00:00', 'jsolis'),
(7, 15600, '2016-05-20 00:00:00', 'jsolis'),
(8, 3900, '2016-06-20 00:00:00', 'jsolis'),
(9, 3900, '2016-07-20 00:00:00', 'jsolis'),
(10, 3900, '2016-08-20 00:00:00', 'jsolis'),
(11, 1, '2016-08-21 05:00:00', 'jsolis');
