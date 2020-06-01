
BEGIN;


    DROP TABLE IF EXISTS userprofile
    CASCADE;

DROP TABLE IF EXISTS messages
CASCADE;

DROP TABLE IF EXISTS "userRelationship"
CASCADE;



DROP TYPE IF EXISTS gendertype;
DROP TYPE IF EXISTS likeEnum;


CREATE TYPE likeEnum AS ENUM
('block', 'none', 'like');
CREATE TYPE gendertype AS ENUM
('male', 'female', 'other');

CREATE TABLE userprofile
(
    id SERIAL PRIMARY KEY,
    userId int,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    gender gendertype NOT NULL,
    status VARCHAR(100) ,
    bio VARCHAR(300) ,
    job VARCHAR(100) ,
    livingin VARCHAR(200) ,
    primaryphoto TEXT ,
    subphotos TEXT
    []
    );

    CREATE TABLE "messages"
    (
        "id" SERIAL PRIMARY KEY,
        "senderUserId" INT,
        "recipUserId" INT,
        "message" VARCHAR(300),
        "timeAndDate" TIMESTAMP
    );



    CREATE TABLE "userRelationship"
    (
        "id" SERIAL PRIMARY KEY,
        "userId1" INT,
        "userId2" INT,
        "user1-towards-user2" likeEnum,
        "user2-towards-user1" likeEnum
    );

    INSERT INTO "userRelationship"
        ("userId1", "userId2","user1-towards-user2", "user2-towards-user1")
    VALUES
        (1, 2, 'like', 'like'),
        (1, 3, 'like', 'none'),
        (2, 3, 'like', 'block');

    INSERT INTO userprofile
        (userId,firstName, lastName, gender, status, bio, job, livingin, primaryphoto, subphotos)
    VALUES
        (1, 'James', 'Daniels', 'male', 'Single', 'Learning web-dev in the blazing Haifa heat.', 'Web-Developer', 'Haifa', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars2.githubusercontent.com/u/51966598?s=60&v=4"}'),
        (2, 'Moris', 'Rafoul', 'male', 'Single', 'Teaching web-dev', 'Web-Developer', 'Haifa', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}'),
        (3, 'hadi', 'Khalil', 'male', 'Single', 'ARTIST ', 'COUCH DRIVER', 'Haifa', 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', '{"https://avatars2.githubusercontent.com/u/51966598?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4", "https://avatars0.githubusercontent.com/u/10247681?s=60&v=4"}');


    INSERT INTO "messages"
    VALUES
        (1.0, 1.0, 2.0, 'Hey there', '2020-05-01 13:07:35'),
        (2.0, 1.0, 2.0, 'How''s tricks?', '2020-05-01 13:08:29.107000'),
        (3.0, 1.0, 3.0, 'What''s happening!?', '2020-05-01 13:08:14.223000'),
        (4.0, 2.0, 1.0, 'Howdee', '2020-05-01 13:08:15.375000'),
        (5.0, 2.0, 3.0, 'Alright squire?', '2020-05-01 13:08:16.133000'),
        (6.0, 2.0, 3.0, 'I think you are dreamy', '2020-05-01 13:08:17.826000'),
        (7.0, 3.0, 1.0, 'Have you ever been in a cockpit before?', '2020-05-01 13:08:18.644000'),
        (8.0, 3.0, 1.0, 'Have you ever seen a grown man naked?', '2020-05-01 13:08:19.565000'),
        (9.0, 3.0, 2.0, 'sup?', '2020-05-01 13:08:21.128000');


    CREATE TABLE quizquestions
    (
        id SERIAL PRIMARY KEY,
        quizgroup VARCHAR(30) NOT NULL,
        question VARCHAR(300) NOT NULL,
        answer1 VARCHAR(100) NOT NULL,
        answer2 VARCHAR(300) NOT NULL,
        answer1value INTEGER NOT NULL,
        answer2value INTEGER NOT NULL,
        code VARCHAR(30) NOT NULL
    );

    INSERT INTO "quizquestions"
    VALUES
        (1.0, 'MBTI-short', 'As a child, did alone time bore you or did it allow for self-reflection?', 'SELF-REFLECTION', 'BORED ALONE', -1.0, 1.0, 'Intro-Extraversion'),
        (2.0, 'MBTI-short', 'Is silence and solitude something you''re comfortable with, or is it awkward and causes you to overthink?', 'SILENCE IS FINE', 'SILENCE IS AWKWARD', -1.0, 1.0, 'Intro-Extraversion'),
        (3.0, 'MBTI-short', 'As a child, did you impulsively say anything that came to mind, or did you normally think before speaking?', 'SPEAK THEN THINK', 'THINK THEN SPEAK', 1.0, -1.0, 'Intro-Extraversion'),
        (4.0, 'MBTI-short', 'As a child, were you more of a realist with a strong connection to reality, or did you lose yourself in day dreams and imagination?', 'REALITY', 'IMAGINATION', -1.0, 1.0, 'Sense-Intuition'),
        (5.0, 'MBTI-short', 'You usually enquire more about the...', '"WHO", "WHAT", "WHEN"', 'WHY', -1.0, 1.0, 'Sense-Intuition'),
        (6.0, 'MBTI-short', 'Are you more focused with what exists today, or do you like to think about the future and its infinite possibilities?', 'TODAY', 'FUTURE', -1.0, 1.0, 'Sense-Intuition'),
        (7.0, 'MBTI-short', 'If you have to put plans on hold, do you commit to sticking with them, or do you move on to the next thing?', 'STICK WITH IT', 'MOVE ON', 1.0, -1.0, 'Judge-Perceive'),
        (8.0, 'MBTI-short', 'Are you more of an...', 'ORGANISER', 'IMPROVISER', 1.0, -1.0, 'Judge-Perceive'),
        (9.0, 'MBTI-short', 'Growing up, did you finish your homework and chores first, or did you have fun before getting to task?', 'WORK BEFORE PLAY', 'PLAY BEFORE WORK', 1.0, -1.0, 'Judge-Perceive'),
        (10.0, 'MBTI-short', 'As a child, were mistakes positive learning experiences or negative experiences that made you completely re-evaluate your self-worth', 'RE-EVALUATE EVERYTHING', 'LEARNING EXPERIENCE', 1.0, -1.0, 'Think-Feel'),
        (11.0, 'MBTI-short', 'Did you embrace your emotional side while growing up or did you emotions make you uncomfortable?', 'VALUE EMOTIONS', 'UNCOMFORTABLE W/ EMOTIONS', -1.0, 1.0, 'Think-Feel'),
        (12.0, 'MBTI-short', 'You prefer fixing...', 'PEOPLE', 'PROBLEMS', -1.0, 1.0, 'Think-Feel');

    CREATE TABLE useranswers
    (
        id SERIAL PRIMARY KEY,
        userId INTEGER NOT NULL,
        quizQuestionsId INTEGER NOT NULL,
        answer INTEGER NOT NULL
    );

    INSERT INTO useranswers (userId, quizQuestionsId, answer)
    VALUES
        (1, 1, -1),
        (2, 1, 1);

    COMMIT;
