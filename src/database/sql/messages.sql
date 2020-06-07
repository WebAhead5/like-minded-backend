BEGIN;


DROP TABLE IF EXISTS messages
    CASCADE;



CREATE TABLE messages
(
    id SERIAL PRIMARY KEY,
    "senderUserId" INT,
    "recipUserId" INT,
    "message" VARCHAR(300),
    "timeAndDate" TIMESTAMPTZ 
    );


-- noinspection SpellCheckingInspection

INSERT INTO messages ("senderUserId", "recipUserId", "message", "timeAndDate")
VALUES
(1.0, 2.0, 'Hey there', '2020-05-01 13:07:35'),
(1.0, 2.0, 'How''s tricks?', '2020-05-01 13:08:29.107000'),
(1.0, 3.0, 'What''s happening!?', '2020-05-01 13:08:14.223000'),
(2.0, 1.0, 'Howdee', '2020-05-01 13:08:15.375000'),
(2.0, 3.0, 'Alright squire?', '2020-05-01 13:08:16.133000'),
(2.0, 3.0, 'I think you are dreamy', '2020-05-01 13:08:17.826000'),
(3.0, 1.0, 'Have you ever been in a cockpit before?', '2020-05-01 13:08:18.644000'),
(3.0, 1.0, 'Have you ever seen a grown man naked?', '2020-05-01 13:08:19.565000'),
(3.0, 2.0, 'sup?', '2020-05-01 13:08:21.128000');


END;