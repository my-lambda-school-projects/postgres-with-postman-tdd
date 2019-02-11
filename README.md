# Postgres (Version 11.1-1 Windows 7 x64)

## Postgres setup on local pc

- download and install postgress sql
- document the following you use during install:

  - password (used for the postgress superuser)
  - port# (used to connect)
  - database cluster

- (optional): edit C:\Program Files\PostgreSQL\11\data\pg_hba.conf replace all lines `md5` with `trust` (recommended for first time learning experience)

## setup db/users with pgAdmin (installed with postgres)

---

### NOTE: DON'T FORGET TO UPDATE THE knexfile.js settings

- Open pg admin and connect to Servers > PostgreSQL 11
- right-click on Login/Group Roles and select create > Login/Group Role...
  - (General Tab) Name = username
  - (Privileges Tab) I turned everything on for my user
  - Save
- right-click databases and select create > Database...
  - (General Tab) Name = name of your database
  - (General Tab) Owner = the username you created
  - (Definition Tab) Everything Default (Encoding should be UTF8)
  - Save

> OR

- Use command tool **---AT YOUR OWN RISK---**
  - `cd C:\Program Files\PostgreSQL\`#`\bin` (Assuming you installed to the default directory)
  - `psql -U postgres` OR `psql -U postgres -p ####` (if you used a different port# than the default)
  - If typing in your password doesn't work, try copy/pasting it into the command prompt
  - `CREATE database postgresDB;` (you can replace "postgresDB" with whatever you want to call your database)
  - `\l` (shows you the list of your databases)
  - `CREATE USER testuser WITH PASSWORD 'pass1234567';` (replace "testuser" and "'pass1234567'" with whatever you want to call it)
  - `grant all on database postgresDB to testuser;` (replace "testuser" with name you used instead, if you used something different)
  - `\q` to exit out of the postgres commandline
