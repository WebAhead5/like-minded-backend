begin;

drop table if exists auth cascade ;


create table auth (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT,
  "password" TEXT,
  "googleId" TEXT
);


INSERT INTO auth
("id","email", "password", "googleId")
VALUES
(1,'james@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'james'),
(2, 'moris@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'morisGoogleId1'),
(3,'hadi@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(4,'amir@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(5,'jake@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(6,'mehyar@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(7,'marwan@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(8,'farid@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(9,'morad@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
(10,'marwan@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1');

end;
