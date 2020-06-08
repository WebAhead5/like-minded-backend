begin;

drop table if exists auth cascade ;


create table auth (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT,
  "password" TEXT,
  "googleId" TEXT
);


INSERT INTO auth
("id","email", "password", "googleId")
VALUES
(1,'james@email.com', 'password', 'james'),
(2, 'moris@email.com', 'password', 'morisGoogleId1'),
(3,'hadi@email.com', 'password1', 'hadiGoogleId1');

end;
