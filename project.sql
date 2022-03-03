-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: TrackerApp
-- ------------------------------------------------------
-- Server version	8.0.19-0ubuntu5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `TrackerApp`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `TrackerApp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `TrackerApp`;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `AdminID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) DEFAULT NULL,
  `LastName` varchar(20) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`AdminID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
INSERT INTO `Admin` VALUES (1,'a','b','c','12345678','1234'),(2,'a','b','c','98765','1234'),(3,'c','b','a','zzzzzzz','1234'),(4,'dfcsdgvf','sagcvdsfbbf','ascsdfgcf','12345678','1234'),(5,'z','x','c','0987654321','1234'),(6,'a','b','c','99','1234'),(7,'Aman','Polara','A.Polara@gmail.com','34343434','1234');
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CheckInHistory`
--

DROP TABLE IF EXISTS `CheckInHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CheckInHistory` (
  `VenueCode` varchar(20) NOT NULL,
  `UserID` int DEFAULT NULL,
  `Date` varchar(20) DEFAULT NULL,
  `Time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`VenueCode`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `CheckInHistory_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `User` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CheckInHistory`
--

LOCK TABLES `CheckInHistory` WRITE;
/*!40000 ALTER TABLE `CheckInHistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `CheckInHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HotspotAdmin`
--

DROP TABLE IF EXISTS `HotspotAdmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HotspotAdmin` (
  `HotspotCode` int NOT NULL,
  `LastUpdated` varchar(20) DEFAULT NULL,
  `LastAdminUpdated` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`HotspotCode`),
  CONSTRAINT `HotspotAdmin_ibfk_1` FOREIGN KEY (`HotspotCode`) REFERENCES `Hotspots` (`HotspotCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HotspotAdmin`
--

LOCK TABLES `HotspotAdmin` WRITE;
/*!40000 ALTER TABLE `HotspotAdmin` DISABLE KEYS */;
/*!40000 ALTER TABLE `HotspotAdmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HotspotVenues`
--

DROP TABLE IF EXISTS `HotspotVenues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HotspotVenues` (
  `HotspotCode` int NOT NULL,
  `VenueCode` int DEFAULT NULL,
  PRIMARY KEY (`HotspotCode`),
  CONSTRAINT `HotspotVenues_ibfk_1` FOREIGN KEY (`HotspotCode`) REFERENCES `Hotspots` (`HotspotCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HotspotVenues`
--

LOCK TABLES `HotspotVenues` WRITE;
/*!40000 ALTER TABLE `HotspotVenues` DISABLE KEYS */;
/*!40000 ALTER TABLE `HotspotVenues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hotspots`
--

DROP TABLE IF EXISTS `Hotspots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Hotspots` (
  `HotspotCode` int NOT NULL AUTO_INCREMENT,
  `Longitude` varchar(20) DEFAULT NULL,
  `Latitude` varchar(20) DEFAULT NULL,
  `Radius` varchar(20) DEFAULT NULL,
  `Time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`HotspotCode`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hotspots`
--

LOCK TABLES `Hotspots` WRITE;
/*!40000 ALTER TABLE `Hotspots` DISABLE KEYS */;
INSERT INTO `Hotspots` VALUES (45,'138.6107','-34.9085','1000','22 at 15/5/2021'),(46,'138.55407713796012','-34.94294021462694','700','22 at 15/5/2021'),(47,'138.59235763549808','-34.949975650454974','800','22 at 15/5/2021'),(48,'138.6139869585168','-34.917326130709455','1000','23 at 15/5/2021'),(49,'138.55854033376093','-34.94294021462694','1000','23 at 15/5/2021'),(50,'138.60935210133906','-34.94406592492774','1000','23 at 15/5/2021'),(51,'138.60935210133906','-34.94406592492774','1000','23 at 15/5/2021'),(52,'138.55339052388447','-34.932667402844615','1000','23 at 15/5/2021'),(53,'138.55339052388447','-34.932667402844615','1000',NULL),(54,'138.55218887329104','-34.93337105742984','200','23 at 15/5/2021'),(55,'138.55218887329104','-34.93337105742984','200',NULL);
/*!40000 ALTER TABLE `Hotspots` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Manager`
--

DROP TABLE IF EXISTS `Manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Manager` (
  `ManagerID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) DEFAULT NULL,
  `LastName` varchar(20) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ManagerID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Manager`
--

LOCK TABLES `Manager` WRITE;
/*!40000 ALTER TABLE `Manager` DISABLE KEYS */;
INSERT INTO `Manager` VALUES (1,NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL),(5,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,'12345'),(8,'NULL','NULL','NULL','NULL','12345'),(9,NULL,NULL,NULL,NULL,'1235545'),(10,NULL,NULL,NULL,NULL,'1235545'),(11,NULL,NULL,NULL,NULL,'1235545'),(12,'a','b','c','d','123'),(13,NULL,NULL,NULL,NULL,'1235545'),(14,'','','','','1235545'),(15,'ccjbahcs','cajbcias','casiabicajk','rrrrrrrr','1235545'),(16,'poojan','patel','pp@gmail.com','11111111','1235545'),(17,'karan','vyas','d.p@gmail.com','23232323','1235545');
/*!40000 ALTER TABLE `Manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(20) DEFAULT NULL,
  `LastName` varchar(20) DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,NULL,NULL,NULL,NULL,NULL),(2,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL,NULL),(5,'Poojan','Patel','abccdv','csacdsf',NULL),(6,NULL,NULL,NULL,NULL,NULL),(7,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL),(9,NULL,NULL,NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL,NULL),(11,NULL,NULL,NULL,NULL,NULL),(12,'sdgse','dafasfas','gsdsgsd','eeeeeeee',NULL),(13,'','','','',NULL),(14,'sbjhsdbc','csjbshksdc','cnbkcshdcsd','wwwwwwww',NULL),(15,'sbjhsdbc','csjbshksdc','cnbkcshdcsd','wwwwwwww',NULL),(16,'Parth ','Vyas ','parth.vyas@gmail.com','12345678',NULL),(17,'Devansh','Patel','email','qwertyui',NULL),(18,'Karan','Patel','karan.patel@user.com','wdc101',NULL),(19,'Karan','Patel','karan.patel@user.com','adddswdc101',NULL),(20,'Karan','Patel','karan.patel@user.com','943210',NULL),(21,'Devansh','Patel','email@gmail.com','12213',NULL),(22,'Devansh','Patel','email@gmail.com','12345678',NULL),(23,'Devansh','Patel','email@gmail.com','11111111',NULL),(24,'Devansh','Patel','email@gmail.com','11111111',NULL),(25,'Parth','Vyas','parth.vyas@gmail.com','12345678',NULL),(26,'Devansh','Patel','email@gmail.com','12345678',NULL),(27,'Parth','Vyas','parth.vyas@gmail.com','12345678',NULL),(28,'Parth','Vyas','parth.vyas@gmail.com','12345678',NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ven`
--

DROP TABLE IF EXISTS `Ven`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ven` (
  `VenueName` varchar(20) DEFAULT NULL,
  `StreetNumber` varchar(20) DEFAULT NULL,
  `StreetName` varchar(20) DEFAULT NULL,
  `Subrub` varchar(20) DEFAULT NULL,
  `PostCode` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ven`
--

LOCK TABLES `Ven` WRITE;
/*!40000 ALTER TABLE `Ven` DISABLE KEYS */;
INSERT INTO `Ven` VALUES ('a','b','c','d',5000),('esdf','bvfs','cffs','das',1000);
/*!40000 ALTER TABLE `Ven` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Venue`
--

DROP TABLE IF EXISTS `Venue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Venue` (
  `VenueCode` int NOT NULL AUTO_INCREMENT,
  `ManagerID` int DEFAULT NULL,
  `Email` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`VenueCode`),
  KEY `ManagerID` (`ManagerID`),
  CONSTRAINT `Venue_ibfk_1` FOREIGN KEY (`ManagerID`) REFERENCES `Manager` (`ManagerID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Venue`
--

LOCK TABLES `Venue` WRITE;
/*!40000 ALTER TABLE `Venue` DISABLE KEYS */;
INSERT INTO `Venue` VALUES (1,16,NULL),(2,16,NULL),(3,16,NULL),(4,16,NULL),(5,16,NULL),(6,16,NULL),(7,16,NULL),(8,16,NULL),(9,16,NULL),(10,16,NULL),(22,12,'r'),(123,12,'patel');
/*!40000 ALTER TABLE `Venue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VenueAddress`
--

DROP TABLE IF EXISTS `VenueAddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VenueAddress` (
  `VenueCode` int NOT NULL,
  `StreetNumber` varchar(20) DEFAULT NULL,
  `StreetName` varchar(20) DEFAULT NULL,
  `Subrub` varchar(20) DEFAULT NULL,
  `PostCode` int DEFAULT NULL,
  `Longitude` varchar(20) DEFAULT NULL,
  `Latitude` varchar(20) DEFAULT NULL,
  `VenueName` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`VenueCode`),
  CONSTRAINT `VenueAddress_ibfk_1` FOREIGN KEY (`VenueCode`) REFERENCES `Venue` (`VenueCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VenueAddress`
--

LOCK TABLES `VenueAddress` WRITE;
/*!40000 ALTER TABLE `VenueAddress` DISABLE KEYS */;
INSERT INTO `VenueAddress` VALUES (22,'5','6','7',8,'325','463','9'),(123,'a','b','c',48,'35','46','50'),(124,'210','Grote Street','AdelaideCBD',2000,'348.984','152.98','Uni Adelaide Village'),(125,'21','North Terrace','CBD',5000,'34.9206','138.6062','Uni of Adelaide'),(126,'18','King William','City',5001,'34.9228','138.6019','Rundle Mall'),(127,'11','Rundle Street','North City',5002,'-34.552388','138.353876','Hindley Street');
/*!40000 ALTER TABLE `VenueAddress` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:16:25
