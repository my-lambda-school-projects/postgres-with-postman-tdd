/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler.js');

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
const server = express();
server.use(helmet()); // hides your tech stack from sniffers
server.use(express.json()); // built-in
server.use(morgan('dev')); // logging middleware for console
server.use(cors()); // allows domains/ports to connect to your server

/***************************************************************************************************
 ********************************************** routes *********************************************
 **************************************************************************************************/
// Home Page
server.get('/', (req, res) => {
  res.send(`WEB APP IS RUNNING...`);
});

// Routes/Endpoints
const employeesRouter = require('./routes/employeesRouter.js');
server.use('/employees', employeesRouter);

server.use(errorHandler); // This line needs to be after all routes

/***************************************************************************************************
 ********************************************* export(s) *******************************************
 **************************************************************************************************/
module.exports = server;
