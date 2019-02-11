const db = require('../dbConfig.js');

const getEmployees = () => {
  return db('employees');
};

const addEmployee = employee => {
  return db('employees').insert(employee);
};

const editEmployee = (id, changes) => {
  return db('employees')
    .where('employee_id', id)
    .update(changes);
};

const deleteEmployee = id => {
  return db('employees')
    .where('employee_id', id)
    .del();
};

module.exports = {
  getEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee
};
