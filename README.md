### Setup the database

``

Command Line // start postgres and create a db
brew services start postgresql
createdb crud-practice-1
Open pSequel, connect to the new database with no username/password, use the query command to execute the following command which will create a table in our database.
CREATE TABLE testtable1 (
id serial PRIMARY KEY,
first VARCHAR(100),
last VARCHAR(100),
email text UNIQUE NOT NULL,
phone VARCHAR(100),
location VARCHAR(100),
hobby VARCHAR(100),
added TIMESTAMP NOT NULL
);
Now that command will be saved in pSequel for future use. Simply pull it up and edit it whenever you want to add a new table to any Postgres db.
``
