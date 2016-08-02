
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table){
    table.increments();
    table.string('name');
    table.string('description');
    table.string('url');
    table.string('github');
    table.string('image_link');
    table.timestamp('created_at').defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
