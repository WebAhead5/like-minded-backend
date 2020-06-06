-- noinspection SpellCheckingInspectionForFile

BEGIN;

DROP TABLE IF EXISTS mbticompatabilitylevel
    CASCADE;



CREATE TABLE mbticompatabilitylevel
(
    "id" SERIAL PRIMARY KEY,
    "typeA" VARCHAR(20),
    "typeB" VARCHAR(20),
    "compatabilityLevel" INTEGER
);


INSERT INTO mbticompatabilitylevel VALUES
    (1.0,'INFP','INFP',4.0),
    (2.0,'INFP','ENFP',4.0),
    (3.0,'INFP','INFJ',4.0),
    (4.0,'INFP','ENFJ',5.0),
    (5.0,'INFP','INTJ',4.0),
    (6.0,'INFP','ENTJ',5.0),
    (7.0,'INFP','INTP',4.0),
    (8.0,'INFP','ENTP',4.0),
    (9.0,'INFP','ISFP',1.0),
    (10.0,'INFP','ESFP',1.0),
    (11.0,'INFP','ISTP',1.0),
    (12.0,'INFP','ESTP',1.0),
    (13.0,'INFP','ISFJ',1.0),
    (14.0,'INFP','ESFJ',1.0),
    (15.0,'INFP','ISTJ',1.0),
    (16.0,'INFP','ESTJ',1.0),
    (17.0,'ENFP','INFP',4.0),
    (18.0,'ENFP','ENFP',4.0),
    (19.0,'ENFP','INFJ',5.0),
    (20.0,'ENFP','ENFJ',4.0),
    (21.0,'ENFP','INTJ',5.0),
    (22.0,'ENFP','ENTJ',4.0),
    (23.0,'ENFP','INTP',4.0),
    (24.0,'ENFP','ENTP',4.0),
    (25.0,'ENFP','ISFP',1.0),
    (26.0,'ENFP','ESFP',1.0),
    (27.0,'ENFP','ISTP',1.0),
    (28.0,'ENFP','ESTP',1.0),
    (29.0,'ENFP','ISFJ',1.0),
    (30.0,'ENFP','ESFJ',1.0),
    (31.0,'ENFP','ISTJ',1.0),
    (32.0,'ENFP','ESTJ',1.0),
    (33.0,'INFJ','INFP',4.0),
    (34.0,'INFJ','ENFP',5.0),
    (35.0,'INFJ','INFJ',4.0),
    (36.0,'INFJ','ENFJ',4.0),
    (37.0,'INFJ','INTJ',4.0),
    (38.0,'INFJ','ENTJ',4.0),
    (39.0,'INFJ','INTP',4.0),
    (40.0,'INFJ','ENTP',5.0),
    (41.0,'INFJ','ISFP',1.0),
    (42.0,'INFJ','ESFP',1.0),
    (43.0,'INFJ','ISTP',1.0),
    (44.0,'INFJ','ESTP',1.0),
    (45.0,'INFJ','ISFJ',1.0),
    (46.0,'INFJ','ESFJ',1.0),
    (47.0,'INFJ','ISTJ',1.0),
    (48.0,'INFJ','ESTJ',1.0),
    (49.0,'ENFJ','INFP',5.0),
    (50.0,'ENFJ','ENFP',4.0),
    (51.0,'ENFJ','INFJ',4.0),
    (52.0,'ENFJ','ENFJ',4.0),
    (53.0,'ENFJ','INTJ',4.0),
    (54.0,'ENFJ','ENTJ',4.0),
    (55.0,'ENFJ','INTP',4.0),
    (56.0,'ENFJ','ENTP',4.0),
    (57.0,'ENFJ','ISFP',5.0),
    (58.0,'ENFJ','ESFP',1.0),
    (59.0,'ENFJ','ISTP',1.0),
    (60.0,'ENFJ','ESTP',1.0),
    (61.0,'ENFJ','ISFJ',1.0),
    (62.0,'ENFJ','ESFJ',1.0),
    (63.0,'ENFJ','ISTJ',1.0),
    (64.0,'ENFJ','ESTJ',1.0),
    (65.0,'INTJ','INFP',4.0),
    (66.0,'INTJ','ENFP',5.0),
    (67.0,'INTJ','INFJ',4.0),
    (68.0,'INTJ','ENFJ',4.0),
    (69.0,'INTJ','INTJ',4.0),
    (70.0,'INTJ','ENTJ',4.0),
    (71.0,'INTJ','INTP',4.0),
    (72.0,'INTJ','ENTP',5.0),
    (73.0,'INTJ','ISFP',3.0),
    (74.0,'INTJ','ESFP',3.0),
    (75.0,'INTJ','ISTP',3.0),
    (76.0,'INTJ','ESTP',3.0),
    (77.0,'INTJ','ISFJ',2.0),
    (78.0,'INTJ','ESFJ',2.0),
    (79.0,'INTJ','ISTJ',2.0),
    (80.0,'INTJ','ESTJ',5.0),
    (81.0,'ENTJ','INFP',5.0),
    (82.0,'ENTJ','ENFP',4.0),
    (83.0,'ENTJ','INFJ',4.0),
    (84.0,'ENTJ','ENFJ',4.0),
    (85.0,'ENTJ','INTJ',4.0),
    (86.0,'ENTJ','ENTJ',4.0),
    (87.0,'ENTJ','INTP',5.0),
    (88.0,'ENTJ','ENTP',4.0),
    (89.0,'ENTJ','ISFP',4.0),
    (90.0,'ENTJ','ESFP',3.0),
    (91.0,'ENTJ','ISTP',3.0),
    (92.0,'ENTJ','ESTP',3.0),
    (93.0,'ENTJ','ISFJ',3.0),
    (94.0,'ENTJ','ESFJ',3.0),
    (95.0,'ENTJ','ISTJ',3.0),
    (96.0,'ENTJ','ESTJ',3.0),
    (97.0,'INTP','INFP',4.0),
    (98.0,'INTP','ENFP',4.0),
    (99.0,'INTP','INFJ',4.0),
    (100.0,'INTP','ENFJ',4.0),
    (101.0,'INTP','INTJ',4.0),
    (102.0,'INTP','ENTJ',5.0),
    (103.0,'INTP','INTP',4.0),
    (104.0,'INTP','ENTP',4.0),
    (105.0,'INTP','ISFP',3.0),
    (106.0,'INTP','ESFP',3.0),
    (107.0,'INTP','ISTP',3.0),
    (108.0,'INTP','ESTP',3.0),
    (109.0,'INTP','ISFJ',2.0),
    (110.0,'INTP','ESFJ',2.0),
    (111.0,'INTP','ISTJ',2.0),
    (112.0,'INTP','ESTJ',5.0),
    (113.0,'ENTP','INFP',4.0),
    (114.0,'ENTP','ENFP',4.0),
    (115.0,'ENTP','INFJ',5.0),
    (116.0,'ENTP','ENFJ',4.0),
    (117.0,'ENTP','INTJ',5.0),
    (118.0,'ENTP','ENTJ',4.0),
    (119.0,'ENTP','INTP',4.0),
    (120.0,'ENTP','ENTP',4.0),
    (121.0,'ENTP','ISFP',3.0),
    (122.0,'ENTP','ESFP',3.0),
    (123.0,'ENTP','ISTP',3.0),
    (124.0,'ENTP','ESTP',3.0),
    (125.0,'ENTP','ISFJ',2.0),
    (126.0,'ENTP','ESFJ',2.0),
    (127.0,'ENTP','ISTJ',2.0),
    (128.0,'ENTP','ESTJ',2.0),
    (129.0,'ISFP','INFP',1.0),
    (130.0,'ISFP','ENFP',1.0),
    (131.0,'ISFP','INFJ',1.0),
    (132.0,'ISFP','ENFJ',5.0),
    (133.0,'ISFP','INTJ',3.0),
    (134.0,'ISFP','ENTJ',3.0),
    (135.0,'ISFP','INTP',3.0),
    (136.0,'ISFP','ENTP',3.0),
    (137.0,'ISFP','ISFP',2.0),
    (138.0,'ISFP','ESFP',2.0),
    (139.0,'ISFP','ISTP',2.0),
    (140.0,'ISFP','ESTP',2.0),
    (141.0,'ISFP','ISFJ',4.0),
    (142.0,'ISFP','ESFJ',5.0),
    (143.0,'ISFP','ISTJ',4.0),
    (144.0,'ISFP','ESTJ',5.0),
    (145.0,'ESFP','INFP',1.0),
    (146.0,'ESFP','ENFP',1.0),
    (147.0,'ESFP','INFJ',1.0),
    (148.0,'ESFP','ENFJ',1.0),
    (149.0,'ESFP','INTJ',3.0),
    (150.0,'ESFP','ENTJ',3.0),
    (151.0,'ESFP','INTP',3.0),
    (152.0,'ESFP','ENTP',3.0),
    (153.0,'ESFP','ISFP',2.0),
    (154.0,'ESFP','ESFP',2.0),
    (155.0,'ESFP','ISTP',2.0),
    (156.0,'ESFP','ESTP',2.0),
    (157.0,'ESFP','ISFJ',5.0),
    (158.0,'ESFP','ESFJ',4.0),
    (159.0,'ESFP','ISTJ',5.0),
    (160.0,'ESFP','ESTJ',4.0),
    (161.0,'ISTP','INFP',1.0),
    (162.0,'ISTP','ENFP',1.0),
    (163.0,'ISTP','INFJ',1.0),
    (164.0,'ISTP','ENFJ',1.0),
    (165.0,'ISTP','INTJ',3.0),
    (166.0,'ISTP','ENTJ',3.0),
    (167.0,'ISTP','INTP',3.0),
    (168.0,'ISTP','ENTP',3.0),
    (169.0,'ISTP','ISFP',2.0),
    (170.0,'ISTP','ESFP',2.0),
    (171.0,'ISTP','ISTP',2.0),
    (172.0,'ISTP','ESTP',2.0),
    (173.0,'ISTP','ISFJ',4.0),
    (174.0,'ISTP','ESFJ',5.0),
    (175.0,'ISTP','ISTJ',4.0),
    (176.0,'ISTP','ESTJ',5.0),
    (177.0,'ESTP','INFP',1.0),
    (178.0,'ESTP','ENFP',1.0),
    (179.0,'ESTP','INFJ',1.0),
    (180.0,'ESTP','ENFJ',1.0),
    (181.0,'ESTP','INTJ',3.0),
    (182.0,'ESTP','ENTJ',3.0),
    (183.0,'ESTP','INTP',3.0),
    (184.0,'ESTP','ENTP',3.0),
    (185.0,'ESTP','ISFP',2.0),
    (186.0,'ESTP','ESFP',2.0),
    (187.0,'ESTP','ISTP',2.0),
    (188.0,'ESTP','ESTP',2.0),
    (189.0,'ESTP','ISFJ',5.0),
    (190.0,'ESTP','ESFJ',4.0),
    (191.0,'ESTP','ISTJ',5.0),
    (192.0,'ESTP','ESTJ',4.0),
    (193.0,'ISFJ','INFP',1.0),
    (194.0,'ISFJ','ENFP',1.0),
    (195.0,'ISFJ','INFJ',1.0),
    (196.0,'ISFJ','ENFJ',1.0),
    (197.0,'ISFJ','INTJ',2.0),
    (198.0,'ISFJ','ENTJ',3.0),
    (199.0,'ISFJ','INTP',2.0),
    (200.0,'ISFJ','ENTP',2.0),
    (201.0,'ISFJ','ISFP',3.0),
    (202.0,'ISFJ','ESFP',5.0),
    (203.0,'ISFJ','ISTP',3.0),
    (204.0,'ISFJ','ESTP',5.0),
    (205.0,'ISFJ','ISFJ',2.0),
    (206.0,'ISFJ','ESFJ',2.0),
    (207.0,'ISFJ','ISTJ',2.0),
    (208.0,'ISFJ','ESTJ',2.0),
    (209.0,'ESFJ','INFP',1.0),
    (210.0,'ESFJ','ENFP',1.0),
    (211.0,'ESFJ','INFJ',1.0),
    (212.0,'ESFJ','ENFJ',1.0),
    (213.0,'ESFJ','INTJ',2.0),
    (214.0,'ESFJ','ENTJ',3.0),
    (215.0,'ESFJ','INTP',2.0),
    (216.0,'ESFJ','ENTP',2.0),
    (217.0,'ESFJ','ISFP',5.0),
    (218.0,'ESFJ','ESFP',3.0),
    (219.0,'ESFJ','ISTP',5.0),
    (220.0,'ESFJ','ESTP',3.0),
    (221.0,'ESFJ','ISFJ',2.0),
    (222.0,'ESFJ','ESFJ',2.0),
    (223.0,'ESFJ','ISTJ',2.0),
    (224.0,'ESFJ','ESTJ',2.0),
    (225.0,'ISTJ','INFP',1.0),
    (226.0,'ISTJ','ENFP',1.0),
    (227.0,'ISTJ','INFJ',1.0),
    (228.0,'ISTJ','ENFJ',1.0),
    (229.0,'ISTJ','INTJ',2.0),
    (230.0,'ISTJ','ENTJ',3.0),
    (231.0,'ISTJ','INTP',2.0),
    (232.0,'ISTJ','ENTP',2.0),
    (233.0,'ISTJ','ISFP',3.0),
    (234.0,'ISTJ','ESFP',5.0),
    (235.0,'ISTJ','ISTP',3.0),
    (236.0,'ISTJ','ESTP',5.0),
    (237.0,'ISTJ','ISFJ',2.0),
    (238.0,'ISTJ','ESFJ',2.0),
    (239.0,'ISTJ','ISTJ',2.0),
    (240.0,'ISTJ','ESTJ',2.0),
    (241.0,'ESTJ','INFP',1.0),
    (242.0,'ESTJ','ENFP',1.0),
    (243.0,'ESTJ','INFJ',1.0),
    (244.0,'ESTJ','ENFJ',1.0),
    (245.0,'ESTJ','INTJ',2.0),
    (246.0,'ESTJ','ENTJ',3.0),
    (247.0,'ESTJ','INTP',5.0),
    (248.0,'ESTJ','ENTP',2.0),
    (249.0,'ESTJ','ISFP',5.0),
    (250.0,'ESTJ','ESFP',3.0);
INSERT INTO mbticompatabilitylevel VALUES
    (251.0,'ESTJ','ISTP',5.0),
    (252.0,'ESTJ','ESTP',3.0),
    (253.0,'ESTJ','ISFJ',2.0),
    (254.0,'ESTJ','ESFJ',2.0),
    (255.0,'ESTJ','ISTJ',2.0),
    (256.0,'ESTJ','ESTJ',2.0);

END;