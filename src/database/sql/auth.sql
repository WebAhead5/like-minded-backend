begin;

drop table if exists auth cascade ;


create table auth (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT,
  "password" TEXT,
  "googleId" TEXT
);


INSERT INTO auth
("email", "password", "googleId")
VALUES
('james@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'james'),
( 'moris@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'morisGoogleId1'),
('hadi@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('amir@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('jake@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('mehyar@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('marwan@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('farid@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('morad@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1'),
('marwan@email.com', '$2b$12$QT/R9g0ZG0DWn/R4YD9Gy.95Q5qfl8XYWKrKAT02pFiOwISrKeg3i', 'hadiGoogleId1');

end;
