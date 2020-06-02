BEGIN;

    DROP TABLE IF EXISTS userSettings
    CASCADE;

DROP TYPE IF EXISTS interestedIn
CASCADE;

CREATE TYPE interestedIn AS ENUM
('male', 'female', 'both');

CREATE TABLE userSettings
(
    id SERIAL PRIMARY KEY,
    userId INT,
    interestedIn interestedIn,
    maxDistance INT,
    ageMin INT,
    ageMax INT,
    agePrivate BOOLEAN DEFAULT FALSE
);

INSERT INTO userSettings
    (userId, interestedIn, MaxDistance,ageMin,ageMax,agePrivate)
VALUES
    (1, 'male', 10, 25, 35, FALSE),
    (2, 'female', 13, 20, 29, TRUE),
    (1, 'both', 2, 22, 31, FALSE);
    
END;