### Setup the database

```


start postgres and create a db

brew services start postgresql

createdb crud-practice-1
```

Open pSequel, connect to the new database with no username/password, use the query command to execute the following command which will create a table in our database.
"Note to check the default database name that is created for you.. mine was postgres!

```
CREATE TABLE blogpost (
id serial PRIMARY KEY,
nickName VARCHAR(100),
email text UNIQUE NOT NULL,
url VARCHAR(100),
added TIMESTAMP NOT NULL
);
```

Now that command will be saved in pSequel for future use. Simply pull it up and edit it whenever you want to add a new table to any Postgres db.
``
