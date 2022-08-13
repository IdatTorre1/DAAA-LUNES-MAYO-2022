CREATE DATABASE  IF NOT EXISTS `db_hotel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_hotel`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: db_hotel
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idcategoria` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Matrimonial',_binary '','2022-02-18 01:53:45'),(2,'Doble',_binary '','2022-02-18 01:53:45'),(3,'Individual',_binary '','2022-02-18 01:53:45');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idcliente` int NOT NULL AUTO_INCREMENT,
  `apellido` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre` varchar(100) DEFAULT NULL,
  `numdocumento` varchar(30) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `tipodocumento` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Blass Mendoza','gutavo@gmil.com','2022-02-19 07:29:16','Gustavo','12332158','321456987','DNI'),(2,'Gonzales Duran','max@gmail.com','2022-02-20 01:15:23','Maximo','12332114','963258741','PASAPORTE'),(3,'Vargas Dias','fede@gmail.com','2022-02-20 01:15:23','Federico','12358741','987456321','DNI'),(4,'Reyes Alvarez','xime@gmail.com','2022-02-20 01:15:23','Ximena','15975325','986325812','CARNET EXTRANJERIA'),(5,'Lopez Suarez','karen@gmail.com','2022-02-20 01:15:23','Karen','12213212','96654578','PASAPORTE'),(6,'Mercado Medica','fla@gmail.com','2022-02-20 01:15:23','Flavia','87458412','99887755','PASAPORTE'),(7,'Zabala Fuentes','lao@gmail.com','2022-02-20 01:15:23','Laura','85778459','78541259','DNI'),(8,'Pinto Paredes','juancho@gmail.com','2022-02-20 01:15:23','Juan','21545897','32365498','DNI');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_venta`
--

DROP TABLE IF EXISTS `detalle_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_venta` (
  `iddetalleventa` int NOT NULL AUTO_INCREMENT,
  `cantidad` int DEFAULT NULL,
  `subtotal` double DEFAULT NULL,
  `idproducto` int NOT NULL,
  `idventa` int NOT NULL,
  PRIMARY KEY (`iddetalleventa`),
  KEY `FKmka1adpgp1r2omabd2vg8oy5h` (`idproducto`),
  KEY `FKmr2mb7mkp4rnmhi4ekw7239dx` (`idventa`),
  CONSTRAINT `FKmka1adpgp1r2omabd2vg8oy5h` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`idproducto`),
  CONSTRAINT `FKmr2mb7mkp4rnmhi4ekw7239dx` FOREIGN KEY (`idventa`) REFERENCES `venta` (`idventa`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_venta`
--

LOCK TABLES `detalle_venta` WRITE;
/*!40000 ALTER TABLE `detalle_venta` DISABLE KEYS */;
INSERT INTO `detalle_venta` VALUES (1,3,2.4000000000000004,3,1),(2,2,6,7,1),(3,1,2.6,4,1),(4,1,2,5,2),(5,1,3.5,6,2),(6,3,2.0999999999999996,1,2),(7,2,5.4,9,3),(8,3,8.100000000000001,9,3);
/*!40000 ALTER TABLE `detalle_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_habitacion`
--

DROP TABLE IF EXISTS `estado_habitacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_habitacion` (
  `idestadohabitacion` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`idestadohabitacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_habitacion`
--

LOCK TABLES `estado_habitacion` WRITE;
/*!40000 ALTER TABLE `estado_habitacion` DISABLE KEYS */;
INSERT INTO `estado_habitacion` VALUES (1,'DISPONIBLE',_binary ''),(2,'OCUPADO',_binary ''),(3,'LIMPIEZA',_binary '');
/*!40000 ALTER TABLE `estado_habitacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitacion`
--

DROP TABLE IF EXISTS `habitacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habitacion` (
  `idhabitacion` int NOT NULL AUTO_INCREMENT,
  `detalle` varchar(100) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `numero` varchar(50) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `idcategoria` int DEFAULT NULL,
  `idestadohabitacion` int DEFAULT NULL,
  `idpiso` int DEFAULT NULL,
  PRIMARY KEY (`idhabitacion`),
  KEY `FKoxuquvgbdprhsys0w3fj1264` (`idcategoria`),
  KEY `FK58hp6klib94yfj2g6oai71gsr` (`idestadohabitacion`),
  KEY `FKbcjemonoo5ytk81wa8b17e9im` (`idpiso`),
  CONSTRAINT `FK58hp6klib94yfj2g6oai71gsr` FOREIGN KEY (`idestadohabitacion`) REFERENCES `estado_habitacion` (`idestadohabitacion`),
  CONSTRAINT `FKbcjemonoo5ytk81wa8b17e9im` FOREIGN KEY (`idpiso`) REFERENCES `piso` (`idpiso`),
  CONSTRAINT `FKoxuquvgbdprhsys0w3fj1264` FOREIGN KEY (`idcategoria`) REFERENCES `categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitacion`
--

LOCK TABLES `habitacion` WRITE;
/*!40000 ALTER TABLE `habitacion` DISABLE KEYS */;
INSERT INTO `habitacion` VALUES (1,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','001',70,3,2,1),(2,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','002',80,2,1,1),(3,'BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','003',60,3,1,1),(4,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','004',80,2,1,1),(5,'WIFI + BAÑO',_binary '','2022-02-18 01:55:52','005',50,3,1,1),(6,'WIFI + BAÑO + TV 4K + CABLE',_binary '','2022-02-18 01:55:52','006',80,3,1,2),(7,'WIFI + BAÑO + TV 4K + CABLE',_binary '','2022-02-18 01:55:52','007',90,2,1,2),(8,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','008',70,3,1,2),(9,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','009',80,2,1,2),(10,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','010',70,3,1,2),(11,'WIFI + BAÑO + TV 4K + CABLE',_binary '','2022-02-18 01:55:52','011',120,1,1,3),(12,'WIFI + BAÑO + TV 4K + CABLE',_binary '','2022-02-18 01:55:52','012',120,1,1,3),(13,'WIFI + BAÑO + TV 4K + CABLE',_binary '','2022-02-18 01:55:52','013',120,1,1,3),(14,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','014',85,2,1,3),(15,'WIFI + BAÑO + TV + CABLE',_binary '','2022-02-18 01:55:52','015',75,3,1,3),(26,'todo',_binary '','2022-02-26 05:08:56','852',123,2,1,4);
/*!40000 ALTER TABLE `habitacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `idhotel` int NOT NULL AUTO_INCREMENT,
  `descripcion` text,
  `direccion` varchar(255) DEFAULT NULL,
  `distrito` varchar(255) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre_comercial` varchar(250) DEFAULT NULL,
  `ruc_hotel` varchar(20) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idhotel`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Puntuación muy alta en limpieza El Sheraton Lima Hotel & Convention Center está situado a menos de 4 km de los animados locales de ocio nocturno de la playa de Waikiki. Ofrece piscina, sauna y centro de fitness.\nLas amplias habitaciones incluyen vistas a la ciudad, balcón privado, TV LCD grande y baño con bañera y ducha.\nEl hotel alberga 2 restaurantes de cocina tradicional peruana e internacional y el bar Kero, que sirve comidas más ligeras y bebidas.\nEl Sheraton Lima se encuentra a 30 minutos en coche del aeropuerto internacional Jorge Chávez y a corta distancia a pie del distrito bohemio de Barranco, el Barrio Chino y el Museo de Arte Peruano.','muy muy lejano','Paseo de la República 170, Lima 1 Lima, Perú','2022-02-18 02:24:26','hotel sheraton','12312312312','999999632');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idpersona` int NOT NULL AUTO_INCREMENT,
  `apellido` varchar(50) DEFAULT NULL,
  `clave` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `dni` varchar(15) NOT NULL,
  `estado` bit(1) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idpersona`),
  UNIQUE KEY `UK_mws3ptvgjtppjswrodv2trmu9` (`correo`),
  UNIQUE KEY `UK_hlwyecu2r9wagqayhej1kt5wy` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'Perez Jurado','$2a$10$mPnImdGQjTPl1075gaCiPeCXTQJGmEDaZv87lVweDWb7HsF/HoG2G','admin@gmail.com','75225873',_binary '','Juan','2022-02-19 14:52:42'),(2,'Macedo Julca','$2a$10$AifXE303MqcnThUEI9s9PuXvdL7bk18wqOx4SkAxFnbEqNkb6GWHy','user@gmail.com','76121872',_binary '','Pedro','2022-02-19 14:52:42');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `piso`
--

DROP TABLE IF EXISTS `piso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piso` (
  `idpiso` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idpiso`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piso`
--

LOCK TABLES `piso` WRITE;
/*!40000 ALTER TABLE `piso` DISABLE KEYS */;
INSERT INTO `piso` VALUES (1,'PRIMERO',_binary '','2022-02-18 01:54:44'),(2,'SEGUNDO',_binary '','2022-02-18 01:54:44'),(3,'TERCERO',_binary '','2022-02-18 01:54:44'),(4,'CUARTO',_binary '','2022-02-26 05:08:30');
/*!40000 ALTER TABLE `piso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `cantidad` int DEFAULT NULL,
  `detalle` varchar(100) DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  PRIMARY KEY (`idproducto`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,50,'NINGUNA',_binary '','2022-02-18 01:51:18','GALLETAS DORAS',0.7),(2,80,'350 ML',_binary '','2022-02-18 01:51:18','REFRESCO POCMAS',1.5),(3,60,'50 GRM',_binary '','2022-02-18 01:51:18','CHOCOLATE DMX',0.8),(4,20,'150 GRM',_binary '','2022-02-18 01:51:18','PAPAS DORADAS',2.6),(5,30,'300 ML',_binary '','2022-02-18 01:51:18','REFRESCO OXA',2),(6,55,'10 UNID',_binary '','2022-02-18 01:51:18','CIGARRILLOS DEM',3.5),(7,45,'250 ML',_binary '','2022-02-18 01:51:18','AGUA LIFE',3),(8,30,'350 ML',_binary '','2022-02-18 01:51:18','GASEOSA ALMOADA',4.5),(9,40,'NIN',_binary '','2022-02-18 01:51:18','CEREALES PANDA',2.7),(10,20,'200 ML',_binary '','2022-02-18 01:51:18','SHAMPOO GH',2.5);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recepcion`
--

DROP TABLE IF EXISTS `recepcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recepcion` (
  `idrecepcion` int NOT NULL AUTO_INCREMENT,
  `adelanto` double DEFAULT NULL,
  `costopenalidad` double DEFAULT NULL,
  `estado` bit(1) DEFAULT NULL,
  `fechaentrada` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fechasalida` date DEFAULT NULL,
  `fechasalidaconfirmacion` datetime DEFAULT NULL,
  `observacion` varchar(255) DEFAULT NULL,
  `precioinicial` double DEFAULT NULL,
  `preciorestante` double DEFAULT NULL,
  `totalpagado` double DEFAULT NULL,
  `idcliente` int NOT NULL,
  `idhabitacion` int NOT NULL,
  `idpersona` int NOT NULL,
  PRIMARY KEY (`idrecepcion`),
  KEY `FKpim46bdw8hab4skn9tx8m7gwg` (`idcliente`),
  KEY `FKgippta48flrvvxafoca59a9ux` (`idhabitacion`),
  KEY `FKe3jgps447afe7qdauq2wqda0v` (`idpersona`),
  CONSTRAINT `FKe3jgps447afe7qdauq2wqda0v` FOREIGN KEY (`idpersona`) REFERENCES `persona` (`idpersona`),
  CONSTRAINT `FKgippta48flrvvxafoca59a9ux` FOREIGN KEY (`idhabitacion`) REFERENCES `habitacion` (`idhabitacion`),
  CONSTRAINT `FKpim46bdw8hab4skn9tx8m7gwg` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recepcion`
--

LOCK TABLES `recepcion` WRITE;
/*!40000 ALTER TABLE `recepcion` DISABLE KEYS */;
INSERT INTO `recepcion` VALUES (1,0,0,_binary '','2022-02-21 01:35:14','2022-02-23',NULL,'',210,0,0,1,1,1),(2,0,0,_binary '\0','2022-02-21 01:42:14','2022-02-22',NULL,'',240,0,247.6,2,2,1),(3,0,0,_binary '\0','2022-02-21 06:43:37','2022-02-24','2022-02-25 20:51:58','',240,0,240,3,3,1),(4,0,0,_binary '\0','2022-02-21 06:44:48','2022-02-25','2022-02-25 20:24:13','-',400,0,400,4,4,1),(5,200,0,_binary '\0','2022-02-26 05:09:29','2022-02-27',NULL,'',369,169,169,8,26,1),(6,100,0,_binary '\0','2022-02-26 05:14:17','2022-02-27',NULL,'',150,50,0,7,5,1),(7,0,0,_binary '\0','2022-02-26 06:55:03','2022-02-27','2022-02-26 04:37:57','',240,0,240,2,2,1),(8,0,0,_binary '\0','2022-02-26 06:57:58','2022-02-26','2022-02-25 20:58:41','',120,0,120,3,3,1),(9,0,0,_binary '\0','2022-02-26 02:00:05','2022-02-27','2022-02-25 16:01:45','',180,0,180,3,3,1),(10,0,0,_binary '\0','2022-02-26 02:02:21','2022-02-27','2022-02-25 16:04:49','',180,0,180,3,3,1),(11,0,0,_binary '\0','2022-02-26 02:05:13','2022-02-27','2022-02-25 16:11:48','',180,0,180,3,3,1),(12,0,0,_binary '\0','2022-02-26 02:12:08','2022-02-27','2022-02-25 16:14:48','',180,0,180,3,3,1),(13,0,0,_binary '\0','2022-02-26 02:16:47','2022-02-27','2022-02-25 16:18:07','',180,0,180,3,3,1),(14,0,0,_binary '\0','2022-02-26 02:23:07','2022-02-27',NULL,'',180,0,180,3,3,1),(15,0,0,_binary '\0','2022-02-26 02:26:48','2022-02-27','2022-02-25 16:27:17','',180,0,180,3,3,1),(16,0,0,_binary '\0','2022-02-26 02:29:44','2022-02-27','2022-02-25 16:30:13','',180,0,180,3,3,1),(17,0,0,_binary '\0','2022-02-26 02:31:57','2022-02-27','2022-02-25 21:43:50','',180,0,180,3,3,1),(18,0,0,_binary '\0','2022-02-26 07:44:30','2022-02-27','2022-02-25 21:46:49','',180,0,180,3,3,1),(19,0,0,_binary '\0','2022-02-26 07:47:23','2022-02-27','2022-02-26 09:27:40','',180,0,180,3,3,1),(20,0,0,_binary '\0','2022-02-26 19:28:22','2022-02-27','2022-02-26 04:29:52','',120,0,120,3,3,1),(21,0,0,_binary '\0','2022-02-26 14:30:59','2022-02-27','2022-02-26 04:34:11','',120,0,120,3,3,1),(22,0,0,_binary '\0','2022-02-26 14:35:52','2022-02-27','2022-02-26 04:36:07','',120,0,120,3,3,1),(23,0,0,_binary '\0','2022-02-26 14:36:46','2022-02-27','2022-02-26 04:37:36','',120,0,120,3,3,1),(24,0,0,_binary '\0','2022-02-26 20:37:24','2022-02-27','2022-02-26 10:42:01','',160,0,160,2,2,1),(25,0,0,_binary '\0','2022-02-26 20:42:37','2022-02-27','2022-02-26 10:43:04','',160,0,160,3,2,1),(26,0,0,_binary '\0','2022-02-26 20:43:37','2022-02-27','2022-02-26 05:46:37','',160,0,160,2,2,1),(27,0,0,_binary '\0','2022-02-26 15:47:20','2022-02-27','2022-02-26 05:49:12','',160,0,160,2,2,1);
/*!40000 ALTER TABLE `recepcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_rol`
--

DROP TABLE IF EXISTS `usuario_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_rol` (
  `usuario_id` int NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `FK610kvhkwcqk2pxeewur4l7bd1` (`rol_id`),
  CONSTRAINT `FK610kvhkwcqk2pxeewur4l7bd1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`),
  CONSTRAINT `FKna4wfmhi2e5hx3m71dsa6hbjx` FOREIGN KEY (`usuario_id`) REFERENCES `persona` (`idpersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_rol`
--

LOCK TABLES `usuario_rol` WRITE;
/*!40000 ALTER TABLE `usuario_rol` DISABLE KEYS */;
INSERT INTO `usuario_rol` VALUES (1,1),(1,2),(2,2);
/*!40000 ALTER TABLE `usuario_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `idventa` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(50) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total` double DEFAULT NULL,
  `idrecepcion` int NOT NULL,
  PRIMARY KEY (`idventa`),
  KEY `FKemwa3lmbjmp963fgci80yhq34` (`idrecepcion`),
  CONSTRAINT `FKemwa3lmbjmp963fgci80yhq34` FOREIGN KEY (`idrecepcion`) REFERENCES `recepcion` (`idrecepcion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,'Cancelado','2022-02-22 06:28:08',11,1),(2,'Pendiente','2022-02-22 06:38:35',7.6,2),(3,'Pendiente','2022-02-22 06:40:22',13.500000000000002,1);
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'db_hotel'
--

--
-- Dumping routines for database 'db_hotel'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-14 10:51:14
