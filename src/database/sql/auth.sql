begin;

drop table if exists auth cascade ;
drop table if exists sessions cascade ;

create table auth (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT,
  "password" TEXT,
  "googleId" TEXT
);

create table sessions(
    "id" SERIAL PRIMARY KEY,
    "userId" TEXT,
    "password" TEXT,
    "googleId" TEXT
);

end;
