BEGIN;


DROP TABLE IF EXISTS "userAnswers"
    CASCADE;


CREATE TABLE "userAnswers"
(
    id SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    quizQuestionsId INTEGER NOT NULL,
    answer INTEGER NOT NULL
);


INSERT INTO "userAnswers"
(userId, quizQuestionsId, answer)
VALUES
(1, 1, -1),
(2, 1, 1);


END;