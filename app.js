/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { errorHandler } = require('./config/middleware/errorHandler.js');

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
const api = express();
api.use(helmet()); // hides your tech stack from sniffers
api.use(express.json()); // built-in
api.use(morgan('dev')); // logging middleware for console
api.use(cors()); // allows domains/ports to connect to your web api

/***************************************************************************************************
 ********************************************** routes *********************************************
 **************************************************************************************************/
// Home Page
api.get('/', (req, res) => {
  res.send(`WEB APP IS RUNNING...`);
});

// Routes/Endpoints
const employeesRouter = require('./config/routes/employeesRouter.js');
api.use('/employees', employeesRouter);

api.use(errorHandler); // This line needs to be after all routes

/***************************************************************************************************
 ********************************************** Run App ********************************************
 **************************************************************************************************/
api.listen(port, () =>
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
);
