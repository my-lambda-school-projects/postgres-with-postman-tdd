const knex = require('knex');
const config = require('../knexfile.js');

const dbEngine = process.env.DATABASE_URL || 'development';

module.exports = knex(config[dbEngine]);
