exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(tbl) {
    // Primary Key 'id'
    tbl.increments('employee_id');

    // Other Columns
    tbl
      .string('usr', 128)
      .notNullable()
      .unique();
    tbl.string('display_name', 128).unique();
    tbl.string('pwd', 128).notNullable();
    tbl.string('email', 255).notNullable();
    tbl.text('img_url');
    tbl.boolean('active').defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employees');
};
