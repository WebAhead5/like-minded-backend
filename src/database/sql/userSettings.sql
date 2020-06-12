BEGIN;

    DROP TABLE IF EXISTS userSettings
    CASCADE;

DROP TYPE IF EXISTS interestedIn
CASCADE;

CREATE TYPE interestedIn AS ENUM
('male', 'female', 'both','');

CREATE TABLE userSettings
(
    id SERIAL PRIMARY KEY,
    userId INT,
    interestedIn interestedIn default '',
    maxDistance INT,
    ageMin INT,
    ageMax INT,
    agePrivate BOOLEAN DEFAULT FALSE,
    userLocation VARCHAR(200)
);

INSERT INTO userSettings
( userId, interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation)
VALUES
(1,'male',5,18,88,false,'Haifa'),
(2,'male',5,18,88,false,'Haifa'),
(3,'male',5,18,88,false,'Haifa'),
(4,'male',5,18,88,false,'Haifa'),
(5,'male',5,18,88,false,'Haifa'),
(6,'male',5,18,88,false,'Haifa'),
(7,'male',5,18,88,false,'Haifa'),
(8,'male',5,18,88,false,'Haifa'),
(9,'male',5,18,88,false,'Haifa'),
(10,'male',5,18,88,false,'Haifa');

END;