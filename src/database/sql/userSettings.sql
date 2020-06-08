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


END;