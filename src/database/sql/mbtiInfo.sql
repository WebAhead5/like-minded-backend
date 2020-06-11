BEGIN;

DROP TABLE IF EXISTS "mbtiInfo" CASCADE;

CREATE TABLE "mbtiInfo" (
      id SERIAL PRIMARY KEY,
      "mbtiType" VARCHAR(6) NOT NULL,
      about VARCHAR(800) NOT NULL,
      "relationshipDescrip1" VARCHAR(800) NOT NULL,
      "relationshipDescrip2" VARCHAR(800) NOT NULL,
      "moreInfoLink" TEXT NOT NULL
);

INSERT INTO
      "mbtiInfo" (
            id,
            "mbtiType",
            about,
            "relationshipDescrip1",
            "relationshipDescrip2",
            "moreInfoLink"
      )
VALUES
      (
            1.0,
            'ISTJ',
            'The Logistician personality type is thought to be the most abundant, making up around 13% of the population. Their defining characteristics of integrity, practical logic and tireless dedication to duty make Logisticians a vital core to many families, as well as organizations that uphold traditions, rules and standards, such as law offices, regulatory bodies and military. People with the Logistician personality type enjoy taking responsibility for their actions, and take pride in the work they do – when working towards a goal, Logisticians hold back none of their time and energy completing each relevant task with accuracy and patience.',
            'Logisticians are dependable through and through, and this trait is clearly expressed when it comes to their romantic relationships. Often representing the epitome of family values, people with the Logistician personality type are comfortable with, and often even encourage traditional household and gender roles, and look to a family structure guided by clear expectations and honesty. While their reserved nature often makes dating Logisticians challenging, they are truly dedicated partners, willing to devote tremendous thought and energy to ensure stable and mutually satisfying relationships.
',
            'Blind dates and random hookups are not Logisticians’ preferred methods for finding potential partners. The risk and unpredictability of these situations has Logisticians’ alarm bells ringing, and being dragged out for a night of dancing at the club just isn’t going to happen. Logistician personalities much prefer more responsible, conservative methods of dating, such as dinner with an interested coworker or, in their more adventurous moods, a setup organized through a mutual friend.',
            'https://www.16personalities.com/ISTJ-personality'
      ),
      (
            2.0,
            'ISFJ',
            'The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type, Defenders are often receptive to change and new ideas. As with so many things, people with the Defender personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.',
            'When it comes to romantic relationships, Defenders’ kindness grows into a joy that is only found in taking care of their family and home, in being there for emotional and practical support whenever it’s needed. Home is where the heart is for people with the Defender personality type, and in no other area of their lives do they strive with such dedication to create the harmony and beauty they wish to see in the world.',
            'The trouble is, these are the benefits of an established long-term relationship, and Defenders’ unbearable shyness means it can take a long time to reach this point. Defenders are most attractive when they are simply being themselves in a comfortable environment such as work, where their natural flow shows this kindness and dedication. Relationships built on established familiarity are a warm prospect for Defenders – they take dating seriously and only enter into relationships that have a real chance of lasting a lifetime.',
            'https://www.16personalities.com/ISFJ-personality'
      ),
      (
            3.0,
            'INFJ',
            'The Advocate personality type is very rare, making up less than one percent of the population, but they nonetheless leave their mark on the world. Advocates have an inborn sense of idealism and morality, but what sets them apart is that they are not idle dreamers. These individuals are capable of taking concrete steps to realize their goals and make a lasting positive impact.',
            'When it comes to romantic relationships, Advocates take the process of finding a partner seriously. Not ones for casual encounters, people with the Advocate personality type instead look for depth and meaning in their relationships.

Advocates will take the time necessary to find someone with whom they truly connect. Once they’ve found that someone, their relationships will reach a level of depth and sincerity of which most people can only dream.',
            'Getting to that point can sometimes be a challenge for potential partners, especially if they are impatient types, as Advocates are often perfectionistic and picky. People with this personality type aren’t easily talked into something they don’t want. If someone doesn’t pick up on that, they are unlikely to be forgiven, particularly in the early stages of dating.',
            'https://www.16personalities.com/INFJ-personality'
      ),
      (
            4.0,
            'INTJ',
            'It can be lonely at the top. Being one of the rarest personality types and being among the most capable people, Architects know this all too well. They make up just two percent of the population, and women with this personality type are especially rare, forming only 0.8%. It can be difficult for Architects to find people who can keep up with their non-stop analysis of things. People with this personality type are imaginative yet decisive... ambitious yet like their privacy... curious about everything but remain focused.',
            'In romance, people with the Architect personality type approach things the way they do most situations: they create a well-designed plan with precise expectations and the right end goal. Here, the goal is a healthy long-term relationship. They rarely fall head over heels in love in a way that involves spontaneous passion and romance. Architects find potential partners who meet certain established criteria, break the dating process down into measurable steps, then complete the plan with great precision.

In a purely rational world, this would be foolproof. However, it ignores important factors that Architects are likely to easily dismiss, such as human nature.',
            'People with the Architect personality type are intellectual, always developing a world in their heads that is more perfect than reality. Other people entering their worlds need to fit this fantasy in some way – even if only by agreeing with their concepts. It can be incredibly difficult for Architects to find someone up to the task. Finding a compatible partner is the most significant challenge the majority of Architects will face in life.',
            'https://www.16personalities.com/INTJ-personality'
      ),
      (
            5.0,
            'ISTP',
            'Virtuosos love to explore with their hands and their eyes, touching and examining the world around them with cool rationalism and spirited curiosity. People with this personality type are natural Makers, moving from project to project, building the useful and the superfluous for the fun of it, and learning from their environment as they go. Often mechanics and engineers, Virtuosos find no greater joy than in getting their hands dirty pulling things apart and putting them back together, just a little bit better than they were before.',
            'When it comes to romantic relationships with Virtuosos, it’s a bit like nailing Jell-O to a tree. Dating Virtuoso personalities is a tango, complex and interesting, with alternating coldness and detachment, and passion, spontaneity and enjoyment of the moment. Nothing can be forced in Virtuoso relationships, but so long as they are given the space they need to be themselves, they will gladly enjoy the comforts of a steady partner for a lifetime.',
            'Early in dating, people with the Virtuoso personality type can be especially flighty – they live in the present, always looking for new activities and experiences. If a potential partner doesn’t measure up, Virtuosos have no real problem walking away. Virtuosos also need a great deal of personal space, both physically and mentally, and any attempts to control them or forcibly schedule their activities only accelerates their departure.',
            'https://www.16personalities.com/ISTP-personality'
      ),
      (
            6.0,
            'ISFP',
            'Adventurer personalities are true artists, but not necessarily in the typical sense where they’re out painting happy little trees. Often enough though, they are perfectly capable of this. Rather, it’s that they use aesthetics, design and even their choices and actions to push the limits of social convention. Adventurers enjoy upsetting traditional expectations with experiments in beauty and behavior – chances are, they’ve expressed more than once the phrase “Don’t box me in!”',
            'Adventurers are quite mysterious and difficult to get to know. While very emotional individuals, they guard this sensitive core carefully, preferring to listen than to express. People with the Adventurer personality type focus instead on their partners, with little interest in dictating the mood of a situation with their own feelings. While this can sometimes be frustrating, if they are accepted for who they are, Adventurers prove to be warm, enthusiastic partners.',
            'As their relationships grow, Adventurers’ partners come to find vibrancy and spontaneity to be par for the course. Adventurers may not be great long-term planners, preferring to let their partners take the lead when it comes to logic and strategy, but they almost never run out of things to do in the present. Also caring and loyal, Adventurers love finding ways to surprise their partners in fun little ways.',
            'https://www.16personalities.com/ISFP-personality'
      ),
      (
            7.0,
            'INFP',
            'Mediator personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, Mediators have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the Mediator personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.',
            'Mediators are dreamy idealists, and in the pursuit of the perfect relationship, this quality shows strongest. Never short on imagination, Mediators dream of the perfect relationship, forming an image of this pedestalled ideal that is their soul mate, playing and replaying scenarios in their heads of how things will be. This is a role that no person can hope to fill, and people with the Mediator personality type need to recognize that nobody’s perfect, and that relationships don’t just magically fall into place – they take compromise, understanding and effort.',
            'Fortunately these are qualities that Mediators are known for, and while it can be a challenge to separate long-fostered fantasy from reality, Mediators’ tendency to focus their attention on just a few people in their lives means that they will approach new relationships wholeheartedly, with a sense of inherent value, dedication and trust.',
            'https://www.16personalities.com/INFP-personality'
      ),
      (
            8.0,
            'INTP',
            'The Logician personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there’s nothing they’d be more unhappy about than being “common”. Logicians pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, Logicians have been responsible for many scientific discoveries throughout history.',
            'When it comes to romantic relationships, Logicians have an interesting mixture of traits that often pleasantly surprise their partners. People with this personality type are always full of ideas, but they have few opportunities to explore their more romantic notions. As with any of their theories, Logicians love sharing with others, and in finally meeting someone where romantic thoughts are appropriate, they show themselves to be excited, enthusiastic, and even playful, flirting with word-play and intellectual games.',
            'None of this is to say that these relationships come easily to Logicians – they are shy and withdrawn individuals, and getting out and meeting new people, risking rejection and making themselves the center of attention in emotionally delicate situations are far from being their strengths. It is more likely that Logician personalities will leave a trail of breadcrumbs for a potential partner, allowing them to make the first move and committing to their partner as an act of reciprocation rather than bravado.',
            'https://www.16personalities.com/INTP-personality'
      ),
      (
            9.0,
            'ESTP',
            'Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneur personalities love to be the center of attention. If an audience member is asked to come on stage, Entrepreneurs volunteer – or volunteer a shy friend.',
            'When it comes to romantic relationships, people with the Entrepreneur personality type can hardly be said to be pining away for their wedding day. Life is fun and full of surprises (something Entrepreneurs have particular skill in delivering), and they enjoy it all in the here and now. Entrepreneurs may not spend a lot of time planning for “someday”, but their enthusiasm and unpredictability make them thrilling dating partners.',
            'Entrepreneurs love new ideas and the occasional philosophical discussion – but they need to be topics that can explored through action together, not just idle talk. There’s musing about the causes and effects of epidemic obesity, and there’s training for a marathon together to promote healthy living.',
            'https://www.16personalities.com/ESTP-personality'
      ),
      (
            10.0,
            'ESFP',
            'If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer personality type. Entertainers get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as Entertainers when it comes to encouraging others, and no other personality type does it with such irresistible style.',
            'Entertainers are social, fun-loving, free-spirited people who live life in the moment and squeeze every little bit of excitement from everything. Naturally, they don’t spare any of this freshness and energy when dating. For people with the Entertainer personality type, relationships aren’t about slowly building foundations for the future, or planning out a life – they are bubbling, unpredictable things to be enjoyed for as long as there’s enjoyment to be had.',
            'Of course, when that enjoyment does burn out, it’s gone. Entertainers reevaluate their situations and commitments constantly, regardless of professions of love and dedication today. If a week later they just don’t feel the same, that’s it, and Entertainer personalities have no problem seriously considering breaking things off. While Entertainers can be willing to work on their relationships rather than swap them out, it takes a great deal of maturity and experience for them to realize that it can be worth the bother.',
            'https://www.16personalities.com/ESFP-personality'
      ),
      (
            11.0,
            'ENFP',
            'The Campaigner personality is a true free spirit. They are often the life of the party, but unlike types in the Explorer Role group, Campaigners are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% of the population that they comprise can certainly be felt in any crowd.',
            'When it comes to relationships, there’s hardly anyone around who is more excited than Campaigners to share with their partners the bounty of ideas and eye-opening experiences that life has to offer. For people with the Campaigner personality type, relationships are a joyous process of mutual exploration and imagination, a chance to connect with another soul. Campaigners take their relationships seriously, and are known for their uninhibited and unshakeable devotion to the people to whom they’ve committed their hearts.',
            'In the dating phase, if Campaigners can be said to tolerate such a formal process to begin with, they will show these qualities by showering their new flames with affection, and will do everything they can to build a strong relationship by demonstrating their devotion and reliability by whatever means available.',
            'https://www.16personalities.com/ENFP-personality'
      ),
      (
            12.0,
            'ENTP',
            'No one loves the process of mental sparring more than the Debater personality type, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points. Debaters are the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don’t always do this because they are trying to achieve some deeper purpose or strategic goal, though. Sometimes it’s for the simple reason that it’s fun.',
            'If there’s one thing Debaters are good at, it’s coming up with a never-ending stream of innovations and ideas to keep things moving forward, and this is evident in their romantic relationships as well. For people with the Debater personality type growth is key, and even before they’ve found a dating partner, they imagine all the ways that they can experience new things together, to grow in tandem. This can be an overwhelming process if their partner doesn’t match up, but when Debaters find someone who shares their love of intellectual exploration, watch out.',
            'From the earliest dates, Debaters test their partners’ limits for this kind of potential, pushing boundaries and traditions, looking for open-mindedness and spontaneity. Dating Debater personalities is hardly a boring experience, and they make use of their enthusiasm and creativity by delighting and surprising their partners with new ideas and experiences.',
            'https://www.16personalities.com/ENTP-personality'
      ),
      (
            13.0,
            'ESTJ',
            'Executives are representatives of tradition and order, utilizing their understanding of what is right, wrong and socially acceptable to bring families and communities together. Embracing the values of honesty, dedication and dignity, people with the Executive personality type are valued for their clear advice and guidance, and they happily lead the way on difficult paths. Taking pride in bringing people together, Executives often take on roles as community organizers, working hard to bring everyone together in celebration of cherished local events, or in defense of the traditional values that hold families and communities together.',
            'Executives are fairly unique in that their relationships don’t really change as they progress from the dating phase into more steady, long-term relationships and further into marriage. Because they value honesty and straightforwardness so highly, people with the Executive personality type are likely to be clear about who they are, what they’re like and what their goals are from the start, and to stick to those statements long-term. So long as their partner is able to take them at their word and follow suit, they are bound to be extremely stable relationships.',
            'This isn’t to say that there isn’t any growth of course – character development is always a high priority for Executives, and each life goal is important. Rather, it’s that shifting moods, goals and desires are unlikely to fundamentally alter the basis of Executives’ relationships.',
            'https://www.16personalities.com/ESTJ-personality'
      ),
      (
            14.0,
            'ESFJ',
            'People who share the Consul personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, Consuls are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, Consuls continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.',
            'Prizing social validation and a sense of belonging so highly, romantic relationships hold a special level of importance for Consuls. No other kind of relationship provides people with the Consul personality type with the same level of support and devotion, and the feelings of security and stability that come with strong romantic relationships are extremely warming.',
            'With such a goal in mind, Consul personalities take each stage, from dating to everything thereafter, very seriously. Everything about Consuls’ relationships is based on satisfying mutual needs, from creating understanding early on to building mutual respect and support for each other’s opinions and goals. Knowing that they are loved and appreciated has a huge effect on Consuls’ mood and self-esteem.',
            'https://www.16personalities.com/ESFJ-personality'
      ),
      (
            15.0,
            'ENFJ',
            'Protagonists are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, Protagonists take a great deal of pride and joy in guiding others to work together to improve themselves and their community.',
            'People who share the Protagonist personality type feel most at home when they are in a relationship, and few types are more eager to establish a loving commitment with their chosen partners. Protagonists take dating and relationships seriously, selecting partners with an eye towards the long haul, rather than the more casual approach that might be expected from some types in the Explorer Role group. There’s really no greater joy for Protagonists than to help along the goals of someone they care about, and the interweaving of lives that a committed relationship represents is the perfect opportunity to do just that.',
            'Their Intuitive (N) trait helps them to keep up with the rapidly shifting moods that are common early in relationships, but Protagonists will still rely on conversations about their mutual feelings, checking the pulse of the relationship by asking how things are, and if there’s anything else they can do. While this can help to keep conflict, which Protagonists abhor, to a minimum, they also risk being overbearing or needy – Protagonists should keep in mind that sometimes the only thing that’s wrong is being asked what’s wrong too often.',
            'https://www.16personalities.com/ENFJ-personality'
      ),
      (
            16.0,
            'ENTJ',
            'Commanders are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have Commanders to thank for many of the businesses and institutions we take for granted every day.',
            'As in other areas of their lives, Commanders approach dating and relationships with a set of goals and a plan to achieve them, and proceed to do so with impressive energy and enthusiasm. People with the Commander personality type are in it to win, and will gladly take leading roles in relationships from the start, assuming personal responsibility for how smoothly things go and working actively to ensure a mutually rewarding experience. Romantic relationships are a serious business, and Commanders are in it for the long haul.',
            'This sense of personal responsibility means that Commanders put a lot of energy into their relationships, and they show their creativity by always having something new on the agenda to keep things interesting, especially in the dating phase. At the same time though, Commander personalities keep their eyes on the long term, and if they determine that a relationship is heading towards a dead end, they will cut their losses and move on in what will seem to their partner an abrupt end to the attention they had been receiving.',
            'https://www.16personalities.com/ENTJ-personality'
      );

END;