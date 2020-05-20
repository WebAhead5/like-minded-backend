-- BEGIN;

-- DROP TABLE IF EXISTS quizquestions CASCADE;
-- DROP TABLE IF EXISTS useranswers CASCADE;
-- DROP TABLE IF EXISTS usersettings CASCADE;
-- DROP TABLE IF EXISTS auth CASCADE;


-- CREATE TABLE quizquestions (
--     id SERIAL PRIMARY KEY,
--     quizgroup VARCHAR(30) NOT NULL,
--     question VARCHAR(300) NOT NULL,
--     answer1 VARCHAR(300) NOT NULL,
--     answer2 INTEGER NOT NULL,
--     status VARCHAR(30) NOT NULL,
--     furtherinfo VARCHAR(400) 
-- );

-- CREATE TABLE useranswers (
--     id SERIAL PRIMARY KEY,
--     userid VARCHAR(30) UNIQUE NOT NULL,
--     quizquestionsid VARCHAR(30) NOT NULL,
--     answer VARCHAR(300) NOT NULL,s
-- );

-- CREATE TABLE comments (
--     id SERIAL PRIMARY KEY,
--     message VARCHAR(300) NOT NULL,
--     userID INTEGER NOT NULL,
--     bountyID INTEGER NOT NULL,
--     dateposted DATE NOT NULL
-- );

-- INSERT INTO bounties (name, picture,crimes,bounty,status,furtherinfo) VALUES
-- ('Jittery James Daniels', 'https://i.imgur.com/eaof9WM.png', 'Harassing Injuns out up on the north frontier', 500, 'At Large', 'Afraid of cactii'),
-- ('Snakey Jake', 'https://i.imgur.com/boaJaFA.png', 'Highway robbery out by Old Acre', 1000, 'At Large', 'Often confused with James'),
-- ('Mad-Eye Marwan', 'https://i.imgur.com/8NVpLaE.jpg', 'Rustling cattle outside of Nazareth', 2000, 'At Large', 'He likes to seduce the cattle by playing sweet country music on his old acoustic guitar');

-- INSERT INTO users (name, username, password, admin, score) VALUES
-- ('admin', 'admin', '$2b$10$sa/8nHXaQ5ZAOLcNtWQMbe92NFC/9xSGKadWjl..x8kUsT.bvcNHi', true, 20), 
-- ('Mario', 'supermario', 'password1', FALSE, 20),
-- ('Luigi', 'luigiisbetter', 'password2', FALSE, 30);

-- INSERT INTO comments (message, userID, bountyID, dateposted) VALUES
-- ('Well gee partner, I will take that bounty', 1, 1, '04/05/2020'),
-- ('Oh I aint going up against that lunatic', 2, 2, '05/05/2020');

-- COMMIT;