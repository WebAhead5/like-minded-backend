
BEGIN;


    DROP TABLE IF EXISTS userprofile
    CASCADE;
DROP TYPE IF EXISTS gendertype;


CREATE TYPE gendertype AS ENUM
('male', 'female', 'other');

CREATE TABLE userprofile
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    gender gendertype NOT NULL,
    status VARCHAR(100) NOT NULL,
    bio VARCHAR(300) NOT NULL,
    job VARCHAR(100) NOT NULL,
    livingin VARCHAR(200) NOT NULL,
    primaryphoto TEXT NOT NULL,
    subphotos TEXT
    [] NOT NULL
    );

    INSERT INTO userprofile
    VALUES
        (1.0, 'James', 'male', 'Single', 'Learning web-dev in the blazing Haifa heat.', 'Web-Developer', 'Haifa', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4"}'),
        (2.0, 'Moris', 'male', 'Single', 'Teaching web-dev', 'Web-Developer', 'Haifa', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
        (3.0, 'hadi', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}');

    COMMIT;
