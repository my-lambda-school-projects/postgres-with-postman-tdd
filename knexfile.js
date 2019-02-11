// Update with your config settings.
require('dotenv').config();

module.exports = {
  jamespagedev: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 6841,
      user: 'jamespagedev',
      database: 'postgresDB',
      charset: 'utf8'
    },

    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './db/seeds' }
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
    },
    seeds: { directory: './db/seeds' },
    useNullAsDefault: true // used to avoid warning on console
  }
};
