const knex = require('knex');
const config = require('../knexfile.js');

const dbEngine = process.env.NODE_ENV || 'development';

module.exports = knex(config[dbEngine]);
