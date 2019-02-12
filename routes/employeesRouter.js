/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
require('dotenv').config();
const express = require('express');
const tblEmployees = require('../db/models/employeesDB.js');
// const bcrypt = require('bcryptjs');
const router = express.Router();
// const jwt = require('jsonwebtoken');

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
// None

/***************************************************************************************************
 ********************************************* Endpoints *******************************************
 **************************************************************************************************/
// Gets a list of users with just the user id and display name
router.get('/', async (req, res, next) => {
  try {
    const employees = await tblEmployees.getEmployees();

    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
});

// Inserts an employee entry into the employees table
router.post('/', async (req, res, next) => {
  try {
    const employee = req.body;
    const results = await tblEmployees.addEmployee(employee);

    res.status(201).json({
      rowsAdded: results,
      message: 'Employee(s) succesfully added'
    });
  } catch (err) {
    // postgress error code
    if (err.code === '23505') {
      res.status(406).json({ 'http error code': 409, message: err.detail });
    } else {
      next(err);
    }
  }
});

// Edits an employee entry in the employees table
router.put('/:id', async (req, res, next) => {
  try {
    const changes = req.body;
    const results = await tblEmployees.editEmployee(
      Number(req.params.id),
      changes
    );

    res.status(200).json({
      rowsUpdated: results,
      message: 'Employee(s) succesfully updated'
    });
  } catch (err) {
    // postgress error code
    if (err.code === '23505') {
      res.status(406).json({ 'http error code': 409, message: err.detail });
    } else {
      next(err);
    }
  }
});

// Deletes an employee entry in the employees table
router.delete('/:id', async (req, res, next) => {
  try {
    const results = await tblEmployees.deleteEmployee(Number(req.params.id));

    res.status(202).json({
      rowsDeleted: results,
      message: 'Employee(s) succesfully deleted'
    });
  } catch (err) {
    next(err);
  }
});

/***************************************************************************************************
 ********************************************* export(s) *******************************************
 **************************************************************************************************/
module.exports = router;
