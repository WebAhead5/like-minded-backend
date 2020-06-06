BEGIN;

DROP TABLE IF EXISTS quizquestions CASCADE;

CREATE TABLE "quizQuestions" (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    question VARCHAR(300) NOT NULL,
    answers json NOT NULL,
    personalityCode VARCHAR(100) NOT NULL
);

INSERT INTO
    quizQuestions
VALUES
    (
        1.0,
        'MBTI-short',
        'As a child, did alone time bore you or did it allow for self-reflection?',
        '[ 
  {
     "title":"SELF-REFLECTION",
     "value": -1
   } ,
   {
     "title":"BORED-ALONE",
     "value": 1
   }
]',
        'Intro-Extraversion'
    )
    ,
    (
        2.0,
        'MBTI-short',
        'Is silence and solitude something you''re comfortable with, or is it awkward and causes you to overthink?',
        '[ 
  {
     "title":"SILENCE IS FINE",
     "value": -1
   } ,
   {
     "title":"SILENCE IS AWKWARD",
     "value": 1
   }
]',
        'Intro-Extraversion'    
    ),
    (
        3.0,
        'MBTI-short',
        'As a child, did you impulsively say anything that came to mind, or did you normally think before speaking?',
        '[ 
  {
     "title":"THINK THEN SPEAK",
     "value": -1
   } ,
   {
     "title":"SPEAK THEN THINK",
     "value": 1
   }
]',
        'Intro-Extraversion'
    ),
    (
        4.0,
        'MBTI-short',
        'As a child, were you more of a realist with a strong connection to reality, or did you lose yourself in day dreams and imagination?',
        '[ 
  {
     "title":"REALITY",
     "value": -1
   } ,
   {
     "title":"IMAGINATION",
     "value": 1
   }
]',
        'Sense-Intuition'
    ),
    (
        5.0,
        'MBTI-short',
        'You usually enquire more about the...',
        '[ 
  {
     "title":"\"WHO\", \"WHAT\", \"WHEN\"",
     "value": -1
   } ,
   {
     "title":"WHY",
     "value": 1
   }
]',
        'Sense-Intuition'
    ),
    (
        6.0,
        'MBTI-short',
        'Are you more focused with what exists today, or do you like to think about the future and its infinite possibilities?',
        '[ 
  {
     "title":"TODAY",
     "value": -1
   } ,
   {
     "title":"FUTURE",
     "value": 1
   }
]',
        'Sense-Intuition'
    ),
    (
        7.0,
        'MBTI-short',
        'If you have to put plans on hold, do you commit to sticking with them, or do you move on to the next thing?',
        '[ 
  {
     "title":"MOVE ON",
     "value": -1
   } ,
   {
     "title":"STICK WITH IT",
     "value": 1
   }
]',
        'Judge-Perceive'
    ),
    (
        8.0,
        'MBTI-short',
        'Are you more of an...',
        '[ 
  {
     "title":"IMPROVISER",
     "value": -1
   } ,
   {
     "title":"ORGANISER",
     "value": 1
   }
]',
        'Judge-Perceive'
    ),
    (
        9.0,
        'MBTI-short',
        'Growing up, did you finish your homework and chores first, or did you have fun before getting to task?',
        '[ 
  {
     "title":"PLAY BEFORE WORK",
     "value": -1
   } ,
   {
     "title":"WORK BEFORE PLAY",
     "value": 1
   }
]',
        'Judge-Perceive'
    ),
    (
        10.0,
        'MBTI-short',
        'As a child, were mistakes positive learning experiences or negative experiences that made you completely re-evaluate your self-worth',
        '[ 
  {
     "title":"LEARNING EXPERIENCE",
     "value": -1
   } ,
   {
     "title":"RE-EVALUATE EVERYTHING",
     "value": 1
   }
]',
        'Think-Feel'
    ),
    (
        11.0,
        'MBTI-short',
        'Did you embrace your emotional side while growing up or did you emotions make you uncomfortable?',
        '[ 
  {
     "title":"\"VALUE\" EMOTIONS",
     "value": -1
   } ,
   {
     "title":"UNCOMFORTABLE W/ EMOTIONS",
     "value": 1
   }
]',
        'Think-Feel'
    ),
    (
        12.0,
        'MBTI-short',
        'You prefer fixing...',
        '[ 
  {
     "title":"PEOPLE",
     "value": -1
   } ,
   {
     "title":"PROBLEMS",
     "value": 1
   }
]',
        'Think-Feel'
    );

END;