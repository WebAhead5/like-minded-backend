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
    (userId, interestedIn, maxDistance,ageMin,ageMax,agePrivate,userLocation)
VALUES
    (1, 'male', 10, 25, 35, FALSE,'Haifa, israel'),
    (2, 'female', 13, 20, 29, TRUE,'Haifa, israel'),
    (1, 'both', 2, 22, 31, FALSE,'Haifa, israel');
    
END;