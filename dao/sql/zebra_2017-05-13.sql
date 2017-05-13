# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.17)
# Database: zebra
# Generation Time: 2017-05-13 06:34:26 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `province` varchar(64) DEFAULT NULL COMMENT '省',
  `city` varchar(64) DEFAULT NULL COMMENT '市',
  `county` varchar(64) DEFAULT NULL COMMENT '区/县',
  `street` varchar(64) DEFAULT NULL COMMENT '镇/街道',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;

INSERT INTO `address` (`id`, `province`, `city`, `county`, `street`, `create_time`, `update_time`)
VALUES
	(1,'上海','上海','浦东新区','曹路镇银丰苑','2017-03-18 17:04:26','2017-03-18 17:04:26');

/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `inset` varchar(255) DEFAULT NULL COMMENT '插图',
  `description` text COMMENT '描述',
  `position` int(11) DEFAULT NULL COMMENT '排列位置',
  `status` int(11) DEFAULT NULL COMMENT '状态',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table photo
# ------------------------------------------------------------

DROP TABLE IF EXISTS `photo`;

CREATE TABLE `photo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL COMMENT '商品ID',
  `img` varchar(255) DEFAULT NULL COMMENT '照片地址',
  `evaluate` int(11) DEFAULT '1' COMMENT '评价',
  `status` int(11) DEFAULT '0' COMMENT '状态',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;

INSERT INTO `photo` (`id`, `product_id`, `img`, `evaluate`, `status`, `create_time`, `update_time`)
VALUES
	(1,1,'a',1,0,'2017-03-18 17:16:10','2017-03-18 17:16:10');

/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `username` varchar(255) DEFAULT NULL COMMENT '姓名',
  `age` int(11) DEFAULT '20' COMMENT '年龄',
  `level` int(11) DEFAULT NULL COMMENT '等级',
  `sales` int(11) DEFAULT '0' COMMENT '销量',
  `address` int(11) DEFAULT '0' COMMENT '住址',
  `mobile` varchar(64) DEFAULT NULL COMMENT '联系电话',
  `image` varchar(255) DEFAULT NULL COMMENT '照片',
  `status` int(11) DEFAULT '0' COMMENT '状态',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;

INSERT INTO `product` (`id`, `nickname`, `username`, `age`, `level`, `sales`, `address`, `mobile`, `image`, `status`, `create_time`, `update_time`)
VALUES
	(4,'d','ma',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0002.jpeg',0,'2017-03-18 17:16:10','2017-03-18 17:16:10'),
	(5,'e','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0002.jpeg',0,'2017-03-18 21:43:38','2017-03-18 21:43:38'),
	(6,'f','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0002.jpeg',0,'2017-03-18 21:43:45','2017-03-18 21:43:45'),
	(7,'g','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:43:49','2017-03-18 21:43:49'),
	(8,'h','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:43:53','2017-03-18 21:43:53'),
	(9,'i','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:43:56','2017-03-18 21:43:56'),
	(10,'j','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:44:00','2017-03-18 21:44:00'),
	(11,'k','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:44:03','2017-03-18 21:44:03'),
	(12,'l','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:44:06','2017-03-18 21:44:06'),
	(13,'m','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:44:09','2017-03-18 21:44:09'),
	(14,'n','qian',21,1,0,1,'1521994768','http://oo3l8sz3b.bkt.clouddn.com/0001.jpeg',0,'2017-03-18 21:44:13','2017-03-18 21:44:13');

/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sale
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sale`;

CREATE TABLE `sale` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT '0',
  `mobile` varchar(32) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '0' COMMENT '状态',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;

INSERT INTO `sale` (`id`, `product_id`, `price`, `mobile`, `address`, `status`, `create_time`, `update_time`)
VALUES
	(1,1,1,'15201994768','上海浦东新区',1,'2017-03-18 17:16:10','2017-03-18 17:16:10'),
	(2,1,1,'15201994768','上海浦东新区',1,'2017-03-18 17:16:11','2017-03-18 17:16:10'),
	(3,1,1,'15201994768','上海浦东新区',1,'2017-03-18 17:16:12','2017-03-18 17:16:10'),
	(4,1,1,'15201994768','上海浦东新区',1,'2017-03-18 17:16:13','2017-03-18 17:16:10');

/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
