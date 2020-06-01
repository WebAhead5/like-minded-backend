
BEGIN;


DROP TABLE IF EXISTS quizquestions
    CASCADE;



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

INSERT INTO quizquestions
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


END;
