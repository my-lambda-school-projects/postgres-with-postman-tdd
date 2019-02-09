// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'james',
      database: 'pg'
    },

    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    }
  }
};
