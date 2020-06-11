BEGIN;

DROP TABLE IF EXISTS userRelationship
    CASCADE;

DROP TYPE IF EXISTS relationshipType CASCADE;
CREATE TYPE relationshipType AS ENUM ('block', 'none', 'like');

CREATE TABLE userRelationship
(
    "id" SERIAL PRIMARY KEY,
    "userId1" INT,
    "userId2" INT,
    "user1-towards-user2" relationshipType default 'none',
    "user2-towards-user1" relationshipType default 'none'
);

INSERT INTO userRelationship
("userId1", "userId2","user1-towards-user2", "user2-towards-user1")
VALUES
(1, 2, 'like', 'like'),
(1, 3, 'like', 'none'),
(2, 3, 'like', 'block'),
(4, 3, 'none', 'none'),
(4, 1, 'none', 'none'),
(5, 1, 'none', 'none'),
(5, 2, 'none', 'none'),
(5, 3, 'like', 'none'),
(5, 4, 'none', 'none'),
(5, 5, 'none', 'none'),
(5, 6, 'none', 'none'),
(5, 7, 'none', 'like'),
(5, 8, 'like', 'none'),
(5, 9, 'none', 'block'),
(5, 10, 'none', 'none'),
(6, 1, 'none', 'none'),
(6, 2, 'none', 'block'),
(6, 3, 'block', 'none'),
(6, 4, 'none', 'none'),
(6, 5, 'like', 'like'),
(6, 6, 'like', 'none'),
(6, 7, 'none', 'none'),
(6, 8, 'none', 'none'),
(6, 9, 'like', 'like'),
(6, 10, 'like', 'like'),
(6, 11, 'like', 'none');

END;