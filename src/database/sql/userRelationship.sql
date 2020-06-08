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

-- INSERT INTO userRelationship
-- ("userId1", "userId2","user1-towards-user2", "user2-towards-user1")
-- VALUES
-- (1, 2, 'like', 'like'),
-- (1, 3, 'like', 'none'),
-- (2, 3, 'like', 'block');

END;