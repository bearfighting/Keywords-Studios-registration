/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('registration', function(table){
    table.increments();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.string('date').notNullable();
		table.string('time').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('registration');
};
