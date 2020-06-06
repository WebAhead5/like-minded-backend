BEGIN;


DROP TABLE IF EXISTS useranswers
    CASCADE;


CREATE TABLE "userAnswers"
(
    id SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    quizQuestionsId INTEGER NOT NULL,
    answer INTEGER NOT NULL
);


INSERT INTO useranswers
(userId, quizQuestionsId, answer)
VALUES
(1, 1, -1),
(2, 1, 1);


END;