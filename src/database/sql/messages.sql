BEGIN;


DROP TABLE IF EXISTS messages
    CASCADE;



CREATE TABLE messages
(
    "id" SERIAL PRIMARY KEY,
    "senderUserId" INT,
    "recipUserId" INT,
    "message" VARCHAR(300),
    "timeAndDate" timestamptz
);



INSERT INTO messages
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


END;