BEGIN;

DROP TABLE IF EXISTS userprofile
    CASCADE;

DROP TYPE IF EXISTS gendertype;


CREATE TYPE genderType AS ENUM
    ('male', 'female', 'other');


CREATE TABLE userprofile
(
    id SERIAL PRIMARY KEY,
    userId int,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    gender genderType NOT NULL,
    status VARCHAR(100) ,
    bio VARCHAR(300) ,
    job VARCHAR(100) ,
    livingin VARCHAR(200) ,
    primaryphoto TEXT ,
    subphotos TEXT[]
);


INSERT INTO userprofile
(userId,firstName, lastName, gender, status, bio, job, livingin, primaryphoto, subphotos)
VALUES
(1, 'James', 'Daniels', 'male', 'Single', 'Learning web-dev in the blazing Haifa heat.', 'Web-Developer', 'Haifa', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4"}'),
(2, 'Moris', 'Rafoul', 'male', 'Single', 'Teaching web-dev', 'Web-Developer', 'Haifa', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
(3, 'hadi', 'Khalil', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}');


END;