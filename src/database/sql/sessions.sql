begin;

drop table if exists sessions cascade ;

create table sessions(
                         "id" SERIAL PRIMARY KEY,
                         "userId" int not null ,
                         "expires" timestamptz ,
                         "hasLoggedOut" boolean default false,
                         "data" json default null
);


end;
