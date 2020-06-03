begin;

drop table if exists auth cascade ;


create table auth (
  "id" SERIAL PRIMARY KEY,
  "email" TEXT,
  "password" TEXT,
  "googleId" TEXT
);



insert into auth (email, password ) values ('moris.rafol@gmail.com', '123');


end;
