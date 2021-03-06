BEGIN;

DROP TABLE IF EXISTS userprofile
    CASCADE;

DROP TYPE IF EXISTS gendertype;

CREATE TYPE genderType AS ENUM
    ('','male', 'female', 'other');

CREATE TABLE userprofile
(
    id SERIAL PRIMARY KEY,
    userId int,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    gender genderType default '',
    status VARCHAR(100) ,
    bio VARCHAR(300) ,
    job VARCHAR(100) ,
    livingIn VARCHAR(200) ,
    primaryPhoto TEXT ,
    subPhotos TEXT[]
);

INSERT INTO userprofile
(userId,firstName, lastName, gender, status, bio, job, livingin, primaryphoto, subphotos)
VALUES
(1, 'James', 'Daniels', 'male', 'Single', 'Learning web-dev in the blazing Haifa heat.', 'Web-Developer', 'Haifa', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4"}'),
(2, 'Moris', 'Rafoul', 'male', 'Single', 'Teaching web-dev', 'Web-Developer', 'Haifa', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(3, 'hadi', 'Khalil', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(4, 'Amir', 'Jones', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(5, 'Jake', 'Powis', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(6, 'Mehyar', 'Davis', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(7, 'Marwan', 'Willams', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(8, 'Farid', 'Pritchard', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(9, 'Morad', 'Evans', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(10, 'Mario', 'Price', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}');


END;